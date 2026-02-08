# 배포 대상 및 Vercel 연결

**이 문서는 배포가 올바른 주소로 나가도록 연결 상태를 명시합니다. 배포 시 이 설정을 유지하세요.**

---

## 1. 공식 서비스 주소 (바뀌지 않도록 유지)

| 용도 | URL |
|------|-----|
| **GitHub Pages** | https://solmilee96.github.io/re-poom-platform/ |
| **Vercel 프로덕션** | https://web-obutmwll6-solmilee96s-projects.vercel.app/ |

- **GitHub Pages**: 저장소 `main` 브랜치의 `docs/` 폴더가 자동 배포됩니다. 푸시만 하면 반영됩니다.
- **Vercel**: **반드시 아래 프로젝트(web-obutmwll6)와 연결**해 두어야, 배포 시 이 주소로 배포됩니다.

---

## 2. Vercel 앱 연결 — 배포하면 이 앱으로 배포되도록

**배포 시 `web-obutmwll6-solmilee96s-projects.vercel.app` 이 배포되도록 하려면**, 해당 URL의 Vercel 프로젝트와 이 저장소를 연결해야 합니다.

### 방법 A: Vercel 대시보드에서 Git 연결 (권장)

1. Vercel 대시보드 접속 → **프로젝트 이름 "web"** (또는 URL이 `web-obutmwll6-solmilee96s-projects.vercel.app` 인 프로젝트) 선택.
2. **Settings** → **Git** (또는 **Connect Git Repository**).
3. **GitHub** 선택 후 저장소 **`solmilee96/re-poom-platform`** 연결.
4. **Production Branch**: `main`.
5. (이 서비스가 `docs/` 단일 HTML이면) **Root Directory**: `docs` 또는 프로젝트에 맞게 설정.  
   (루트 Vite 앱을 배포하는 경우는 Root Directory 비움.)
6. 저장 후 **Deployments**에서 배포가 자동으로 이 프로젝트로 나가는지 확인.

이렇게 연결해 두면 **`git push` 할 때마다 이 Vercel 프로젝트(web-obutmwll6)로 자동 배포**됩니다.

### 방법 B: 로컬에서 Vercel CLI로 연결

```bash
cd /Users/user/Desktop/괜찮아요   # 또는 프로젝트 루트
vercel link
# 프롬프트에서 해당 팀/개인 계정 선택 후, 프로젝트 목록에서
# web-obutmwll6 URL에 해당하는 프로젝트 선택
```

이후 `vercel --prod` 또는 `npm run deploy` 시 해당 프로젝트로 배포됩니다.

---

## 3. 연결 확인

- **배포 후** 브라우저에서 https://web-obutmwll6-solmilee96s-projects.vercel.app/ 접속해 최신 코드가 반영되었는지 확인하세요.
- 코드 내 **FEEDBACK_API_URL** 은 이미 `https://web-obutmwll6-solmilee96s-projects.vercel.app/api/feedback` 로 설정되어 있으므로, 이 Vercel 앱이 배포 대상이어야 피드백 API가 정상 동작합니다.

---

## 4. 요약

- **현재 상태를 유지하려면**: GitHub Pages는 `main` → `docs/` 로 설정 유지, Vercel은 **web-obutmwll6** 프로젝트에 **Connect Git Repository**로 `solmilee96/re-poom-platform` 연결 유지.
- URL/프로젝트를 바꾸면 `PRODUCTION_URL.md` 및 `docs/index.html` 의 `FEEDBACK_API_URL` 등도 함께 수정하세요.
