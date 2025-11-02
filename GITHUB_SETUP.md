# GitHub 비공개 저장소 설정 가이드

## 1. GitHub에서 비공개 저장소 만들기

1. https://github.com/solmilee96 에 로그인
2. 우측 상단의 **"+"** 버튼 클릭 → **"New repository"** 선택
3. 저장소 설정:
   - **Repository name**: `baby-goods-platform`
   - **Description**: `우리 동네 육아템 나눔터`
   - **Visibility**: ⚠️ **Private** 선택 (중요!)
   - ✅ **Add a README file** 체크 해제 (이미 있으므로)
   - ✅ **Add .gitignore** 체크 해제 (이미 있으므로)
4. **"Create repository"** 버튼 클릭

## 2. 인증 방법 (두 가지 중 선택)

### 방법 1: Personal Access Token (권장)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. Note: `baby-goods-platform`
4. 권한 선택: `repo` 체크
5. "Generate token" 클릭
6. 토큰을 복사 (한 번만 보여줌!)

터미널에서 실행:
```bash
git remote set-url origin https://토큰@github.com/solmilee96/baby-goods-platform.git
git push -u origin main
```

### 방법 2: SSH 키 사용 (더 안전)

SSH 키가 이미 설정되어 있다면:
```bash
git remote set-url origin git@github.com:solmilee96/baby-goods-platform.git
git push -u origin main
```

## 3. 빠른 실행

저장소를 만든 후, 아래 명령어를 실행하세요:

```bash
cd /Users/user/Desktop/hi
git push -u origin main
```

인증 창이 뜨면:
- Username: `solmilee96`
- Password: Personal Access Token (일반 비밀번호 아님!)

