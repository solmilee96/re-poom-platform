# 프로덕션 URL

**공식 서비스 주소 (배포 시 이 주소로 연결되도록 유지)**

| 용도 | URL |
|------|-----|
| **GitHub Pages** | https://solmilee96.github.io/re-poom-platform/ |
| **Vercel 프로덕션** | https://web-obutmwll6-solmilee96s-projects.vercel.app/ |

- **배포가 이 Vercel 앱으로 나가도록** 연결하는 방법은 **`DEPLOYMENT_TARGET.md`** 를 참고하세요.

**Vercel URL이 바뀌면 아래를 함께 수정하세요.**
- `docs/index.html` → `FEEDBACK_API_URL` (예: `https://web-obutmwll6-solmilee96s-projects.vercel.app/api/feedback`)
- `check_deployment_status.sh` → `URL=`
- `check_deployment.sh` → 배포 URL 확인 안내
- `DEPLOYMENT_*.md`, `SLACK_SETUP.md` → 문서 내 URL
