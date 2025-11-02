#!/bin/bash

echo "📤 GitHub에 푸시하기"
echo ""
echo "Personal Access Token이 필요합니다."
echo "토큰을 생성하려면: https://github.com/settings/tokens"
echo ""
read -p "Personal Access Token을 입력하세요: " TOKEN

if [ -z "$TOKEN" ]; then
    echo "❌ 토큰이 입력되지 않았습니다."
    exit 1
fi

# 원격 URL에 토큰 포함
git remote set-url origin https://${TOKEN}@github.com/solmilee96/baby-goods-platform.git

# 푸시 시도
echo "🚀 푸시 중..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 푸시 성공!"
    # 보안을 위해 원격 URL에서 토큰 제거
    git remote set-url origin https://github.com/solmilee96/baby-goods-platform.git
    echo "✅ 원격 URL이 안전하게 업데이트되었습니다."
else
    echo "❌ 푸시 실패"
    exit 1
fi

