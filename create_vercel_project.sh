#!/bin/bash

echo "🚀 Vercel 프로젝트 생성 및 연결"
echo "================================"
echo ""

# Vercel 토큰 확인
if [ -z "$VERCEL_TOKEN" ]; then
    echo "⚠️  VERCEL_TOKEN이 설정되지 않았습니다."
    echo ""
    echo "두 가지 방법이 있습니다:"
    echo ""
    echo "방법 1: 웹 대시보드에서 직접 연결 (추천) ⭐"
    echo "   1. 아래 링크 클릭:"
    echo "      https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform"
    echo "   2. GitHub 로그인"
    echo "   3. 'Deploy' 버튼 클릭"
    echo "   4. 완료!"
    echo ""
    echo "방법 2: Vercel API로 자동 생성"
    echo "   1. https://vercel.com/account/tokens 접속"
    echo "   2. 'Create Token' 클릭"
    echo "   3. 토큰 생성 후 아래 명령어 실행:"
    echo "      export VERCEL_TOKEN='your-token-here'"
    echo "      bash create_vercel_project.sh"
    echo ""
    exit 1
fi

echo "📦 Vercel API로 프로젝트 생성 중..."
echo ""

# Vercel 팀/계정 정보 확인
echo "🔍 계정 정보 확인 중..."
USER_RESPONSE=$(curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
    "https://api.vercel.com/v2/user")

# 프로젝트 생성
echo "🚀 프로젝트 생성 중..."
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
  }')

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    echo "✅ 프로젝트 생성 성공!"
    echo ""
    echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
    echo ""
    echo "🎉 프로젝트가 생성되었습니다!"
    echo "💡 이제 GitHub에 push하면 자동으로 배포됩니다."
    echo ""
    echo "대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform"
else
    echo "❌ 프로젝트 생성 실패 (HTTP $HTTP_CODE)"
    echo ""
    echo "$BODY"
    echo ""
    echo "💡 웹 대시보드에서 수동으로 연결하세요:"
    echo "   https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform"
fi






