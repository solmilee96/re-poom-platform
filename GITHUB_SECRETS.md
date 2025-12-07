# 🔐 GitHub Secrets 설정 가이드

## Vercel 프로젝트 정보

현재 프로젝트 정보:
- **Project ID**: `prj_b9qx3X3HrEoG0MmhSLVOnuDHgJnA`
- **Org ID**: `team_9RjgR1jTao10PQkbZvP3WAt4`
- **Project Name**: `re-poom-platform-zdxq`

## GitHub Secrets 설정 방법

### 1단계: Vercel 토큰 생성

1. https://vercel.com/account/tokens 접속
2. "Create Token" 클릭
3. 토큰 이름 입력 (예: "GitHub Actions Auto Deploy")
4. "Create" 클릭
5. **토큰을 복사** (한 번만 보여줍니다!)

### 2단계: GitHub Secrets 추가

1. GitHub 저장소 페이지로 이동:
   - https://github.com/solmilee96/re-poom-platform

2. **Settings** 탭 클릭

3. 왼쪽 메뉴에서 **Secrets and variables** → **Actions** 클릭

4. **New repository secret** 클릭

5. 다음 3개의 Secret을 각각 추가:

   #### Secret 1: VERCEL_TOKEN
   - Name: `VERCEL_TOKEN`
   - Value: 1단계에서 생성한 Vercel 토큰

   #### Secret 2: VERCEL_ORG_ID
   - Name: `VERCEL_ORG_ID`
   - Value: `team_9RjgR1jTao10PQkbZvP3WAt4`

   #### Secret 3: VERCEL_PROJECT_ID
   - Name: `VERCEL_PROJECT_ID`
   - Value: `prj_b9qx3X3HrEoG0MmhSLVOnuDHgJnA`

### 3단계: 확인

GitHub Actions 탭에서 워크플로우가 실행되는지 확인:
- https://github.com/solmilee96/re-poom-platform/actions

## ✅ 설정 완료 후

이제 `git push`만 하면 자동으로 Vercel에 배포됩니다!

```bash
git add .
git commit -m "업데이트"
git push
```

## 🔍 Secrets 확인 방법

GitHub 저장소 → Settings → Secrets and variables → Actions

다음 3개가 보여야 합니다:
- ✅ VERCEL_TOKEN
- ✅ VERCEL_ORG_ID
- ✅ VERCEL_PROJECT_ID

## 🚨 문제 해결

### "secrets not found" 오류
- GitHub Secrets가 제대로 설정되었는지 확인
- Secret 이름이 정확한지 확인 (대소문자 구분)

### "invalid token" 오류
- Vercel 토큰이 만료되었을 수 있음
- 새 토큰 생성 후 GitHub Secrets 업데이트

### 배포가 안 될 때
- GitHub Actions 로그 확인
- Vercel 대시보드에서 프로젝트 상태 확인

