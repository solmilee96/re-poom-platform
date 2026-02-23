/**
 * 기질별 × 연령대별 통합 가이드 데이터
 *
 * 원칙: 발달 정보는 "배경 맥락"으로만 사용하고, 기질이 "주인공"
 * 패턴: "이 시기 아이들은 ~인데, [기질유형]인 아이는 ~"
 *
 * 구조:
 *   TEMPERAMENT_AGE_GUIDE[기질유형][연령구간].domains[영역]
 *   TEMPERAMENT_AGE_GUIDE[기질유형][연령구간].dailyConcerns[주제]
 *
 * ─── 참고 문헌 및 근거 수준 ───
 *
 * [발달 이정표 — general 필드]
 *   - CDC "Learn the Signs. Act Early." (2024)
 *   - WHO Motor Development Study (2006)
 *   - AAP Bright Futures Guidelines, 4th ed.
 *   → 근거 수준: 높음 (표준 발달 가이드라인 기반)
 *
 * [기질 이론 — 유형 분류 기반]
 *   - Thomas, A. & Chess, S. (1977). Temperament and Development.
 *   - Aron, E. (1996). The Highly Sensitive Person.
 *   - Kagan, J. (1994). Galen's Prophecy: Temperament in Human Nature.
 *   → 근거 수준: 높음 (확립된 기질 이론)
 *
 * [기질 × 발달 상호작용 — withThisTemperament, reframe 필드]
 *   - 위 기질 이론의 원리를 발달 단계에 합리적으로 적용한 내용
 *   - 개별 서술이 특정 논문에 의해 실증된 것은 아님
 *   → 근거 수준: 중간 (이론 기반 합리적 추론, 전문가 감수 권장)
 *
 * [양육 팁 — parentTip 필드]
 *   - Gottman, J. (1997). Raising an Emotionally Intelligent Child.
 *   - Satter, E. (1987). How to Get Your Kid to Eat… But Not Too Much.
 *   - 일반적 육아 상담 관행 기반
 *   → 근거 수준: 중간~높음 (확립된 양육 원칙 기반, 기질 특화 적용은 추론)
 *
 * ─── 면책 ───
 * 이 데이터는 기질 이론과 발달심리학을 참고한 일반 가이드이며,
 * 모든 아이에게 동일하게 적용되지 않습니다.
 * 발달에 대한 구체적 우려가 있을 경우
 * 소아과 또는 발달 전문가와 상담하시길 권합니다.
 */

const TEMPERAMENT_AGE_GUIDE = {};

/* ============================================================
 * 헬퍼: 연령(개월) → 구간 키 변환
 * ============================================================ */
function getAgeRangeKey(totalMonths) {
  if (totalMonths <= 6) return '0-6';
  if (totalMonths <= 12) return '7-12';
  if (totalMonths <= 18) return '13-18';
  if (totalMonths <= 24) return '19-24';
  return '25-36';
}

function getGuideForChild(temperamentType, totalMonths) {
  const ageKey = getAgeRangeKey(totalMonths);
  const typeData = TEMPERAMENT_AGE_GUIDE[temperamentType];
  if (!typeData) return null;
  return typeData[ageKey] || null;
}

function getBehaviorChoices(temperamentType, totalMonths) {
  const guide = getGuideForChild(temperamentType, totalMonths);
  if (!guide) return [];
  const choices = [];
  if (guide.domains) {
    Object.entries(guide.domains).forEach(function(entry) {
      var key = entry[0], d = entry[1];
      if (d.commonWorry) {
        choices.push({ category: key, type: 'domain', text: d.commonWorry, reframe: d.reframe });
      }
    });
  }
  if (guide.dailyConcerns) {
    Object.entries(guide.dailyConcerns).forEach(function(entry) {
      var key = entry[0], c = entry[1];
      if (c.commonWorry) {
        choices.push({ category: key, type: 'daily', text: c.commonWorry, reframe: c.reframe });
      }
    });
  }
  return choices;
}

