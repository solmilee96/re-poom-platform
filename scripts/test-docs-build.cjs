#!/usr/bin/env node
/**
 * 배포 없이 docs → dist 빌드 결과를 검증합니다.
 * 1) build:docs 실행
 * 2) dist/index.html 존재 및 아이 여행 콘텐츠 포함 여부 확인
 * 3) 선택: 로컬 서버 띄우고 HTTP로 fetch 후 검증 (--serve)
 *
 * 사용: node scripts/test-docs-build.js
 *       node scripts/test-docs-build.js --serve  (서버 띄우고 fetch 검증)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const distIndex = path.join(rootDir, 'dist', 'index.html');

const requiredStrings = [
  '아이 여행',
  '로딩 중',
  'id="root"',
  'FEEDBACK_API_URL',
  'CONSULTATION_API_URL',
];

function run(cmd, opts = {}) {
  execSync(cmd, { cwd: rootDir, stdio: 'inherit', ...opts });
}

function checkDistHtml() {
  if (!fs.existsSync(distIndex)) {
    console.error('❌ dist/index.html 이 없습니다. npm run build:docs 를 먼저 실행하세요.');
    process.exit(1);
  }
  const html = fs.readFileSync(distIndex, 'utf8');
  let ok = true;
  for (const s of requiredStrings) {
    if (!html.includes(s)) {
      console.error('❌ dist/index.html에 다음 내용이 없습니다:', s);
      ok = false;
    }
  }
  if (ok) {
    console.log('✅ dist/index.html 검증 통과 (필수 문자열 존재)');
  } else {
    process.exit(1);
  }
}

function serveAndFetch() {
  const http = require('http');
  const port = 3752;
  const distDir = path.join(rootDir, 'dist');
  const server = require('http').createServer((req, res) => {
    const p = path.normalize(req.url === '/' ? '/index.html' : req.url).replace(/^\//, '');
    if (p.includes('..')) {
      res.writeHead(403);
      res.end();
      return;
    }
    const file = path.join(distDir, p || 'index.html');
    if (!file.startsWith(distDir)) {
      res.writeHead(403);
      res.end();
      return;
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });
  const timeout = setTimeout(() => {
    server.close();
    console.error('❌ 10초 내 응답 없음');
    process.exit(1);
  }, 10000);
  server.listen(port, '127.0.0.1', () => {
    console.log('로컬 서버: http://127.0.0.1:' + port);
    http.get('http://127.0.0.1:' + port + '/', (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        clearTimeout(timeout);
        let ok = true;
        for (const s of requiredStrings) {
          if (!body.includes(s)) {
            console.error('❌ HTTP 응답에 다음 내용이 없습니다:', s);
            ok = false;
          }
        }
        if (ok) console.log('✅ HTTP 응답 검증 통과 (배포와 동일한 방식으로 서빙 시 정상)');
        server.close();
        process.exit(ok ? 0 : 1);
      });
    }).on('error', (e) => {
      clearTimeout(timeout);
      server.close();
      console.error('❌ HTTP 요청 실패:', e.message);
      process.exit(1);
    });
  });
}

// main
console.log('1. build:docs 실행 중...');
run('npm run build:docs');
console.log('2. dist/index.html 검증...');
checkDistHtml();

if (process.argv.includes('--serve')) {
  console.log('3. 로컬 서버로 서빙 후 HTTP 검증...');
  serveAndFetch();
} else {
  console.log('로컬 서버 검증은 다음으로 실행: npm run test:docs-build:serve');
}
