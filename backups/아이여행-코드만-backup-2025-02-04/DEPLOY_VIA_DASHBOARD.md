# 🚀 Vercel 대시보드에서 배포하기

## 방법 1: Vercel 대시보드에서 직접 배포 (가장 쉬움)

### 단계별 가이드

1. **Vercel 대시보드 접속**
   - https://vercel.com/solmilee96s-projects 접속
   - 로그인 (solmilee96@gmail.com)

2. **새 프로젝트 생성**
   - "Add New..." 또는 "Create Project" 클릭
   - "Import Git Repository" 선택
   - GitHub 저장소 선택: `solmilee96/re-poom-platform`
   - 또는 "Deploy" → "Browse" → 프로젝트 폴더 선택

3. **프로젝트 설정**
   - **Framework Preset**: Vite (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `dist` (자동 설정됨)
   - **Install Command**: `npm install` (자동 설정됨)

4. **환경 변수** (필요한 경우)
   - 현재는 없어도 됩니다

5. **Deploy 클릭**
   - 배포가 자동으로 시작됩니다!

### GitHub 저장소 연결 방법

1. Vercel 대시보드 → "Add New..." → "Project"
2. "Import Git Repository" 클릭
3. GitHub 계정 연결 (처음 한 번만)
4. `re-poom-platform` 저장소 선택
5. "Import" 클릭
6. 설정 확인 후 "Deploy" 클릭

## 방법 2: Vercel CLI로 배포 (터미널)

터미널에서:

```bash
cd /Users/user/Desktop/hi

# 1. 로그인 (브라우저가 열림)
vercel login

# 2. 새 프로젝트로 배포
vercel --yes

# 3. 프로덕션 배포
vercel --prod
```

## 방법 3: GitHub Actions 자동 배포

GitHub에 푸시하면 자동 배포:

```bash
git push
```

(GitHub Secrets 설정 필요 - GITHUB_SECRETS.md 참고)

## 현재 프로젝트 정보

- **프로젝트 이름**: mamang-pocket (또는 원하는 이름)
- **프레임워크**: Vite
- **빌드 명령어**: `npm run build`
- **출력 디렉토리**: `dist`
- **Node 버전**: 20.x

## 배포 후 확인

배포가 완료되면 Vercel에서 제공하는 URL로 접속하여 확인하세요!

