# 상담 기능 — NotebookLM 무조건 사용하기

NotebookLM에는 **채팅용 공식 API가 없습니다.** 그래서 상담에서 NotebookLM을 **무조건** 쓰려면 아래처럼 **비공식 SDK + 프록시 서버**를 조합해야 합니다.

---

## 1. 정리

| 구분 | 내용 |
|------|------|
| **공식** | Google은 NotebookLM 채팅 REST API를 제공하지 않음. (포럼 답변: "There is no public API for NotebookLM.") |
| **NotebookLM Enterprise** | 노트북 생성/조회/소스/오디오 등만 문서화되어 있고, **채팅 전용 REST 엔드포인트는 없음**. |
| **가능한 방법** | [notebooklm-kit](https://github.com/photon-hq/notebooklm-kit)(photon-hq) 비공식 SDK로 NotebookLM과 채팅 가능. 단, Playwright 의존이라 **Vercel 서버리스에서는 실행 불가** → **별도 프록시 서버** 필요. |

---

## 1-1. 채팅 말고 쓸 수 있는 공식 API가 있을까?

**결론: 질문→답변·요약·채팅 같은 “생성” 기능은 공식 REST API로 제공되지 않습니다.**

NotebookLM Enterprise 공식 문서([Gemini Enterprise REST Reference](https://cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.notebooks)) 기준으로 **실제로 쓸 수 있는 API**는 아래뿐입니다.

| 용도 | 공식 API | 비고 |
|------|----------|------|
| 노트북 생성/조회/목록/삭제/공유 | ✅ `notebooks.create`, `get`, `listRecentlyViewed`, `batchDelete`, `share` | 사용 가능 |
| 소스 추가/삭제 | ✅ `notebooks.sources` | 사용 가능 |
| 오디오 오버뷰 생성 | ✅ `notebooks.audioOverviews.create` | 사용 가능 |
| **질문 보내고 텍스트 답변 받기** | ❌ 없음 | 채팅/QA 전용 REST 엔드포인트 없음 |
| **요약·FAQ·스터디 가이드 등 아티팩트 생성** | ❌ 없음 | 제품 기능으로만 존재, REST 미제공 |

즉, **채팅이 아니어도** “문서 기반으로 질문하면 답 생성” 또는 “요약/FAQ 생성”을 **REST API로** 하고 싶다면, 현재 Google이 공개한 API만으로는 불가능합니다.  
그런 흐름을 쓰려면 **notebooklm-kit + 프록시** 방식(채팅용과 동일)이 유일한 선택지입니다.

---

## 2. 동작 방식

1. **프론트** → 상담 메시지 전송 시 기존처럼 `CONSULTATION_API_URL`(Vercel)로 `message` / `history` / `context` 전송.
2. **Vercel `api/consultation.js`**  
   - 환경 변수 **NOTEBOOKLM_PROXY_URL**이 있으면 → **먼저** 해당 URL로 POST.  
   - 200 + `reply` 있으면 → 그대로 반환.  
   - 실패하거나 `reply` 없으면 → **GEMINI_API_KEY**로 Gemini 호출(폴백).
3. **NotebookLM만 쓰고 싶을 때**  
   - **NOTEBOOKLM_PROXY_URL**만 설정하고, **GEMINI_API_KEY**는 비워 두면, 상담은 전부 NotebookLM 프록시로만 처리됨.

---

## 3. NotebookLM 프록시 서버 준비

프록시는 **이 저장소의 `notebooklm-proxy`** 를 사용합니다.

1. **NotebookLM에서 노트북 만들기**  
   - [NotebookLM](https://notebooklm.google.com) 로그인 → 새 노트북 생성.  
   - 상담에 쓸 소스(가이드 문서, 링크 등) 추가.  
   - 노트북 URL에서 **노트북 ID** 확인:  
     `https://notebooklm.google.com/notebook/여기가_NOTEBOOK_ID`

2. **인증 값 복사** (브라우저 한 번)  
   - 개발자 도구(F12) → Console: `window.WIZ_global_data.SNlM0e` → 나온 값이 **Auth Token**.  
   - Network 탭 → 아무 요청 → Request Headers의 **Cookie** 전체 복사.

3. **프록시 서버 실행**  
   - `notebooklm-proxy/` 폴더에서 `npm install` → `.env`에  
     `NOTEBOOKLM_NOTEBOOK_ID`, `NOTEBOOKLM_AUTH_TOKEN`, `NOTEBOOKLM_COOKIES` 설정.  
   - `npm start`로 로컬 실행 후,  
     `curl -X POST http://localhost:3001/chat -H "Content-Type: application/json" -d '{"message":"테스트"}'`  
     로 `{"reply":"..."}` 가 오는지 확인.

4. **배포**  
   - Railway, Render 등에 `notebooklm-proxy` 배포.  
   - 배포된 URL 예: `https://xxx.railway.app`  
   - 상담 API는 **/chat** 을 호출하므로, 최종 프록시 주소는 `https://xxx.railway.app/chat`.

자세한 단계는 **`notebooklm-proxy/README.md`** 를 보세요.

---

## 4. Vercel 설정 (NotebookLM 무조건 쓰기)

1. Vercel 대시보드 → 해당 프로젝트 → **Settings** → **Environment Variables**.
2. **NOTEBOOKLM_PROXY_URL** 추가.  
   - 값: 프록시 서버 주소 + `/chat`  
   - 예: `https://xxx.railway.app/chat`
3. **NotebookLM만 사용**하려면 **GEMINI_API_KEY**는 비워 두거나 삭제.
4. 저장 후 재배포.

이렇게 하면 상담은 **항상 NotebookLM 프록시**를 통해만 응답하고, 폴백은 사용되지 않습니다.

---

## 5. 요약

- **공식 NotebookLM 채팅 API는 없음** → 비공식 SDK(notebooklm-kit) + **프록시 서버**로 NotebookLM 사용.
- **NOTEBOOKLM_PROXY_URL** 설정 시 상담 API는 **먼저 NotebookLM** 호출, 실패 시에만 Gemini.
- **NotebookLM만** 쓰려면 **NOTEBOOKLM_PROXY_URL**만 두고 **GEMINI_API_KEY** 제거.
