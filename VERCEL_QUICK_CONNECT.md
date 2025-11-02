# Vercel 빠른 연결 가이드 ⚡

## 방법 1: 웹 대시보드에서 연결 (가장 쉬움) ⭐

브라우저가 자동으로 열렸습니다! 다음 단계만 진행하세요:

### 단계별 안내:

1. **GitHub 로그인**
   - Vercel에 GitHub 계정으로 로그인
   - `solmilee96` 계정 선택

2. **저장소 선택**
   - `re-poom-platform` 저장소가 표시됩니다
   - 클릭하여 선택

3. **프로젝트 설정 확인**
   - Framework: Vite (자동 감지)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - ✅ 설정은 이미 완료되어 있습니다!

4. **Deploy 클릭**
   - 배포가 시작됩니다
   - 완료되면 배포 URL을 받게 됩니다

5. **완료! 🎉**
   - 이제 GitHub에 push하면 자동으로 배포됩니다!

---

## 방법 2: Vercel API로 자동 연결

### Vercel 토큰 생성:
1. https://vercel.com/account/tokens 접속
2. "Create Token" 클릭
3. 토큰 이름: `re-poom-platform`
4. 토큰 생성 후 복사

### 자동 연결 실행:
```bash
export VERCEL_TOKEN='your-token-here'
./vercel_auto_connect.sh
```

---

## 방법 3: Vercel CLI 사용

```bash
# Vercel CLI 설치 (Node.js 필요)
npm install -g vercel

# 로그인
vercel login

# 프로젝트 배포
vercel --prod
```

---

## 연결 후 확인사항

✅ **자동 배포 활성화 확인:**
- Vercel 프로젝트 설정 → Git
- "Deploy on push" 옵션이 활성화되어 있는지 확인

✅ **배포 URL 확인:**
- Vercel 대시보드에서 배포 URL 확인
- 예: `https://re-poom-platform.vercel.app`

✅ **커스텀 도메인 설정 (선택):**
- 프로젝트 설정 → Domains
- 원하는 도메인 추가 가능

---

## 문제 해결

**배포 실패 시:**
1. 빌드 로그 확인 (Vercel 대시보드)
2. `package.json`의 빌드 스크립트 확인
3. 환경 변수 설정 확인

**자동 배포가 안 될 때:**
1. Vercel 프로젝트 설정 → Git 확인
2. GitHub 저장소 연결 상태 확인
3. Vercel GitHub 앱 권한 확인

---

브라우저가 열렸다면 위 단계를 따라 진행하세요! 🚀


