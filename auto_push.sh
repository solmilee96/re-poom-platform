#!/bin/bash

# GitHub 저장소 푸시 스크립트

echo "🚀 GitHub에 푸시 시작..."

# 현재 브랜치 확인
BRANCH=$(git branch --show-current)

# 저장소 존재 여부 확인
if git ls-remote --heads origin main &> /dev/null; then
    echo "✅ 저장소가 존재합니다. 푸시를 진행합니다..."
    git push -u origin $BRANCH
    echo "✅ 푸시 완료!"
else
    echo "⚠️ 저장소가 아직 생성되지 않았습니다."
    echo "다음 단계를 진행하세요:"
    echo "1. https://github.com/new 에서 저장소 생성"
    echo "   - 이름: baby-goods-platform"
    echo "   - Private 선택"
    echo "   - README, .gitignore, license 체크 해제"
    echo "2. 이 스크립트를 다시 실행하세요: ./auto_push.sh"
fi

