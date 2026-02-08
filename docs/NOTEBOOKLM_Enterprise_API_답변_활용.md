# NotebookLM Enterprise API로 답변(요약) 내려주기

상담 채팅이 아니라 **“답변을 내려주는”** 용도로 NotebookLM Enterprise 공식 API를 쓰는 방법을 정리합니다.

---

## 1. API로 할 수 있는 “답변” 형태

| 기능 | API | 우리가 받는 것 |
|------|-----|----------------|
| **노트북 생성** | `notebooks.create` | 노트북 ID, 노트북 URL |
| **소스 추가** | `sources.batchCreate` / `uploadFile` | 소스 ID (가이드 문서·URL·텍스트 등) |
| **AI 오디오 오버뷰 생성** | `notebooks.audioOverviews.create` | 생성 작업 시작 → 몇 분 후 노트북 스튜디오에서 “로드”로 청취·다운로드 |

- **채팅(질문→텍스트 답변)** 은 여전히 공식 API에 없습니다.
- **“답변”으로 쓸 수 있는 건**  
  - **노트북 링크** (사용자가 브라우저에서 직접 채팅)  
  - **AI 오디오 오버뷰** (소스 기반 요약 음성·팟캐스트 형태)  
  두 가지입니다.

---

## 2. 추천 플로우: API로 노트북 + 소스 + 오디오 오버뷰까지

1. **노트북 생성**  
   - `POST .../notebooks`  
   - [노트북 만들기 및 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks?hl=ko#get-notebook)

2. **소스 추가**  
   - 가이드 문서(텍스트/URL/PDF 등)를 `sources.batchCreate` 또는 `uploadFile`로 추가  
   - [노트북에서 데이터 소스 추가 및 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks-sources?hl=ko)

3. **(선택) AI 오디오 오버뷰 생성**  
   - `POST .../notebooks/NOTEBOOK_ID/audioOverviews`  
   - Body: `sourceIds`(선택), `episodeFocus`(예: "아이 여행 준비 요약"), `languageCode`(예: "ko")  
   - [노트북의 AI 오디오 오버뷰 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-audio-overview?hl=ko)  
   - 생성에는 몇 분 걸리며, 완료 후 **노트북 → 스튜디오 → 로드**에서 재생·다운로드 가능.

4. **사용자에게 “답변” 전달**  
   - **노트북 URL** 전달:  
     `https://notebooklm.cloud.google.com/LOCATION/notebook/NOTEBOOK_ID?project=PROJECT_NUMBER`  
   - **오디오 오버뷰**를 썼다면:  
     “몇 분 후 위 노트북에서 **스튜디오 → 로드**를 누르면 AI 요약 음성을 들을 수 있습니다.” 안내.

---

## 3. 필요한 준비

- **NotebookLM Enterprise** 설정 및 라이선스  
  - [NotebookLM Enterprise 설정](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/set-up?hl=ko)  
  - [NotebookLM Enterprise 라이선스 받기](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/licensing?hl=ko)
- **Google Cloud 프로젝트** (프로젝트 번호, 위치)
- **인증**  
  - 로컬/서버: `gcloud auth application-default login` 또는 서비스 계정 키  
  - API 호출 시: `Authorization: Bearer $(gcloud auth print-access-token)` 또는 액세스 토큰

---

## 4. 상담 앱에 붙이는 방법

- **텍스트 Q&A가 꼭 필요할 때**  
  - Enterprise API만으로는 “질문 → 텍스트 답변” 불가 → 기존처럼 **Gemini API** 또는 **NotebookLM 프록시**로 상담 메시지에 대한 답변 생성.

- **Enterprise API를 “답변 내려주기”에 쓰는 경우**  
  - **시나리오 A**: 상담 시작 시 또는 특정 액션 시  
    - API로 노트북 생성 → 가이드 소스 추가 → (선택) 오디오 오버뷰 생성  
    - 응답으로 **노트북 URL** + (오디오 사용 시) “스튜디오에서 로드” 안내를 내려줌.  
  - **시나리오 B**: 관리자/백오피스에서 주기적으로  
    - 노트북 생성 + 소스 + 오디오 오버뷰까지 자동화  
    - 사용자에게는 “요약 음성 준비됐어요” + 노트북 링크만 내려줌.

---

## 5. 앱에서 쓰는 방법 (구현됨)

- **API**: `POST /api/notebooklm-prepare`  
  - 노트북 생성 → "아이 여행 가이드" 텍스트 소스 추가 → **노트북 URL** 반환.
- **화면**: 메인 대시보드(홈)에 **"NotebookLM으로 가이드 노트북 만들기"** 링크가 있습니다.  
  - 클릭 시 위 API를 호출하고, 성공하면 노트북 링크를 새 탭으로 엽니다.  
  - 설정이 안 되어 있으면 "NotebookLM Enterprise가 설정되지 않았습니다" 메시지가 나옵니다.

---

## 6. Vercel 환경 변수 (설정 시에만 동작)

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `NOTEBOOKLM_GCP_PROJECT_NUMBER` | Google Cloud **프로젝트 번호** (숫자) | `123456789012` |
| `NOTEBOOKLM_GCP_LOCATION` | 데이터 스토어 위치 (선택, 기본값 `global`) | `global` |
| `NOTEBOOKLM_GCP_ENDPOINT` | API 리전 (선택, 기본값 `us`) | `us` 또는 `eu` |
| `NOTEBOOKLM_GCP_CREDENTIALS_JSON` | **서비스 계정 키 전체 JSON** (한 줄 문자열) | `{"type":"service_account", ...}` |

- **서비스 계정**: Google Cloud 콘솔에서 서비스 계정을 만들고, **Discovery Engine API** 사용 권한(또는 NotebookLM Enterprise 문서에 안내된 역할)을 부여한 뒤, **키(JSON)** 를 다운로드합니다.  
- **Vercel**: 프로젝트 → Settings → Environment Variables에서 위 변수들을 추가합니다. `NOTEBOOKLM_GCP_CREDENTIALS_JSON`에는 JSON 전체를 **한 줄로** 붙여 넣거나, 여러 줄이면 이스케이프해서 넣습니다.  
- 설정하지 않으면 "가이드 노트북 만들기"를 눌러도 동작하지 않고, 안내 메시지만 표시됩니다.

---

## 7. 참고 문서

- [노트북 만들기 및 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks?hl=ko#get-notebook)
- [노트북에서 데이터 소스 추가 및 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks-sources?hl=ko)
- [노트북의 AI 오디오 오버뷰 관리 (API)](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-audio-overview?hl=ko)
