# 상담 기능 — NotebookLM 스타일 연동 (Gemini API)

## NotebookLM 공개 API 현황

**NotebookLM에는 채팅용 공개 API가 없습니다.**  
Google AI 개발자 포럼과 문서 기준으로, NotebookLM은 웹 UI 전용이며 "Send message → Get answer" 형태의 공식 API는 제공되지 않습니다.

- [How to Access NotebookLM Via API?](https://discuss.ai.google.dev/t/how-to-access-notebooklm-via-api/5084) — Google 측 답변: "There is no public API for NotebookLM."
- NotebookLM Enterprise API는 **노트북 생성/조회/삭제** 등 관리용이며, **채팅 메시지 송수신** 엔드포인트는 포함되지 않습니다.

**NotebookLM을 무조건 쓰고 싶다면** → 비공식 SDK + 프록시 서버가 필요합니다. **`docs/NOTEBOOKLM_연동_가이드.md`** 와 **`notebooklm-proxy/`** 를 참고하세요. 아래는 **NotebookLM 미사용 시** 또는 **폴백**으로 쓰는 Gemini 연동입니다.

---

## 구현 방식: Gemini API로 문서 기반 상담 (폴백)

1. **백엔드**  
   - Vercel 서버리스 함수: `api/consultation.js` (및 `web/api/consultation.js`)
   - **시스템 지시문(system instruction)** 에 상담 도우미 역할 + 아이 여행 가이드 원칙을 넣고,  
     **요청 시** 아이 이름·나이·기질 유형·양육자 유형을 `context`로 넘겨 **맥락을 반영**한 답변을 생성합니다.
   - 모델: **Gemini 1.5 Flash** (`gemini-1.5-flash`), REST API로 호출.

2. **프론트엔드**  
   - 추가 상담 채팅에서 메시지 전송 시:
     - `CONSULTATION_API_URL` (`/api/consultation`) 로 `message`, `history`, `context`를 POST.
     - 응답이 정상이고 `reply`가 있으면 그대로 표시.
     - **실패 또는 `reply` 없음**이면 기존 규칙 기반 `generateResponse()` 결과를 사용(폴백).

3. **환경 변수**  
   - Vercel 프로젝트에 **`GEMINI_API_KEY`** 설정 필요.  
   - [Google AI Studio](https://aistudio.google.com/apikey)에서 API 키 발급 후, Vercel 대시보드 → 프로젝트 → Settings → Environment Variables에 추가하세요.

---

## 설정 요약

| 항목 | 내용 |
|------|------|
| **API 경로** | `https://web-obutmwll6-solmilee96s-projects.vercel.app/api/consultation` (프로덕션 기준) |
| **환경 변수** | `GEMINI_API_KEY` (Vercel에 설정) |
| **요청 본문** | `{ message: string, history?: { role, content }[], context?: { name, age, temperamentType, parentType } }` |
| **응답** | `{ reply: string }` |
| **폴백** | API 실패 시 기존 규칙 기반 상담 로직 사용 |

---

## 나중에 NotebookLM API가 열리면

NotebookLM에 공식 채팅 API가 제공되면,  
`api/consultation.js`에서 **Gemini 호출 부분만** NotebookLM 엔드포인트로 교체하고,  
동일한 `message` / `history` / `context`를 NotebookLM 형식에 맞게 보내도록 수정하면 됩니다.  
프론트엔드는 `CONSULTATION_API_URL`만 그대로 두면 됩니다.
