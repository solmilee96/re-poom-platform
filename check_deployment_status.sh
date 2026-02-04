#!/bin/bash

echo "🔍 배포 상태 확인"
echo "=================="
echo ""

# GitHub 푸시 확인
echo "✅ GitHub 푸시 상태:"
git log --oneline -1
echo ""

# 배포 URL 확인
echo "🌐 배포 URL 확인:"
URL="https://web-obutmwll6-solmilee96s-projects.vercel.app"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$URL" 2>/dev/null)

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ 배포 완료! ($HTTP_CODE)"
    echo "URL: $URL"
elif [ "$HTTP_CODE" = "404" ]; then
    echo "⚠️  배포 URL이 아직 활성화되지 않았습니다. ($HTTP_CODE)"
    echo "   Vercel 프로젝트가 연결되지 않았을 수 있습니다."
elif [ "$HTTP_CODE" = "000" ]; then
    echo "⚠️  연결 실패 (타임아웃 또는 DNS 문제)"
else
    echo "⚠️  상태 코드: $HTTP_CODE"
fi
echo ""

# GitHub Actions 확인
if [ -n "$GITHUB_TOKEN" ]; then
    echo "📊 GitHub Actions 워크플로우:"
    ACTIONS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/solmilee96/re-poom-platform/actions/runs?per_page=1")
    
    TOTAL=$(echo "$ACTIONS" | grep -o '"total_count":[0-9]*' | cut -d: -f2)
    if [ "$TOTAL" = "0" ]; then
        echo "⚠️  GitHub Actions 워크플로우가 실행되지 않았습니다."
        echo "   GitHub Secrets 설정이 필요할 수 있습니다."
    else
        echo "✅ GitHub Actions 실행 중/완료"
    fi
fi
echo ""

echo "📋 확인 방법:"
echo "1. Vercel 대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
echo "2. GitHub 저장소: https://github.com/solmilee96/re-poom-platform"
echo ""






