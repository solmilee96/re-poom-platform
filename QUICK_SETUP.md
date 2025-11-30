# 🚀 Vercel 프로젝트 빠른 설정

## 방법 1: 웹 대시보드에서 직접 연결 (30초) ⭐ 추천

아래 링크를 클릭하고 몇 번만 클릭하면 됩니다:

**👉 https://vercel.com/new/clone?repository-url=https://github.com/solmilee96/re-poom-platform**

### 단계:
1. 링크 클릭 → Vercel 로그인 (GitHub 계정 사용)
2. 저장소 선택: `re-poom-platform` 
3. 설정 확인:
   - Framework: Vite (자동 감지됨)
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `dist` (자동 감지됨)
4. **"Deploy"** 버튼 클릭
5. 완료! 🎉

배포가 시작되면 1-3분 후 사이트가 활성화됩니다.

---

## 방법 2: Vercel API로 자동 생성 (토큰 필요)

Vercel 토큰을 받아서 자동으로 생성할 수 있습니다:

1. **Vercel 토큰 생성:**
   - https://vercel.com/account/tokens 접속
   - "Create Token" 클릭
   - 토큰 이름: `re-poom-platform`
   - 토큰 생성 후 복사

2. **토큰을 알려주시면 자동으로 프로젝트를 생성하겠습니다!**

또는 직접 실행:
```bash
export VERCEL_TOKEN='your-token-here'
bash create_vercel_project.sh
```

---

## 연결 후 확인

프로젝트가 생성되면:
- ✅ GitHub에 push하면 자동 배포됩니다
- ✅ 배포 URL이 생성됩니다
- ✅ Vercel 대시보드에서 관리할 수 있습니다






