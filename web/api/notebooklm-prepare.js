/**
 * NotebookLM Enterprise API: 노트북 생성 + 소스 추가 후 노트북 URL 반환
 * Vercel 환경 변수: NOTEBOOKLM_GCP_PROJECT_NUMBER, NOTEBOOKLM_GCP_LOCATION, NOTEBOOKLM_GCP_ENDPOINT, NOTEBOOKLM_GCP_CREDENTIALS_JSON
 */
const https = require('https');
const crypto = require('crypto');

function corsHeaders(origin) {
  const allow = [
    'https://solmilee96.github.io',
    'https://web-mdrkzqom5-solmilee96s-projects.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ].some((o) => (origin || '').startsWith(o))
    ? origin || 'https://solmilee96.github.io'
    : 'https://solmilee96.github.io';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

/** JWT 생성 후 OAuth2 토큰 요청 (서비스 계정용, 의존성 없음) */
function getAccessTokenFromServiceAccount(credentialsJson) {
  let creds;
  try {
    creds = typeof credentialsJson === 'string' ? JSON.parse(credentialsJson) : credentialsJson;
  } catch (e) {
    return Promise.reject(new Error('Invalid NOTEBOOKLM_GCP_CREDENTIALS_JSON'));
  }
  const email = creds.client_email;
  const key = creds.private_key;
  if (!email || !key) return Promise.reject(new Error('Missing client_email or private_key in credentials'));

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: email,
    sub: email,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
    scope: 'https://www.googleapis.com/auth/cloud-platform',
  };
  const header = { alg: 'RS256', typ: 'JWT' };
  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const signatureInput = b64(header) + '.' + b64(payload);
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(key, 'base64url');
  const jwt = signatureInput + '.' + signature;

  const body = 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + encodeURIComponent(jwt);
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'oauth2.googleapis.com',
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (ch) => (data += ch));
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.access_token) resolve(json.access_token);
            else reject(new Error(json.error_description || data || 'No access_token'));
          } catch (e) {
            reject(new Error('Token response parse error: ' + data));
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/** Discovery Engine (NotebookLM Enterprise) API 호출 */
function discoveryRequest(accessToken, endpoint, location, projectNumber, method, path, body) {
  const host = endpoint + '-discoveryengine.googleapis.com';
  const urlPath = '/v1alpha/projects/' + projectNumber + '/locations/' + location + path;
  const bodyStr = body ? JSON.stringify(body) : '';
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: host,
        path: urlPath,
        method: method,
        headers: {
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (ch) => (data += ch));
        res.on('end', () => {
          try {
            const json = data ? JSON.parse(data) : {};
            if (res.statusCode >= 200 && res.statusCode < 300) resolve(json);
            else reject(new Error(json.error?.message || 'API error: ' + res.statusCode + ' ' + data));
          } catch (e) {
            reject(new Error('Response parse error: ' + data));
          }
        });
      }
    );
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

/** 기본 가이드 텍스트 (소스로 넣을 내용) */
const DEFAULT_GUIDE_TEXT = `# 아이 여행 가이드 (괜찮아요)

- 기질에 맞는 양육: 아이의 기질(활동성, 규칙성, 적응성 등)을 존중하면서 일상과 여행을 준비하세요.
- 식사: 무리하지 않고 단계적으로 새로운 음식을 소개하고, 식사 시간을 일정하게 갖는 것이 도움이 됩니다.
- 수면: 낮과 밤 리듬을 유지하고, 여행 중에도 비슷한 취침 루틴을 유지해 보세요.
- 떼쓰기와 감정: 아이의 감정을 인정해 주고, 이름 붙여 주는 것이 중요합니다. "화났구나", "싫었구나"라고 말해 주세요.
- 또래 관계: 무리하게 나서기보다는 아이가 편한 속도로 친구를 만날 수 있게 도와주세요.
이 가이드는 참고용이며, 전문적인 상담이 필요하면 소아청소년과나 상담 전문가와 상담하세요.`;

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders(req.headers.origin));
    return res.end();
  }
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.writeHead(405, { ...corsHeaders(req.headers.origin), 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }

  const projectNumber = (process.env.NOTEBOOKLM_GCP_PROJECT_NUMBER || '').trim();
  const location = (process.env.NOTEBOOKLM_GCP_LOCATION || 'global').trim();
  const endpoint = (process.env.NOTEBOOKLM_GCP_ENDPOINT || 'us').trim();
  const credentialsJson = (process.env.NOTEBOOKLM_GCP_CREDENTIALS_JSON || '').trim();

  if (!projectNumber || !credentialsJson) {
    res.writeHead(200, { ...corsHeaders(req.headers.origin), 'Content-Type': 'application/json' });
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'not_configured',
        message: 'NotebookLM Enterprise가 설정되지 않았습니다. Vercel 환경 변수에 NOTEBOOKLM_GCP_PROJECT_NUMBER, NOTEBOOKLM_GCP_CREDENTIALS_JSON을 설정해 주세요.',
        docs: 'docs/NOTEBOOKLM_Enterprise_API_답변_활용.md',
      })
    );
  }

  let accessToken;
  try {
    accessToken = await getAccessTokenFromServiceAccount(credentialsJson);
  } catch (e) {
    res.writeHead(200, { ...corsHeaders(req.headers.origin), 'Content-Type': 'application/json' });
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'auth_failed',
        message: 'Google Cloud 인증 실패: ' + (e.message || ''),
      })
    );
  }

  try {
    const createRes = await discoveryRequest(accessToken, endpoint, location, projectNumber, 'POST', '/notebooks', {
      title: '아이 여행 가이드 (괜찮아요)',
    });
    const notebookId = createRes.notebookId || createRes.name?.split('/').pop();
    const name = createRes.name;
    if (!notebookId) {
      throw new Error('노트북 생성 응답에 notebookId가 없습니다.');
    }

    const sourcePayload = {
      userContents: [
        {
          textContent: {
            sourceName: '아이 여행 가이드',
            content: DEFAULT_GUIDE_TEXT,
          },
        },
      ],
    };
    await discoveryRequest(
      accessToken,
      endpoint,
      location,
      projectNumber,
      'POST',
      '/notebooks/' + notebookId + '/sources:batchCreate',
      sourcePayload
    );

    const notebookUrl =
      'https://notebooklm.cloud.google.com/' + location + '/notebook/' + notebookId + '?project=' + projectNumber;

    res.writeHead(200, { ...corsHeaders(req.headers.origin), 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        ok: true,
        notebookId,
        notebookUrl,
        message: '노트북이 만들어졌어요. 링크에서 문서 기반 채팅과 요약을 이용할 수 있어요.',
      })
    );
  } catch (e) {
    res.writeHead(200, { ...corsHeaders(req.headers.origin), 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        ok: false,
        error: 'api_error',
        message: e.message || 'NotebookLM API 오류',
      })
    );
  }
};
