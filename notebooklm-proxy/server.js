/**
 * NotebookLM 채팅 프록시
 * POST /chat → body: { message, history?, context? } → response: { reply }
 * 환경 변수: NOTEBOOKLM_NOTEBOOK_ID, NOTEBOOKLM_AUTH_TOKEN, NOTEBOOKLM_COOKIES
 * (또는 GOOGLE_EMAIL, GOOGLE_PASSWORD 로 자동 로그인 — 브라우저 필요)
 */
import http from 'http';
import { NotebookLMClient } from 'notebooklm-kit';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;
const NOTEBOOK_ID = process.env.NOTEBOOKLM_NOTEBOOK_ID || process.env.NOTEBOOK_ID;

function buildPrompt(message, context = {}) {
  let prompt = message;
  if (context.name || context.temperamentType || context.parentType) {
    const name = context.name || '아이';
    const age = context.age || '';
    const childType = context.temperamentType || '';
    const parentType = context.parentType || '';
    prompt = `[맥락: 아이 이름 ${name}, 나이 ${age}, 기질 유형 ${childType}, 양육자 유형 ${parentType}]\n\n${message}`;
  }
  return prompt;
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || (req.url !== '/chat' && req.url !== '/')) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'POST /chat or POST / only' }));
    return;
  }

  let body = '';
  for await (const chunk of req) body += chunk;
  let payload = {};
  try {
    payload = JSON.parse(body || '{}');
  } catch (_) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid JSON' }));
    return;
  }

  const message = (payload.message || '').trim();
  if (!message) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'message required' }));
    return;
  }

  if (!NOTEBOOK_ID) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'NOTEBOOKLM_NOTEBOOK_ID not set' }));
    return;
  }

  const context = payload.context || {};
  const prompt = buildPrompt(message, context);

  let sdk;
  try {
    sdk = new NotebookLMClient({
      authToken: process.env.NOTEBOOKLM_AUTH_TOKEN,
      cookies: process.env.NOTEBOOKLM_COOKIES,
      debug: process.env.NODE_ENV === 'development',
    });
    await sdk.connect();
    const reply = await sdk.generation.chat(NOTEBOOK_ID, prompt, { stream: false });
    const text = (reply && typeof reply === 'string') ? reply : (reply?.text || reply?.content || '');
    res.writeHead(200);
    res.end(JSON.stringify({ reply: (text || '').trim() }));
  } catch (e) {
    console.error('NotebookLM proxy error', e);
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'NotebookLM error', detail: e.message }));
  } finally {
    if (sdk) await sdk.dispose();
  }
});

server.listen(PORT, () => {
  console.log('NotebookLM proxy listening on port', PORT);
  if (!NOTEBOOK_ID) console.warn('WARN: NOTEBOOKLM_NOTEBOOK_ID not set');
});
