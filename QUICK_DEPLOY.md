# ⚡ 빠른 배포 가이드

## 🎯 지금 바로 배포하기

### 방법 1: Vercel CLI로 직접 배포 (가장 빠름)

```bash
# 프로젝트 디렉토리에서
npm run deploy
```

또는

```bash
vercel --prod
```

### 방법 2: 자동 배포 스크립트 사용

```bash
npm run deploy:auto
```

또는

```bash
./auto_deploy_simple.sh
```

## 🔄 앞으로 자동 배포하기

### 옵션 A: GitHub Actions (권장 - 완전 자동)

1. **한 번만 설정:**
   ```bash
   # GitHub Secrets 설정 (SETUP_AUTO_DEPLOY.md 참고)
   # VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID 추가
   ```

2. **이후부터:**
   ```bash
   git add .
   git commit -m "업데이트 내용"
   git push
   # 자동으로 Vercel에 배포됩니다! 🎉
   ```

### 옵션 B: 로컬 스크립트 (간단)

```bash
# 매번 이 명령어만 실행
npm run deploy:auto
```

## 📋 배포 전 체크리스트

- [x] 코드 변경 완료
- [x] 빌드 테스트 (`npm run build`)
- [ ] Vercel 계정 로그인 (`vercel login`)
- [ ] 배포 실행

## 🚀 지금 배포하세요!

터미널에서 다음 명령어 실행:

```bash
cd /Users/user/Desktop/hi
vercel --prod
```

또는

```bash
npm run deploy
```

