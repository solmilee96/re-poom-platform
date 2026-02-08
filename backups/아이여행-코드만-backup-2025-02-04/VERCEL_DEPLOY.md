# Vercel 자동 배포 설정 가이드 🚀

## 방법 1: Vercel 웹 대시보드 연동 (가장 쉬운 방법) ⭐ 추천

### 1단계: Vercel 가입 및 로그인
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. `solmilee96` 계정 선택

### 2단계: 프로젝트 임포트
1. Vercel 대시보드에서 **"Add New..."** → **"Project"** 클릭
2. GitHub 저장소 목록에서 **`re-poom-platform`** 선택
3. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 감지됨)
   - **Output Directory**: `dist` (자동 감지됨)
4. **"Deploy"** 버튼 클릭

### 3단계: 자동 배포 활성화
- ✅ **"Deploy on push"** 옵션이 기본으로 활성화되어 있습니다
- 이제 `main` 브랜치에 push할 때마다 자동으로 배포됩니다!

### 완료! 🎉
이제 코드를 수정하고 push하면 자동으로 배포됩니다.

---

## 방법 2: Vercel CLI 사용

### 설치 및 로그인
```bash
npm install -g vercel
vercel login
```

### 배포
```bash
vercel --prod
```

### 자동 배포
GitHub에 push하면 자동으로 배포되도록 설정되어 있습니다.

---

## 방법 3: GitHub Actions 사용 (고급)

이미 `.github/workflows/vercel-deploy.yml` 파일이 생성되어 있습니다.

### 필요한 Secrets 설정:
GitHub 저장소 → Settings → Secrets and variables → Actions에서 다음을 추가:

1. **VERCEL_TOKEN**
   - Vercel → Settings → Tokens
   - "Create Token" 클릭
   - 토큰 복사 후 GitHub Secrets에 추가

2. **VERCEL_ORG_ID**
   - Vercel 프로젝트의 `vercel.json` 또는 프로젝트 설정에서 확인
   - 또는 Vercel CLI: `vercel inspect`

3. **VERCEL_PROJECT_ID**
   - Vercel 프로젝트의 `vercel.json` 또는 프로젝트 설정에서 확인
   - 또는 Vercel CLI: `vercel inspect`

---

## 배포 확인

배포 후:
- Vercel 대시보드에서 배포 URL 확인
- 또는 프로젝트 설정에서 커스텀 도메인 설정 가능

## 주의사항

- `.env` 파일은 GitHub에 커밋하지 마세요
- 환경 변수는 Vercel 대시보드에서 설정하세요
- Private 저장소도 Vercel에서 무료로 배포할 수 있습니다

---

## 도움이 필요하면

- Vercel 문서: https://vercel.com/docs
- Vite 배포 가이드: https://vercel.com/docs/frameworks/vite







