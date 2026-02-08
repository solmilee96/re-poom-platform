#!/bin/bash

echo "🚀 Vercel 프로젝트 API로 생성 시도"
echo "================================"
echo ""

if [ -z "$VERCEL_TOKEN" ]; then
    echo "📋 Vercel 토큰이 필요합니다."
    echo ""
    echo "토큰 생성 방법:"
    echo "1. https://vercel.com/account/tokens 접속"
    echo "2. 'Create Token' 클릭"
    echo "3. 토큰 이름 입력: re-poom-platform"
    echo "4. 토큰 생성 후 복사"
    echo ""
    echo "토큰을 입력하세요 (또는 환경 변수로 설정):"
    read -p "VERCEL_TOKEN: " VERCEL_TOKEN
    export VERCEL_TOKEN
fi

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ 토큰이 입력되지 않았습니다."
    exit 1
fi

echo "📦 프로젝트 생성 중..."
echo ""

# 먼저 기존 프로젝트가 있는지 확인
echo "🔍 기존 프로젝트 확인 중..."
EXISTING=$(curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
    "https://api.vercel.com/v9/projects/re-poom-platform" 2>/dev/null)

if echo "$EXISTING" | grep -q "id"; then
    echo "✅ 프로젝트가 이미 존재합니다!"
    echo ""
    echo "$EXISTING" | python3 -m json.tool 2>/dev/null | grep -E '(name|url|createdAt)' || echo "$EXISTING"
    echo ""
    echo "대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
    exit 0
fi

# 프로젝트 생성
echo "🚀 새 프로젝트 생성 중..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.vercel.com/v10/projects" \
  -d '{
    "name": "re-poom-platform",
    "framework": "vite",
    "gitRepository": {
      "type": "github",
      "repo": "solmilee96/re-poom-platform"
    },
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "installCommand": "npm install"
  }' 2>/dev/null)

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | sed '$d')

echo "HTTP 상태 코드: $HTTP_CODE"
echo ""

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    echo "✅ 프로젝트 생성 성공!"
    echo ""
    echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
    echo ""
    echo "🎉 프로젝트가 생성되었습니다!"
    echo "대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
    
    # 첫 배포 트리거
    echo ""
    echo "🚀 첫 배포 시작 중..."
    sleep 2
    
elif [ "$HTTP_CODE" = "409" ]; then
    echo "ℹ️  프로젝트가 이미 존재합니다."
    echo ""
    echo "대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
    
else
    echo "❌ 프로젝트 생성 실패 (HTTP $HTTP_CODE)"
    echo ""
    echo "응답 내용:"
    echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
    echo ""
    echo "💡 가능한 해결 방법:"
    echo "1. Vercel 토큰이 유효한지 확인"
    echo "2. GitHub 저장소에 접근 권한이 있는지 확인"
    echo "3. 잠시 후 다시 시도"
    echo "4. 웹 대시보드에서 수동으로 연결:"
    echo "   https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform"
fi






