# 🚀 마망포켓 Vercel 배포 가이드

## 완전히 새로운 Vercel 프로젝트 배포하기

### 방법 1: Vercel CLI로 직접 배포 (가장 빠름)

```bash
# 1. Vercel CLI 설치 (처음 한 번만)
npm install -g vercel

# 2. 프로젝트 디렉토리로 이동
cd /Users/user/Desktop/hi

# 3. Vercel에 로그인 및 배포
vercel

# 4. 프로덕션 배포
vercel --prod
```

**프로세스:**
1. `vercel` 명령어 실행 시 브라우저가 열립니다
2. Vercel 계정으로 로그인
3. 새 프로젝트 생성 선택
4. 프로젝트 설정 확인 (자동으로 감지됨)
5. 배포 완료!

### 방법 2: GitHub 연동 배포 (권장)

```bash
# 1. GitHub에 새 저장소 생성
# GitHub 웹사이트에서 새 저장소 생성

# 2. Git 초기화 및 커밋
cd /Users/user/Desktop/hi
git init
git add .
git commit -m "feat: 마망포켓 초기 배포"

# 3. GitHub 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main

# 4. Vercel 대시보드에서 GitHub 저장소 연결
# - https://vercel.com 접속
# - "Add New Project" 클릭
# - GitHub 저장소 선택
# - 자동 배포 완료!
```

### 방법 3: 자동 배포 스크립트 사용

```bash
chmod +x deploy_vercel.sh
./deploy_vercel.sh
```

## 📋 배포 전 체크리스트

- [x] `src/MamangPocket.jsx` 파일 확인
- [x] `src/main.jsx`에서 MamangPocket 컴포넌트 사용
- [x] `package.json` 의존성 확인
- [x] `vercel.json` 설정 확인
- [x] 빌드 테스트 완료 (`npm run build`)

## ⚙️ Vercel 설정

현재 `vercel.json` 설정:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: 모든 경로를 `index.html`로 리다이렉트

## 🔧 문제 해결

### 빌드 실패 시
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel CLI 오류 시
```bash
# Vercel CLI 재설치
npm uninstall -g vercel
npm install -g vercel
```

### 환경 변수가 필요한 경우
Vercel 대시보드 → 프로젝트 설정 → Environment Variables에서 추가

## 📱 배포 후 확인

배포 완료 후:
1. Vercel에서 제공하는 URL 확인
2. 모바일/데스크톱에서 테스트
3. 모든 기능 정상 작동 확인

## 🔄 업데이트 배포

코드 수정 후:
```bash
git add .
git commit -m "feat: 업데이트 내용"
git push
# Vercel이 자동으로 재배포합니다!
```

또는 CLI로:
```bash
vercel --prod
```

## 📞 지원

문제가 발생하면:
- Vercel 문서: https://vercel.com/docs
- Vercel 커뮤니티: https://github.com/vercel/vercel/discussions

