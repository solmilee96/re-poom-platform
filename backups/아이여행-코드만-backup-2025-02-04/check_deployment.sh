#!/bin/bash

echo "🔍 Vercel 배포 상태 확인 중..."
echo ""

# GitHub Actions가 실행 중인지 확인
if [ -n "$GITHUB_TOKEN" ]; then
    echo "📊 GitHub Actions 워크플로우 확인 중..."
    curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/solmilee96/re-poom-platform/actions/runs?per_page=1" | \
        grep -E '(status|conclusion|created_at)' | head -3
    echo ""
fi

echo "✅ 배포 상태 확인 방법:"
echo ""
echo "1. Vercel 대시보드 (가장 정확):"
echo "   https://vercel.com/solmilee96s-projects/re-poom-platform"
echo ""
echo "2. GitHub Actions (워크플로우 사용 시):"
echo "   https://github.com/solmilee96/re-poom-platform/actions"
echo ""
echo "3. 배포 URL 확인:"
echo "   https://web-obutmwll6-solmilee96s-projects.vercel.app"
echo ""






