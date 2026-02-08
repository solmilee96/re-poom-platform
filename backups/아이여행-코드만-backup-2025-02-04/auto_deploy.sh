#!/bin/bash

echo "🚀 Vercel 자동 배포 스크립트"
echo "================================"
echo ""

# 현재 변경사항 확인
echo "📋 변경사항 확인 중..."
git status --short

echo ""
echo "📤 GitHub에 푸시 중..."

# GitHub 인증 시도
if [ -n "$GITHUB_TOKEN" ]; then
    echo "✅ 환경 변수에서 토큰을 찾았습니다."
    git remote set-url origin https://${GITHUB_TOKEN}@github.com/solmilee96/re-poom-platform.git
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ 푸시 성공!"
        git remote set-url origin https://github.com/solmilee96/re-poom-platform.git
        echo ""
        echo "🎉 GitHub에 푸시되었습니다!"
        echo "🚀 Vercel에서 자동 배포가 시작됩니다!"
        echo ""
        echo "배포 상태 확인: https://vercel.com/solmilee96s-projects/re-poom-platform"
        exit 0
    fi
else
    echo "⚠️  GITHUB_TOKEN 환경 변수가 없습니다."
    echo ""
    echo "토큰을 입력하거나 스크립트를 실행하세요:"
    echo "  bash push_with_token.sh"
    echo ""
    echo "또는 환경 변수로 토큰 설정:"
    echo "  export GITHUB_TOKEN='your-token-here'"
    echo "  bash auto_deploy.sh"
    exit 1
fi

