/**
 * 상담 답변 — NotebookLM 우선, 실패 시 Gemini 폴백
 * Vercel 환경 변수: NOTEBOOKLM_PROXY_URL(우선) / GEMINI_API_KEY(폴백)
 */
const https = require('https');

const CONSULTATION_SYSTEM = `당신은 기질·발달을 잘 아는 전문가이면서, 따뜻하고 감성적인 심리 상담가 같은 존재입니다.

**답변 원칙**
- 질문의 맥락을 정확히 파악하고, 그 질문에 맞는 구체적인 답변을 하세요. 일반론이나 질문과 어긋나는 내용을 하지 마세요.
- 한 가지 관점이 아니라, 상황에 따라 여러 가능성과 다양한 방향(원인, 감정 인정, 실천 방법, 부모 자신 돌보기 등)을 고려해 충분히 생각한 뒤 답하세요.
- "~할 수 있어요", "~해 보세요" 수준에서 그치지 말고, 왜 그런지, 어떤 순서로 시도하면 좋은지, 막힐 때는 어떻게 할지까지 구체적으로 제시해 고민이 해소될 수 있게 도와주세요.
- 이전 대화와 아이·양육자 정보를 기억하고, "○○이(이)라서", "그때 말씀드린 ~"처럼 자연스럽게 이어서 말하세요.
- 답변은 2~4문단 정도로, 연구·이론은 간단히만 인용하고 공감과 구체적 실천 팁을 담아 주세요. 같은 긴 설명을 반복하지 말고, 사용자가 "틀려요" 등 피드백을 주면 어디가 다른지 먼저 여쭤 보세요.
- 답변에 마크다운 볼드(**텍스트**)를 사용해도 됩니다.`;

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
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

const TOPIC_LABELS = { eating: '식사', sleep: '수면', tantrum: '떼쓰기', clothing: '옷입기', aggression: '또래/공격', other: '기타' };

function buildSystemInstruction(context) {
  let system = CONSULTATION_SYSTEM;
  if (context && (context.name || context.temperamentType || context.parentType)) {
    const name = context.name || '아이';
    const age = context.age || '';
    const childType = context.temperamentType || '';
    const parentType = context.parentType || '';
    system += `\n\n[이 아이·양육자 정보 (항상 기억하고 자연스럽게 언급하세요)]\n- 아이 이름: ${name}\n- 나이: ${age}\n- 아이 기질 유형: ${childType}\n- 양육자 유형: ${parentType}`;
  }
  if (context && context.initialConcern && typeof context.initialConcern === 'string' && context.initialConcern.trim()) {
    system += `\n\n[처음에 양육자가 적어 주신 고민]\n"${context.initialConcern.trim()}"\n→ 적절한 타이밍에 "처음에 ○○ 고민이라고 하셨는데, 그때는 어떠셨나요?", "그 고민은 조금 나아지셨나요?"처럼 따뜻하게 물어보세요.`;
  }
  if (context && context.consultationSummary && typeof context.consultationSummary === 'object') {
    const s = context.consultationSummary;
    const total = s.messageCount || 0;
    const counts = s.topicCounts || {};
    const parts = Object.entries(counts)
      .filter(([, n]) => n > 0)
      .map(([k, n]) => `${TOPIC_LABELS[k] || k}: ${n}회`)
      .join(', ');
    const recent = (s.lastTopics || []).map((t) => TOPIC_LABELS[t] || t).join(' → ');
    system += `\n\n[이 아이와의 상담 누적 (기억하고 이어서 말하세요)]\n- 총 상담 횟수: ${total}\n- 주제별: ${parts || '없음'}\n- 최근 주제 흐름: ${recent || '없음'}\n→ "아, 예전에 ~했었죠", "그때 ~고민이셨는데 괜찮아졌나요?" 같은 말을 자연스럽게 꺼내서, 정말 나와 우리 아이를 기억하는 사람처럼 느껴지게 해 주세요.`;
  }
  return system;
}

