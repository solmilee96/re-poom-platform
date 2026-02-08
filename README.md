# 마망포켓 (MamangPocket)

육아템 중고거래 및 대여 플랫폼

## 🚀 빠른 시작

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 🧪 배포 전 테스트 (docs 빌드)

Vercel에 배포하는 내용(docs → dist)을 **배포 없이** 로컬에서 검증할 수 있습니다.

```bash
# 1) 빌드 실행 + dist/index.html 내용 검증
npm run test:docs-build

# 2) 위 + 로컬 서버로 서빙 후 HTTP 응답 검증 (Vercel과 동일한 방식)
npm run test:docs-build:serve
```

두 명령이 모두 성공하면, 같은 빌드로 Vercel에 배포했을 때도 동일한 화면이 나와야 합니다.

---

## 📦 배포

### Vercel 배포

#### 방법 1: 자동 배포 스크립트

```bash
chmod +x deploy_vercel.sh
./deploy_vercel.sh
```

#### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치 (처음 한 번만)
npm install -g vercel

# 배포
vercel --prod
```

#### 방법 3: GitHub 연동

1. GitHub에 저장소 생성
2. 코드 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
3. [Vercel 대시보드](https://vercel.com)에서 GitHub 저장소 연결
4. 자동 배포 완료!

## 🛠️ 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링

## 📱 주요 기능

- 🏠 홈 화면 - 지역별 인기 상품
- 🔍 검색 - 상품 검색
- 💬 커뮤니티 - 마망 커뮤니티
- ❤️ 포켓 - 찜한 상품 관리
- 👤 마이페이지 - 내 정보 및 활동

## 📄 라이선스

MIT
