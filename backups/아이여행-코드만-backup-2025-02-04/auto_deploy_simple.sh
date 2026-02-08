#!/bin/bash

# 간단한 자동 배포 스크립트

set -e

echo "🚀 마망포켓 자동 배포 시작..."

# 1. 의존성 확인
if [ ! -d "node_modules" ]; then
    echo "📥 의존성 설치 중..."
    npm install
fi

# 2. 빌드
echo "🔨 빌드 중..."
npm run build

# 3. Git 커밋 (변경사항이 있으면)
echo "💾 Git 커밋 중..."
git add .
if ! git diff --staged --quiet; then
    git commit -m "chore: 자동 업데이트 $(date +'%Y-%m-%d %H:%M:%S')" || true
fi

# 4. Vercel 배포
echo "🌐 Vercel 배포 중..."
if command -v vercel &> /dev/null; then
    vercel --prod --yes
else
    echo "⚠️  Vercel CLI가 설치되지 않았습니다."
    echo "설치: npm install -g vercel"
    echo "그 다음 이 스크립트를 다시 실행하세요."
    exit 1
fi

echo "✅ 배포 완료!"

