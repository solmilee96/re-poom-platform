#!/usr/bin/env node
/**
 * 상담 API 환경 검사 (1. 환경 변수, 3. Gemini API 동작)
 * 사용: GEMINI_API_KEY=your_key node scripts/check-consultation-env.cjs
 * 또는 Vercel 로컬: vercel dev 후 다른 터미널에서 API 호출 테스트
 */

const https = require('https');

const NOTEBOOKLM_PROXY_URL = (process.env.NOTEBOOKLM_PROXY_URL || '').trim();
const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || '').trim();

function main() {
  console.log('=== 1. 환경 변수 확인 ===\n');
  console.log('NOTEBOOKLM_PROXY_URL:', NOTEBOOKLM_PROXY_URL ? `설정됨 (${NOTEBOOKLM_PROXY_URL.substring(0, 30)}...)` : '(비어 있음)');
  console.log('GEMINI_API_KEY:', GEMINI_API_KEY ? `설정됨 (${GEMINI_API_KEY.substring(0, 8)}...)` : '(비어 있음)');

  if (!NOTEBOOKLM_PROXY_URL && !GEMINI_API_KEY) {
    console.log('\n❌ NOTEBOOKLM_PROXY_URL 또는 GEMINI_API_KEY 중 하나를 설정해야 합니다.');
    console.log('   Vercel: 프로젝트 → Settings → Environment Variables');
    process.exit(1);
  }
  console.log('\n✅ 최소 하나의 상담 백엔드 설정됨.\n');

  if (!GEMINI_API_KEY) {
    console.log('=== 3. Gemini API 검증 ===');
    console.log('Gemini 키가 없어 호출 테스트를 건너뜁니다. (NotebookLM만 사용 시 정상)\n');
    return;
  }

  console.log('=== 3. Gemini API 호출 테스트 ===\n');
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: 'You say only: OK' }] },
    contents: [{ role: 'user', parts: [{ text: 'Say OK' }] }],
    generationConfig: { maxOutputTokens: 10 },
  });

  const req = https.request(
    {
      hostname: 'generativelanguage.googleapis.com',
      path: '/v1beta/models/gemini-2.0-flash:generateContent?key=' + encodeURIComponent(GEMINI_API_KEY),
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    },
    (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            const text = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
            console.log('✅ Gemini API 정상 응답:', text.trim() || '(빈 답)');
          } catch (e) {
            console.log('⚠️ 응답 파싱 실패:', e.message);
          }
        } else {
          console.log('❌ Gemini API 오류:', res.statusCode);
          try {
            const err = JSON.parse(data);
            const msg = err.error?.message || err.error?.status || data;
            console.log('   메시지:', msg);
            if (msg.includes('API key') || msg.includes('invalid') || res.statusCode === 403) {
              console.log('   → API 키가 잘못되었거나 비활성화되었을 수 있습니다. Google AI Studio에서 확인하세요.');
            }
          } catch (_) {
            console.log('   본문:', data.substring(0, 200));
          }
        }
      });
    }
  );
  req.on('error', (e) => {
    console.log('❌ 네트워크 오류:', e.message);
  });
  req.write(body);
  req.end();
}

main();
