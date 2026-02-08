# 🚀 배포 진행 방법

## 현재 상태
- ✅ 빌드 완료
- ✅ 코드 준비 완료
- ⏳ Vercel 로그인 필요

## 배포 방법

### 방법 1: Vercel CLI로 직접 배포 (권장)

터미널에서 다음 명령어를 실행하세요:

```bash
cd /Users/user/Desktop/hi

# 1. Vercel 로그인 (브라우저가 열립니다)
vercel login

# 2. 로그인 후 배포 실행
vercel --prod
```

또는 한 번에:

```bash
./deploy_after_login.sh
```

### 방법 2: GitHub Actions 자동 배포 (완전 자동)

**한 번만 설정하면 앞으로 `git push`만 하면 자동 배포됩니다!**

#### 설정 단계:

1. **Vercel 토큰 생성:**
   - https://vercel.com/account/tokens 접속
   - "Create Token" 클릭
   - 토큰 이름: "GitHub Actions"
   - 토큰 복사

2. **GitHub Secrets 설정:**
   - https://github.com/solmilee96/re-poom-platform/settings/secrets/actions
   - "New repository secret" 클릭하여 다음 3개 추가:
     - `VERCEL_TOKEN`: 위에서 생성한 토큰
     - `VERCEL_ORG_ID`: `team_9RjgR1jTao10PQkbZvP3WAt4`
     - `VERCEL_PROJECT_ID`: `prj_b9qx3X3HrEoG0MmhSLVOnuDHgJnA`

3. **코드 푸시:**
   ```bash
   git push
   ```
   → 자동으로 Vercel에 배포됩니다! 🎉

## 지금 바로 배포하기

터미널에서:

```bash
cd /Users/user/Desktop/hi
vercel login
vercel --prod
```

로그인 시 `solmilee96@gmail.com` 계정으로 로그인하시면 됩니다!

## 배포 후 확인

배포가 완료되면 Vercel에서 제공하는 URL이 표시됩니다.
해당 URL로 접속하여 사이트가 정상 작동하는지 확인하세요.

