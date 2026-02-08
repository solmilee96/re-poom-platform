#!/bin/bash

# 마망포켓 Vercel 배포 스크립트

set -e

echo "🚀 마망포켓 Vercel 배포를 시작합니다..."

# 1. Git 저장소 확인 및 초기화
if [ ! -d ".git" ]; then
    echo "📦 Git 저장소를 초기화합니다..."
    git init
    git branch -M main
fi

# 2. 의존성 설치
echo "📥 의존성을 설치합니다..."
npm install

# 3. 빌드 테스트
echo "🔨 빌드를 테스트합니다..."
npm run build

# 4. Git 커밋
echo "💾 변경사항을 커밋합니다..."
git add .
git commit -m "feat: 마망포켓 최신 버전 배포" || echo "변경사항이 없습니다."

# 5. Vercel CLI 설치 확인
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI를 설치합니다..."
    npm install -g vercel
fi

# 6. Vercel 배포
echo "🌐 Vercel에 배포합니다..."
echo ""
echo "⚠️  다음 단계를 따라주세요:"
echo "   1. Vercel 계정으로 로그인하세요"
echo "   2. 새 프로젝트를 생성하세요"
echo "   3. Git 저장소를 연결하거나 직접 배포하세요"
echo ""

# Vercel 배포 옵션
read -p "Vercel에 직접 배포하시겠습니까? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel --prod
else
    echo ""
    echo "✅ 준비 완료!"
    echo ""
    echo "다음 명령어로 배포할 수 있습니다:"
    echo "  vercel --prod"
    echo ""
    echo "또는 GitHub에 푸시한 후 Vercel 대시보드에서 연결하세요:"
    echo "  git remote add origin <your-github-repo-url>"
    echo "  git push -u origin main"
fi

echo ""
echo "✨ 완료!"

