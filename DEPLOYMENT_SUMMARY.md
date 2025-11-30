# 배포 요약

## 배포 정보
- **프로젝트 이름**: re-poom-platform
- **GitHub 저장소**: https://github.com/solmilee96/re-poom-platform
- **Vercel 프로젝트**: https://vercel.com/solmilee96s-projects/re-poom-platform

## 설정
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 20.x

## vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 자동 배포
- GitHub에 push하면 자동으로 Vercel에 배포됩니다
- `main` 브랜치에 push하면 Production 배포가 진행됩니다

## 배포 URL
배포 성공 후:
- `https://re-poom-platform-solmilee96s-projects.vercel.app`







