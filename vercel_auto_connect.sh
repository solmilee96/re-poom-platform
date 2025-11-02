#!/bin/bash

echo "🚀 Vercel 자동 연결 스크립트"
echo ""
echo "이 스크립트는 Vercel API를 사용하여 프로젝트를 자동으로 생성합니다."
echo ""

# Vercel API 토큰 확인
if [ -z "$VERCEL_TOKEN" ]; then
    echo "⚠️ VERCEL_TOKEN 환경 변수가 설정되지 않았습니다."
    echo ""
    echo "Vercel 토큰을 생성하려면:"
    echo "1. https://vercel.com/account/tokens 접속"
    echo "2. 'Create Token' 클릭"
    echo "3. 토큰 이름 입력 (예: re-poom-platform)"
    echo "4. 토큰 생성 후 아래 명령어 실행:"
    echo ""
    echo "   export VERCEL_TOKEN='your-token-here'"
    echo "   ./vercel_auto_connect.sh"
    echo ""
    exit 1
fi

echo "📦 Vercel API를 사용하여 프로젝트 생성 중..."

# Vercel API를 사용하여 프로젝트 생성
RESPONSE=$(curl -X POST \
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
    "outputDirectory": "dist"
  }' 2>/dev/null)

if [ $? -eq 0 ]; then
    echo "✅ 프로젝트 생성 성공!"
    echo ""
    echo "$RESPONSE" | grep -o '"url":"[^"]*"' | head -1
    echo ""
    echo "💡 이제 GitHub에 push하면 자동으로 배포됩니다!"
else
    echo "❌ 프로젝트 생성 실패"
    echo "Vercel 웹 대시보드에서 수동으로 연결하세요:"
    echo "https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform"
fi


