
    const { useState, useEffect } = React;
    // 아쉬워요 피드백 → Slack (GitHub Pages는 CORS로 직접 웹훅 불가 → API 프록시 사용)
    const FEEDBACK_API_URL = 'https://web-obutmwll6-solmilee96s-projects.vercel.app/api/feedback';

    // Icon components
    const Baby = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
      </svg>
    );
    
    const Heart = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    );
    
    const Sparkles = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
      </svg>
    );
    
    const BookOpen = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    );
    
    const MessageCircle = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
      </svg>
    );
    
    const Send = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
      </svg>
    );
    
    const Download = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
      </svg>
    );
    
    const ArrowRight = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
      </svg>
    );
    const RotateCcw = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
      </svg>
    );

    const Home = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    );

    const User = ({ className, ...props }) => (
      <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    );

    const GwaenchanaYoApp = () => {
      const [step, setStep] = useState('welcome');
      const [childInfo, setChildInfo] = useState({ name: '', birthDate: '' });
      const [childProfile, setChildProfile] = useState({});
      const [parentProfile, setParentProfile] = useState({});
      const [behaviorInput, setBehaviorInput] = useState('');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [chatHistory, setChatHistory] = useState([]);
      const [currentInput, setCurrentInput] = useState('');
      const [isAnalyzing, setIsAnalyzing] = useState(false);
      const [feedbackGiven, setFeedbackGiven] = useState(false);
      const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
      const [feedbackText, setFeedbackText] = useState('');
      const [consultationSummary, setConsultationSummary] = useState({ topicCounts: { eating: 0, sleep: 0, tantrum: 0, clothing: 0, aggression: 0, other: 0 }, lastTopics: [], messageCount: 0, updatedAt: '' });

      const CONSULTATION_KEY = 'gwaenchanayo_consultation_by_child';
      const getChildId = (info) => (info?.name && info?.birthDate) ? `${String(info.name).trim()}_${info.birthDate}` : null;
      const getTopicFromText = (text) => {
        const t = (text || '').trim();
        if (/밥|식사|먹|편식|야채|채소|밥거부/.test(t)) return 'eating';
        if (/잠|수면|취침|잠투정|재우기|루틴|밤|자려고|안\s*자|못\s*자|못자게|재우|잠들|잘\s*안\s*자/.test(t)) return 'sleep';
        if (/떼|울|짱|짜증|감정/.test(t)) return 'tantrum';
        if (/옷|입기|거부|옷입|옷감|태그|입히/.test(t)) return 'clothing';
        if (/때리|공격|밀|싸움|친구.*때/.test(t)) return 'aggression';
        return 'other';
      };
      const getDefaultConsultationSummary = () => ({ topicCounts: { eating: 0, sleep: 0, tantrum: 0, clothing: 0, aggression: 0, other: 0 }, lastTopics: [], messageCount: 0, updatedAt: '' });
      const loadConsultationForChild = (childId) => {
        if (!childId) return getDefaultConsultationSummary();
        try {
          const raw = localStorage.getItem(CONSULTATION_KEY);
          const byChild = raw ? JSON.parse(raw) : {};
          return byChild[childId] || getDefaultConsultationSummary();
        } catch (_) { return getDefaultConsultationSummary(); }
      };
      const saveConsultationForChild = (childId, summary) => {
        if (!childId) return;
        try {
          const raw = localStorage.getItem(CONSULTATION_KEY);
          const byChild = raw ? JSON.parse(raw) : {};
          byChild[childId] = { ...summary, updatedAt: new Date().toISOString() };
          localStorage.setItem(CONSULTATION_KEY, JSON.stringify(byChild));
        } catch (_) {}
      };

      useEffect(() => {
        const saved = localStorage.getItem('gwaenchanayo_data');
        if (saved) {
          const data = JSON.parse(saved);
          setChildInfo(data.childInfo || { name: '', birthDate: '' });
          setChildProfile(data.childProfile || {});
          setParentProfile(data.parentProfile || {});
          setBehaviorInput(data.behaviorInput || '');
          setChatHistory(data.chatHistory || []);
          if (data.childInfo?.name && Object.keys(data.childProfile || {}).length > 0) {
            setStep('chat');
          }
        }
      }, []);

      useEffect(() => {
        const cid = getChildId(childInfo);
        setConsultationSummary(loadConsultationForChild(cid));
      }, [childInfo.name, childInfo.birthDate]);

      const saveToStorage = (updates = {}) => {
        const data = {
          childInfo,
          childProfile,
          parentProfile,
          behaviorInput,
          chatHistory,
          lastUpdated: new Date().toISOString(),
          ...updates
        };
        localStorage.setItem('gwaenchanayo_data', JSON.stringify(data));
      };

      const saveFeedback = (choice, text) => {
        const list = JSON.parse(localStorage.getItem('gwaenchanayo_feedback') || '[]');
        list.push({ choice, text: text || '', timestamp: new Date().toISOString(), childName: childInfo.name });
        localStorage.setItem('gwaenchanayo_feedback', JSON.stringify(list));
      };

      const sendFeedbackToSlack = (choice, text, childName, birthDate, ageDisplay) => {
        const apiUrl = FEEDBACK_API_URL;
        if (!apiUrl) return;
        fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            choice: choice || '좋았어요',
            text: text || '',
            childName: childName || '',
            birthDate: birthDate || '',
            ageDisplay: ageDisplay || '',
          }),
        })
          .then((r) => (r.ok ? r.json() : r.json().then((d) => Promise.reject(new Error(d.error || r.status)))))
          .then(() => {})
          .catch((e) => console.warn('피드백 전송 실패:', e.message));
      };

      const getTotalMonths = (birthDate) => {
        if (!birthDate) return 36;
        const birth = new Date(birthDate);
        const today = new Date();
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        if (months < 0) { years--; months += 12; }
        return years * 12 + months;
      };

      const getChildAge = () => {
        if (!childInfo.birthDate) return '';
        const totalMonths = getTotalMonths(childInfo.birthDate);
        if (totalMonths < 12) return `${totalMonths}개월`;
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        if (totalMonths < 36) return months === 0 ? `${years}살` : `${years}살 ${months}개월`;
        return `${years}살`;
      };

      // 연령대별 기질 문항 (동일 9차원 순서 유지: 활동성·규칙성·접근성·적응성·반응강도·기분·주의산만성·지속성·감각민감도)
      const TEMPERAMENT_0_12 = [
        { dimension: '활동성', question: '깨어 있을 때 {{name}}이(가)\n몸을 움직이는 정도는?', description: '발차기, 뒤집기, 기어다니기 등 신체 활동 수준을 봅니다', options: [
          { text: '한시도 안정적으로 안 있고 계속 움직여요', score: 10, emoji: '🚀' },
          { text: '많이 움직이지만 잠깐씩은 가만히 있어요', score: 7.5, emoji: '🏃' },
          { text: '적당히 움직이다가 쉬었다 해요', score: 5, emoji: '🚶' },
          { text: '조용한 편이고 움직임이 적어요', score: 2.5, emoji: '🧘' },
          { text: '거의 움직이지 않고 한곳에 오래 있어요', score: 1, emoji: '🪷' }
        ]},
        { dimension: '규칙성', question: '수유·수면 시간이\n얼마나 일정한가요?', description: '생후에도 나타나는 생리 리듬의 예측 가능성을 봅니다', options: [
          { text: '매일 비슷한 시간에 먹고 잠들어요', score: 10, emoji: '⏰' },
          { text: '대체로 비슷한데 30분~1시간 차이 나요', score: 7.5, emoji: '📅' },
          { text: '패턴은 있지만 날마다 조금 달라요', score: 5, emoji: '🔄' },
          { text: '매일 달라서 예측이 어려워요', score: 2.5, emoji: '🎲' },
          { text: '거의 랜덤이에요', score: 1, emoji: '❓' }
        ]},
        { dimension: '접근성', question: '낯선 사람이나 새 장소를\n만나면?', description: '새로운 자극에 대한 첫 반응을 봅니다', options: [
          { text: '금방 웃으며 반응해요', score: 10, emoji: '🤗' },
          { text: '잠깐 경계하다가 2~3분 안에 익숙해져요', score: 7.5, emoji: '👋' },
          { text: '5~10분 지켜본 뒤에 편해져요', score: 5, emoji: '👀' },
          { text: '오래 붙어있고 떼면 울어요', score: 2.5, emoji: '😰' },
          { text: '강하게 거부하고 한참 울어요', score: 1, emoji: '😭' }
        ]},
        { dimension: '적응성', question: '이유식, 새 장소, 새로운 냄새/소리 등\n변화가 있으면?', description: '변화에 적응하는 속도를 봅니다', options: [
          { text: '바로 받아들이고 잘 적응해요', score: 10, emoji: '✨' },
          { text: '처음엔 어색해도 금방 익숙해져요', score: 7.5, emoji: '🌟' },
          { text: '조금 불편해하다가 10~20분이면 괜찮아져요', score: 5, emoji: '⏳' },
          { text: '저항하고 30분 넘게 달래야 해요', score: 2.5, emoji: '😣' },
          { text: '몇 시간이 지나도 적응이 어려워요', score: 1, emoji: '💢' }
        ]},
        { dimension: '반응 강도', question: '울거나 웃을 때\n표현이 어느 정도인가요?', description: '감정 표현의 크기를 봅니다', options: [
          { text: '매우 크게 울고 크게 웃어요', score: 10, emoji: '💥' },
          { text: '울음·웃음이 분명하고 크게 나와요', score: 7.5, emoji: '😆' },
          { text: '적당히 표현해요', score: 5, emoji: '😊' },
          { text: '조용히 짜증 내거나 살짝 웃어요', score: 2.5, emoji: '😌' },
          { text: '거의 무표정에 가까워요', score: 1, emoji: '😐' }
        ]},
        { dimension: '기분 상태', question: '평소 {{name}}이(가)\n기분은 어떤가요?', description: '전반적인 기분 경향을 봅니다', options: [
          { text: '거의 항상 밝고 편해 보여요', score: 10, emoji: '😄' },
          { text: '대체로 기분 좋은 편이에요', score: 7.5, emoji: '🙂' },
          { text: '좋을 때와 안 좋을 때가 비슷해요', score: 5, emoji: '😐' },
          { text: '까다로운 편이고 불편해하는 때가 많아요', score: 2.5, emoji: '😟' },
          { text: '자주 칭얼대고 웃는 모습이 적어요', score: 1, emoji: '😢' }
        ]},
        { dimension: '주의 산만성', question: '놀이나 수유 중에\n소리·빛 등에 반응하면?', description: '자극에 따른 주의 전환 정도를 봅니다', options: [
          { text: '작은 소리에도 바로 돌아서요', score: 10, emoji: '🦋' },
          { text: '자주 딴 데로 시선이 가요', score: 7.5, emoji: '👂' },
          { text: '어느 정도 집중하다가 자극에 돌아봐요', score: 5, emoji: '👁️' },
          { text: '꽤 집중해요', score: 2.5, emoji: '🎯' },
          { text: '한 가지에 오래 집중해요', score: 1, emoji: '🔬' }
        ]},
        { dimension: '지속성', question: '한 가지 장난감이나 활동에\n얼마나 오래 관심을 두나요?', description: '한 가지에 대한 지속 정도를 봅니다', options: [
          { text: '한 가지에 오래 집중해요', score: 10, emoji: '💪' },
          { text: '꽤 오래 하다가 다른 걸 찾아요', score: 7.5, emoji: '🔧' },
          { text: '적당히 하다가 바꿔요', score: 5, emoji: '🤔' },
          { text: '금방 싫어하고 다른 걸 원해요', score: 2.5, emoji: '😤' },
          { text: '한두 번 해보고 바로 관심을 잃어요', score: 1, emoji: '🏳️' }
        ]},
        { dimension: '감각 민감도', question: '옷감, 태그, 큰 소리, 밝은 빛 등에\n반응은 어떤가요?', description: '감각 자극에 대한 민감도를 봅니다', options: [
          { text: '매우 예민해요, 시끄러우면 불편해해요', score: 10, emoji: '🔊' },
          { text: '꽤 민감해요, 특정 소리·촉감을 싫어해요', score: 7.5, emoji: '👃' },
          { text: '보통이에요, 가끔만 불편해해요', score: 5, emoji: '👂' },
          { text: '둔감한 편이에요', score: 2.5, emoji: '🤷' },
          { text: '거의 무덤덤해요', score: 1, emoji: '😎' }
        ]}
      ];

      const TEMPERAMENT_12_24 = [
        { dimension: '활동성', question: '{{name}}이(가) 기어다니거나 걸을 때\n움직임이 어느 정도인가요?', description: '신체 활동 수준을 봅니다', options: [
          { text: '한시도 가만히 못 있고 계속 움직여요', score: 10, emoji: '🚀' },
          { text: '활발하지만 잠깐씩은 앉아서 놀아요', score: 7.5, emoji: '🏃' },
          { text: '움직이다가 쉬었다 해요', score: 5, emoji: '🚶' },
          { text: '조용한 놀이를 더 좋아해요', score: 2.5, emoji: '🧘' },
          { text: '한 자리에 오래 있는 편이에요', score: 1, emoji: '🪷' }
        ]},
        { dimension: '규칙성', question: '잠드는 시간, 배고파하는 시간이\n얼마나 일정한가요?', description: '생리 리듬의 예측 가능성을 봅니다', options: [
          { text: '매일 거의 같은 시간이에요', score: 10, emoji: '⏰' },
          { text: '대체로 비슷한데 30분~1시간 차이 나요', score: 7.5, emoji: '📅' },
          { text: '패턴은 있지만 매일 조금 달라요', score: 5, emoji: '🔄' },
          { text: '매일 달라서 예측이 어려워요', score: 2.5, emoji: '🎲' },
          { text: '패턴이 거의 없어요', score: 1, emoji: '❓' }
        ]},
        { dimension: '접근성', question: '낯선 사람이나 새로운 장소를\n만나면?', description: '새 자극에 대한 첫 반응을 봅니다', options: [
          { text: '즉시 다가가서 반가워해요', score: 10, emoji: '🤗' },
          { text: '잠깐 경계하다가 2~3분 안에 다가가요', score: 7.5, emoji: '👋' },
          { text: '5~10분 지켜본 뒤 천천히 탐색해요', score: 5, emoji: '👀' },
          { text: '오래 엄마에게 붙어있고 떼면 울어요', score: 2.5, emoji: '😰' },
          { text: '강하게 거부하고 한참 울어요', score: 1, emoji: '😭' }
        ]},
        { dimension: '적응성', question: '계획이 바뀌거나 새 음식·장소가\n나오면?', description: '변화에 적응하는 속도를 봅니다', options: [
          { text: '바로 받아들이고 잘 적응해요', score: 10, emoji: '✨' },
          { text: '처음 5분은 어색해도 금방 받아들여요', score: 7.5, emoji: '🌟' },
          { text: '조금 불편해하지만 10~20분이면 괜찮아져요', score: 5, emoji: '⏳' },
          { text: '저항하고 30분 넘게 달래야 해요', score: 2.5, emoji: '😣' },
          { text: '몇 시간이 지나도 적응이 어려워요', score: 1, emoji: '💢' }
        ]},
        { dimension: '반응 강도', question: '감정을 표현할 때\n강도는 어느 정도인가요?', description: '감정 표현의 크기를 봅니다', options: [
          { text: '매우 크게 울고 크게 웃어요', score: 10, emoji: '💥' },
          { text: '감정이 분명하고 크게 나와요', score: 7.5, emoji: '😆' },
          { text: '적당히 표현해요', score: 5, emoji: '😊' },
          { text: '조용한 편이에요', score: 2.5, emoji: '😌' },
          { text: '거의 무표정에 가까워요', score: 1, emoji: '😐' }
        ]},
        { dimension: '기분 상태', question: '평소 {{name}}이(가)의\n기분은 어떤가요?', description: '전반적인 기분 경향을 봅니다', options: [
          { text: '거의 항상 밝고 즐거워해요', score: 10, emoji: '😄' },
          { text: '대체로 기분 좋은 편이에요', score: 7.5, emoji: '🙂' },
          { text: '좋을 때와 안 좋을 때가 비슷해요', score: 5, emoji: '😐' },
          { text: '까다로운 편이에요', score: 2.5, emoji: '😟' },
          { text: '자주 칭얼대요', score: 1, emoji: '😢' }
        ]},
        { dimension: '주의 산만성', question: '놀거나 집중할 때\n주변 자극이 있으면?', description: '자극에 따른 주의 전환을 봅니다', options: [
          { text: '작은 소리에도 바로 돌아서요', score: 10, emoji: '🦋' },
          { text: '쉽게 주의가 분산돼요', score: 7.5, emoji: '👂' },
          { text: '어느 정도 집중하지만 자극에 돌아봐요', score: 5, emoji: '👁️' },
          { text: '꽤 집중해요', score: 2.5, emoji: '🎯' },
          { text: '한 가지에 오래 집중해요', score: 1, emoji: '🔬' }
        ]},
        { dimension: '지속성', question: '어려운 걸 하다가 잘 안 되면\n어떻게 하나요?', description: '좌절 시 끈기를 봅니다', options: [
          { text: '계속 시도해요', score: 10, emoji: '💪' },
          { text: '여러 번 해보다가 도움 요청해요', score: 7.5, emoji: '🔧' },
          { text: '몇 번 해보고 다른 걸 찾아요', score: 5, emoji: '🤔' },
          { text: '한두 번 해보고 포기하거나 울어요', score: 2.5, emoji: '😤' },
          { text: '시도하기를 잘 안 해요', score: 1, emoji: '🏳️' }
        ]},
        { dimension: '감각 민감도', question: '옷 태그, 소음, 음식 질감 등에\n반응은 어떤가요?', description: '감각 민감도를 봅니다', options: [
          { text: '매우 예민해요', score: 10, emoji: '🔊' },
          { text: '꽤 민감해요, 특정 걸 싫어해요', score: 7.5, emoji: '👃' },
          { text: '보통이에요', score: 5, emoji: '👂' },
          { text: '둔감한 편이에요', score: 2.5, emoji: '🤷' },
          { text: '거의 무덤덤해요', score: 1, emoji: '😎' }
        ]}
      ];

      const TEMPERAMENT_24_PLUS = [
        { dimension: '활동성', question: '{{name}}이(가) 집에서 놀 때,\n주로 어떤 모습인가요?', description: '아이의 신체적 에너지 수준과 움직임의 빈도를 파악합니다', options: [
          { text: '한시도 가만히 못 있고 끊임없이 움직여요', score: 10, emoji: '🚀' },
          { text: '활발하지만 조용한 놀이도 10-15분은 해요', score: 7.5, emoji: '🏃' },
          { text: '활동적인 놀이와 조용한 놀이를 번갈아 해요', score: 5, emoji: '🚶' },
          { text: '조용한 놀이를 선호하고 격한 활동은 금방 지쳐요', score: 2.5, emoji: '🧘' },
          { text: '거의 안 움직이고 한 자리에 오래 앉아있어요', score: 1, emoji: '🪷' }
        ]},
        { dimension: '규칙성', question: '잠드는 시간, 배고파하는 시간이\n얼마나 일정한가요?', description: '생리적 리듬의 예측 가능성을 측정합니다', options: [
          { text: '매일 거의 같은 시간, 시계처럼 정확해요', score: 10, emoji: '⏰' },
          { text: '대체로 비슷하지만 30분-1시간 차이 나요', score: 7.5, emoji: '📅' },
          { text: '기본 패턴은 있지만 매일 조금씩 달라요', score: 5, emoji: '🔄' },
          { text: '매일 완전히 달라요, 예측이 어려워요', score: 2.5, emoji: '🎲' },
          { text: '아예 패턴이 없고 완전 랜덤이에요', score: 1, emoji: '❓' }
        ]},
        { dimension: '접근성', question: '낯선 사람이나 새로운 장소를\n만나면?', description: '새로운 자극에 대한 초기 반응 경향을 봅니다', options: [
          { text: '즉시 다가가서 웃으며 반가워해요', score: 10, emoji: '🤗' },
          { text: '약간 경계하지만 2-3분 안에 다가가요', score: 7.5, emoji: '👋' },
          { text: '5-10분 지켜본 후 천천히 탐색해요', score: 5, emoji: '👀' },
          { text: '15분 이상 엄마한테 붙어있고 떼면 울어요', score: 2.5, emoji: '😰' },
          { text: '거부하고 울며 한 시간이 지나도 적응 못해요', score: 1, emoji: '😭' }
        ]},
        { dimension: '적응성', question: '계획 변경, 새 음식 등\n변화가 생기면?', description: '변화에 적응하는 속도와 유연성을 측정합니다', options: [
          { text: '오히려 좋아해요, 변화를 즐기고 바로 적응해요', score: 10, emoji: '✨' },
          { text: '처음 5분은 어색하지만 금방 받아들여요', score: 7.5, emoji: '🌟' },
          { text: '조금 불편해하지만 10-20분이면 적응해요', score: 5, emoji: '⏳' },
          { text: '저항하고 울어요, 30분-1시간 달래야 해요', score: 2.5, emoji: '😣' },
          { text: '극도로 힘들어해서 몇 시간이 지나도 적응 못해요', score: 1, emoji: '💢' }
        ]},
        { dimension: '반응 강도', question: '감정을 표현할 때,\n강도는 어느 정도인가요?', description: '감정 표현의 크기와 에너지를 평가합니다', options: [
          { text: '모든 감정이 폭발적, 온몸으로 표현해요', score: 10, emoji: '💥' },
          { text: '감정 표현이 큰 편, 환하게 웃고 크게 울어요', score: 7.5, emoji: '😆' },
          { text: '적당히 표현해요, 웃고 울고 징징대요', score: 5, emoji: '😊' },
          { text: '조용한 편, 살짝 웃고 약간 찡그려요', score: 2.5, emoji: '😌' },
          { text: '거의 무표정, 기쁜지 슬픈지 잘 모르겠어요', score: 1, emoji: '😐' }
        ]},
        { dimension: '기분 상태', question: '평소 {{name}}이(가)의\n전반적인 기분은 어떤가요?', description: '기본 정서의 긍정성/부정성 경향을 봅니다', options: [
          { text: '거의 항상 밝고 즐거워해요', score: 10, emoji: '😄' },
          { text: '대체로 기분 좋은 상태예요', score: 7.5, emoji: '🙂' },
          { text: '좋을 때와 안 좋을 때가 비슷해요', score: 5, emoji: '😐' },
          { text: '약간 까다로운 편, 불편해하는 모습을 더 자주 봐요', score: 2.5, emoji: '😟' },
          { text: '거의 항상 칭얼대요, 웃는 모습 보기 어려워요', score: 1, emoji: '😢' }
        ]},
        { dimension: '주의 산만성', question: '집중할 때\n주변 자극이 있으면?', description: '외부 자극에 의한 주의 전환 정도를 측정합니다', options: [
          { text: '작은 소리에도 바로 돌려요, 5초 이상 집중 불가능', score: 10, emoji: '🦋' },
          { text: '쉽게 주의가 분산돼요, 자주 딴 짓 해요', score: 7.5, emoji: '👂' },
          { text: '어느 정도 집중하지만 흥미로운 자극엔 돌려요', score: 5, emoji: '👁️' },
          { text: '꽤 집중해요, 웬만한 자극엔 신경 안 써요', score: 2.5, emoji: '🎯' },
          { text: '엄청난 집중력, 불러도 대답 안 해요', score: 1, emoji: '🔬' }
        ]},
        { dimension: '지속성', question: '어려운 과제가 잘 안 되면\n어떻게 하나요?', description: '좌절 상황에서의 끈기와 인내심을 평가합니다', options: [
          { text: '계속 도전해요, 성공할 때까지 포기를 몰라요', score: 10, emoji: '💪' },
          { text: '5-10번 시도하다 안 되면 도움 요청해요', score: 7.5, emoji: '🔧' },
          { text: '3-5번 시도하다 안 되면 다른 걸 찾아요', score: 5, emoji: '🤔' },
          { text: '한두 번 해보고 바로 포기하거나 울어요', score: 2.5, emoji: '😤' },
          { text: '시도조차 안 해요, "엄마가 해줘" 해요', score: 1, emoji: '🏳️' }
        ]},
        { dimension: '감각 민감도', question: '옷 태그, 소음, 음식 질감 등에 대한\n반응은?', description: '감각 처리의 민감성을 종합적으로 봅니다', options: [
          { text: '극도로 예민해요, 시끄러운 곳에서 귀 막아요', score: 10, emoji: '🔊' },
          { text: '꽤 민감해요, 특정 소리나 촉감 싫어해요', score: 7.5, emoji: '👃' },
          { text: '보통이에요, 가끔 특정한 것만 불편해해요', score: 5, emoji: '👂' },
          { text: '둔감한 편, 웬만한 자극엔 신경 안 써요', score: 2.5, emoji: '🤷' },
          { text: '거의 모든 자극에 무덤덤해요', score: 1, emoji: '😎' }
        ]}
      ];

      const getTemperamentQuestionsByAge = (totalMonths) => {
        if (totalMonths < 12) return TEMPERAMENT_0_12;
        if (totalMonths < 24) return TEMPERAMENT_12_24;
        return TEMPERAMENT_24_PLUS;
      };

      const totalMonths = getTotalMonths(childInfo.birthDate || '');
      const temperamentQuestions = getTemperamentQuestionsByAge(totalMonths);

      const parentQuestions = [
        { dimension: '스트레스 내성', question: '아이가 30분 넘게 떼쓰고 울 때,\n나의 반응은?', description: '고강도 육아 상황에서의 정서 조절 능력을 봅니다', options: [
          { text: '흔들리지 않고 차분해요, 침착하게 대처해요', score: 10 },
          { text: '처음엔 당황하지만 곧 진정하고 달래요', score: 7.5 },
          { text: '스트레스 느끼지만 참고 견뎌요', score: 5 },
          { text: '함께 힘들어지고 목소리가 커져요', score: 2.5 },
          { text: '감당 안 돼요, 같이 울거나 나가버려요', score: 1 }
        ]},
        { dimension: '반응 속도', question: '아이가 "엄마!"하고 부르거나\n울음 소리를 내면?', description: '아이의 신호에 대한 반응성과 민감성을 측정합니다', options: [
          { text: '즉시 달려가요, 기다리게 하는 게 불안해요', score: 10 },
          { text: '곧바로 반응하지만 급하지 않으면 "잠깐만"', score: 7.5 },
          { text: '하던 일 마무리하고 가요, 상황 봐요', score: 5 },
          { text: '급한 게 아니면 아이가 스스로 해결하길 기다려요', score: 2.5 },
          { text: '정말 간절하게 부를 때만 가요', score: 1 }
        ]},
        { dimension: '통제 욕구', question: '계획대로 안 될 때\n어떻게 느끼나요?', description: '예측 가능성과 통제에 대한 욕구 수준을 파악합니다', options: [
          { text: '많이 불안해요, 루틴 깨지면 하루가 망한 것 같아요', score: 10 },
          { text: '불편하지만 계획 B로 조정할 수 있어요', score: 7.5 },
          { text: '약간 아쉽지만 "뭐 어때" 하고 넘어가요', score: 5 },
          { text: '개의치 않아요, 원래 계획이 별로 없어요', score: 2.5 },
          { text: '계획 없는 게 더 편해요, 즉흥적으로 해요', score: 1 }
        ]},
        { dimension: '완벽주의', question: '육아 정보를 접할 때\n나는?', description: '육아에서의 기준과 자기 평가 경향을 봅니다', options: [
          { text: '다 따라하려 노력해요, 못 지키면 자책해요', score: 10 },
          { text: '최대한 따라하지만 안 되면 괜찮다고 달래요', score: 7.5 },
          { text: '참고하되 우리 상황에 맞게 적용해요', score: 5 },
          { text: '그냥 참고만 해요, 내 방식이 있어요', score: 2.5 },
          { text: '별로 신경 안 써요, 내 감으로 해요', score: 1 }
        ]},
        { dimension: '에너지 수준', question: '하루 육아를 마친 저녁, 나의 상태는?', description: '육아로 인한 에너지 소진 정도를 파악합니다', options: [
          { text: '아직 에너지 남아있어요, 더 놀아줄 수 있어요', score: 10 },
          { text: '약간 피곤하지만 집안일은 할 수 있어요', score: 7.5 },
          { text: '꽤 지쳐있어요, 쉬고 싶지만 해야 할 일은 해요', score: 5 },
          { text: '완전 녹초예요, 아이 재운 후 쓰러져요', score: 2.5 },
          { text: '한계예요, 저녁엔 아이한테 화내거나 TV만 보여줘요', score: 1 }
        ]}
      ];

      // [사용자 고정] 부모 유형 분류. 극단(반응속도·에너지 등) 시 균형형 배제. 사용자 직접 변경 요청 전까지 수정하지 말 것.
      const getParentType = (scores) => {
        const stressTolerance = scores[0];
        const responseSpeed = scores[1];
        const controlNeed = scores[2];
        const perfectionism = scores[3];
        const energyLevel = scores[4];
        const hasParentExtreme = (responseSpeed <= 2 || responseSpeed >= 8 || energyLevel <= 2 || energyLevel >= 8);
        if (stressTolerance <= 3 && energyLevel <= 3) {
          return { type: '회복이 필요한 엄마', emoji: '💙', english: 'Burnout Risk', description: '지금 많이 지쳐있어요. 먼저 엄마를 돌봐야 해요.', color: 'blue' };
        }
        if (controlNeed >= 8 && perfectionism >= 8) {
          return { type: '계획형 엄마', emoji: '📋', english: 'Planner Parent', description: '체계적이고 완벽을 추구하는 엄마', color: 'purple' };
        }
        if (responseSpeed >= 8 && controlNeed <= 4) {
          return { type: '공감형 엄마', emoji: '💕', english: 'Responsive Parent', description: '아이의 신호에 즉각 반응하는 따뜻한 엄마', color: 'pink' };
        }
        // 반응 느림 + 에너지 높음 → 페이스형 (선택적 반응, 자기 페이스)
        if (responseSpeed <= 2 && energyLevel >= 8) {
          return { type: '페이스형 엄마', emoji: '🕐', english: 'Paced Parent', description: '선택적으로 반응하고 에너지가 충만한 엄마', color: 'teal' };
        }
        if (stressTolerance >= 7 && perfectionism <= 4) {
          return { type: '여유형 엄마', emoji: '🌈', english: 'Relaxed Parent', description: '느긋하고 유연한 엄마', color: 'green' };
        }
        // 균형형: 반응·에너지가 극단이 아닐 때만
        if (!hasParentExtreme) {
          return { type: '균형형 엄마', emoji: '⭐', english: 'Balanced Parent', description: '여러 면에서 균형잡힌 엄마', color: 'teal' };
        }
        return { type: '혼합형 엄마', emoji: '🌈', english: 'Mixed Parent Profile', description: '여러 성향이 조합된 독특한 양육 스타일', color: 'teal' };
      };

      // [사용자 고정] 기질 유형 분류 (Chess & Thomas, 1977 + Elaine Aron, 1996). 극단 점수 시 밸런서 배제. 사용자 직접 변경 요청 전까지 수정하지 말 것.
      const getTemperamentType = (scores) => {
        const activity = scores[0];
        const regularity = scores[1];
        const approach = scores[2];
        const adaptability = scores[3];
        const intensity = scores[4];
        const mood = scores[5];
        const sensitivity = scores[8];
        const hasExtreme = (arr) => arr.slice(0, 6).some(s => s <= 2 || s >= 8); // 6개 핵심 차원만 (활동·규칙·접근·적응·반응강도·기분)
        if (sensitivity >= 8) {
          return { type: '섬세파', emoji: '🎨', english: 'Highly Sensitive Child', description: '세상을 섬세하게 느끼는 감각이 예민한 아이', color: 'purple' };
        }
        if (regularity <= 4 && adaptability <= 4 && intensity >= 7) {
          return { type: '에너자이저', emoji: '⚡', english: 'Spirited Child', description: '감정이 강렬하고 변화에 민감한 아이', color: 'red' };
        }
        // 접근성 매우 낮음 → 신중파 (Thomas & Chess: Slow-to-Warm-Up = 초기 위축). 기분 낮음+낮은 접근도 신중파.
        if (approach <= 2 || (mood <= 2 && approach <= 4 && intensity <= 5)) {
          return { type: '신중파', emoji: '🔍', english: 'Slow-to-Warm-Up Child', description: '신중하고 천천히 적응하는 관찰형 아이', color: 'blue' };
        }
        if (approach <= 4 && adaptability <= 5 && intensity <= 5) {
          return { type: '신중파', emoji: '🔍', english: 'Slow-to-Warm-Up Child', description: '신중하고 천천히 적응하는 관찰형 아이', color: 'blue' };
        }
        if (activity >= 8) {
          return { type: '탐험가', emoji: '🚀', english: 'Active Explorer', description: '끊임없이 움직이고 탐색하는 에너지 넘치는 아이', color: 'orange' };
        }
        if (regularity >= 7 && adaptability >= 7 && mood >= 7) {
          return { type: '순둥이', emoji: '😊', english: 'Easy Child', description: '규칙적이고 적응을 잘하는 키우기 쉬운 아이', color: 'green' };
        }
        // 밸런서: 어떤 차원도 극단(≤2 또는 ≥8)이 아닐 때만 (Rothbart & Bates: 균형 = 극단 부재).
        if (hasExtreme(scores)) {
          return { type: '혼합형', emoji: '🌈', english: 'Mixed Profile', description: '여러 기질이 조합된 독특한 아이', color: 'teal' };
        }
        return { type: '밸런서', emoji: '⚖️', english: 'Balanced Child', description: '여러 기질이 골고루 나타나는 균형잡힌 아이', color: 'teal' };
      };

      const analyzeTemperament = () => {
        const childScores = temperamentQuestions.map((_, i) => childProfile[`q${i}`] || 5);
        const parentScores = parentQuestions.map((_, i) => parentProfile[`p${i}`] || 5);
        const lowAdaptability = childScores[3] < 5;
        const highIntensity = childScores[4] > 7;
        const highSensitivity = childScores[8] > 7;
        const highActivity = childScores[0] > 7;
        const temperamentType = getTemperamentType(childScores);
        const parentType = getParentType(parentScores);
        const age = getChildAge();
        const name = childInfo.name;
        const concern = behaviorInput || '일반적인 육아 고민';
        let interpretation = '';
        let reassurance = '';
        let script = '';
        let practicalTips = [];
        let realExamples = [];
        let concernAnalysis = '';
        let parentAnalysis = '';
        if (parentType.type === '회복이 필요한 엄마') {
          parentAnalysis = `엄마는 지금 **'${parentType.type}'** 상태예요. 스트레스 내성이 낮고 에너지가 고갈된 상태에서는 아무리 좋은 육아법도 실천하기 어려워요. 지금은 힘들어도 회복 후에는 같은 경험이 공감과 회복 탄력성으로 이어질 수 있어요. 다만 아이가 30분 넘게 울 때, 계획이 완전히 틀어질 때, 수면 부족·도움 부족이 겹칠 때는 감정이 폭발하거나 무기력해지기 쉬워요. 가장 시급한 것은 (1) 하루 30분이라도 혼자만의 시간 (2) 도움 요청(배우자·돌봄) (3) "완벽한 엄마" 기준 내려놓기예요. 엄마가 먼저 회복해야 ${name}이도 행복해질 수 있어요.`;
        } else if (parentType.type === '계획형 엄마') {
          parentAnalysis = `엄마는 **'${parentType.type}'** 스타일이에요. 체계적이고 완벽을 추구하는 건 큰 장점이지만, ${name}이(${age})는 아직 루틴을 완벽하게 따르기 어려운 시기예요. 계획성·일관성은 아이에게 예측 가능성과 안정감을 주는 편이에요. 다만 계획이 깨지거나 "80%만 해도 됐는데"가 안 될 때는 불안·자책·아이에게 잔소리가 늘어날 수 있어요.\n\n**활용법:** "완벽한 루틴"보다 "80% 성공 루틴", 플랜 B 미리 준비, ${name}이의 작은 성공에 집중하기. 엄마의 계획성은 결국 ${name}이에게 안정감을 줄 거예요.`;
        } else if (parentType.type === '공감형 엄마') {
          parentAnalysis = `엄마는 **'${parentType.type}'** 스타일이에요. ${name}이의 신호에 즉각 반응하는 따뜻함은 애착 형성에 아주 좋아요. 민감한 반응은 아이의 정서 조절·자존감 발달에 도움이 되는 편이에요. 다만 너무 빨리 달려가면 아이가 스스로 해결할 기회를 놓치고, 엄마 에너지가 빨리 소진될 수 있어요.\n\n**활용법:** 10초 기다려보기, "엄마 도와줄까?" 물어보기, 엄마의 휴식도 챙기기. 엄마의 공감 능력은 ${name}이의 정서 발달에 큰 자산이에요.`;
        } else if (parentType.type === '여유형 엄마') {
          parentAnalysis = `엄마는 **'${parentType.type}'** 스타일이에요. 느긋하고 유연한 태도는 ${name}이(${age})에게 심리적 여유를 줘요. 유연성은 아이의 자율성·도전 욕구를 키우고 스트레스가 덜 전달되는 편이에요. 다만 아이가 불안해하거나 예측이 필요할 때(신중파·에너자이저 아이)는 "뭐 어때"만 반복하면 오히려 불안해할 수 있어요.\n\n**활용법:** 아이가 불안해하는 신호 놓치지 않기, 기본 루틴(식사·수면) 유지, 경계선은 명확하게. 엄마의 여유로움은 ${name}이의 자율성을 키우는 좋은 환경이에요.`;
        } else if (parentType.type === '페이스형 엄마') {
          parentAnalysis = `엄마는 **'${parentType.type}'** 스타일이에요. 아이 부를 때 즉각 달려가기보다 '잠깐만' 하고 자기 페이스를 유지하는 편이에요. 반응 속도는 느릴 수 있지만 에너지가 충만해 저녁에도 여유가 있어요. 선택적으로 반응하는 태도는 아이가 스스로 해결할 기회를 늘려 주는 편이에요. 다만 아이가 진짜 위험하거나 극심하게 울 때는 "엄마 잠깐만"이 길어지면 불안해할 수 있어요. 급한 울음·부름에는 짧게라도 반응해 주시면 좋아요.`;
        } else if (parentType.type === '혼합형 엄마') {
          parentAnalysis = `엄마는 **'${parentType.type}'** 프로필이에요. 반응 속도·에너지·스트레스 내성 등이 한쪽으로 치우쳐 있어, 하나의 유형으로 묶기 어려운 조합이에요.\n\n아래 양육자 프로필 막대를 보시고, 높은 항목(강점)과 낮은 항목(쉬어가기)을 함께 참고하시면 돼요. 극단이 있는 만큼 그 부분은 배우자·돌봄과 나누는 것도 도움이 됩니다.`;
        } else {
          parentAnalysis = `엄마는 **'${parentType.type}'** 스타일이에요. 여러 면에서 균형잡힌 육아 태도를 가지고 계세요. 반응·스트레스·에너지가 극단이 아니라 상황에 맞게 조절하기 쉬운 편이에요. 다만 피곤·수면 부족·연속 실패가 겹치면 평소보다 반응이 예리해지거나 무기력해질 수 있어요. 그때는 휴식·도움 요청을 먼저 챙기세요. 상황에 따라 유연하게 대응할 수 있는 엄마의 강점을 계속 활용하세요.`;
        }
        const concernLower = concern.toLowerCase();
        const hasSleep = concernLower.includes('잠') || concernLower.includes('수면') || concernLower.includes('자');
        const hasEating = concernLower.includes('밥') || concernLower.includes('식사') || concernLower.includes('먹');
        const hasTantrum = concernLower.includes('떼') || concernLower.includes('울') || concernLower.includes('짜증');
        const hasAggression = concernLower.includes('때리') || concernLower.includes('물') || concernLower.includes('공격');
        const hasClothing = concernLower.includes('옷') || concernLower.includes('입기') || concernLower.includes('거부') || concernLower.includes('옷입') || concernLower.includes('옷감') || concernLower.includes('태그') || concernLower.includes('입히');
        if (hasSleep) {
          concernAnalysis = `**"${concern}"에 대한 기질 기반 심층 분석:**\n\n`;
          if (childScores[1] < 5) {
            concernAnalysis += `${name}이(${age})는 **생체 리듬이 불규칙한 기질**을 타고났어요. Thomas & Chess(1977)의 연구에 따르면, 이런 아이들은 매일 다른 시간에 졸려하고 배고파하는 경향이 있어요. 이는 뇌의 시상하부에서 조절되는 생리적 특성으로, **엄마의 양육 방식 때문이 아닙니다**.\n\n`;
            if (highIntensity) concernAnalysis += `추가로 ${name}이는 반응 강도도 높아서, 졸리거나 피곤할 때 **폭발적으로 울고 떼를 쓰는 경향**이 있어요. Weissbluth(2003)의 'Healthy Sleep Habits, Happy Child'에서 지적하듯, 이런 기질의 아이는 수면 신호가 급격하게 나타나므로 조기 개입이 중요해요.\n\n`;
            concernAnalysis += `**과학적 근거:** Sameroff & Chandler(1975)의 '상호작용 모델'에 따르면, 불규칙한 기질의 아이일수록 **일관된 외부 루틴**이 내재화되는 데 6-8주가 더 걸려요. 지금 효과가 없다고 포기하지 마세요.`;
          } else {
            concernAnalysis += `${name}이(${age})는 **규칙성이 높은 기질**이에요. Mindell & Owens(2015)의 연구에서 규칙적인 기질의 아이들은 수면 루틴 도입 후 **평균 2-3주 내**에 큰 개선을 보인다고 해요.\n\n`;
            if (childScores[3] < 5) concernAnalysis += `다만 ${name}이는 **적응성이 낮은 편**이라, 새로운 수면 루틴을 받아들이는 초기 단계에서 저항이 있을 수 있어요. Ferber(2006)는 이런 경우 **점진적 접근법**을 권장해요.\n\n`;
            concernAnalysis += `**실천 팁:** ${name}이의 규칙성을 활용해 '30분 전 루틴'을 만들어보세요: 목욕 → 책 읽기 → 불 끄기. 이 순서를 **매일 똑같은 시간**에 반복하면 ${name}이의 뇌가 자동으로 수면 모드로 전환돼요.`;
          }
        } else if (hasEating) {
          concernAnalysis = `**"${concern}"에 대한 기질 기반 심층 분석:**\n\n`;
          if (highSensitivity) {
            concernAnalysis += `${name}이(${age})는 **감각 처리가 매우 민감한 기질**이에요. Dunn(1997)의 감각 처리 모델에 따르면, 이런 아이들은 음식의 질감, 온도, 냄새를 **정상보다 10배 이상 강하게 느껴요**.\n\n**과학적 접근:** 한 번에 한 가지 식감만 소개하고, ${name}이(가) 직접 만져보고 탐색할 시간을 주세요. Satter(2000)의 '분업 이론'에 따르면, 엄마는 '무엇을, 언제' 제공할지 결정하고, 아이는 '먹을지, 얼마나' 먹을지 결정해야 해요.`;
          } else if (lowAdaptability) {
            concernAnalysis += `${name}이(${age})는 **새로운 것에 대한 적응이 느린 기질**이에요. Kagan(1994)의 연구에서 이런 아이들은 **평균 15-20회의 노출**이 필요해야 새 음식을 받아들인다고 해요.\n\nBirch & Fisher(1998)의 연구에 따르면, 아이들은 같은 음식을 8-15번 봐야 '익숙함'을 느끼기 시작해요. ${name}이의 기질상 **천천히, 반복적으로** 노출시키는 게 핵심이에요.`;
          } else {
            concernAnalysis += `${name}이(${age})의 기질은 극단적이지 않아요. ${age} 시기는 발달상 **음식 신포비아(food neophobia)가 최고조**인 때예요. Dovey et al.(2008)에 따르면 생후 18-24개월에 90% 아동이 식사 거부를 경험해요.\n\n**안심하세요:** 연구에 따르면 이 단계는 보통 6-12개월 내에 자연스럽게 지나가요.`;
          }
        } else if (hasTantrum) {
          concernAnalysis = `**"${concern}"에 대한 기질 기반 심층 분석:**\n\n`;
          if (highIntensity) {
            concernAnalysis += `${name}이(${age})는 **감정 표현 강도가 높은 기질**이에요. Rothbart & Bates(2006)의 연구에 따르면, 이는 편도체(amygdala)의 반응성과 관련이 있어요.\n\n**신경과학적 이해:** ${name}이의 전두엽(감정 조절 담당)은 아직 발달 중이에요. 지금은 ${name}이(가) **생물학적으로 감정 조절이 불가능한 단계**예요.`;
          } else if (lowAdaptability) {
            concernAnalysis += `${name}이(${age})는 **변화에 대한 적응이 느린 기질**이에요. Henderson & Wachs(2007)의 연구에서 이런 아이들은 예상 밖의 상황에서 **코르티솔(스트레스 호르몬) 수치가 2배 높게** 나타났어요.\n\n**해결의 열쇠:** 예측 가능성이에요. Carlson(2003)의 연구에서 적응 느린 아이들에게 **5-10분 전 예고**를 하면 떼쓰는 빈도가 60% 감소했어요.`;
          } else {
            concernAnalysis += `${name}이(${age})의 기질은 극단적이지 않아요. ${age} 시기는 Erikson(1963)이 말한 **'자율성 대 수치심' 단계**예요. Kopp(1982)의 연구에 따르면, ${age} 아이들은 자기 조절 능력이 아직 10-20% 수준이에요. 떼쓰는 건 ${name}이(가) "도와줘, 못 참겠어!"라고 말하는 방식이에요.`;
          }
        } else if (hasAggression) {
          concernAnalysis = `**"${concern}"에 대한 기질 기반 심층 분석:**\n\n`;
          if (highActivity) {
            concernAnalysis += `${name}이(${age})는 **활동성이 매우 높은 기질**이에요. Buss & Plomin(1984)의 연구에서 이런 아이들은 **운동 에너지가 평균의 2배**라고 밝혀졌어요. 때리는 행동은 '공격'이 아니라 **에너지 방출의 미숙한 형태**예요.\n\n**과학적 해결:** ${name}이에게 하루 최소 2시간의 격렬한 신체 활동이 필요해요. Panksepp(1998)은 이를 '거친 놀이(rough play)' 욕구라고 명명했어요.`;
          } else if (highIntensity) {
            concernAnalysis += `${name}이(${age})는 **감정 강도가 높은 기질**이에요. ${name}이(가) 때리는 건 "말로 표현 못하겠어, 너무 화나!"라는 **미성숙한 의사소통**이에요.\n\n**좋은 소식:** Hay(2017)의 종단 연구에서 만 2세에 때리던 아이의 95%가 만 4세에는 언어로 감정을 표현하게 됐어요.`;
          } else {
            concernAnalysis += `${name}이(${age})의 기질은 극단적이지 않아요. Alink et al.(2006)의 연구에 따르면 ${age} 아이의 70%가 주 1회 이상 다른 아이를 때리거나 민다고 보고했어요. 이는 **정상 발달의 일부**예요. **발달적 해결:** "때리면 아파. 손은 이렇게" (부드럽게 만지는 시범). Gershoff(2002)의 메타 분석에서 일관된 반복 교육이 가장 효과적이라고 밝혀졌어요.`;
          }
        } else if (hasClothing) {
          concernAnalysis = `**"${concern}"에 대한 기질 기반 심층 분석:**\n\n`;
          if (highSensitivity || temperamentType.type === '섬세파') {
            concernAnalysis += `${name}이(${age})는 **감각이 예민한 기질**이에요. 옷감의 촉감, 태그, 압박감, 또는 옷 입는 순서가 바뀌는 것을 **평균보다 훨씬 불쾌하게** 느낄 수 있어요. 이건 버릇이나 고집이 아니라 **감각 과부하**에 가까운 반응이에요.\n\n**실천 팁:** 옷 살 때 ${name}이가 직접 만져보게 하고, 태그는 미리 제거해 두세요. 2~3벌 중에서 '어떤 게 기분 좋아?' 하고 선택하게 하면 거부가 줄어드는 경우가 많아요.`;
          } else if (lowAdaptability) {
            concernAnalysis += `${name}이(${age})는 **변화나 순서에 민감한 기질**이에요. '지금 하던 거 말고 옷부터 입자'는 식의 제안이 **예상 밖**이라면 스트레스를 느끼고 거부할 수 있어요.\n\n**실천 팁:** '이제 옷 입을 시간이야'처럼 5분 전에 예고하고, 매일 비슷한 순서(예: 기저귀 → 옷)를 유지해 보세요. 선택권을 주면('빨간 티 vs 노란 티') 참여가 잘 되는 편이에요.`;
          } else {
            concernAnalysis += `${name}이(${age})는 ${age} 시기 **자율성**이 커지는 단계예요. "엄마가 정해 주는 것"보다 "내가 고르는 것"에 대한 욕구가 있어서, 옷 입히기를 거부하는 경우가 있어요.\n\n**실천 팁:** '오늘은 이거랑 이거 중에 뭐 입을까?'처럼 작은 선택을 주세요. '엄마가 도와줄까, ${name}이가 할까?'도 시도해 보시면 좋아요.`;
          }
        } else {
          const t = temperamentType.type;
          const e = temperamentType.emoji;
          concernAnalysis = `**"${concern}"에 대한 기질 기반 분석:**\n\n${name}이(${age})는 **'${t}' ${e}** 기질로 보여요. 이 고민은 이런 기질의 아이들에게서 자주 나타날 수 있는 현상이에요. `;
          if (t === '섬세파') concernAnalysis += `감각이 예민한 아이는 작은 자극에도 불쾌함을 느끼거나, 예상과 다른 순서에 스트레스를 받을 수 있어요. 선택권을 주고, 한 가지씩 천천히 제안해 보세요.`;
          else if (t === '에너자이저') concernAnalysis += `에너지와 자기 주장이 큰 아이는 "시키는 것"을 통제로 느껴 거부할 수 있어요. "어떤 걸 할까?"처럼 선택하게 하거나, 짧게 예고한 뒤 진행해 보세요.`;
          else if (t === '신중파') concernAnalysis += `새로운 걸 천천히 받아들이는 아이는 순서나 방식이 바뀌면 불안해할 수 있어요. 미리 예고하고, 익숙한 루틴을 유지해 주세요.`;
          else if (t === '탐험가') concernAnalysis += `움직이고 탐색하고 싶은 욕구가 큰 아이는 멈추고 따르는 것을 어려워할 수 있어요. "조금만 하면 끝나자"처럼 짧은 단위로 제안하고, 끝나면 뛰어놀 시간을 보장해 주세요.`;
          else if (t === '순둥이') concernAnalysis += `순한 편이라도 ${age} 시기에는 "내가 정하고 싶다"는 욕구가 생깁니다. 작은 선택을 주고, 거절해도 괜찮다는 메시지를 주세요.`;
          else concernAnalysis += `위의 기질 설명과 실천 팁을 참고해, ${name}이에게 맞는 방식을 찾아 보시면 좋아요.`;
        }
        // 설명 분기: 표시된 기질 유형(temperamentType.type)과 동일한 기준으로 분기해, 결과와 설명이 항상 일치하도록 함
        const parentHighControl = parentScores[2] > 7;
        const parentLowStress = parentScores[0] < 5;

        if (temperamentType.type === '섬세파') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. 전체 아동의 약 15-20%가 이에 해당하는 유형으로, ${age} 시기에는 특히 소리, 빛, 촉감 같은 자극을 **훨씬 더 강하게 느끼는 예민한 신경계**를 가지고 있어요.\n\n이 기질의 아이들은 미세한 변화·감정·예술적 자극에 뛰어나고, 깊은 사고와 공감 능력이 발달하기 쉬워요. 시끄러운 장소, 밝은 조명, 거친 옷감·태그, 새로운 음식 질감처럼 감각 자극이 많거나 강할 때는 불안·거부·울음이 늘어날 수 있어요. 이는 생리적 반응이에요.`;
          reassurance = `쇼핑몰에서 울거나 옷 입는 걸 거부하는 ${name}이는 지금 **'감각 과부하(Sensory Overload)'** 상태예요. 이건 버릇이나 고집이 아니라, 뇌가 "자극이 너무 많아!"라고 알려주는 생리적 반응이에요.`;
          script = `**${name}이(섬세파) 감각 조절 대화법:**\n\n**1단계: 과부하 징후 인지** - 귀 막기, 눈 감기, 짜증 증가 → Dunn(1997): 예민한 아이의 **뇌가 보내는 SOS**\n\n**2단계: 즉각 환경 조정**\n"${name}아, 여기 너무 (시끄럽다/밝다). 조용한 곳으로 가자."\n\n**3단계: 감각 줄이기** - 소음: 화장실, 복도 / 조명: 커튼 닫기, 선글라스\n\n**4단계: 그라운딩** "손 꽉 잡아. 천천히 숨 쉬자. 하나, 둘, 셋..." → Porges(2011) 미주신경 이론\n\n**출처:** Dunn, W. (1997). Sensory Profile. Ayres, A.J. (1979). Sensory Integration and the Child.`;
          practicalTips = [{ title: '외출 전 감각 준비', content: `외출 전에 "시끄러운 곳에 가는데, 귀마개 가져갈까?"처럼 예고하고 대비책을 함께 준비하세요.`, source: 'Aron, E. (1996)' }, { title: '옷감 선택권 주기', content: `옷 살 때 ${name}이가 직접 만져보게 하세요. 태그는 미리 다 제거하고, 부드러운 면 소재를 선택하세요.`, source: 'Kranowitz, C. (2005)' }, { title: '다운타임 확보', content: `${age} 예민한 아이는 하루에 최소 1-2시간의 조용한 시간이 필요해요. 일정에 의도적으로 "쉬는 시간"을 넣으세요.`, source: 'Aron, E. (2002)' }];
          realExamples = [{ situation: '옷 입히려고 하면 울고 저항', solution: `${name}이가 직접 옷을 고르게 함. 2-3벌 중 "어떤 게 기분 좋아?" 물어보기.`, mom: '24개월 여아 엄마', result: '선택권을 주니까 저항이 80% 줄었어요.' }, { situation: '식당에서 식사 중 갑자기 울고 나가자고 함', solution: `식당 선택 시 구석 자리 예약. 노이즈 캔슬링 귀마개 준비. 20분 이상 있을 때는 중간에 밖에 나가서 쉬는 시간 주기.`, mom: '30개월 남아 엄마', result: '귀마개 하나로 외식이 가능해졌어요.' }];
        } else if (temperamentType.type === '에너자이저') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. **적응성이 낮고 반응 강도가 높은** 특성을 보여, 환경 변화에 민감하게 반응하며 자신의 감정을 솔직하게 표현하는 유형이에요. ${age} 아이에게 이런 기질은 나쁜 게 아니라 개성에 가까워요.\n\n이 기질의 아이들은 에너지·열정·주도성이 뛰어나고, 한번 마음이 맞으면 깊은 유대를 보여요. 계획 변경, 낯선 장소·사람, 예고 없이 끝나는 놀이, "안 돼"만 반복될 때 감정이 폭발하거나 떼쓰기가 길어질 수 있어요. 반응 강도가 높은 아이는 스트레스 호르몬(코르티솔) 반응이 큰 편이에요.`;
          reassurance = `새로운 장소나 낯선 사람을 만날 때 ${name}이가 폭발적으로 떼를 쓰는 건 "${name}이가 지금 불안해!"라고 외치는 **도움 요청 신호**예요. Mary Sheedy Kurcinka의 연구(Raising Your Spirited Child, 2006)에 따르면, 이런 아이들은 변화에 대한 예고와 감정 인정이 특히 중요해요.`;
          let dialogueTitle = ''; let dialogueContent = '';
          if (parentHighControl) {
            dialogueTitle = `**${name}이(에너자이저) + 계획형 엄마 맞춤 대화법:**`;
            dialogueContent = `\n\n엄마의 계획성과 ${name}이의 즉흥성이 충돌할 때 사용하세요.\n\n**상황: 갑자기 계획 변경 시**\n\n❌ **피해야 할 말** (통제형 실수):\n"아니야, 계획대로 해야지!"\n→ ${name}이의 뇌는 이미 '거부 모드' 진입\n\n✅ **근거 기반 대화** (Kurcinka, 2006):\n"${name}아, 엄마는 ○○ 계획했는데, ${name}이는 다르게 하고 싶구나. 둘 다 해볼까? 먼저 엄마 것 5분, 그다음 ${name}이 것 5분."\n\n**왜 효과적인가:** \n- Baumrind(1991)의 연구: 권위있는(authoritative) 양육이 권위주의적(authoritarian)보다 효과적\n- 엄마의 계획과 아이의 욕구를 **모두 인정**하는 타협안\n- ${name}이의 뇌에서 도파민(보상 호르몬) 분비 → 협력 증가\n\n**출처:** Kurcinka, M.S. (2006). Raising Your Spirited Child (Revised). HarperCollins.`;
          } else if (parentLowStress) {
            dialogueTitle = `**${name}이(에너자이저) + 지친 엄마를 위한 최소 에너지 대화법:**`;
            dialogueContent = `\n\n엄마의 에너지가 바닥났을 때도 쓸 수 있는 간단한 방법이에요.\n\n**상황: 엄마가 너무 지쳐서 감정 조절이 안 될 때**\n\n❌ **하지 말아야 할 것:**\n긴 설명, 협상, 달래기 → 엄마 에너지 고갈 악화\n\n✅ **3단어 규칙** (Siegel & Bryson, 2011):\n"${name}아. 멈춰. 위험해."\n"${name}아. 안돼. 끝."\n"${name}아. 화났어. 쉴게."\n\n**왜 효과적인가:**\n- Siegel & Bryson(2011) The Whole-Brain Child: 짧고 명확한 언어가 감정 뇌(편도체) 진정\n- ${age} 아이는 긴 문장 처리 불가 (작업 기억 한계)\n- 엄마의 **번아웃 예방**이 최우선\n\n**엄마 회복 후:**\n"아까 엄마가 화났지? ${name}아가 ○○해서 엄마 힘들었어. 다음엔 이렇게 해줄래?"\n\n**출처:** Siegel, D.J. & Bryson, T.P. (2011). The Whole-Brain Child. Bantam.`;
          } else {
            dialogueTitle = `**${name}이(에너자이저) 맞춤 4단계 대화법:**`;
            dialogueContent = `\n\n**근거:** Gottman(1997)의 감정 코칭 5단계를 ${age} 수준으로 조정\n\n**1단계: 감정 포착 (Emotion Coaching)**\n"${name}아, 지금 화났구나."\n→ 연구: 감정 명명만으로 편도체 활성 40% 감소 (Lieberman et al., 2007)\n\n**2단계: 공감 (Validation)**\n"그럴 수 있어. ○○ 안 되니까 속상하지."\n→ 연구: 공감 받은 아이의 코르티솔(스트레스) 50% 감소 (Shenk & Fruzzetti, 2011)\n\n**3단계: 한계 설정 (Limit Setting)**\n"근데 때리는 건 안 돼. 아파."\n→ 연구: 명확한 경계가 안전감 제공 (Gershoff et al., 2018)\n\n**4단계: 대안 제시 (Problem Solving)**\n"화나면 '엄마, 화나!'라고 말하거나 이 쿠션 때려."\n→ 연구: 대체 행동 제시가 억제보다 2배 효과적 (Kazdin, 2008)\n\n**출처:** \n- Gottman, J. (1997). Raising An Emotionally Intelligent Child. Simon & Schuster.\n- Lieberman, M.D. et al. (2007). Putting feelings into words. Psychological Science, 18(5).`;
          }
          script = dialogueTitle + dialogueContent;
          practicalTips = [{ title: '변화 예고하기', content: `최소 10-15분 전에 알려주세요. "5분 후에 나갈 거야"보다 "손 씻고, 신발 신고 나갈 거야"처럼 단계를 설명하면 더 효과적이에요.`, source: 'Kurcinka, M. S. (2006)' }, { title: '감정 언어 가르치기', content: `${age} 아이는 감정을 표현하는 단어가 부족해요. "화났어?", "무서워?" 같은 질문으로 감정 이름을 알려주세요.`, source: 'Gottman, J. (1997) Raising An Emotionally Intelligent Child' }, { title: '진정 공간 만들기', content: `집에 쿠션, 인형, 부드러운 조명이 있는 조용한 코너를 만들어주세요. 감정이 폭발할 때 피난처가 돼요.`, source: 'Siegel, D. & Bryson, T. (2012) The Whole-Brain Child' }];
          realExamples = [{ situation: '마트에서 과자 사달라고 바닥에 드러누워 울기', solution: `"지금 과자 먹고 싶구나. 근데 오늘은 안 사는 날이야. 대신 집에 가서 엄마랑 쿠키 만들어 먹을까?" (대안 제시)`, mom: '33개월 남아 엄마', result: '처음엔 계속 울었지만, 3-4번 반복하니 "쿠키 만들어?" 하면서 진정됐어요.' }, { situation: '목욕 거부로 매일 전쟁', solution: `목욕 30분 전부터 "곧 목욕 시간이야", "10분 남았어" 알림. 목욕 순서표 그림판 만들어서 보여주기.`, mom: '27개월 여아 엄마', result: '예측 가능해지니까 저항이 절반으로 줄었어요. 순서표 넘기는 걸 재밌어해요.' }, { situation: '어린이집 등원 시 매일 울음', solution: `등원 전 "엄마 손 흔들흔들, 뽀뽀뽀" 의식 만들기. 선생님께 ${name}이가 좋아하는 놀잇감 미리 꺼내달라고 부탁.`, mom: '36개월 남아 엄마', result: '2주 정도 걸렸지만, 이제 의식하고 바로 놀잇감 달려가요.' }];
        } else if (temperamentType.type === '신중파') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. 전체 아동의 약 15%가 이에 해당해요. **접근성**(낯선 사람·장소에 대한 초기 반응)이 낮은 편이라, ${age} 시기에는 **새로운 상황을 조심스럽게 관찰한 후 천천히 참여**하는 특성이 나타나요. 적응성은 한번 익히면 빠른 편일 수 있어요. 기분이 낮은 편(평소 불쾌 정서가 많음)일 수도 있어요.\n\n이 기질의 아이들은 위험 회피·관찰력·인내가 뛰어나고, 익숙해지면 깊은 애착을 보여요. 낯선 사람·장소, 갑작스런 변화, "빨리 해"·"용기 내" 같은 압박에 불안·울음·거부가 늘어날 수 있어요. 적응에 시간이 필요한 유형이에요.`;
          reassurance = `어린이집 첫날 울거나 낯선 사람 앞에서 얼어붙는 ${name}이는 '겁쟁이'가 아니에요. Kagan(1994)의 연구에서 이런 아이들은 **행동 억제 시스템(BIS)**이 활성화된 것으로, 신중함은 위험 회피 능력이자 생존 전략이에요.`;
          script = `**${name}이(신중파) 워밍업 대화법:**\n\n**1단계: 관찰 시간 확보** "${name}아, 여기 처음이지? 엄마랑 앉아서 구경하자." → 5-10분 관찰 시간이 참여 의욕 3배 ↑ (Kagan, 1994)\n\n**2단계: 언어화** "저기 미끄럼틀 있네. 빨간색이다."\n\n**3단계: 점진적 접근** "엄마 손 잡고 가까이 가볼까? 만져만 보자."\n\n**4단계: 무압박 참여** "타고 싶으면 타고, 아니면 구경만 해도 돼."\n\n**출처:** Thomas, A. & Chess, S. (1977). Kagan, J. (1994). Galen's Prophecy.`;
          practicalTips = [{ title: '예고와 준비', content: `새로운 장소 방문 전 사진이나 영상을 보여주세요. ${name}이의 뇌가 "낯설지 않아"라고 인식하면 적응이 2배 빨라져요.`, source: 'Kagan, J. (1994)' }, { title: '강요 금지', content: `"빨리 해", "용기 내" 같은 말은 역효과예요. ${name}이가 준비됐을 때 자연스럽게 시도할 거예요.`, source: 'Thomas & Chess (1977)' }, { title: '작은 성공 축적', content: `한 번 성공한 경험을 반복 노출하세요. 익숙함이 자신감으로 이어져요.`, source: 'Bandura, A. (1977)' }];
          realExamples = [{ situation: '어린이집 적응 안 됨 (3주째 울음)', solution: `선생님께 ${name}이 좋아하는 인형 미리 준비 부탁. 등원 후 "인형이 ${name}이 기다렸대" 말하며 10분 같이 놀다가 나옴.`, mom: '30개월 여아 엄마', result: '4주차부터 인형 보자마자 울음 멈춤.' }, { situation: '생일파티에서 혼자 구석에만 있음', solution: `억지로 끌어내지 않고, 엄마가 옆에서 아이들 노는 거 같이 구경. "저 친구 풍선 가지고 노네" 설명해줌.`, mom: '34개월 남아 엄마', result: '30분 후 스스로 풍선 만지러 감.' }];
        } else if (temperamentType.type === '탐험가') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. **운동 에너지 수준이 평균의 2배** 정도로, ${age} 시기에는 끊임없이 움직이고, 탐색하고, 만지고 싶어하는 욕구가 강해요.\n\n이 기질의 아이들은 호기심·학습·도전 욕구가 크고, 격렬한 놀이가 신체·사회성 발달에 도움이 돼요. 움직이지 못하거나 조용히 앉아 있기·대기 시간이 길 때, 실내에서 에너지를 쓸 곳이 없을 때 짜증·산만함·뛰어다니기가 늘어날 수 있어요.`;
          reassurance = `${name}이가 5분도 못 앉아있고 집안을 뛰어다니는 건 '산만함'이 아니라 **뇌가 요구하는 정상적인 움직임**이에요. Panksepp(1998)의 연구에서 높은 활동성은 SEEKING 시스템(탐색 본능) 활성화로, 학습과 발달에 긍정적이에요.`;
          script = `**${name}이(탐험가) 에너지 방향 대화법:**\n\n**1단계: 에너지 인정** "${name}아, 몸이 막 움직이고 싶구나. 엄마 알아."\n\n**2단계: 안전한 방향 제시** "여기서는 안 돼. 위험해. 밖에 나가서 뛰자."\n\n**3단계: 에너지 소진 활동** "이 공 던져봐. 10번!" → Pellegrini & Smith(1998): 하루 2시간 격렬한 활동 필수\n\n**4단계: 진정 신호** "이제 천천히 걷기. 하나, 둘, 셋..."\n\n**출처:** Panksepp, J. (1998). Affective Neuroscience. Pellegrini & Smith (1998). Child Development, 69(3).`;
          practicalTips = [{ title: '하루 2시간 격렬한 놀이', content: `공원, 뛰기, 점프, 오르기 등 대근육 활동이 필수예요. 에너지 발산 안 되면 밤잠도 안 와요.`, source: 'Pellegrini & Smith (1998)' }, { title: '집안 안전 공간', content: `소파 쿠션으로 점프존, 테이프로 길 만들기 등. 비 오는 날 대비 필수예요.`, source: 'Buss & Plomin (1984)' }, { title: '타이머 게임', content: `"5분 동안 조용히 앉아있기" 챌린지. 성공하면 10분 뛰어놀기. 자기 조절 연습이에요.`, source: 'Rothbart & Bates (2006)' }];
          realExamples = [{ situation: '식당에서 계속 돌아다니고 뛰어다님', solution: `식사 전 식당 주차장에서 10분 뛰어놀기. 식당 도착 전 "앉아있기 게임" 예고. 5분 앉아있으면 스티커.`, mom: '35개월 남아 엄마', result: '에너지 미리 빼니까 15분은 앉아있어요.' }, { situation: '집에서 소파 위로 계속 점프', solution: `거실 한쪽에 매트 깔고 "점프존" 지정. "소파는 안 돼, 여기서 점프!" 일관된 규칙.`, mom: '32개월 여아 엄마', result: '1주일 걸렸지만 이제 점프존에서만 놀아요.' }];
        } else if (temperamentType.type === '순둥이') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. 전체 아동의 약 40%가 이에 해당해요. ${age} 시기에는 **규칙적인 생활 리듬, 빠른 적응력, 긍정적인 기분**을 보여요.\n\n이 기질의 아이들은 규칙성·적응력·긍정 정서가 높아 새 환경·루틴에 잘 맞춰지고, 선택 기회를 주면 자율성·동기가 잘 자라요. 순한 아이일수록 부모의 무관심·갈등에 더 민감해요. "잘하니까" 방치하거나 의견을 묻지 않으면 소극적·자기주장 부족으로 이어질 수 있어요.`;
          reassurance = `${name}이(가) 키우기 쉽다고 해서 엄마가 덜 중요한 건 아니에요. Belsky(1984)의 연구에서 순한 아이일수록 **부모의 양육 태도에 더 민감**하게 반응한다고 밝혀졌어요.`;
          script = `**${name}이(순둥이) 성장 촉진 대화법:**\n\n**감정 표현 촉진** "${name}아, 지금 블록 쌓기 재미있어? 엄마한테 보여줄래?" → 관심 표현이 자존감 형성\n\n**선택 연습** "오늘 뭐 먹고 싶어? ${name}이가 골라봐." → Deci & Ryan(1985): 순한 아이일수록 선택 경험 필요\n\n**거절 허용** "${name}아, 하기 싫으면 '싫어'라고 말해도 돼."\n\n**출처:** Thomas, A. & Chess, S. (1977). Gottman, J. (1997). Raising An Emotionally Intelligent Child.`;
          practicalTips = [{ title: '감정 어휘 확장', content: `"화났어" 외에 "속상해", "아쉬워", "부러워" 등 다양한 감정 단어를 알려주세요.`, source: 'Gottman, J. (1997)' }, { title: '선택 기회 제공', content: `하루에 3번 이상 ${name}이가 선택하게 하세요. "오늘 뭐 입을까?", "간식 뭐 먹을까?"`, source: 'Deci & Ryan (1985)' }, { title: '관심 지속', content: `순둥이라고 방치하지 마세요. 하루 15분 ${name}이만을 위한 시간을 확보하세요.`, source: 'Belsky, J. (1984)' }];
          realExamples = [{ situation: '동생이 장난감 빼앗아도 가만히 있음', solution: `"${name}아, 그 장난감 ${name}이 거야. '내 거야'라고 말해봐." 자기 주장 연습 시킴.`, mom: '36개월 남아 엄마', result: '3주 후 스스로 "내 거!" 말하기 시작.' }, { situation: '엄마가 시키는 대로만 함 (의견 표현 안 함)', solution: `매일 "오늘 뭐 하고 싶어?" 물어봄. "잘 모르겠으면 엄마가 2가지 말할게" 선택 연습.`, mom: '33개월 여아 엄마', result: '2개월 후 "나는 이거 하고 싶어" 스스로 말하기 시작.' }];
        } else if (temperamentType.type === '혼합형') {
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 프로필이에요. 일부 기질 영역에서 극단적인 점수가 있어, 하나의 유형으로 묶기 어려운 조합이에요. 이런 아이들도 기질과 환경이 잘 맞으면 잘 적응해요.\n\n아래 기질 프로필 막대를 보시고, 높은 항목(강점)과 낮은 항목(케어가 필요한 부분)을 함께 보시면 돼요.`;
          reassurance = `${name}이(가) 극단 점수가 있어도 '이상한 아이'가 아니에요. Rothbart & Bates(2006)는 기질을 '생물학적 기반의 개인차'로 보며, 환경이 맞을 때 강점으로 발현된다고 했어요.`;
          script = `**${name}이(혼합형) + ${parentType.type} 맞춤 대화법:**\n\n**P.E.T. 4단계** (Gordon, 1970): "${name}아, 무슨 일이야?" → 적극적 경청 → "어떻게 하면 좋을까?" → 선택과 실행. 프로필에서 낮은 항목(예: 접근성·기분)이 있으면 예고·선택권을, 높은 항목(예: 활동성)이 있으면 에너지 발산 기회를 더 주세요.`;
          practicalTips = [{ title: '프로필 막대 참고', content: `극단이 있는 항목만 골라 케어하세요. 모든 항목을 바꾸려 하지 마세요.`, source: 'Thomas & Chess (1977)' }, { title: '감정 코칭', content: `"화났어", "슬퍼" 같은 감정 이름을 자주 사용해주세요.`, source: 'Gottman, J. (1997)' }, { title: '일관성', content: `규칙은 명확하고 일관되게 적용하세요.`, source: 'Gordon, T. (1970)' }];
          realExamples = [{ situation: '장난감 정리 안 하고 떼쓰기', solution: `"5분 후에 정리할 거야" 예고 → 타이머 → 함께 정리 → 구체적 칭찬`, mom: '32개월 남아 엄마', result: '타이머 소리 들으면 정리 시작해요.' }, { situation: '동생 때리기', solution: `"때리면 아파. 이렇게 해 (쓰다듬기)" + "화났으면 엄마한테 말해"`, mom: '29개월 여아 엄마', result: '"엄마, 화나!" 말로 표현해요.' }];
        } else {
          // 밸런서 (Balanced Child): 어떤 차원도 극단이 아닐 때
          interpretation = `${name}이는 **'${temperamentType.type}' ${temperamentType.emoji}** 기질이에요. ${age} 시기에 각 기질 영역에서 극단적이지 않고 균형을 보이는 건 매우 긍정적이에요. 이런 아이들은 새로운 상황·규칙에 비교적 유연하게 반응하는 편이에요.\n\n여러 상황에 골고루 적응하는 편이라, 유치원·새 환경 적응이 상대적으로 수월할 수 있어요. 피곤하거나 배고프거나 자극이 과할 때는 다른 아이들처럼 짜증·울음이 늘어날 수 있어요. 그때는 휴식·간식·조용한 공간을 먼저 챙겨 주세요.`;
          reassurance = `${name}이(가) 가끔 보이는 문제 행동은 기질보다는 **발달 단계**나 **환경적 요인**과 관련이 있을 가능성이 커요. 엄마는 충분히 잘하고 계세요.`;
          script = `**${name}이(균형형) + ${parentType.type} 맞춤 대화법:**\n\n**P.E.T. 4단계 문제 해결 대화법** (Gordon, 1970):\n\n**1단계: 문제 인식** "${name}아, 무슨 일이야?"\n\n**2단계: 적극적 경청** "(장난감을 뺏겼구나/친구가 같이 안 놀아줬구나). 그래서 속상했어?"\n\n**3단계: 해결책 브레인스토밍** "어떻게 하면 좋을까? ${name}이 생각은?" → Shure & Spivack(1982): 아이가 직접 해결책 제시하면 실행률 3배 ↑\n\n**4단계: 선택과 실행** "좋은 생각이다. 그럼 해볼까?"\n\n**출처:** Gordon, T. (1970). P.E.T. Shure, M.B. & Spivack, G. (1982). Interpersonal problem-solving in young children.`;
          practicalTips = [{ title: '일관성 유지하기', content: `규칙은 명확하게, 일관되게 적용하세요. "안 돼"라고 했으면 끝까지 지키는 게 중요해요.`, source: 'Gordon, T. (1970)' }, { title: '감정 코칭', content: `${age} 아이는 감정 이름을 배우는 중이에요. "화났어", "슬퍼" 같은 단어를 자주 사용해주세요.`, source: 'Gottman, J. (1997)' }, { title: '질보다 양', content: `하루 15분 ${name}이가 주도하는 놀이 시간을 만들어보세요.`, source: 'Lansbury, J. (2014) No Bad Kids' }];
          realExamples = [{ situation: '장난감 정리 안 하고 떼쓰기', solution: `"5분 후에 정리할 거야" 예고 → 타이머 설정 → 함께 정리하기 → "와, ${name}이가 블록 3개나 정리했네!" 구체적 칭찬`, mom: '32개월 남아 엄마', result: '타이머 소리 들으면 이제 알아서 정리 시작해요.' }, { situation: '동생 때리기', solution: `"때리면 아파. 동생한테 이렇게 해 (살짝 쓰다듬기)" 즉각 개입 + "화났으면 엄마한테 말해" 대안 제시`, mom: '29개월 여아 엄마', result: '한 달 정도 걸렸지만 이제 "엄마, 화나!" 말로 표현해요.' }];
        }
        return { interpretation, reassurance, script, childScores, parentScores, temperamentType, parentType, practicalTips, realExamples, concernAnalysis, parentAnalysis };
      };

      const generateResponse = (question, recentHistory = [], summary = null) => {
        const childScores = temperamentQuestions.map((_, i) => childProfile[`q${i}`] || 5);
        const parentScores = parentQuestions.map((_, i) => parentProfile[`p${i}`] || 5);
        const temperamentType = getTemperamentType(childScores);
        const parentType = getParentType(parentScores);
        const name = childInfo.name;
        const age = getChildAge();
        const lowAdaptability = childScores[3] < 5;
        const highActivity = childScores[0] > 7;
        const highSensitivity = childScores[8] > 7;
        const lastAssistant = recentHistory.filter(m => m.role === 'assistant').pop();
        const lastAssistantText = lastAssistant ? (lastAssistant.content || '').slice(0, 800) : '';
        const q = question.trim();
        const isFollowUp = recentHistory.length >= 2;
        const lastAboutEating = /밥|식사|먹|선택권|단계|거부|음식|해 보실|시도해 보실|추천 루틴|식사 시간/.test(lastAssistantText);
        const lastAboutSleep = /잠|수면|루틴|재우기|취침|밤|자려고|재우|잠들|추천 루틴|규칙성/.test(lastAssistantText);
        const lastAboutTantrum = /떼|울|감정|예고|적응/.test(lastAssistantText);

        const curTopic = getTopicFromText(q);
        const topicLabels = { eating: '식사/밥', sleep: '잠/수면', tantrum: '떼쓰기/감정', clothing: '옷 입기', aggression: '또래 관계', other: '' };
        let consultationPrefix = '';
        if (summary?.messageCount >= 1 && curTopic !== 'other' && summary.topicCounts[curTopic] >= 1) {
          consultationPrefix = `${name}이에 대해 지난번에도 ${topicLabels[curTopic]} 이야기 나눠 주셨죠. 그때 말씀드린 방법 시도해 보셨을까요? 이어서 말씀드릴게요.\n\n`;
        } else if (summary?.messageCount >= 3) {
          consultationPrefix = `${name}이에 대해 여러 번 이야기 나눠 주셔서, 조금씩 더 맞춰 드릴 수 있게 되고 있어요.\n\n`;
        }
        const addPrefix = (s) => (consultationPrefix ? consultationPrefix + s : s);
        const _qm = '?';

        if (/틀려|아니에요|다른데|맞지\s*않|안\s*맞|4단계|단계.*틀|그게\s*아니/.test(q)) {
          return addPrefix(`제가 말씀드린 내용이 ${name}이 상황과 다르게 느껴지시는군요. 어느 부분이 특히 그렇게 느껴지셨나요? 혹은 지금 가장 힘드신 게 **떼쓰기, 잠, 밥, 옷 입기, 또래 관계** 중 어떤 것인지 한 가지만 적어 주시면, 그걸 기준으로 다시 맞춰서 말씀드릴게요. 💕`);
        }

        if (isFollowUp && lastAssistantText) {
          if (lastAboutEating && /야채|채소|편식|먹기 싫어|안 먹어|그래도 안|해도 안/.test(q)) {
            if (highSensitivity) {
              return addPrefix(`야채는 질감이나 냄새가 강해서, ${name}이처럼 감각이 예민한 편이면 거부감이 더 크게 느껴질 수 있어요. 무리하게 먹이기보다는 한 가지만 골라서(예: 당근만) 부드럽게 익혀서 퓨레처럼 보여주시고, ${name}이가 손으로 만져 보거나 냄새만 맡게 해 두는 것부터 시작해 보세요. 8~15번 정도 식탁에만 올려두어도 '익숙함'이 생기면서 조금씩 받아들이는 경우가 많아요. 오늘은 '이거 있어'만 말하고 먹으라고 하지 않으셔도 돼요. 💕`);
            }
            if (lowAdaptability) {
              return addPrefix(`야채처럼 새로운 음식은 ${name}이한테 시간이 조금 더 걸리는 편이에요. 같은 야채를 15~20번 정도 식탁에만 올려두시고, 먹으라고 하지 않으셔도 돼요. 좋아하는 음식 옆에 작게 놓아 두시면 \'이거 있어\'만 말해 주세요. 강요할수록 거부가 길어지니까, 오늘은 거부해도 내일 다시 올려만 두시는 걸 2~3주 이어가 보시면 좋아요. 💕`);
            }
            return addPrefix(`야채는 많은 아이들이 단계적으로 받아들이는 음식이에요. 이거 할래` + _qm + ` 저거 할래` + _qm + `로 당근이랑 오이 중에서 골라 보게 하시거나, 밥 위에 살짝 올려만 두고 먹으라고 하지 않으셔도 돼요. 같이 앉아서 엄마가 맛있게 먹는 모습을 보여주시는 것만으로도 도움이 됩니다. 한 가지만 정해서 2주 정도 꾸준히 보여주시다가, 조금 나아지면 그다음 야채를 하나 더 도입해 보세요. 💕`;
          }
          if (lastAboutSleep && /잠|수면|자기|취침|밤|자려고|안\s*자|못\s*자|못자게|재우|잠들|그래도 안|해도 안/.test(q)) {
            const regular = childScores[1] > 7;
            const sleepTipRegular = '몇 시에 재우시나요, 낮잠은 몇 시간이에요';
            const sleepTipOrder = '목욕 → 파자마 → 책 한 권 → 불 끄기';
            const sleepTipNow = '지금 자는 시간이야';
            return addPrefix(regular
              ? `지난번에 말씀드린 루틴(같은 시간, 같은 순서)을 2주 정도 해 보셨을 때도 변화가 없으시면, 취침 시간을 15분만 당겨 보시거나 낮잠이 너무 늦게 끝나지 않았는지 한 번만 점검해 보세요. ${name}이는 규칙성이 있는 편이라, 시간만 조금 맞춰 주시면 금방 잡히는 경우가 많아요. 그래도 안 되시면 그때 ` + sleepTipRegular + ` 같이 조금만 더 알려 주시면 그다음 단계 같이 짚어 드릴게요. 💕`
              : `불규칙한 편인 ${name}이한테는 매일 같은 순서가 더 중요해요. 시간은 조금 달라도 괜찮으니까, ` + sleepTipOrder + `만 매일 똑같이 2~3주 이어가 보세요. 처음엔 저항해도 ` + sleepTipNow + `만 차분히 반복해 주시면 됩니다. 6~8주 넘기시면 차이가 보이는 경우가 많아요. 그동안 해 보시다가 막히는 순간이 있으면 그때 말씀해 주세요. 💕`);
          }
          if (lastAboutTantrum && /떼|울|짜증|그래도|해도 안/.test(q)) {
            return addPrefix(lowAdaptability
              ? `지난번에 말씀드린 예고나 선택권 주기, 한번 해 보셨을까요? 그래도 떼쓰는 순간이 많으시면, 그때는 '지금 속상하구나' 한 번만 말해 주신 뒤 10초 정도 가만히 계시다가, '이거 할래? 저거 할래?'로 다음 행동만 짧게 바꿔 주시면 돼요. ${name}이는 적응이 느린 편이라 같은 말을 여러 번 반복해 주셔야 익숙해져요. 2~3주 꾸준히 하시다가 '이렇게 했는데 이렇다'고 알려 주시면 그다음도 이어서 말씀드릴게요. 💕`
              : `평소엔 적응이 잘되는 ${name}이인데 요즘만 그렇다면, 피곤하거나 배가 고르거나 자극이 많았던 날인지 한번만 돌아보시면 좋아요. 그런 날은 '이거 할래? 저거 할래?'로 선택만 주시고, 말은 짧게 해 주시는 게 좋습니다. 낮잠·취침 시간이 요즘 흐트러지지 않았는지도 점검해 보시고, 1~2주 지나도 같은 정도로 힘드시면 그때 상황을 조금만 더 말씀해 주세요. 💕`);
          }
          if (/얼마나|몇\s*주|몇\s*달|언제쯤|기간|지켜봐|얼마나\s*지켜/.test(q)) {
            const weeks = temperamentType.type === '신중파' ? '2~4주' : temperamentType.type === '에너자이저' ? '6~8주' : temperamentType.type === '섬세파' ? '3~5주' : temperamentType.type === '탐험가' ? '4~6주' : '2~6주';
            return addPrefix(`${name}이(${age})의 **${temperamentType.type}** 기질을 기준으로 말씀드리면, 같은 루틴을 꾸준히 해주실 때 대부분 **${weeks}** 안에 습관이 잡히기 시작해요.\n\n다만 ${temperamentType.type === '에너자이저' ? '감정 강도가 높은 아이는' : temperamentType.type === '신중파' ? '천천히 적응하는 아이는' : '아이마다'} 차이가 있어서, 2주만에 달라지기도 하고 조금 더 걸리기도 해요. 중요한 건 '얼마나 빨리'가 아니라, ${name}이 페이스에 맞춰 **일관되게** 해주시는 거예요.\n\n그동안 조금씩 나아지는 구간이 보이시면 그대로 이어가시고, 전혀 변함이 없다고 느껴지시면 그때 한 번 더 말씀해 주세요. 함께 짚어볼게요. 💕`;
          }
          if (/구체적|예시|어떻게\s*해요|어떻게\s*하나|방법|실제로|해보고/.test(q)) {
            if (lowAdaptability && (lastAssistantText.includes('적응') || lastAssistantText.includes('변화'))) {
              return addPrefix(`실제로 해보시기 좋은 순서를 ${name}이 기질에 맞춰 정리해볼게요.\n\n**1단계 (당일)**\n나가기/자기 전 10~15분 전에 '이제 손 씻고, 신발 신고 나갈 거야'처럼 **단계**를 짧게 말해주세요. '5분 후'만 말하는 것보다 뭘 할지 알려주면 ${name}이처럼 적응이 느린 아이는 마음이 더 준비돼요.\n\n**2단계 (매일)**\n같은 시간에 같은 순서를 반복해 보세요. 예: 목욕 → 파자마 → 양치 → 불 끄기. 2주 정도 꾸준히 하면 '이제 자는 구나'가 몸에 배기 시작해요.\n\n**3단계 (말로 인정)**\n'지금 싫구나. 그래도 이거 하면 엄마랑 같이 누울 수 있잖아.'처럼 감정은 인정하고, 다음 행동만 짧게 말해주시면 돼요.\n\n한 번에 다 하시려 하지 마시고, 1단계만이라도 이번 주에 붙들어 보시다가 편해지면 2단계로 넘어가시면 됩니다. 💕`);
            }
            if (highSensitivity && (lastAssistantText.includes('감각') || lastAssistantText.includes('자극'))) {
              return addPrefix(`실제로 해보시기 좋은 걸 ${name}이처럼 감각이 예민한 아이 기준으로만 말씀드릴게요.\n\n**외출 전**\n'오늘 가는 곳은 사람이 많아서 시끄러울 수 있어. 귀 마개 가져갈까?'처럼 한 번만 미리 말해주세요. 가져가기로 했으면 가방에 넣어 두고, ${name}이가 '시끄러워' 하면 바로 쓸 수 있게 해주세요.\n\n**옷/먹을거**\n태그는 미리 잘라 두시고, 옷은 2~3벌만 보여준 다음 '어떤 게 좋아?' 하고 골라도 좋아요. 먹는 것도 한 번에 한 가지 식감·맛만 도입하고, 거부하면 '오늘은 이거만 있어. 다음에 다시 보자' 정도로 넘어가도 돼요.\n\n**과부하 났을 때**\n말이 줄거나 눈을 피하면 '여기 시끄럽지? 조금만 나가서 쉬자' 하고 데리고 나가 주세요. 설명보다 **환경만 바꿔주는 것**이 더 빨리 진정되는 경우가 많아요.\n\n작은 것부터 하나씩 시도해 보시고, 막히는 부분 있으면 그 상황 그대로 적어 주세요. 💕`);
            }
          }
          if (/왜|이유|원인|그런\s*행동|그렇게\s*돼/.test(q)) {
            const reason = temperamentType.type === '에너자이저' ? '뇌가 작은 자극에도 강하게 반응하는 기질이라, 원하는 대로 안 될 때 감정이 크게 올라와요.' : temperamentType.type === '신중파' ? '새로운 상황을 천천히 관찰한 뒤에야 참여하는 기질이라, 갑작스러운 변화나 압박이 있으면 불안해해요.' : temperamentType.type === '섬세파' ? '소리·빛·촉감을 주변보다 더 세게 느끼는 기질이라, 자극이 많으면 뇌가 \'너무 많아\'라고 반응해요.' : temperamentType.type === '탐험가' ? '움직이고 탐색하는 욕구가 커서, 가만히 있으라고만 하면 에너지가 밖으로 튀어나와요.' : '아이마다 기질이 달라서, 어떤 아이는 변화나 자극에 더 민감하게 반응해요.';
            const reasonLabel = '버릇이 나쁜 거 아니야?';
            return addPrefix(`${name}이가 그렇게 행동하는 이유를 기질 쪽으로만 말씀드리면요.\n\n${name}이는 **${temperamentType.type}**에 가까운 기질이에요. ${reason}\n\n그래서 ` + reasonLabel + `가 아니라, **지금 이 나이에 이 기질이면 자연스럽게 나올 수 있는 반응**에 가깝다고 보시면 돼요. 다만 환경을 조금만 맞춰 주시면—예고, 선택, 조용한 공간 같은 것—같은 상황에서도 훨씬 덜 힘들어하는 걸 많이 봐요.\n\n더 궁금하신 점 있으면 편하게 이어서 물어봐 주세요. 💕`);
          }
          if (/다른|더|추가|또\s*있|이외/.test(q)) {
            let childTip = "에너지가 넘칠 때는 '10번 뛰어와'처럼 짧은 놀이로 한 번 빼 주시면, 그다음 대화나 규칙이 훨씬 잘 들어가요.";
            if (temperamentType.type === '에너자이저') childTip = "감정이 올라왔을 때 '화났구나' 한 번 인정해 주신 뒤, '손은 이렇게 (쓰다듬기)'처럼 대안만 짧게 알려주시면 좋아요.";
            else if (temperamentType.type === '신중파') childTip = "새 장소·새 사람은 강요하지 마시고, '일단 구경만 하자' '하고 싶으면 나중에 해도 돼'라고만 해 주셔도 부담이 줄어요.";
            else if (temperamentType.type === '섬세파') childTip = '조용한 코너나 귀 마개 같은 **대비용**을 미리 두어 두시면, 과부하 전에 스스로 쓰게 도와줄 수 있어요.';
            let parentTip = "한 가지만 정해 보시는 걸 추천해요. '오늘은 예고만 꼭 해보자'처럼요.";
            if (parentType.type === '계획형 엄마') parentTip = "루틴이 깨져도 '오늘은 이렇게 갈게' 하는 플랜 B 하나만 정해 두시면 마음이 덜 흔들려요.";
            else if (parentType.type === '공감형 엄마') parentTip = '반응하기 전 10초만 기다려 보시면, 아이가 스스로 시도할 틈이 생겨요.';
            return addPrefix(`추가로 도움이 될 수 있는 걸 ${name}이·엄마 스타일 기준으로만 말씀드릴게요.\n\n**${name}이 (${temperamentType.type})**\n${childTip}\n\n**엄마 (${parentType.type})**\n${parentTip}\n\n궁금한 게 더 있으면 이어서 물어봐 주세요. 💕`);
          }
        }

        if (/떼|울|짱|짜증/.test(q)) {
          if (lowAdaptability) {
            return addPrefix(`${name}이(${age})는 적응이 조금 느린 **${temperamentType.type}** 기질이라, 뜻대로 안 될 때 감정이 크게 올라오는 경우가 있어요. 이건 ${age} 시기에 더 잘 보이는 특성이에요.\n\n**${name}이한테 맞는 대응:**\n1. **미리 예고** — '손 씻고 신발 신고 나갈 거야'처럼 단계를 알려주세요.\n2. **선택권** — '이거 할래, 저거 할래?'로 스스로 고르게 해 주세요.\n3. **감정 인정** — '${name}아, 지금 속상하구나' 한 번 말해 주시면, 그다음 말이 잘 들어가요.\n\n엄마가 일관되게 이렇게 반응해 주시면, ${name}이도 점점 '예고 → 선택 → 인정' 흐름에 익숙해져요. 더 궁금하시면 이어서 물어봐 주세요. 💕`);
          }
          return addPrefix(`${name}이 기질을 보면 평소엔 적응이 잘되는 편이에요. 그럴 때는 **피곤함·배고픔·자극 과다**를 먼저 점검해 보시면 좋아요.\n\n**체크해 보실 것:**\n· 낮잠·취침 시간이 요즘 흐트러지지 않았나요?\n· 식사 시간이 너무 들쭉날쭉하지는 않나요?\n· 최근 이사, 동생, 어린이집 같은 큰 변화는 없었나요?\n\n이 중 하나만 맞아도 떼쓰기가 잦아질 수 있어요. 어떤 상황에서 가장 자주 그런지 알려주시면, 그때마다 어떻게 말해 주시면 좋을지까지 구체적으로 적어 드릴게요. 💕`);
        }
        if (/잠|수면|자기|취침|잠투정|밤|자려고|안\s*자|못\s*자|못자게|재우|잠들|잘\s*안\s*자/.test(q)) {
          const regular = childScores[1] > 7;
          return addPrefix(`${name}이(${age}) 수면은 지금 나이에 정말 중요해요. ${name}이는 규칙성이 ${regular ? '높은 편' : '낮은 편'}이라, ${regular ? '같은 시간·같은 순서만 지키면 2~3주 안에 루틴이 잡히기 쉬워요.' : '매일 조금씩 달라도 괜찮아요. 대신 \'30분 전부터 불 끄기 → 목욕 → 책 한 권\'처럼 **순서**만 매일 똑같이 해 주세요. 6~8주 꾸준히 하시면 차이가 보여요.'}\n\n**추천 루틴:**\n1. 매일 비슷한 시간에 재우기\n2. 30분 전부터 조명 낮추기\n3. 목욕·책·양치 등 순서 고정\n4. \'이제 자는 시간이야\' 한 마디로 마무리\n\n${regular ? '지금도 루틴이 있으시다면, 시간만 조금만 당기거나 당기지 말고 유지해 보시면 됩니다.' : '처음엔 저항할 수 있어요. 그때는 \'지금 자는 시간이야\'만 차분히 반복해 주시고, 다음 날 다시 같은 순서로 시도해 보세요.'} 더 궁금하시면 이어서 물어봐 주세요. 💕`);
        }
        if (/밥|식사|먹|편식|밥거부|야채|채소/.test(q)) {
          const isAboutVegetables = /야채|채소|편식/.test(q);
          if (isAboutVegetables) {
            if (highSensitivity) {
              return addPrefix(`야채는 질감이나 냄새가 강해서, ${name}이처럼 감각이 예민한 편이면 거부감이 더 크게 느껴질 수 있어요. '안 먹는 것'이 고집이 아니라 느낌이 불편한 것일 수 있어요. 한 가지만 골라서(당근이나 브로콜리처럼) 부드럽게 익혀 퓨레처럼 보여주시고, ${name}이가 손으로 만져 보거나 냄새만 맡게 해 두는 것부터 시작해 보세요. 8~15번 정도 식탁에만 올려두어도 익숙해지면서 조금씩 받아들이는 경우가 많아요. 오늘은 '이거 있어'만 말하고 먹으라고 하지 않으셔도 돼요. 💕`;
            }
            if (lowAdaptability) {
              return addPrefix(`야채처럼 새로운 음식은 ${name}이한테 시간이 조금 더 걸리는 편이에요. 같은 야채를 15~20번 정도 식탁에만 올려두시고 먹으라고 하지 않으셔도 돼요. 좋아하는 음식 옆에 작게 놓아 두시고 '이거 있어'만 말해 주세요. 강요할수록 거부가 길어지니까, 오늘 거부해도 내일 다시 올려만 두시는 걸 2~3주 이어가 보시면 좋아요. 💕`);
            }
            return addPrefix(`${name}이(${age})는 발달상 '내가 고를래'가 강해지는 시기라 밥 거부가 잦을 수 있어요. 야채는 많은 아이들이 단계적으로 받아들이는 음식이에요. \'이거 할래\u003F 저거 할래\u003F\'로 당근이랑 오이 중에서 골라 보게 하시거나, 밥 위에 살짝 올려만 두고 먹으라고 하지 않으셔도 돼요. 같이 앉아서 엄마가 맛있게 먹는 모습을 보여주시는 것만으로도 도움이 됩니다. 한 가지만 정해서 2주 정도 꾸준히 보여주시다가 조금 나아지면 그다음 야채를 하나 더 도입해 보세요. 💕`);
          }
          if (highSensitivity) {
            return addPrefix(`${name}이는 ${temperamentType.type}라 음식의 질감·냄새·온도를 더 세게 느껴요. 그래서 '안 먹는 것'이 고집이 아니라 느낌이 불편한 것일 수 있어요. 한 번에 한 가지 식감만 (부드러운 것 → 단단한 것 순) 보여주시고, ${name}이가 손으로 만져 보게 해 주세요. '이거 먹을래?'만 하고 강요하지 않으시면 돼요. 같은 음식을 8~15번 정도 보여주는 것만으로도 익숙함이 생겨요. ${age}에는 음식 거부가 흔한 시기라 ${name}이 페이스에 맞춰 천천히 노출만 해 주셔도 좋아요. 💕`);
          }
          if (lowAdaptability) {
            return addPrefix(`${name}이는 ${temperamentType.type}라 새로운 걸 받아들이는 데 시간이 조금 더 걸려요. 새 음식은 '오늘은 옆에만 둘게' 하고 먹으라고 하지 않으셔도 돼요. 15~20번 정도 보여주시면 받아들이는 경우가 많아요. 좋아하는 음식 옆에 새 걸 놓고 '이거 있어'만 말해 주세요. 강요할수록 거부가 길어질 수 있어요. 💕`);
          }
          return addPrefix(`${name}이(${age})는 발달상 '내가 고를래'가 강해지는 시기예요. 그래서 밥 거부가 잦을 수 있고, 이건 기질보다 단계에 가까운 경우가 많아요. '이거 할래? 저거 할래?'로 선택권을 주시고, 먹는 양보다 '같이 앉아서 식사 시간'에 초점을 두시면 좋아요. 6~12개월 지나면 많이 나아지는 경우가 많아요. 야채나 특정 음식이 힘드시면 그걸 말씀해 주시면 그다음 방법도 이어서 말씀드릴게요. 💕`);
        }
        if (/때리|공격|밀|싸움|친구.*때/.test(q)) {
          if (highActivity) {
            return addPrefix(`${name}이는 **${temperamentType.type}**라 움직임 욕구가 커요. 때리는 행동이 '나쁜 아이'라서라기보다 **에너지가 밖으로 튀는 것**에 가까워요.\n\n**도움이 되는 것:**\n· 하루 2시간 가까이 뛰기·오르기·공 놀이 같은 대근육 놀이\n· '여기서는 안 돼. 대신 이 공 10번 던져 봐'처럼 **대체 행동** 알려주기\n· 규칙은 짧고 명확하게: '때리면 아파. 손은 이렇게 (쓰다듬기)'\n\n에너지를 놀이로 빼 주시면, 같은 상황에서 덜 튀어나오는 걸 많이 봐요. 더 궁금하시면 이어서 물어봐 주세요. 💕`);
          }
          if (childScores[4] > 7) {
            return addPrefix(`${name}이는 감정이 크게 올라오는 기질이라, 말로 못 할 때 손이 먼저 나갈 수 있어요. '화났구나' 하고 한 번 인정해 주신 뒤, "때리면 아파. 화나면 '엄마 화나!'라고 말해"처럼 **말로 표현하는 법**을 알려 주시면 좋아요.\n\n2~4세쯤 되면 '나 화났어!'라고 말하는 걸 배우면서, 때리는 행동은 많이 줄어드는 경우가 많아요. 그때까지는 말 대신 쓰는 행동을 **바로** '이렇게 말해 보자'로 바꿔 주시면 돼요. 💕`);
          }
          return addPrefix(`${name}이(${age})는 또래들처럼 '상대가 아프다'는 걸 아직 완전히 이해하기 어려운 나이예요. 그래서 때리는 행동이 나와도 **의도적인 공격**이라기보다, 감정이나 호기심이 행동으로 나온 경우가 많아요.\n\n**반복해서 알려 주실 것:**\n'때리면 아파. 손은 이렇게 (부드럽게 쓰다듬기)' — 말과 동작을 같이 보여 주시고, 같은 말을 일관되게 해 주시면 점차 줄어들어요. 상황이 따로 있으면 말씀해 주세요. 💕`);
        }
        if (/옷|입기|거부|옷입|옷감|태그|입히/.test(q)) {
          if (highSensitivity) {
            return addPrefix(`${name}이(${age})는 감각이 예민한 편이라, 옷감 촉감·태그·압박감을 불쾌하게 느낄 수 있어요. 버릇이 아니라 **감각** 때문일 수 있어요. 옷 살 때 ${name}이가 만져 보게 하시고, 태그는 미리 제거해 두세요. 2~3벌만 보여준 뒤 '어떤 게 기분 좋아?' 하고 골라 보게 하시면 거부가 줄어드는 경우가 많아요. 💕`);
          }
          if (lowAdaptability) {
            return addPrefix(`${name}이는 변화나 순서에 민감한 편이에요. '지금 하던 거 말고 옷부터 입자'는 식의 제안이 예상 밖이면 스트레스를 느끼고 거부할 수 있어요. '이제 옷 입을 시간이야'처럼 5분 전에 예고하고, 매일 비슷한 순서(기저귀 → 옷)를 유지해 보세요. '빨간 티 vs 노란 티'처럼 선택권을 주시면 참여가 잘 되는 편이에요. 💕`);
          }
          return addPrefix(`${name}이(${age})는 '내가 고르고 싶다'는 자율성이 커지는 시기라, 옷 입히기를 거부하는 경우가 있어요. '오늘은 이거랑 이거 중에 뭐 입을까?'처럼 작은 선택을 주시거나, '엄마가 도와줄까, ${name}이가 할까?'도 시도해 보시면 좋아요. 💕`);
        }

        const wasGenericFallback = /지금 겪고 계신 상황을 이렇게 이해하시면 좋아요|활동성이 높아 에너지 발산이 필요해요/.test(lastAssistantText);
        if (wasGenericFallback) {
          return addPrefix(`지금 가장 힘드신 게 어떤 상황인가요? 예: **떼쓰기, 잠, 밥, 옷 입기, 또래 관계**처럼 한 가지만 구체적으로 적어 주시면, 그걸 기준으로 맞춰서 말씀드릴게요. 💕`);
        }
        const t = temperamentType.type;
        const shortByType = t === '에너자이저' ? `에너지가 많은 ${name}이에겐 예고와 선택권이 특히 도움이 돼요.`
          : t === '신중파' ? `새로운 걸 천천히 받아들이는 ${name}이에겐 미리 예고하고 순서를 맞춰 주시면 좋아요.`
          : t === '섬세파' ? `감각이 예민한 ${name}이에겐 자극을 줄이고 선택권을 주는 게 도움이 돼요.`
          : t === '탐험가' ? `움직임이 많은 ${name}이에겐 짧은 단위로 예고하고, 끝나면 뛰어놀 시간을 주시면 좋아요.`
          : `${name}이한테 맞는 한 가지 방법을 2~3주 해 보시는 걸 추천해요.`;
        return addPrefix(`${name}이(${age}) **${t}** 기질을 기준으로 말씀드리면, ${shortByType}\n\n지금 **어떤 상황**이 가장 힘드신가요? 한 가지만 적어 주시면 그걸로 구체적으로 말씀드릴게요. 💕`);
      };

      const handleSendMessage = () => {
        if (!currentInput.trim()) return;
        const newMessage = { role: 'user', content: currentInput, timestamp: new Date() };
        const updatedHistory = [...chatHistory, newMessage];
        setChatHistory(updatedHistory);
        setCurrentInput('');
        setIsAnalyzing(true);
        setTimeout(() => {
          let response = generateResponse(currentInput, updatedHistory, consultationSummary);
          response = response.replace(/\*\*(.*?)\*\*/g, '$1');
          const aiMessage = { role: 'assistant', content: response, timestamp: new Date() };
          const finalHistory = [...updatedHistory, aiMessage];
          setChatHistory(finalHistory);
          saveToStorage({ chatHistory: finalHistory });
          const cid = getChildId(childInfo);
          if (cid) {
            const topic = getTopicFromText(currentInput);
            const next = {
              ...consultationSummary,
              topicCounts: { ...consultationSummary.topicCounts, [topic]: (consultationSummary.topicCounts[topic] || 0) + 1 },
              lastTopics: [...(consultationSummary.lastTopics || []).slice(-9), topic],
              messageCount: (consultationSummary.messageCount || 0) + 1,
              updatedAt: new Date().toISOString(),
            };
            saveConsultationForChild(cid, next);
            setConsultationSummary(next);
          }
          setIsAnalyzing(false);
        }, 1200);
      };

      const handleChildInfoSubmit = (e) => {
        e.preventDefault();
        if (childInfo.name && childInfo.birthDate) {
          saveToStorage({ childInfo });
          setStep('profile');
        }
      };

      const handleChildAnswer = (score) => {
        const updated = { ...childProfile, [`q${currentQuestion}`]: score };
        setChildProfile(updated);
        saveToStorage({ childProfile: updated });
        if (currentQuestion < temperamentQuestions.length - 1) setCurrentQuestion(currentQuestion + 1);
        else { setStep('parentProfile'); setCurrentQuestion(0); }
      };

      const handleParentAnswer = (score) => {
        const updated = { ...parentProfile, [`p${currentQuestion}`]: score };
        setParentProfile(updated);
        saveToStorage({ parentProfile: updated });
        if (currentQuestion < parentQuestions.length - 1) setCurrentQuestion(currentQuestion + 1);
        else { setStep('behavior'); setCurrentQuestion(0); }
      };

      const handleBehaviorSubmit = () => {
        if (!behaviorInput.trim()) { alert('고민을 입력해주세요.'); return; }
        saveToStorage({ behaviorInput });
        setStep('report');
      };

      const handleReset = () => {
        if (confirm('모든 데이터가 삭제됩니다. 정말 초기화하시겠어요?')) {
          localStorage.removeItem('gwaenchanayo_data');
          window.location.reload();
        }
      };

      const handleStart = () => setStep('childInfo');

      const colorMap = { green: ['var(--mint-muted)','var(--mint)'], red: ['var(--coral-muted)','var(--coral)'], blue: ['var(--mint-muted)','var(--mint)'], orange: ['var(--warm-yellow-light)','var(--warm-yellow-dark)'], purple: ['var(--mint-muted)','var(--mint)'], teal: ['var(--mint-muted)','var(--mint)'] };
      const parentColorMap = { blue: ['var(--mint-muted)','var(--mint)'], purple: ['var(--mint-muted)','var(--mint)'], pink: ['var(--coral-muted)','var(--coral)'], green: ['var(--mint-muted)','var(--mint)'], teal: ['var(--mint-muted)','var(--mint)'] };

      return (
        <div className="min-h-screen bg-[var(--warm-yellow)]">
          {step === 'welcome' && (
            <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
              <div className="max-w-2xl w-full">
                <div className="text-center mb-6 sm:mb-8" style={{ animation: 'fadeIn 1s ease-in' }}>
                  <div className="inline-block mb-4 sm:mb-6">
                    <img src="logo.png" alt="아이 여행" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain mx-auto" style={{ animation: 'bounce 2s ease-in-out infinite' }} />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-[var(--coral-title)] leading-tight">아이 여행</h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 px-1">&#39;왜 이럴까?&#39;를 &#39;그래서 그랬구나&#39;로 바꿔주는,<br />아이 기질 기반 행동 가이드 서비스</p>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mt-3 sm:mt-4 px-2 leading-snug">아이의 마음 지도를 따라, 함께 여행해볼까요?</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--coral-light)] mb-6 sm:mb-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0"><Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <div><h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">아이의 기질을 정밀 분석해요</h3><p className="text-sm sm:text-base text-gray-600 leading-relaxed">9가지 기질 차원을 측정하여 우리 아이만의 고유한 성향을 파악해요.</p></div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--warm-yellow-soft)] flex items-center justify-center flex-shrink-0"><MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--warm-yellow-dark)]" /></div>
                      <div><h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">언제든 물어보세요</h3><p className="text-sm sm:text-base text-gray-600 leading-relaxed">기질 데이터를 바탕으로 상황별 맞춤 조언을 계속 받을 수 있어요.</p></div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <div><h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">성장 기록이 쌓여요</h3><p className="text-sm sm:text-base text-gray-600 leading-relaxed">고민과 답변이 누적되어 아이의 변화를 추적할 수 있어요.</p></div>
                    </div>
                  </div>
                </div>
                {childInfo.name && Object.keys(childProfile).length > 0 ? (
                  <div className="space-y-3 sm:space-y-4">
                    <button onClick={() => setStep('chat')} className="w-full bg-[var(--coral-button)] text-white text-lg sm:text-xl md:text-2xl font-bold py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-[28px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px]">
                      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" /><span>{childInfo.name}이 상담 계속하기</span>
                    </button>
                    <button onClick={handleStart} className="w-full bg-white border-2 sm:border-3 border-[var(--coral)] text-[var(--coral-dark)] text-base sm:text-lg md:text-xl font-bold py-4 sm:py-5 rounded-2xl sm:rounded-[28px] hover:bg-[var(--coral-muted)] hover:shadow-lg active:scale-[0.98] transition-all duration-300 min-h-[48px]">새로운 아이로 시작하기</button>
                  </div>
                ) : (
                  <button onClick={handleStart} className="w-full bg-[var(--coral-button)] text-white text-lg sm:text-xl md:text-2xl font-bold py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-[28px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px]">
                    <span>지금 시작하기</span><ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
                  </button>
                )}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">⏱️ 약 5분 소요 · 데이터는 기기에 안전하게 저장됩니다</p>
              </div>
            </div>
          )}

          {step === 'childInfo' && (
            <div className="min-h-screen flex flex-col p-4 sm:p-6">
              <div className="flex-1 flex items-center justify-center pt-12 sm:pt-14">
              <div className="max-w-2xl w-full">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--coral-light)]">
                  <div className="text-center mb-6 sm:mb-8">
                    <Baby className="w-14 h-14 sm:w-16 sm:h-16 text-[var(--coral-dark)] mx-auto mb-3 sm:mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 leading-snug px-1">아이의 마음을 알아가는 여행을<br />시작해볼까요?</h2>
                    <p className="text-sm sm:text-base text-gray-600">이름과 생년월일을 알려주시면, 더 정확한 분석이 가능해요.</p>
                  </div>
                  <form onSubmit={handleChildInfoSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">아이 이름</label>
                      <input type="text" value={childInfo.name} onChange={(e) => setChildInfo({ ...childInfo, name: e.target.value })} placeholder="예: 지우" className="w-full p-3 sm:p-4 border-2 border-[var(--coral-light)] rounded-xl sm:rounded-[20px] text-base sm:text-lg focus:outline-none focus:border-[var(--coral)] transition-colors min-h-[48px]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">생년월일</label>
                      <input type="date" value={childInfo.birthDate} onChange={(e) => setChildInfo({ ...childInfo, birthDate: e.target.value })} max={new Date().toISOString().split('T')[0]} className="w-full p-3 sm:p-4 border-2 border-[var(--coral-light)] rounded-xl sm:rounded-[20px] text-base sm:text-lg focus:outline-none focus:border-[var(--coral)] transition-colors min-h-[48px]" required />
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">💡 정확한 월령 계산을 위해 생년월일을 입력해주세요</p>
                    </div>
                    <button type="submit" className="w-full bg-[var(--coral-button)] text-white text-base sm:text-lg md:text-xl font-bold py-4 sm:py-5 rounded-xl sm:rounded-[24px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 min-h-[48px]">다음으로</button>
                  </form>
                </div>
              </div>
              </div>
            </div>
          )}

          {step === 'profile' && (
            <div className="min-h-screen flex flex-col p-4 sm:p-6 relative">
              <div className="flex-1 flex items-center justify-center pt-12 sm:pt-14">
              <div className="max-w-3xl w-full">
                <div className="mb-4 sm:mb-8">
                  <div className="flex justify-between mb-2 sm:mb-3"><span className="text-xs sm:text-sm font-medium text-gray-600">{childInfo.name}이의 마음 여행 {currentQuestion + 1}/{temperamentQuestions.length}</span><span className="text-xs sm:text-sm font-medium text-[var(--coral-dark)]">{Math.round(((currentQuestion + 1) / temperamentQuestions.length) * 100)}%</span></div>
                  <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-[var(--coral)] transition-all duration-500 rounded-full" style={{ width: `${((currentQuestion + 1) / temperamentQuestions.length) * 100}%` }} /></div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--warm-yellow-soft)]" style={{ animation: 'slideUp 0.5s ease-out' }}>
                  <div className="text-center mb-6 sm:mb-8">
                    <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[var(--warm-yellow-light)] text-[var(--warm-yellow-dark)] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">{temperamentQuestions[currentQuestion].dimension}</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug sm:leading-relaxed mb-2 sm:mb-3 px-1 whitespace-pre-line">{temperamentQuestions[currentQuestion].question.replace('{{name}}', childInfo.name)}</h2>
                    <p className="text-xs sm:text-sm text-gray-500 italic">{temperamentQuestions[currentQuestion].description}</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {temperamentQuestions[currentQuestion].options.map((option, idx) => (
                      <button key={idx} onClick={() => handleChildAnswer(option.score)} className="w-full p-4 sm:p-5 bg-[var(--coral-muted)] hover:bg-[var(--coral-light)] border-2 border-[var(--coral-light)] rounded-xl sm:rounded-[20px] text-left transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] hover:shadow-xl group min-h-[52px]">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-2xl sm:text-3xl flex-shrink-0">{option.emoji}</span>
                          <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium flex-1 leading-relaxed text-left">{option.text}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--coral-dark)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}

          {step === 'parentProfile' && (
            <div className="min-h-screen flex flex-col p-4 sm:p-6 relative">
              <div className="flex-1 flex items-center justify-center pt-12 sm:pt-14">
              <div className="max-w-3xl w-full">
                <div className="mb-4 sm:mb-8">
                  <div className="flex justify-between mb-2 sm:mb-3"><span className="text-xs sm:text-sm font-medium text-gray-600">양육자 성향 검사 {currentQuestion + 1}/{parentQuestions.length}</span><span className="text-xs sm:text-sm font-medium text-[var(--mint-dark)]">{Math.round(((currentQuestion + 1) / parentQuestions.length) * 100)}%</span></div>
                  <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-[var(--mint)] transition-all duration-500 rounded-full" style={{ width: `${((currentQuestion + 1) / parentQuestions.length) * 100}%` }} /></div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--mint-light)]">
                  <div className="text-center mb-6 sm:mb-8">
                    <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[var(--mint-muted)] text-[var(--mint-dark)] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">{parentQuestions[currentQuestion].dimension}</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug sm:leading-relaxed mb-2 sm:mb-3 px-1 whitespace-pre-line">{parentQuestions[currentQuestion].question}</h2>
                    <p className="text-xs sm:text-sm text-gray-500 italic">{parentQuestions[currentQuestion].description}</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {parentQuestions[currentQuestion].options.map((option, idx) => (
                      <button key={idx} onClick={() => handleParentAnswer(option.score)} className="w-full p-4 sm:p-5 bg-[var(--mint-muted)] hover:bg-[var(--mint-light)] border-2 border-[var(--mint-light)] rounded-xl sm:rounded-[20px] text-left transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] hover:shadow-xl group min-h-[52px]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium leading-relaxed flex-1">{option.text}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--mint-dark)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}

          {step === 'behavior' && (
            <div className="min-h-screen flex flex-col p-4 sm:p-6">
              <div className="flex-1 flex items-center justify-center pt-12 sm:pt-14">
              <div className="max-w-3xl w-full">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--warm-yellow-soft)]">
                  <div className="text-center mb-5 sm:mb-8">
                    <MessageCircle className="w-14 h-14 sm:w-16 sm:h-16 text-[var(--warm-yellow-dark)] mx-auto mb-3 sm:mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 leading-snug px-1">요즘 {childInfo.name}이,<br />어떤 행동이 제일 힘드신가요?</h2>
                    <p className="text-sm sm:text-base text-gray-600">구체적으로 적어주시면 더 정확한 조언을 드릴 수 있어요.</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="bg-[var(--warm-yellow-light)] rounded-xl sm:rounded-[20px] p-4 sm:p-5 border-2 border-[var(--warm-yellow-soft)]">
                      <p className="text-xs sm:text-sm text-[var(--warm-yellow-dark)] font-medium mb-2 sm:mb-3">💡 이렇게 적어보세요:</p>
                      <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                        <li>• "마트에서 과자 사달라고 바닥에 드러누워 울어요"</li>
                        <li>• "밤마다 잠투정이 심해서 2시간씩 안 자요"</li>
                        <li>• "어린이집 등원할 때마다 울면서 떼를 써요"</li>
                        <li>• "동생을 때리고 밀쳐요"</li>
                      </ul>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">자주 있는 고민을 빠르게 선택해보세요</p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {['떼쓰고 울어요', '잠을 안 자요', '밥을 안 먹어요', '친구를 때려요', '낯선 사람만 보면 울어요', '옷 입기를 거부해요'].map((example, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBehaviorInput(example)}
                          className="p-3 sm:p-4 bg-[var(--warm-yellow-light)] border-2 border-[var(--warm-yellow-soft)] rounded-xl sm:rounded-[16px] text-xs sm:text-sm text-gray-700 font-medium hover:bg-[var(--warm-yellow-soft)] hover:border-[var(--warm-yellow-dark)] transition-all text-center min-h-[44px]"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea value={behaviorInput} onChange={(e) => setBehaviorInput(e.target.value)} placeholder={`예: ${childInfo.name}이가 목욕하기 싫다고 매일 울어요. 억지로 하면 더 심하게 울고...`} className="w-full h-32 sm:h-40 p-4 sm:p-5 border-2 border-[var(--warm-yellow-soft)] rounded-xl sm:rounded-[20px] text-base sm:text-lg focus:outline-none focus:border-[var(--warm-yellow-dark)] transition-colors resize-none" />
                  <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <button onClick={() => { if (behaviorInput.trim()) { saveToStorage({ behaviorInput }); setStep('report'); } else alert('고민을 입력해주세요 🙏'); }} className="w-full bg-[var(--warm-yellow-button)] text-white text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 rounded-xl sm:rounded-[20px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 min-h-[48px]">분석 결과 보기 →</button>
                  </div>
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">💬 나중에 채팅에서도 언제든 질문할 수 있어요</p>
                </div>
              </div>
              </div>
            </div>
          )}

          {step === 'report' && (() => {
            const result = analyzeTemperament();
            const tc = colorMap[result.temperamentType.color] || colorMap.teal;
            const pc = parentColorMap[result.parentType.color] || parentColorMap.teal;
            return (
            <div className="min-h-screen p-4 sm:p-6 py-8 sm:py-12 bg-[var(--warm-yellow)]">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 sm:mb-12" style={{ animation: 'fadeIn 1s ease-in' }}>
                  <div className="inline-block mb-4 sm:mb-6">
                    <img src="report-heart.png" alt="아이 여행" className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mx-auto" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[var(--coral-dark)] leading-tight">아이 여행</h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-2 leading-snug">오늘, 아이의 마음 지도를 함께 펼쳐봅니다.</p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-500">{childInfo.name}이, {getChildAge()}</p>
                </div>
                <div className="bg-white rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-xl border-2 sm:border-4 border-[var(--coral-light)] mb-6 sm:mb-8">
                  <div className="text-center mb-6 sm:mb-10">
                    <div className="inline-block px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-[24px] mb-3 sm:mb-4 bg-[var(--coral-muted)] border-2 border-[var(--coral-light)] text-center">
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div><h3 className="text-xl sm:text-2xl font-bold text-gray-800">{result.temperamentType.type}</h3><p className="text-xs sm:text-sm text-gray-600">{result.temperamentType.english}</p></div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed px-1">{result.temperamentType.description}</p>
                  </div>
                  <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--coral-light)]">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0"><BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{childInfo.name}이는 어떤 아이인가요?</h2>
                    </div>
                    <div className="bg-[var(--coral-muted)] rounded-xl sm:rounded-[24px] p-5 sm:p-8 border-2 border-[var(--coral-light)]">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: result.interpretation.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--coral-dark);font-weight:700">$1</strong>') }} />
                      <p className="text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-[var(--coral-light)]">
                        Thomas & Chess(1977)의 뉴욕 종단 연구에 따르면 기질은 생후 초기부터 관찰되는 선천적 성향입니다. Rothbart & Bates(2006)는 기질을 &#39;생물학적 기반의 정서·주의·활동성 개인차&#39;로 정의하며, 양육 방식이 아닌 아이 고유의 특성임을 강조합니다.
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--coral-light)]">
                    <div className="bg-[var(--coral-muted)] rounded-xl sm:rounded-[24px] p-5 sm:p-8 border-2 border-[var(--coral-light)]">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                        <Baby className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[var(--coral-dark)] flex-shrink-0" />
                        {childInfo.name}이의 기질 프로필
                      </h3>
                      <div className="space-y-4">
                        {temperamentQuestions.map((q, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between mb-2"><span className="text-sm font-medium text-gray-700">{q.dimension}</span><span className="text-sm font-bold text-[var(--coral-dark)]">{result.childScores[idx]}/10</span></div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-[var(--coral)] rounded-full transition-all duration-1000" style={{ width: `${(result.childScores[idx] / 10) * 100}%` }} /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--mint-light)]">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0"><User className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">엄마는 어떤 육아 스타일인가요?</h2>
                    </div>
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="inline-block px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-[24px]" style={{ backgroundColor: pc[0], border: '2px solid', borderColor: pc[1] }}>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-left"><h3 className="text-lg sm:text-xl font-bold text-gray-800">{result.parentType.type}</h3><p className="text-xs sm:text-sm text-gray-600">{result.parentType.english}</p></div>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 px-1">{result.parentType.description}</p>
                    </div>
                    <div className="bg-[var(--mint-muted)] rounded-xl sm:rounded-[24px] p-5 sm:p-8 border-2 border-[var(--mint-light)]">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: result.parentAnalysis.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--mint-dark);font-weight:700">$1</strong>') }} />
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-[var(--mint-light)]">
                        반응성(온정)과 요구도(통제)가 균형 잡힌 양육 스타일은 아동의 사회적·정서적 발달에 긍정적 영향을 줄 수 있어요.
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-6 bg-white rounded-xl sm:rounded-[20px] p-4 sm:p-6 border-2 border-[var(--mint-light)]">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">엄마의 양육 성향 프로필</h3>
                      <div className="space-y-3">
                        {parentQuestions.map((q, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{q.dimension}</span>
                              <span className="text-sm font-bold text-[var(--mint-dark)]">{result.parentScores[idx]}/10</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--mint)] rounded-full transition-all duration-1000" style={{ width: `${(result.parentScores[idx] / 10) * 100}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {result.concernAnalysis && behaviorInput && (
                    <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--mint-light)]">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0"><MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">엄마의 고민</h2>
                      </div>
                      <div className="bg-[var(--mint-muted)] rounded-xl sm:rounded-[24px] p-5 sm:p-8 border-2 border-[var(--mint-light)]">
                        <div className="bg-white rounded-xl sm:rounded-[16px] p-3 sm:p-4 mb-3 sm:mb-4"><p className="text-xs sm:text-sm text-[var(--mint-dark)] font-medium mb-2">엄마가 적어주신 고민</p><p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">"{behaviorInput}"</p></div>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: result.concernAnalysis.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--mint-dark);font-weight:700">$1</strong>') }} />
                      </div>
                    </div>
                  )}
                  <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--mint-light)]">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">바로 쓸 수 있는 대화법</h2>
                    </div>
                    <div className="bg-[var(--mint-muted)] rounded-xl sm:rounded-[24px] p-5 sm:p-8 border-2 border-[var(--mint-light)]">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: result.script.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--mint-dark);font-weight:700">$1</strong>').replace(/📚\s*/g, '<br/><br/>') }} />
                    </div>
                  </div>
                  {result.practicalTips && result.practicalTips.length > 0 && (
                    <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--mint-light)]">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0"><BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">실전 육아 팁</h2>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        {result.practicalTips.map((tip, idx) => (
                          <div key={idx} className="bg-[var(--mint-muted)] rounded-xl sm:rounded-[20px] p-4 sm:p-6 border-2 border-[var(--mint-light)]">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 flex items-center"><span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--mint)] text-white flex items-center justify-center text-xs sm:text-sm mr-2 flex-shrink-0">{idx + 1}</span>{tip.title}</h3>
                            <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">{tip.content}</p>
                            <p className="text-xs text-[var(--mint-dark)] italic">출처: {tip.source}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {result.realExamples && result.realExamples.length > 0 && (
                    <div className="mb-6 sm:mb-8 pb-6 sm:pb-10 border-b-2 border-dashed border-[var(--warm-yellow-soft)]">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--warm-yellow-dark)] flex items-center justify-center flex-shrink-0"><MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">비슷한 기질 아이 엄마들의 실제 해결법</h2>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        {result.realExamples.map((example, idx) => (
                          <div key={idx} className="bg-[var(--warm-yellow-light)] rounded-xl sm:rounded-[20px] p-4 sm:p-6 border-2 border-[var(--warm-yellow-soft)]">
                            <div className="flex items-start gap-2 sm:gap-3 mb-3">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">상황: {example.situation}</h4>
                                <div className="bg-white rounded-xl sm:rounded-[12px] p-3 sm:p-4 mb-2 sm:mb-3">
                                  <p className="text-xs sm:text-sm text-gray-600 mb-1">해결 방법</p>
                                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{example.solution}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm">
                                  <span className="text-[var(--warm-yellow-dark)] font-medium">{example.mom}</span>
                                  <span className="text-[var(--warm-yellow-dark)] font-medium">{example.result}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
                    <button onClick={() => { setStep('chat'); saveToStorage(); }} className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[var(--coral-button)] text-white font-bold rounded-xl sm:rounded-[24px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px]"><MessageCircle className="w-5 h-5 flex-shrink-0" /><span>계속 상담하기</span></button>
                    <button onClick={() => setStep('welcome')} className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white border-2 sm:border-3 border-[var(--mint)] text-[var(--mint-dark)] font-bold rounded-xl sm:rounded-[24px] hover:bg-[var(--mint-muted)] hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px]"><Home className="w-5 h-5 flex-shrink-0" /><span>홈으로</span></button>
                    <button onClick={handleReset} className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white border-2 sm:border-3 border-[var(--coral)] text-[var(--coral-dark)] font-bold rounded-xl sm:rounded-[24px] hover:bg-[var(--coral-muted)] hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px]"><RotateCcw className="w-5 h-5 flex-shrink-0" /><span>초기화</span></button>
                  </div>
                </div>
                {showFeedbackPopup && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowFeedbackPopup(false)}>
                    <div className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-8 max-w-md w-full shadow-xl border-2 border-[var(--coral-light)]" onClick={(e) => e.stopPropagation()}>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">어떤 점이 아쉬우셨나요?</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">간략히 적어주시면 서비스 개선에 참고할게요.</p>
                      <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} placeholder="예: 결과가 조금 일반적으로 느껴져요, 더 구체적인 팁이 있으면 좋겠어요" className="w-full h-24 sm:h-28 p-3 sm:p-4 border-2 border-[var(--coral-light)] rounded-xl resize-none text-sm sm:text-base focus:outline-none focus:border-[var(--coral)]" maxLength={500} />
                      <div className="flex gap-3 mt-4">
                        <button type="button" onClick={() => { saveFeedback('아쉬워요', feedbackText); sendFeedbackToSlack('아쉬워요', feedbackText, childInfo.name, childInfo.birthDate, getChildAge()); setFeedbackGiven(true); setShowFeedbackPopup(false); setFeedbackText(''); }} className="flex-1 py-3 bg-[var(--coral-button)] text-white font-bold rounded-xl hover:opacity-90 min-h-[48px]">보내기</button>
                        <button type="button" onClick={() => { setShowFeedbackPopup(false); setFeedbackText(''); }} className="px-5 py-3 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 min-h-[48px]">취소</button>
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 px-2 leading-relaxed">이 분석은 Chess & Thomas의 아동 기질 이론을 바탕으로 제작되었습니다. 전문적인 의학적 진단이 필요한 경우 소아청소년과 전문의와 상담하세요.</p>
                {!feedbackGiven && (
                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-dashed border-[var(--coral-light)]">
                    <p className="text-center text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">아이 여행 어떠셨나요?</p>
                    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                      <button type="button" onClick={() => { saveFeedback('좋았어요', ''); sendFeedbackToSlack('좋았어요', '', childInfo?.name || '', childInfo?.birthDate || '', getChildAge()); setFeedbackGiven(true); }} className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--coral)] text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-[20px] hover:opacity-90 transition-all min-h-[48px]">좋았어요</button>
                      <button type="button" onClick={() => setShowFeedbackPopup(true)} className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-700 text-sm sm:text-base font-bold rounded-xl sm:rounded-[20px] hover:bg-gray-50 transition-all min-h-[48px]">아쉬워요</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            );
          })()}

          {step === 'chat' && (
            <div className="min-h-screen flex flex-col">
              <div className="bg-white border-b-2 sm:border-b-4 border-[var(--coral-light)] p-4 sm:p-6 shadow-lg">
                <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0"><Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" /></div>
                    <div className="min-w-0">
                      <h1 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">{childInfo.name}이 ({getChildAge()})</h1>
                      <p className="text-xs sm:text-sm text-gray-500">언제든 궁금한 걸 물어보세요 💕</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <button onClick={() => setStep('report')} className="p-2.5 sm:p-3 rounded-full bg-[var(--mint-muted)] hover:bg-[var(--mint-light)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" title="기질 프로필 보기"><User className="w-5 h-5 text-[var(--mint-dark)]" /></button>
                    <button onClick={() => { if (confirm('처음 화면으로 돌아가시겠어요? (데이터는 보존됩니다)')) setStep('welcome'); }} className="p-2.5 sm:p-3 rounded-full bg-[var(--mint-muted)] hover:bg-[var(--mint-light)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" title="홈으로"><Home className="w-5 h-5 text-[var(--mint-dark)]" /></button>
                    <button onClick={handleReset} className="p-2.5 sm:p-3 rounded-full bg-[var(--coral-muted)] hover:bg-[var(--coral-light)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" title="초기화"><RotateCcw className="w-5 h-5 text-[var(--coral-dark)]" /></button>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                  {chatHistory.length === 0 ? (
                    <div className="text-center py-8 sm:py-12">
                      <Sparkles className="w-14 h-14 sm:w-16 sm:h-16 text-[var(--warm-yellow-dark)] mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2 px-1">{childInfo.name}이에 대해 궁금한 게 있으신가요?</h3>
                      <p className="text-sm sm:text-base text-gray-500 px-2">저장된 기질 데이터를 바탕으로 상황별 맞춤 조언을 드릴게요.</p>
                      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                        {['요즘 자꾸 떼를 써요', '밤에 잘 안 자려고 해요', '밥을 잘 안 먹어요', '친구들과 놀 때 때려요'].map((q, i) => (
                          <button key={i} onClick={() => setCurrentInput(q)} className="p-4 sm:p-4 bg-white border-2 border-[var(--coral-light)] rounded-xl sm:rounded-[16px] text-left hover:bg-[var(--coral-muted)] hover:border-[var(--coral)] transition-all min-h-[48px]"><p className="text-sm sm:text-base text-gray-700 font-medium">{q}</p></button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    chatHistory.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] sm:max-w-2xl ${msg.role === 'user' ? 'bg-[var(--coral)] text-white' : 'bg-white border-2 border-[var(--coral-light)]'} rounded-2xl sm:rounded-[20px] p-4 sm:p-5 shadow-lg`}>
                          <p className={`text-sm sm:text-base ${msg.role === 'user' ? 'text-white' : 'text-gray-800'} whitespace-pre-line leading-relaxed`}>{msg.content}</p>
                          <p className={`text-xs mt-2 ${msg.role === 'user' ? 'text-white/80' : 'text-gray-400'}`}>{new Date(msg.timestamp).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                      </div>
                    ))
                  )}
                  {isAnalyzing && (
                    <div className="flex justify-start">
                      <div className="bg-white border-2 border-[var(--coral-light)] rounded-2xl sm:rounded-[20px] p-4 sm:p-5 shadow-lg">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-[var(--coral)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-3 h-3 bg-[var(--coral)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-3 h-3 bg-[var(--coral)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white border-t-2 sm:border-t-4 border-[var(--coral-light)] p-4 sm:p-6 shadow-lg">
                <div className="max-w-4xl mx-auto flex gap-3 sm:gap-4">
                  <input type="text" value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder={`${childInfo.name}이에 대해 궁금한 점을...`} className="flex-1 min-w-0 p-3 sm:p-4 border-2 border-[var(--coral-light)] rounded-xl sm:rounded-[20px] text-base sm:text-lg focus:outline-none focus:border-[var(--coral)] transition-colors disabled:opacity-60" disabled={isAnalyzing} />
                  <button onClick={handleSendMessage} disabled={!currentInput.trim() || isAnalyzing} className="px-4 sm:px-6 py-3 sm:py-4 bg-[var(--coral-button)] text-white rounded-xl sm:rounded-[20px] hover:opacity-90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 min-h-[48px] flex items-center justify-center"><Send className="w-5 h-5 sm:w-6 sm:h-6" /></button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

    try {
      const rootEl = document.getElementById('root');
      if (rootEl) {
        const root = ReactDOM.createRoot(rootEl);
        root.render(<GwaenchanaYoApp />);
      }
    } catch (err) {
      const el = document.getElementById('root');
      if (el) {
        el.innerHTML = '<div style="padding:2rem;text-align:center;font-family:system-ui,sans-serif;max-width:420px;margin:0 auto;"><p style="margin-bottom:1rem;">스크립트 실행 중 오류가 발생했습니다.</p><p style="color:#666;font-size:0.9rem;">' + (err && err.message ? String(err.message) : '') + '</p><p style="margin-top:1rem;"><a href="" style="color:#ec9585;font-weight:bold;">새로고침</a></p></div>';
      }
      console.error(err);
    }
  