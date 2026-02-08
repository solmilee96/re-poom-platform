# NotebookLM 채팅 프록시

아이 여행 상담 기능에서 **NotebookLM만 사용**하려면 이 프록시 서버를 별도로 띄우고, Vercel 환경 변수 `NOTEBOOKLM_PROXY_URL`에 이 서버 주소를 넣으면 됩니다.

## 왜 프록시가 필요한가

- Google은 **NotebookLM 채팅용 공식 REST API**를 제공하지 않습니다.
- [notebooklm-kit](https://github.com/photon-hq/notebooklm-kit)(photon-hq)은 **비공식 SDK**로, Google 계정 인증 후 NotebookLM과 채팅할 수 있습니다.
- notebooklm-kit은 Playwright(브라우저) 의존이 있어 **Vercel 서버리스에서는 실행할 수 없습니다.**  
  그래서 **항상 켜져 있는 작은 서버**를 하나 두고, 그 서버가 NotebookLM 채팅을 대신 호출해 주는 방식(프록시)이 필요합니다.

## 사전 준비

1. **NotebookLM 노트북 하나 만들기**  
   - [NotebookLM](https://notebooklm.google.com) 에서 로그인 후 새 노트북 생성.
   - 상담에 참고할 소스(문서, 링크 등)를 해당 노트북에 추가해 두세요.
   - 노트북 URL에서 **노트북 ID** 확인:  
     `https://notebooklm.google.com/notebook/여기가_NOTEBOOK_ID`

2. **인증 값 얻기** (브라우저에서 한 번만)  
   - NotebookLM 웹에 로그인한 뒤 개발자 도구(F12) 사용.
   - **Auth Token**: Console에서 `window.WIZ_global_data.SNlM0e` 실행 후 나온 값 복사.
   - **Cookies**: Network 탭 → 아무 요청 선택 → Request Headers → `Cookie` 값 전체 복사.

## 로컬 실행

```bash
cd notebooklm-proxy
npm install
```

`.env` 파일 생성:

```env
NOTEBOOKLM_NOTEBOOK_ID=여기에_노트북_ID
NOTEBOOKLM_AUTH_TOKEN=여기에_복사한_토큰
NOTEBOOKLM_COOKIES=여기에_복사한_Cookie_문자열
PORT=3001
```

실행:

```bash
npm start
```

테스트:

```bash
curl -X POST http://localhost:3001/chat -H "Content-Type: application/json" -d '{"message":"아이가 잠을 안 자요"}'
```

응답에 `{"reply":"..."}` 형태로 NotebookLM 답변이 오면 성공입니다.

## 배포 (Railway / Render 등)

1. 이 `notebooklm-proxy` 폴더를 별도 저장소로 두거나, 메인 저장소의 서브폴더로 두고 해당 경로만 배포합니다.
2. Railway 또는 Render에서 **Node 프로젝트**로 배포하고, `npm start`(또는 `node server.js`)를 실행하도록 설정합니다.
3. 환경 변수에 `NOTEBOOKLM_NOTEBOOK_ID`, `NOTEBOOKLM_AUTH_TOKEN`, `NOTEBOOKLM_COOKIES`를 설정합니다.
4. 배포 후 나온 URL(예: `https://xxx.railway.app`)을 복사합니다.

## Vercel에 연결

1. Vercel 대시보드 → 아이 여행 프로젝트(web-obutmwll6) → **Settings** → **Environment Variables**
2. **NOTEBOOKLM_PROXY_URL** 추가  
   - 값: 위에서 배포한 프록시 URL + `/chat`  
   - 예: `https://xxx.railway.app/chat`
3. 저장 후 재배포.

이후 상담 메시지는 **먼저 NotebookLM 프록시**로 보내지고, 프록시가 실패할 때만 Gemini로 폴백됩니다.  
NotebookLM만 쓰고 싶다면 **GEMINI_API_KEY**를 비워 두고 **NOTEBOOKLM_PROXY_URL**만 설정하면 됩니다.

## 주의

- `NOTEBOOKLM_AUTH_TOKEN`과 `NOTEBOOKLM_COOKIES`는 만료될 수 있습니다. 만료되면 다시 브라우저에서 복사해 환경 변수를 갱신해야 합니다.
- notebooklm-kit과 Playwright는 Google이 NotebookLM 웹을 바꾸면 동작이 깨질 수 있습니다. 이 경우 [notebooklm-kit](https://github.com/photon-hq/notebooklm-kit) 이슈/업데이트를 확인하세요.
