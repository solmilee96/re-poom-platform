# Vercel 빈 화면 해결

https://web-obutmwll6-solmilee96s-projects.vercel.app/ 에서 빈 화면이 나올 때 확인할 사항입니다.

## 원인

- **같은 저장소**가 GitHub Pages(`/docs`)와 Vercel에 연결되어 있는데, Vercel이 **어느 폴더를 루트로 쓰는지**에 따라 다른 파일이 배포됩니다.
- 루트가 **`web`** 이면 예전에는 `web/public/gwaenchanayo.html`만 서빙되어, 설정/버전 차이로 빈 화면이 나올 수 있습니다.
- 이제 **Root Directory가 비어 있든 `web`이든** 둘 다 **`docs/`(아이 여행)와 동일한 앱**이 나오도록 수정해 두었습니다.

## 해결 방법

### 1. 변경 사항 배포

아래 변경을 커밋한 뒤 **main에 푸시**하면 Vercel이 자동으로 다시 배포합니다.

- **루트** `vercel.json`: `npm run build:docs` → `dist/` 배포 (이미 적용됨)
- **web/** `vercel.json`: 빌드 시 상위 `docs/`를 `web/public/`에 복사한 뒤 `public/` 배포 (추가됨)
- **web/scripts/copy-docs.cjs**: `docs` → `public` 복사 스크립트 (추가됨)

### 2. Vercel 대시보드 확인 (선택)

- **Settings** → **General** → **Root Directory**
  - **비어 있음**: 루트 `vercel.json` 사용 → `docs` → `dist` 빌드 후 배포
  - **`web`**: `web/vercel.json` 사용 → `docs`를 `web/public`에 복사 후 배포 (동일 앱)
- **Settings** → **Build & Development** → **Build Command**  
  - 루트 사용 시: `npm run build:docs` (또는 비어 있으면 vercel.json 값 사용)  
  - web 사용 시: `node scripts/copy-docs.cjs`

### 3. 재배포 후 확인

- **Deployments** 탭에서 최신 배포가 **Ready**인지 확인한 뒤  
  https://web-obutmwll6-solmilee96s-projects.vercel.app/ 에 접속해 화면이 정상인지 봅니다.
- 여전히 빈 화면이면 해당 배포의 **Building** 로그에서 빌드/복사 단계가 성공했는지 확인합니다.

## 참고

- GitHub Pages: https://solmilee96.github.io/re-poom-platform/ (동일 앱, 정상 시 이 주소도 같은 화면)
- 배포 전 로컬 검증: `npm run test:docs-build:serve`
