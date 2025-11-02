# 🚀 즉시 배포하기

## 방법 1: 토큰을 환경 변수로 설정 후 배포

터미널에서 실행:
```bash
export GITHUB_TOKEN='your-token-here'
bash auto_deploy.sh
```

## 방법 2: 대화형 스크립트 사용

```bash
bash push_with_token.sh
```

토큰을 입력하라는 프롬프트가 나오면, GitHub Personal Access Token을 입력하세요.

## 토큰 생성 방법

1. https://github.com/settings/tokens 접속
2. "Generate new token" → "Generate new token (classic)" 클릭
3. 토큰 이름: `vercel-deploy` (또는 원하는 이름)
4. 권한 선택:
   - ✅ `repo` (전체 저장소 접근) - 필수
5. "Generate token" 클릭
6. 생성된 토큰을 복사 (한 번만 표시됨!)
7. 위 명령어에서 `your-token-here` 대신 붙여넣기

## 배포 확인

푸시 후 자동으로 Vercel에서 배포가 시작됩니다:
- 대시보드: https://vercel.com/solmilee96s-projects/re-poom-platform
- 배포 URL 확인 가능

