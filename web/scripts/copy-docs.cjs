#!/usr/bin/env node
/**
 * Vercel 빌드 시 Root Directory가 web/일 때,
 * 상위 docs/ 내용을 web/public/로 복사해 동일한 앱이 나오게 함.
 */
const path = require('path');
const fs = require('fs');

const repoRoot = path.join(__dirname, '..', '..');
const docsDir = path.join(repoRoot, 'docs');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(docsDir)) {
  console.error('docs/ 폴더가 없습니다. (Repository root 기준)', docsDir);
  process.exit(1);
}

fs.cpSync(docsDir, publicDir, { recursive: true });
console.log('docs → public 복사 완료');
