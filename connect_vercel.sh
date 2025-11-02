#!/bin/bash

echo "🚀 Vercel 프로젝트 자동 연결 스크립트"
echo ""

# Vercel CLI 설치 확인
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI 설치 중..."
    npm install -g vercel
fi

echo "🔐 Vercel 로그인..."
vercel login

echo "📤 프로젝트 배포 중..."
vercel --prod --yes

echo ""
echo "✅ 배포 완료!"
echo ""
echo "💡 다음부터는 GitHub에 push하면 자동으로 배포됩니다!"


