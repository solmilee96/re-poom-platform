/**
 * 아쉬워요 피드백 → Slack 전달 (브라우저 CORS 회피)
 * Vercel 환경 변수: SLACK_WEBHOOK_URL
 * Node 16 호환: fetch 대신 https 사용.
 */
const https = require('https');
const SLACK_ORIGIN = 'https://hooks.slack.com';

function postSlack(webhookUrl, payload) {
  return new Promise((resolve, reject) => {
    const u = new URL(webhookUrl);
    const data = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, status: res.statusCode, body }));
      }
    );
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

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

module.exports = async function handler(req, res) {
  const headers = corsHeaders(req.headers && req.headers.origin);
  Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl || !webhookUrl.startsWith(SLACK_ORIGIN)) {
    return res.status(500).json({ error: 'Slack webhook not configured' });
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
    const { choice, text, childName } = body;
    const message = [
      '아이 여행 피드백 (아쉬워요)',
      childName ? '아이 이름: ' + childName : '',
      text ? '내용: ' + text : '(내용 없음)',
    ]
      .filter(Boolean)
      .join('\n');

    const slackRes = await postSlack(webhookUrl, { text: message });

    if (!slackRes.ok) {
      console.error('Slack webhook error', slackRes.status, slackRes.body);
      return res.status(502).json({ error: 'Slack delivery failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('feedback api error', e);
    return res.status(500).json({ error: 'Server error' });
  }
};
