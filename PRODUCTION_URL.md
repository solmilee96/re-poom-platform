# 프로덕션 URL

**공식 서비스 주소 (배포 시 이 주소로 연결되도록 유지)**

| 용도 | URL |
|------|-----|
| **GitHub Pages** | https://solmilee96.github.io/re-poom-platform/ |
| **Vercel 프로덕션** | https://web-obutmwll6-solmilee96s-projects.vercel.app/ (또는 Vercel 대시보드에 표시되는 URL) |

- **Vercel과 GitHub Pages 연동**: 두 주소 모두 **같은 앱**(`docs/` 아이 여행)을 서비스합니다.
  - **Vercel**: 빌드 시 `docs/*`를 `dist/`에 복사해 배포. API(`/api/feedback`, `/api/consultation`)는 같은 Vercel 프로젝트에서 제공.
  - **GitHub Pages**: 저장소 설정에서 Source를 **main** 브랜치, **/docs** 폴더로 두면 위 GitHub Pages URL로 서비스됩니다.
- GitHub Pages에서 빈 화면이 나오면 **Vercel URL**을 사용하시면 됩니다. (`docs/index.html`에서는 Vercel 도메인일 때 같은 출처, GitHub Pages일 때 위 Vercel 주소로 API 호출)

**Vercel URL이 바뀌면 아래를 함께 수정하세요.**
- `docs/index.html` → `_apiBase` 폴백 URL (GitHub Pages에서 쓸 Vercel 주소)
- `check_deployment_status.sh` → `URL=`
- `check_deployment.sh` → 배포 URL 확인 안내
- `DEPLOYMENT_*.md`, `SLACK_SETUP.md` → 문서 내 URL
