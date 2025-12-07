# 🚀 자동 배포 설정 가이드

## 현재 상태

✅ GitHub Actions 워크플로우가 설정되었습니다!
✅ `main` 브랜치에 푸시할 때마다 자동으로 Vercel에 배포됩니다!

## Vercel Secrets 설정 (필수)

GitHub Actions가 Vercel에 배포하려면 다음 Secrets를 설정해야 합니다:

### 1. Vercel 토큰 생성

1. [Vercel 대시보드](https://vercel.com/account/tokens) 접속
2. "Create Token" 클릭
3. 토큰 이름 입력 (예: "GitHub Actions")
4. 토큰 복사

### 2. Vercel 프로젝트 정보 가져오기

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 디렉토리에서
vercel link

# 또는 이미 배포된 프로젝트가 있다면
vercel inspect
```

### 3. GitHub Secrets 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. 다음 Secrets 추가:

   - `VERCEL_TOKEN`: Vercel 토큰 (1번에서 생성한 토큰)
   - `VERCEL_ORG_ID`: Vercel 조직 ID
   - `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID

#### Vercel ID 찾는 방법:

```bash
# 방법 1: Vercel CLI 사용
vercel inspect

# 방법 2: Vercel 대시보드에서
# 프로젝트 설정 → General → Project ID 확인
# 또는 .vercel/project.json 파일 확인
```

## 자동 배포 작동 방식

1. **코드 푸시** → `main` 브랜치에 푸시
2. **GitHub Actions 트리거** → 자동으로 워크플로우 실행
3. **빌드** → 프로젝트 빌드
4. **Vercel 배포** → 프로덕션 환경에 자동 배포

## 수동 배포도 가능

GitHub Actions 탭에서 "Run workflow" 버튼으로 수동 배포 가능합니다.

## 문제 해결

### Secrets가 설정되지 않았을 때
- GitHub Actions 로그에서 "secrets not found" 오류 확인
- 위의 3번 단계를 따라 Secrets 설정

### Vercel 프로젝트가 없을 때
1. 먼저 수동으로 한 번 배포:
   ```bash
   vercel --prod
   ```
2. 배포 후 `.vercel/project.json` 파일에서 ID 확인
3. GitHub Secrets에 추가

## 빠른 설정 (한 번만)

```bash
# 1. Vercel CLI로 프로젝트 연결
vercel link

# 2. 프로젝트 정보 확인
cat .vercel/project.json

# 3. GitHub Secrets에 추가
# VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
```

이제 `git push`만 하면 자동 배포됩니다! 🎉