function callGemini(apiKey, systemInstruction, contents) {
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
      topP: 0.95,
      topK: 40,
    },
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'generativelanguage.googleapis.com',
        path: '/v1beta/models/gemini-2.0-flash:generateContent?key=' + encodeURIComponent(apiKey),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            try {
              const err = JSON.parse(data);
              reject(new Error(err.error?.message || data || 'Gemini API error'));
            } catch (_) {
              reject(new Error(data || 'Gemini API error'));
            }
            return;
          }
          try {
            const json = JSON.parse(data);
            const text =
              json.candidates?.[0]?.content?.parts?.[0]?.text ||
              json.candidates?.[0]?.content?.parts?.[0]?.text?.trim?.() ||
              '';
            resolve(text.trim() || '죄송해요, 답을 만들지 못했어요. 다시 한 번 구체적으로 적어 주실래요?');
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sendJson(res, status, obj) {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).end(JSON.stringify(obj));
}

function safeSendJson(res, status, obj) {
  try {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json');
      res.status(status).end(JSON.stringify(obj));
    }
  } catch (e) {
    console.error('safeSendJson', e);
  }
}

module.exports = async function handler(req, res) {
  try {
    const headers = corsHeaders(req.headers && req.headers.origin);
    Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));

    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    if (req.method !== 'POST') {
      return sendJson(res, 405, { error: 'Method not allowed' });
    }

    const notebooklmProxyUrl = (process.env.NOTEBOOKLM_PROXY_URL || '').trim();
    const apiKey = (process.env.GEMINI_API_KEY || '').trim();

    if (!notebooklmProxyUrl && !apiKey) {
      return sendJson(res, 503, {
        error: 'Consultation unavailable',
        detail: 'NOTEBOOKLM_PROXY_URL 또는 GEMINI_API_KEY 중 하나를 설정해 주세요.',
      });
    }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_) {
        body = {};
      }
    }
    body = body || {};
    const { message, history = [], context = {} } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return sendJson(res, 400, { error: 'message required' });
    }

    let reply = null;
    if (notebooklmProxyUrl) {
      try {
        reply = await callNotebookLMProxy(notebooklmProxyUrl, { message, history, context });
      } catch (e) {
        console.warn('NotebookLM proxy failed, falling back to Gemini', e.message);
      }
    }
    if (reply == null && apiKey) {
      const systemInstruction = buildSystemInstruction(context);
      const contents = [];
      const recent = Array.isArray(history) ? history.slice(-20) : [];
      for (const m of recent) {
        const role = m.role === 'assistant' ? 'model' : 'user';
        const text = (m.content || '').trim();
        if (text) contents.push({ role, parts: [{ text }] });
      }
      contents.push({ role: 'user', parts: [{ text: message.trim() }] });
      reply = await callGemini(apiKey, systemInstruction, contents);
    }
    if (reply == null || !reply.trim()) {
      return sendJson(res, 503, {
        error: 'Consultation unavailable',
        detail: '상담 서비스를 일시적으로 사용할 수 없어요. 잠시 후 다시 시도해 주세요.',
      });
    }
    return sendJson(res, 200, { reply });
  } catch (e) {
    console.error('consultation api error', e);
    return sendJson(res, 500, { error: 'Server error', detail: e.message });
  }
  } catch (outer) {
    console.error('consultation api outer error', outer);
    return safeSendJson(res, 500, { error: 'Server error', detail: (outer && outer.message) || 'Unknown error' });
  }
};

function callNotebookLMProxy(proxyUrl, payload) {
  const url = new URL(proxyUrl);
  const isHttps = url.protocol === 'https:';
  const body = JSON.stringify(payload);
  const lib = isHttps ? require('https') : require('http');
  return new Promise((resolve, reject) => {
    const req = lib.request(
      {
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname + url.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            reject(new Error('Proxy returned ' + res.statusCode + ': ' + data));
            return;
          }
          try {
            const json = JSON.parse(data);
            const reply = (json.reply || '').trim();
            if (!reply) reject(new Error('Empty reply from NotebookLM proxy'));
            else resolve(reply);
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.setTimeout(60000, () => { req.destroy(); reject(new Error('NotebookLM proxy timeout')); });
    req.write(body);
    req.end();
  });
}