function getReportGrowthStory(temperamentType, totalMonths, name) {
  var guide = getGuideForChild(temperamentType, totalMonths);
  if (!guide) return null;
  var n = name || '아이';
  return {
    summary: guide.summary ? guide.summary.replace(/\{name\}/g, n) : '',
    domains: Object.entries(guide.domains || {}).map(function(entry) {
      var key = entry[0], d = entry[1];
      return {
        key: key,
        label: DOMAIN_LABELS[key] || key,
        general: d.general,
        withThisTemperament: d.withThisTemperament ? d.withThisTemperament.replace(/\{name\}/g, n) : '',
        parentTip: d.parentTip,
        commonWorry: d.commonWorry,
        reframe: d.reframe ? d.reframe.replace(/\{name\}/g, n) : ''
      };
    })
  };
}

var DOMAIN_LABELS = {
  grossMotor: '대근육',
  fineMotor: '소근육',
  language: '언어',
  social: '사회성·정서',
  cognitive: '인지'
};

var CONCERN_LABELS = {
  sleep: '수면',
  eating: '식사',
  tantrum: '떼쓰기',
  clothing: '옷입기',
  aggression: '또래·공격'
};

var AGE_COMMON_WORRIES = {
  '0-6': [
    { text: '자꾸 울어요, 달래기가 너무 힘들어요', category: 'tantrum' },
    { text: '수유할 때 잘 안 먹어요 / 양이 적어요', category: 'eating' },
    { text: '잠을 너무 안 자요 / 자주 깨요', category: 'sleep' },
    { text: '안아줘야만 자요, 내려놓으면 바로 울어요', category: 'sleep' },
    { text: '뒤집기를 안 해요 / 목을 잘 못 가눠요', category: 'grossMotor' },
    { text: '또래보다 느린 것 같아서 걱정돼요', category: 'cognitive' }
  ],
  '7-12': [
    { text: '이유식을 거부해요 / 잘 안 먹어요', category: 'eating' },
    { text: '밤에 자주 깨요, 잠투정이 심해요', category: 'sleep' },
    { text: '낯가림이 너무 심해요', category: 'social' },
    { text: '아직 안 기어요 / 안 걸어요', category: 'grossMotor' },
    { text: '잠깐도 떨어지면 울어요 (분리불안)', category: 'separation' },
    { text: '물건을 자꾸 던지고 입에 넣어요', category: 'cognitive' }
  ],
  '13-18': [
    { text: '떼쓰기가 시작됐어요, 안 되면 바로 울어요', category: 'tantrum' },
    { text: '밥을 안 먹어요 / 편식이 시작됐어요', category: 'eating' },
    { text: '말이 느린 것 같아요', category: 'language' },
    { text: '다른 아이를 때리거나 밀어요', category: 'social' },
    { text: '잠투정이 너무 심해요 / 낮잠을 안 자요', category: 'sleep' },
    { text: '어린이집 보내기가 너무 힘들어요', category: 'separation' }
  ],
  '19-24': [
    { text: '떼가 너무 심해요, 바닥에 누워서 울어요', category: 'tantrum' },
    { text: '편식이 심해요, 안 먹는 게 너무 많아요', category: 'eating' },
    { text: '말이 또래보다 느린 것 같아요', category: 'language' },
    { text: '"싫어!"만 하고 말을 안 들어요', category: 'tantrum' },
    { text: '친구를 때리거나 물어요', category: 'social' },
    { text: '잠을 안 자려 해요 / 밤에 자주 깨요', category: 'sleep' }
  ],
  '25-36': [
    { text: '고집이 너무 세고 말을 안 들어요', category: 'tantrum' },
    { text: '밥을 안 먹고 간식만 찾아요', category: 'eating' },
    { text: '또래보다 말이 느린 것 같아요', category: 'language' },
    { text: '친구를 때려서 걱정이에요', category: 'social' },
    { text: '어린이집에서 적응을 못하는 것 같아요', category: 'separation' },
    { text: '잠자기 싫다고 떼써요', category: 'sleep' }
  ]
};

function getAgeCommonWorries(totalMonths) {
  var key = getAgeRangeKey(totalMonths);
  return AGE_COMMON_WORRIES[key] || AGE_COMMON_WORRIES['7-12'];
}

var GUIDE_DISCLAIMER = '이 정보는 기질 이론과 발달심리학을 참고한 일반 가이드이며, 개별 아이에 따라 다를 수 있습니다. 발달에 대한 구체적 우려가 있으시면 소아과 또는 발달 전문가와 상담하시길 권합니다.';
