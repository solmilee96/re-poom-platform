/**
 * 변경된 로직 및 일러스트 데이터 참고/백업 파일
 * 실제 사용처: docs/index.html, web/public/gwaenchanayo.html
 * 이 파일은 참고용이며, 앱에서는 HTML 내 인라인 스크립트를 사용합니다.
 */

// ========== 1. 연령 계산 로직 ==========

function getTotalMonths(birthDate) {
  if (!birthDate) return 36;
  const birth = new Date(birthDate);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return years * 12 + months;
}

function getTemperamentQuestionsByAge(totalMonths, TEMPERAMENT_0_12, TEMPERAMENT_12_24, TEMPERAMENT_24_PLUS) {
  if (totalMonths < 12) return TEMPERAMENT_0_12;
  if (totalMonths < 24) return TEMPERAMENT_12_24;
  return TEMPERAMENT_24_PLUS;
}

// ========== 2. 연령대별 문항 세트 구조 (9차원 동일) ==========
// 실제 문항 텍스트·options는 docs/index.html / web/public/gwaenchanayo.html 참고
// 차원 순서: 활동성, 규칙성, 접근성, 적응성, 반응 강도, 기분 상태, 주의 산만성, 지속성, 감각 민감도

const DIMENSION_ORDER = [
  '활동성',
  '규칙성',
  '접근성',
  '적응성',
  '반응 강도',
  '기분 상태',
  '주의 산만성',
  '지속성',
  '감각 민감도',
];

// ========== 3. 결과지 일러스트 (SVG 문자열) ==========

const ILLUST_CHILD = {
  '섬세파':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5" stroke-linecap="round"/><path d="M45 55 Q60 45 75 55 Q60 65 45 55" fill="#fce0db" stroke="#e87a6e" stroke-width="1.5" fill-opacity="0.9"/><circle cx="52" cy="52" r="4" fill="#e87a6e"/><circle cx="68" cy="52" r="4" fill="#e87a6e"/><path d="M35 75 Q60 85 85 75" stroke="#e87a6e" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  '에너자이저':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5"/><path d="M60 25 L65 50 L90 50 L70 65 L75 90 L60 75 L45 90 L50 65 L30 50 L55 50 Z" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1.5"/><circle cx="48" cy="52" r="5" fill="#e87a6e"/><circle cx="72" cy="52" r="5" fill="#e87a6e"/><path d="M42 72 Q60 82 78 72" stroke="#e87a6e" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  '신중파':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#eefaf7" stroke="#a8e6d5" stroke-width="2.5"/><circle cx="60" cy="58" r="22" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1.5"/><circle cx="52" cy="54" r="3" fill="#4db5a2"/><circle cx="68" cy="54" r="3" fill="#4db5a2"/><path d="M50 68 Q60 62 70 68" stroke="#4db5a2" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M60 82 L60 72 M55 78 L65 78" stroke="#4db5a2" stroke-width="1.5" stroke-linecap="round"/></svg>',
  '탐험가':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fefce8" stroke="#fdf4d8" stroke-width="2.5"/><path d="M60 35 L68 55 L90 55 L72 68 L78 90 L60 78 L42 90 L48 68 L30 55 L52 55 Z" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1.5"/><ellipse cx="60" cy="88" rx="18" ry="8" fill="#f5b5a8" stroke="#e87a6e" stroke-width="1"/><circle cx="55" cy="52" r="3" fill="#d4a84d"/><circle cx="65" cy="52" r="3" fill="#d4a84d"/></svg>',
  '순둥이':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#eefaf7" stroke="#a8e6d5" stroke-width="2.5"/><circle cx="60" cy="58" r="26" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1.5"/><circle cx="50" cy="52" r="4" fill="#4db5a2"/><circle cx="70" cy="52" r="4" fill="#4db5a2"/><path d="M42 68 Q60 78 78 68" stroke="#4db5a2" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="60" cy="92" r="12" fill="#fef6f5" stroke="#f5b5a8" stroke-width="1"/></svg>',
  '밸런서':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5"/><path d="M35 70 L60 45 L85 70 L60 55 Z" fill="#fce0db" stroke="#e87a6e" stroke-width="1.5"/><circle cx="45" cy="75" r="8" fill="#a8e6d5" stroke="#4db5a2" stroke-width="1"/><circle cx="75" cy="75" r="8" fill="#a8e6d5" stroke="#4db5a2" stroke-width="1"/><circle cx="54" cy="52" r="3" fill="#e87a6e"/><circle cx="66" cy="52" r="3" fill="#e87a6e"/></svg>',
  '혼합형':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fefce8" stroke="#fdf4d8" stroke-width="2.5"/><circle cx="45" cy="50" r="14" fill="#fce0db" stroke="#f5b5a8" stroke-width="1"/><circle cx="75" cy="50" r="14" fill="#d8f5ee" stroke="#a8e6d5" stroke-width="1"/><circle cx="60" cy="75" r="14" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1"/><path d="M52 58 Q60 52 68 58" stroke="#e87a6e" stroke-width="1" fill="none"/><path d="M52 72 Q60 68 68 72" stroke="#4db5a2" stroke-width="1" fill="none"/></svg>',
};

