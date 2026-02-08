#!/bin/bash

echo "🚀 Vercel 배포 직접 트리거"
echo "================================"
echo ""

# Vercel 토큰 확인
if [ -z "$VERCEL_TOKEN" ]; then
    echo "⚠️  VERCEL_TOKEN이 필요합니다."
    echo ""
    echo "토큰 생성 방법:"
    echo "1. https://vercel.com/account/tokens 접속"
    echo "2. 'Create Token' 클릭"
    echo "3. 토큰 이름 입력 후 생성"
    echo "4. 토큰 복사"
    echo ""
    echo "토큰을 입력하세요:"
    read -sp "VERCEL_TOKEN: " VERCEL_TOKEN
    echo ""
    export VERCEL_TOKEN
fi

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ 토큰이 입력되지 않았습니다."
    exit 1
fi

echo "📦 프로젝트 정보 확인 중..."
PROJECT_INFO=$(curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
    "https://api.vercel.com/v9/projects/re-poom-platform-zdxq" 2>/dev/null)

if ! echo "$PROJECT_INFO" | grep -q '"id"'; then
    echo "❌ 프로젝트를 찾을 수 없습니다."
    echo "프로젝트 이름 확인: re-poom-platform-zdxq"
    exit 1
fi

echo "✅ 프로젝트 확인 완료"
echo ""

# 최신 커밋 정보 가져오기
LATEST_COMMIT=$(git log -1 --pretty=format:"%h")
echo "📊 배포할 커밋: $LATEST_COMMIT"
echo ""

# 배포 트리거
echo "🚀 배포 트리거 중..."
DEPLOY_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    -H "Content-Type: application/json" \
    "https://api.vercel.com/v13/deployments" \
    -d "{
        \"name\": \"re-poom-platform-zdxq\",
        \"project\": \"re-poom-platform-zdxq\",
        \"target\": \"production\",
        \"gitSource\": {
            \"type\": \"github\",
            \"repo\": \"solmilee96/re-poom-platform\",
            \"ref\": \"main\"
        }
    }" 2>/dev/null)

HTTP_CODE=$(echo "$DEPLOY_RESPONSE" | tail -1)
BODY=$(echo "$DEPLOY_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    echo "✅ 배포가 성공적으로 트리거되었습니다!"
    echo ""
    echo "📊 배포 정보:"
    echo "$BODY" | python3 -m json.tool 2>/dev/null | grep -E '(id|url|state|createdAt)' || echo "$BODY"
    echo ""
    echo "🔗 대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform-zdxq"
    echo "⏳ 배포 완료까지 약 2-5분 소요됩니다."
else
    echo "❌ 배포 트리거 실패 (HTTP $HTTP_CODE)"
    echo ""
    echo "응답:"
    echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
    echo ""
    echo "💡 대안: Vercel 대시보드에서 수동으로 재배포하세요:"
    echo "   https://vercel.com/solmilee96s-projects/re-poom-platform-zdxq"
fi




