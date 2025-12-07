#!/bin/bash

# Vercel 로그인 후 배포 스크립트

set -e

echo "🚀 마망포켓 Vercel 배포 시작..."
echo ""

# 1. 빌드 확인
echo "📦 빌드 확인 중..."
npm run build

# 2. Vercel 로그인 확인
echo ""
echo "🔐 Vercel 로그인 확인 중..."
if ! vercel whoami &>/dev/null; then
    echo "⚠️  Vercel에 로그인되어 있지 않습니다."
    echo ""
    echo "다음 명령어로 로그인하세요:"
    echo "  vercel login"
    echo ""
    echo "로그인 후 이 스크립트를 다시 실행하거나 다음 명령어를 실행하세요:"
    echo "  vercel --prod"
    exit 1
fi

# 3. 현재 사용자 확인
echo "✅ 로그인 확인됨:"
vercel whoami
echo ""

# 4. 배포 실행
echo "🌐 Vercel에 배포 중..."
vercel --prod --yes

echo ""
echo "✅ 배포 완료!"