const ILLUST_PARENT = {
  '회복이 필요한 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#eefaf7" stroke="#a8e6d5" stroke-width="2.5"/><circle cx="60" cy="48" r="18" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1"/><path d="M40 85 Q60 72 80 85" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1"/><circle cx="52" cy="45" r="2" fill="#4db5a2"/><circle cx="68" cy="45" r="2" fill="#4db5a2"/><path d="M55 58 Q60 54 65 58" stroke="#4db5a2" stroke-width="1" fill="none"/><circle cx="60" cy="95" r="10" fill="#fce0db" stroke="#f5b5a8" stroke-width="1"/></svg>',
  '계획형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5"/><rect x="42" y="38" width="36" height="44" rx="4" fill="#fce0db" stroke="#e87a6e" stroke-width="1.5"/><path d="M48 44 L48 52 M54 44 L54 52 M60 44 L60 52" stroke="#e87a6e" stroke-width="1.5" stroke-linecap="round"/><circle cx="60" cy="58" r="3" fill="#e87a6e"/><path d="M52 72 L68 72 M52 78 L64 78" stroke="#e87a6e" stroke-width="1" stroke-linecap="round"/></svg>',
  '공감형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5"/><path d="M60 42 C45 42 38 58 38 68 C38 82 50 92 60 92 C70 92 82 82 82 68 C82 58 75 42 60 42 Z" fill="#fce0db" stroke="#e87a6e" stroke-width="1.5"/><circle cx="52" cy="62" r="4" fill="#e87a6e"/><circle cx="68" cy="62" r="4" fill="#e87a6e"/><path d="M48 78 Q60 86 72 78" stroke="#e87a6e" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="60" cy="98" r="8" fill="#d8f5ee" stroke="#a8e6d5" stroke-width="1"/></svg>',
  '여유형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#eefaf7" stroke="#a8e6d5" stroke-width="2.5"/><path d="M40 70 Q60 50 80 70 Q60 58 40 70" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1.5"/><circle cx="52" cy="58" r="3" fill="#4db5a2"/><circle cx="68" cy="58" r="3" fill="#4db5a2"/><path d="M48 72 Q60 68 72 72" stroke="#4db5a2" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M35 85 Q60 75 85 85" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1"/></svg>',
  '페이스형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fefce8" stroke="#fdf4d8" stroke-width="2.5"/><circle cx="60" cy="52" r="20" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1"/><circle cx="54" cy="48" r="2.5" fill="#d4a84d"/><circle cx="66" cy="48" r="2.5" fill="#d4a84d"/><path d="M52 58 Q60 54 68 58" stroke="#d4a84d" stroke-width="1" fill="none"/><path d="M60 88 L60 75 M50 82 L70 82" stroke="#d4a84d" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="60" cy="98" rx="14" ry="6" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1"/></svg>',
  '혼합형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#fef6f5" stroke="#f5b5a8" stroke-width="2.5"/><circle cx="50" cy="52" r="12" fill="#fce0db" stroke="#e87a6e" stroke-width="1"/><circle cx="70" cy="52" r="12" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1"/><circle cx="60" cy="72" r="12" fill="#fdf4d8" stroke="#d4a84d" stroke-width="1"/><path d="M56 56 Q60 52 64 56" stroke="#e87a6e" stroke-width="0.8" fill="none"/><path d="M56 68 Q60 64 64 68" stroke="#4db5a2" stroke-width="0.8" fill="none"/></svg>',
  '균형형 엄마':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="report-illust"><circle cx="60" cy="60" r="52" fill="#eefaf7" stroke="#a8e6d5" stroke-width="2.5"/><path d="M38 72 L60 42 L82 72 L60 58 Z" fill="#d8f5ee" stroke="#4db5a2" stroke-width="1.5"/><circle cx="48" cy="72" r="6" fill="#fce0db" stroke="#f5b5a8" stroke-width="1"/><circle cx="72" cy="72" r="6" fill="#fce0db" stroke="#f5b5a8" stroke-width="1"/><circle cx="58" cy="48" r="3" fill="#4db5a2"/><circle cx="62" cy="48" r="3" fill="#4db5a2"/></svg>',
};

// Node/브라우저 공통 참고용 export (환경에 따라 무시될 수 있음)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getTotalMonths, getTemperamentQuestionsByAge, DIMENSION_ORDER, ILLUST_CHILD, ILLUST_PARENT };
}
