# 변경된 로직 및 일러스트 정리

이 문서는 **연령대별 기질 문항 로직(방안 A)** 과 **결과지 일러스트** 적용 내용을 정리한 참고 문서입니다.

---

## 1. 연령대별 기질 문항 로직

### 1.1 개요

- **방안 A**: 생년월일 기준 만 나이(개월)에 따라 서로 다른 문항 세트를 사용합니다.
- **연령 구간**:
  - **0~11개월**: `TEMPERAMENT_0_12` (영아 관찰 가능 문항)
  - **12~23개월**: `TEMPERAMENT_12_24` (걸음마기 문항)
  - **24개월 이상**: `TEMPERAMENT_24_PLUS` (기존 문항)
- 모든 세트는 **동일 9개 차원**을 같은 순서로 유지합니다.  
  (활동성 → 규칙성 → 접근성 → 적응성 → 반응 강도 → 기분 상태 → 주의 산만성 → 지속성 → 감각 민감도)

### 1.2 사용 함수

```javascript
// 생년월일 문자열 → 만 나이(개월 수). 없으면 36 반환(24+ 세트 사용)
const getTotalMonths = (birthDate) => {
  if (!birthDate) return 36;
  const birth = new Date(birthDate);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  if (months < 0) { years--; months += 12; }
  return years * 12 + months;
};

// 표시용 나이 문자열 (예: "3개월", "2살 3개월")
const getChildAge = () => {
  if (!childInfo.birthDate) return '';
  const totalMonths = getTotalMonths(childInfo.birthDate);
  if (totalMonths < 12) return `${totalMonths}개월`;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (totalMonths < 36) return months === 0 ? `${years}살` : `${years}살 ${months}개월`;
  return `${years}살`;
};

// 개월 수에 따라 사용할 문항 세트 반환
const getTemperamentQuestionsByAge = (totalMonths) => {
  if (totalMonths < 12) return TEMPERAMENT_0_12;
  if (totalMonths < 24) return TEMPERAMENT_12_24;
  return TEMPERAMENT_24_PLUS;
};

// 컴포넌트 내 사용 예
const totalMonths = getTotalMonths(childInfo.birthDate || '');
const temperamentQuestions = getTemperamentQuestionsByAge(totalMonths);
```

### 1.3 문항 세트 요약

| 구간        | 상수명              | 특징 |
|------------|---------------------|------|
| 0~11개월   | `TEMPERAMENT_0_12`  | 수유·수면·낯가림·이유식·울음 강도 등 영아 시기 관찰 가능한 행동 중심 |
| 12~23개월  | `TEMPERAMENT_12_24` | 기어다니기/걷기·잠/밥 시간·낯선 사람·계획 변경 등 걸음마 시기 맞춤 |
| 24개월+    | `TEMPERAMENT_24_PLUS` | "집에서 놀 때" 등 기존 9문항 유지 |

각 세트의 **전체 문항 내용**(dimension, question, description, options)은  
`docs/index.html` 또는 `web/public/gwaenchanayo.html` 내부의  
`TEMPERAMENT_0_12`, `TEMPERAMENT_12_24`, `TEMPERAMENT_24_PLUS` 배열을 참고하세요.

---

## 2. 결과지 일러스트

### 2.1 개요

- **스타일**: 부드러운 파스텔 톤의 SVG (색연필 느낌).
- **적용 위치**: 결과지(step === 'report')에서  
  - **아이 기질 유형** 카드 상단  
  - **양육자 유형** 카드 상단  
- **CSS**: `.report-illust` — max-width 7rem(모바일) / 8rem(sm 이상), drop-shadow 적용.

### 2.2 아이 기질 유형별 일러스트 (ILLUST_CHILD)

| 유형   | 키명     | 비고 |
|--------|----------|------|
| 섬세파 | `'섬세파'` | 하트·얼굴, 코랄 계열 |
| 에너자이저 | `'에너자이저'` | 별·밝은 표정, 코랄·옐로우 |
| 신중파 | `'신중파'` | 민트 원형·얼굴 |
| 탐험가 | `'탐험가'` | 별·로켓 느낌, 옐로우·코랄 |
| 순둥이 | `'순둥이'` | 민트 원·미소·하단 원 |
| 밸런서 | `'밸런서'` | 저울(삼각)·코랄·민트 원 |
| 혼합형 | `'혼합형'` | 코랄·민트·옐로우 세 원 겹침 |

기본값(매칭 실패 시): `ILLUST_CHILD['밸런서']`

### 2.3 양육자 유형별 일러스트 (ILLUST_PARENT)

| 유형             | 키명 |
|------------------|------|
| 회복이 필요한 엄마 | `'회복이 필요한 엄마'` |
| 계획형 엄마      | `'계획형 엄마'` (달력/노트형) |
| 공감형 엄마      | `'공감형 엄마'` (하트·아이) |
| 여유형 엄마      | `'여유형 엄마'` (미소·구름형) |
| 페이스형 엄마    | `'페이스형 엄마'` (얼굴·하단 타원) |
| 혼합형 엄마      | `'혼합형 엄마'` (세 원) |
| 균형형 엄마      | `'균형형 엄마'` (삼각·코랄 원) |

기본값(매칭 실패 시): `ILLUST_PARENT['균형형 엄마']`

### 2.4 렌더 예시 (React/JSX)

```jsx
{/* 아이 기질 카드 */}
<div className="mb-3 sm:mb-4 w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center"
  dangerouslySetInnerHTML={{ __html: ILLUST_CHILD[result.temperamentType.type] || ILLUST_CHILD['밸런서'] }} />

{/* 양육자 유형 카드 */}
<div className="mb-3 sm:mb-4 w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center"
  dangerouslySetInnerHTML={{ __html: ILLUST_PARENT[result.parentType.type] || ILLUST_PARENT['균형형 엄마'] }} />
```

---

## 3. 적용 파일 경로

| 내용           | 파일 |
|----------------|------|
| 로직 + 문항 세트 + 일러스트 | `docs/index.html` |
| 로직 + 문항 세트 + 일러스트 | `web/public/gwaenchanayo.html` |
| 일러스트 SVG 데이터 백업 | `reference-logic-and-illustrations.js` (동일 디렉터리) |

실제 동작하는 코드와 데이터는 위 두 HTML 파일을 기준으로 하며,  
`reference-logic-and-illustrations.js`는 백업·참고용입니다.
