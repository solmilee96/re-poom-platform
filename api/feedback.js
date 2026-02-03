/**
 * 아쉬워요 피드백 → Slack 전달 프록시 (브라우저 CORS 회피)
 * Vercel 환경 변수: SLACK_WEBHOOK_URL
 */
const SLACK_ORIGIN = 'https://hooks.slack.com';

function corsHeaders(origin) {
  const allow = [
    'https://solmilee96.github.io',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ].some(o => (origin || '').startsWith(o))
    ? (origin || '*')
    : 'https://solmilee96.github.io';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default async function handler(req, res) {
  const headers = corsHeaders(req.headers.origin);
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
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { choice, text, childName } = body;
    const message = [
      '아이 여행 피드백 (아쉬워요)',
      childName ? '아이 이름: ' + childName : '',
      text ? '내용: ' + text : '(내용 없음)',
    ].filter(Boolean).join('\n');

    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });

    if (!slackRes.ok) {
      const t = await slackRes.text();
      console.error('Slack webhook error', slackRes.status, t);
      return res.status(502).json({ error: 'Slack delivery failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('feedback api error', e);
    return res.status(500).json({ error: 'Server error' });
  }
}
