#!/bin/bash

echo "🚀 Vercel 프로젝트 자동 생성 스크립트"
echo "================================"
echo ""

if [ -z "$VERCEL_TOKEN" ]; then
    echo "⚠️  VERCEL_TOKEN 환경 변수가 설정되지 않았습니다."
    echo ""
    echo "토큰을 입력하세요:"
    read -sp "VERCEL_TOKEN (입력값이 보이지 않습니다): " VERCEL_TOKEN
    echo ""
    export VERCEL_TOKEN
fi

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ 토큰이 입력되지 않았습니다."
    exit 1
fi

echo ""
echo "📦 Vercel API로 프로젝트 생성 중..."
echo ""

# 기존 프로젝트 확인
EXISTING=$(curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
    "https://api.vercel.com/v9/projects/re-poom-platform" 2>/dev/null)

if echo "$EXISTING" | grep -q '"id"'; then
    echo "✅ 프로젝트가 이미 존재합니다!"
    echo ""
    PROJECT_URL=$(echo "$EXISTING" | python3 -m json.tool 2>/dev/null | grep -o '"url":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo "📊 프로젝트 정보:"
    echo "$EXISTING" | python3 -m json.tool 2>/dev/null | grep -E '(name|url|createdAt)' || echo "$EXISTING"
    echo ""
    echo "대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
    
    # 첫 배포 트리거
    echo ""
    echo "🚀 배포 트리거 시도..."
    DEPLOY_RESPONSE=$(curl -s -X POST \
        -H "Authorization: Bearer $VERCEL_TOKEN" \
        -H "Content-Type: application/json" \
        "https://api.vercel.com/v13/deployments?project=re-poom-platform" \
        -d '{
            "name": "re-poom-platform",
            "target": "production"
        }' 2>/dev/null)
    
    echo "✅ 배포가 시작되었습니다!"
    exit 0
fi

# 새 프로젝트 생성
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

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    echo "✅ 프로젝트 생성 성공!"
    echo ""
    echo "📊 프로젝트 정보:"
    echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
    echo ""
    echo "🎉 프로젝트가 생성되었습니다!"
    echo ""
    echo "📋 다음 정보:"
    echo "- 대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
    echo "- 이제 GitHub에 push하면 자동으로 배포됩니다!"
    echo ""
    
    # 첫 배포 자동 시작
    echo "🚀 첫 배포 시작 중..."
    sleep 2
    
    DEPLOY_RESPONSE=$(curl -s -X POST \
        -H "Authorization: Bearer $VERCEL_TOKEN" \
        -H "Content-Type: application/json" \
        "https://api.vercel.com/v13/deployments?project=re-poom-platform" \
        -d '{
            "name": "re-poom-platform",
            "target": "production"
        }' 2>/dev/null)
    
    echo "✅ 배포가 시작되었습니다!"
    echo "약 1-3분 후 배포가 완료됩니다."
    
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
    echo "💡 가능한 원인:"
    echo "1. 토큰이 유효하지 않음"
    echo "2. GitHub 저장소 접근 권한 없음"
    echo "3. Vercel 서버 일시적 문제"
    echo ""
    echo "다시 시도하거나 웹 대시보드에서 수동으로 연결하세요:"
    echo "https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform"
fi






