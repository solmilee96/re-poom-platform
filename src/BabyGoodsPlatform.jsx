import React, { useState } from 'react';
import { Search, MapPin, Heart, MessageCircle, Star, AlertCircle, Calendar, User, Home, Package, Users, Settings, Share, ChevronLeft } from 'lucide-react';

const BabyGoodsPlatform = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [babyAge, setBabyAge] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedItems, setLikedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const colors = {
    primary: '#8B7355',
    secondary: '#9CAF88',
    accent: '#D4A574',
    bg: '#FAF8F5',
    card: '#FFFFFF',
    text: '#5C4A3A',
    textLight: '#8B7D6B',
    border: '#E8E3DC',
  };

  const marketItems = [
    { id: 1, title: '스토케 유모차 (거의 새것)', price: 350000, originalPrice: 800000, location: '분당구', ageRange: '0-24개월', usedMonths: 8, safetyGrade: 'safe', images: 1, likes: 24, views: 156 },
    { id: 2, title: '조이 스핀 360 카시트', price: 180000, originalPrice: 400000, location: '분당구', ageRange: '0-48개월', usedMonths: 12, safetyGrade: 'caution', images: 3, likes: 15, views: 89 },
    { id: 3, title: '아기 침대 + 매트리스', price: 150000, originalPrice: 350000, location: '수정구', ageRange: '0-36개월', usedMonths: 18, safetyGrade: 'notRecommended', images: 4, likes: 8, views: 45 },
    { id: 4, title: '피셔프라이스 점퍼루', price: 45000, originalPrice: 120000, location: '분당구', ageRange: '6-12개월', usedMonths: 4, safetyGrade: 'safe', images: 2, likes: 32, views: 201 },
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '🏠' },
    { id: 'stroller', name: '유모차', icon: '🚼' },
    { id: 'carseat', name: '카시트', icon: '🚗' },
    { id: 'toy', name: '장난감', icon: '🧸' },
  ];

  const safetyInfo = {
    safe: { label: '중고 안전', bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    caution: { label: '주의 필요', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    notRecommended: { label: '신품 권장', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' }
  };

  const ProductCard = ({ item }) => {
    const safety = safetyInfo[item.safetyGrade];
    const isLiked = likedItems[item.id];
    const recommended = babyAge >= parseInt(item.ageRange.split('-')[0]) && babyAge <= parseInt(item.ageRange.split('-')[1]);
    
    return (
      <div onClick={() => setSelectedItem(item)} className="rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-95 transition-all" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
        {recommended && (
          <div className="text-white text-xs py-2 text-center font-semibold" style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})` }}>
            우리 아기 추천 ✨
          </div>
        )}
        <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-50 relative">
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-white shadow">{item.images}장</div>
          <button onClick={(e) => { e.stopPropagation(); setLikedItems({...likedItems, [item.id]: !isLiked}); }} 
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md active:scale-95">
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-400 text-red-400' : 'text-gray-400'}`} />
          </button>
        </div>
        <div className="p-4">
          <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold mb-2 ${safety.bg} ${safety.text} border ${safety.border}`}>
            {safety.label}
          </div>
          <h4 className="font-semibold text-sm mb-1.5 line-clamp-2" style={{ color: colors.text }}>{item.title}</h4>
          <div className="text-xs mb-2" style={{ color: colors.textLight }}>{item.ageRange} · {item.usedMonths}개월 사용</div>
          <div className="flex items-baseline mb-3">
            <span className="text-lg font-bold" style={{ color: colors.primary }}>{(item.price / 10000)}만원</span>
            <span className="text-xs text-gray-400 line-through ml-2">{(item.originalPrice / 10000)}만원</span>
          </div>
          <div className="flex justify-between text-xs" style={{ color: colors.textLight }}>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{item.location}</span>
            <span>관심 {item.likes + (isLiked ? 1 : 0)}</span>
          </div>
        </div>
      </div>
    );
  };

  const MarketTab = () => (
    <div className="pb-24">
      <div className="rounded-2xl p-5 mb-4 shadow-sm" style={{ backgroundColor: colors.secondary + '30', border: `1px solid ${colors.secondary}40` }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold" style={{ color: colors.text }}>우리 아기 정보</span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: colors.secondary }}>{babyAge}개월</span>
        </div>
        <input type="range" min="0" max="60" value={babyAge} onChange={(e) => setBabyAge(parseInt(e.target.value))}
          className="w-full h-2 rounded-full" style={{ background: `linear-gradient(to right, ${colors.secondary} ${(babyAge/60)*100}%, ${colors.border} ${(babyAge/60)*100}%)` }} />
      </div>

      <div className="mb-4 overflow-x-auto">
        <div className="flex space-x-2">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap"
              style={{ backgroundColor: selectedCategory === cat.id ? colors.primary : colors.card, 
                color: selectedCategory === cat.id ? 'white' : colors.text,
                border: `1px solid ${selectedCategory === cat.id ? colors.primary : colors.border}` }}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {marketItems.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </div>
  );

  const DetailPage = ({ item }) => {
    const safety = safetyInfo[item.safetyGrade];
    const isLiked = likedItems[item.id];
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" style={{ backgroundColor: colors.bg }}>
        <div className="sticky top-0 z-10 p-4 flex justify-between backdrop-blur-lg" style={{ backgroundColor: colors.card + 'F0', borderBottom: `1px solid ${colors.border}` }}>
          <button onClick={() => setSelectedItem(null)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.bg }}>
            <ChevronLeft className="w-6 h-6" style={{ color: colors.text }} />
          </button>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.bg }}>
              <Share className="w-5 h-5" style={{ color: colors.text }} />
            </button>
            <button onClick={() => setLikedItems({...likedItems, [item.id]: !isLiked})} 
              className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.bg }}>
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-400 text-red-400' : ''}`} style={{ color: isLiked ? '' : colors.text }} />
            </button>
          </div>
        </div>

        <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-50 relative">
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">1 / {item.images}</div>
        </div>

        <div className="p-5 rounded-t-3xl -mt-6 relative" style={{ backgroundColor: colors.card }}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: colors.secondary + '40' }}>👶</div>
              <div className="ml-3">
                <div className="font-bold" style={{ color: colors.text }}>육아맘123</div>
                <div className="text-xs" style={{ color: colors.textLight }}>14개월 아기 엄마</div>
              </div>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full" style={{ backgroundColor: colors.accent + '20' }}>
              <Star className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
              <span className="ml-1 text-sm font-bold" style={{ color: colors.accent }}>4.8</span>
            </div>
          </div>

          <div className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold mb-3 ${safety.bg} ${safety.text} border ${safety.border}`}>
            {safety.label}
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: colors.text }}>{item.title}</h2>
          <div className="flex items-baseline mb-5">
            <span className="text-3xl font-bold" style={{ color: colors.primary }}>{(item.price / 10000)}만원</span>
            <span className="text-lg text-gray-400 line-through ml-3">{(item.originalPrice / 10000)}만원</span>
            <span className="ml-3 text-sm font-bold px-2 py-1 rounded-lg" style={{ backgroundColor: colors.accent + '20', color: colors.accent }}>
              {Math.round((1 - item.price / item.originalPrice) * 100)}% 할인
            </span>
          </div>

          <div className="rounded-2xl p-4 mb-5 space-y-3" style={{ backgroundColor: colors.bg }}>
            <div className="flex justify-between text-sm">
              <span style={{ color: colors.textLight }}>적정 개월수</span>
              <span className="font-semibold" style={{ color: colors.text }}>{item.ageRange}</span>
            </div>
            <div style={{ height: '1px', backgroundColor: colors.border }}></div>
            <div className="flex justify-between text-sm">
              <span style={{ color: colors.textLight }}>사용 기간</span>
              <span className="font-semibold" style={{ color: colors.text }}>{item.usedMonths}개월</span>
            </div>
            <div style={{ height: '1px', backgroundColor: colors.border }}></div>
            <div className="flex justify-between text-sm">
              <span style={{ color: colors.textLight }}>거래 지역</span>
              <span className="font-semibold" style={{ color: colors.text }}>성남시 {item.location}</span>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-bold mb-3 flex items-center" style={{ color: colors.text }}>
              <AlertCircle className="w-5 h-5 mr-2" style={{ color: colors.primary }} />
              중고 구매 안전 정보
            </h3>
            <div className={`rounded-2xl p-4 ${safety.bg} border ${safety.border}`}>
              <p className={`font-semibold mb-1 text-sm ${safety.text}`}>
                {item.safetyGrade === 'safe' && '✓ 중고 구매 안전'}
                {item.safetyGrade === 'caution' && '! 주의해서 확인하세요'}
                {item.safetyGrade === 'notRecommended' && '✗ 신품 구매 권장'}
              </p>
              <p className="text-xs" style={{ color: colors.textLight }}>
                {item.safetyGrade === 'safe' && '이 제품은 중고로 구매해도 안전하게 사용할 수 있어요.'}
                {item.safetyGrade === 'caution' && '안전벨트, 잠금장치 등을 꼼꼼히 확인하고 구매하세요.'}
                {item.safetyGrade === 'notRecommended' && '매트리스 등 위생이 중요한 제품은 신품 구매를 권장해요.'}
              </p>
            </div>
          </div>

          <div className="pb-20">
            <h3 className="font-bold mb-3" style={{ color: colors.text }}>상품 설명</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
              안녕하세요! {item.usedMonths}개월 사용한 제품입니다. 큰 하자 없이 깨끗하게 사용했어요. 
              직거래 선호하며, 성남시 {item.location}에서 거래 가능합니다.
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 max-w-md mx-auto backdrop-blur-xl" style={{ backgroundColor: colors.card + 'F0', borderTop: `1px solid ${colors.border}` }}>
          <div className="flex space-x-3">
            <button className="flex-1 py-4 rounded-2xl font-bold" style={{ backgroundColor: colors.bg, color: colors.text }}>채팅하기</button>
            <button className="flex-1 py-4 rounded-2xl font-bold text-white" style={{ backgroundColor: colors.primary }}>구매하기</button>
          </div>
        </div>
      </div>
    );
  };

  const RentalTab = () => (
    <div className="pb-24">
      <div className="rounded-2xl p-5 mb-5 shadow-sm" style={{ backgroundColor: colors.primary + '15', border: `1px solid ${colors.primary}40` }}>
        <h3 className="font-bold mb-2" style={{ color: colors.text }}>🤝 육아맘들끼리 대여해요!</h3>
        <p className="text-xs leading-relaxed" style={{ color: colors.textLight }}>
          잠깐만 필요한 육아템, 이웃 엄마와 나눠써요. 보증금은 안전하게 보관되며, 반납 시 환불됩니다.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { id: 1, title: '아기체육관 (플레이매트)', rentalPrice: 5000, deposit: 30000, ageRange: '0-12개월', owner: '엄마A', rating: 4.9, count: 3, safetyGrade: 'safe' },
          { id: 2, title: '범보의자 (식사용)', rentalPrice: 3000, deposit: 20000, ageRange: '4-14개월', owner: '엄마B', rating: 5.0, count: 7, safetyGrade: 'caution' },
          { id: 3, title: '보행기', rentalPrice: 4000, deposit: 25000, ageRange: '7-15개월', owner: '엄마C', rating: 4.8, count: 5, safetyGrade: 'safe' },
        ].map(item => {
          const safety = safetyInfo[item.safetyGrade];
          return (
            <div key={item.id} className="rounded-2xl p-5 shadow-sm" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
              <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-2 ${safety.bg} ${safety.text} border ${safety.border}`}>
                  {safety.label}
                </div>
                <h4 className="font-bold text-base mb-1" style={{ color: colors.text }}>{item.title}</h4>
                <div className="text-xs" style={{ color: colors.textLight }}>{item.ageRange}</div>
              </div>
              
              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: colors.bg }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm" style={{ color: colors.textLight }}>일 대여료</span>
                  <span className="font-bold" style={{ color: colors.primary }}>{item.rentalPrice.toLocaleString()}원/일</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: colors.textLight }}>보증금</span>
                  <span className="font-semibold" style={{ color: colors.text }}>{(item.deposit / 10000)}만원</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" style={{ color: colors.textLight }} />
                  <span className="font-medium" style={{ color: colors.text }}>{item.owner}</span>
                  <div className="flex items-center ml-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs ml-1">{item.rating}</span>
                  </div>
                </div>
                <span className="text-xs" style={{ color: colors.textLight }}>대여 {item.count}회</span>
              </div>

              <button className="w-full py-3 rounded-2xl font-bold text-white active:scale-95 transition-all" style={{ backgroundColor: colors.secondary }}>
                대여 신청하기
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  const CommunityTab = () => (
    <div className="pb-24 space-y-3">
      {[
        { title: '분당 육아맘 모임 참여하실 분~', author: '분당엄마', likes: 45, comments: 23 },
        { title: '스토케 유모차 vs 부가부 고민중', author: '초보맘123', likes: 67, comments: 89 },
        { title: '중고 카시트 살 때 꼭 확인할 것', author: '베테랑맘', likes: 124, comments: 34 },
      ].map((post, i) => (
        <div key={i} className="rounded-2xl p-5 shadow-sm" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
          <h4 className="font-semibold mb-2" style={{ color: colors.text }}>{post.title}</h4>
          <div className="flex justify-between items-center text-sm">
            <span style={{ color: colors.textLight }}>{post.author}</span>
            <div className="flex space-x-3 text-xs" style={{ color: colors.textLight }}>
              <span className="flex items-center"><Heart className="w-4 h-4 mr-1" />{post.likes}</span>
              <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1" />{post.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const MyTab = () => (
    <div className="pb-24">
      <div className="rounded-2xl p-6 mb-5 text-white" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">👶</div>
          <div className="ml-4">
            <h3 className="font-bold text-lg">육아맘123</h3>
            <div className="flex items-center mt-1"><Star className="w-4 h-4 fill-current" /><span className="ml-1">4.8 · 거래 15회</span></div>
          </div>
        </div>
        <div className="bg-white/20 rounded-xl p-3">
          <div className="text-sm opacity-90">우리 아기</div>
          <div className="font-semibold">{babyAge}개월</div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: Package, label: '판매 내역', count: 8 },
          { icon: Heart, label: '관심상품', count: 24 },
          { icon: MessageCircle, label: '내 게시글', count: 5 },
          { icon: Settings, label: '설정' },
        ].map((item, i) => (
          <button key={i} className="w-full rounded-2xl p-4 flex items-center justify-between shadow-sm" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
            <div className="flex items-center">
              <item.icon className="w-5 h-5 mr-3" style={{ color: colors.textLight }} />
              <span className="font-medium" style={{ color: colors.text }}>{item.label}</span>
            </div>
            {item.count && <span className="text-sm" style={{ color: colors.textLight }}>{item.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen" style={{ backgroundColor: colors.bg }}>
      {selectedItem && <DetailPage item={selectedItem} />}
      
      <div className="sticky top-0 z-10 p-4 backdrop-blur-lg" style={{ backgroundColor: colors.card + 'F0', borderBottom: `1px solid ${colors.border}` }}>
        <h1 className="text-xl font-bold text-center" style={{ color: colors.primary }}>베이비마켓 🍼</h1>
        <p className="text-xs text-center" style={{ color: colors.textLight }}>우리 동네 육아템 나눔터</p>
      </div>

      <div className="p-4">
        {activeTab === 'market' && <MarketTab />}
        {activeTab === 'rental' && <RentalTab />}
        {activeTab === 'community' && <CommunityTab />}
        {activeTab === 'my' && <MyTab />}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto backdrop-blur-lg" style={{ backgroundColor: colors.card + 'F0', borderTop: `1px solid ${colors.border}` }}>
        <div className="flex justify-around">
          {[
            { id: 'market', icon: Home, label: '중고거래' },
            { id: 'rental', icon: Calendar, label: '대여' },
            { id: 'community', icon: Users, label: '커뮤니티' },
            { id: 'my', icon: User, label: 'MY' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className="flex-1 py-3 flex flex-col items-center"
              style={{ color: activeTab === tab.id ? colors.primary : colors.textLight }}>
              <tab.icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BabyGoodsPlatform;
