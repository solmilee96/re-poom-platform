# 채팅 개선: 이전 대화·누적 데이터 참조 (NotebookLM 스타일)

NotebookLM처럼 **이전 대화**와 **누적된 데이터**를 참조해 답변하도록 채팅을 개선하는 방법을 정리합니다.  
NotebookLM 공식 채팅 API가 없으므로, **우회**하거나 **대체 API**로 같은 효과를 내는 방식입니다.

---

## 1. 목표

- **이전 대화 참조**: 직전뿐 아니라 여러 턴의 대화 맥락을 반영한 답변
- **누적 데이터 참조**: 같은 아이에 대한 과거 상담 주제·횟수 등을 반영 (예: "지난번에 떼쓰기 이야기했었죠")

---

## 2. 현재 구조 (참고)

| 구분 | 내용 |
|------|------|
| **이전 대화** | 프론트에서 `history`(최근 10개)를 API에 전달. 로컬 스토리지에 전체 대화 저장. |
| **맥락** | `context`: 이름, 나이, 기질 유형, 양육자 유형만 전달. |
| **누적 요약** | `consultationSummary`(주제별 횟수, 최근 주제 목록)는 **API에 미전달**. |

즉, “누적된 데이터”는 프론트에만 있고, 상담 API는 그걸 모릅니다.

---

## 3. 대안 정리 (우회·대체)

### 방안 A: **추천 — 기존 API만 개선 (Gemini/프록시 그대로)**

- **방식**:  
  - 프론트에서 `context`에 **누적 요약**(`consultationSummary`: topicCounts, lastTopics, messageCount)을 함께 보냄.  
  - 백엔드 `buildSystemInstruction`에서 이걸 시스템 지시문에 넣어, “이 아이와 지금까지 어떤 주제를 몇 번 이야기했는지”를 모델에 전달.
- **이전 대화**: 이미 `history`로 최근 10개 전달 중. 필요 시 20~30개로 늘리거나, 토큰 한도 내에서 조절.
- **장점**: 새 API·인프라 없음. NotebookLM 프록시를 쓸 때도 같은 `context`를 넘기면, 프록시가 활용할 수 있으면 이점 있음. **Gemini 폴백**에는 즉시 반영됨.
- **구현**: 아래 “4. 적용한 개선” 참고.

---

### 방안 B: **서버에 대화·요약 저장 (세션/아이별)**

- **방식**:  
  - 세션 ID 또는 아이 ID(childId) 기준으로 서버(Vercel KV, Supabase, DB)에 대화 이력·요약 저장.  
  - 다음 요청 시 서버에서 해당 이력·요약을 불러와 API 호출 시 `history`/`context`에 포함.
- **효과**: 새 기기·브라우저에서 접속해도 “이전 대화·누적 데이터” 참조 가능.
- **비용**: 저장소 구성 필요. Vercel KV, Supabase 등 선택.

---

### 방안 C: **Vertex AI RAG / Grounding (Google Cloud)**

- **방식**:  
  - GCP에서 Vertex AI RAG Engine 또는 “Ground with your data”로 **문서 코퍼스** 구성.  
  - 상담 시 해당 데이터에 기반해 답변 생성(grounding).
- **적합한 경우**: 운영진이 만든 가이드 문서·FAQ 등 **고정 지식 베이스**를 대량으로 참조하고 싶을 때.
- **단점**: GCP 프로젝트·설정 필요. “이전 대화”는 별도로 history로 넘겨야 함.

---

### 방안 D: **NotebookLM 프록시 유지 + 방안 A**

- **방식**:  
  - 지금처럼 NotebookLM 프록시를 쓰되, **방안 A**를 함께 적용.  
  - API 요청 시 `context`에 `consultationSummary` 포함 → 프록시가 그걸 NotebookLM에 전달할 수 있으면 활용, 안 되면 Gemini 폴백에서 활용.
- **효과**: NotebookLM을 쓸 때도 “누적 데이터”를 최대한 활용하고, 폴백 시에도 동일한 맥락 유지.

---

## 4. 적용한 개선 (방안 A)

- **프론트** (`docs/index.html`):  
  상담 API 호출 시 `context`에 `consultationSummary`(topicCounts, lastTopics, messageCount) 추가.
- **백엔드** (`api/consultation.js`, `web/api/consultation.js`):  
  `buildSystemInstruction(context)`에서 `context.consultationSummary`가 있으면,  
  “이 아이와의 상담 누적: 총 N회, 주제별 횟수(식사/수면/떼쓰기/옷입기/또래/기타), 최근 주제 목록”을 시스템 지시문에 붙임.

이렇게 하면 **NotebookLM 공식 API 없이** “이전 대화(history) + 누적 데이터(consultationSummary)”를 참조하는 채팅이 가능합니다.

---

## 5. 요약

| 목표 | 권장 방법 |
|------|-----------|
| 이전 대화 참조 | 현재처럼 `history` 전달 유지. 필요 시 개수 확대(예: 20~30). |
| 누적 데이터 참조 | **방안 A**: `context.consultationSummary` 전달 + 시스템 지시문에 반영 (구현함). |
| 기기/브라우저 넘어서 유지 | **방안 B**: 서버 저장(Vercel KV 등). |
| 고정 지식 베이스 대량 참조 | **방안 C**: Vertex AI RAG/Grounding 검토. |
| NotebookLM 계속 사용 | **방안 D**: 프록시 유지 + 방안 A. |

**우회·대체**: NotebookLM 채팅 API는 없으므로, **Gemini API**(+ 선택적으로 프록시)에 **history + context(누적 요약)** 를 잘 넘기는 방식이 실질적인 대체 수단입니다.
