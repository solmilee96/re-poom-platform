import React, { useState } from 'react';

const COLORS = {
  bg: '#FFF7F2',
  card: '#FFFFFF',
  text: '#3C3C3C',
  subText: '#9FA4B3',
  peach: '#FFD9DF',
  mint: '#BEEBEA',
  border: '#F1E6E0',
  primary: '#FFB8C1',
};

// 아이콘 컴포넌트들
const MapPin = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Bell = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const Heart = ({ size = 24, color = COLORS.text, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const Home = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Search = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const MessageCircle = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const User = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Plus = ({ size = 24, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Filter = ({ size = 24, color = COLORS.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const ChevronRight = ({ size = 24, color = COLORS.subText }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function MamangPocket() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [currentTab, setCurrentTab] = useState('home');
  const [communityView, setCommunityView] = useState('myArea');
  const [selectedFilter, setSelectedFilter] = useState('우리 동네만');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: '안녕하세요! 상품 문의드립니다.', sender: 'me', time: '오후 2:30' },
    { id: 2, text: '네 안녕하세요! 문의주셔서 감사합니다 😊', sender: 'other', time: '오후 2:31' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  // 포켓에 있는 상품들은 기본적으로 좋아요 상태로 설정
  const [likedProducts, setLikedProducts] = useState({
    1: true,
    2: true,
    3: true,
  });
  const [categoryFilter, setCategoryFilter] = useState('전체');
  const [categorySortBy, setCategorySortBy] = useState('최신순');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    price: '',
    originalPrice: '',
    rememberOriginalPrice: true,
    category: '',
    condition: '중고',
    isRental: false,
    rentalPrice: '',
    month: '',
    description: '',
    images: [],
  });
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [postForm, setPostForm] = useState({
    category: '중고팁',
    title: '',
    content: '',
  });

  const categories = [
    { icon: '🍼', label: '수유·수면' },
    { icon: '🛒', label: '외출용품' },
    { icon: '🧸', label: '장난감' },
    { icon: '🛏️', label: '침대·가구' },
    { icon: '🚗', label: '카시트' },
  ];

  const products = [
    { id: 1, title: '휴대용 유모차', price: '85,000원', discount: '정가 대비 52%↓', status: '새상품', month: '7–12개월', distance: '1.2km', region: '송파구', emoji: '🛒', retraded: 2 },
    { id: 2, title: '전동 바운서', price: '30,000원', discount: '정가 대비 70%↓', status: '상', month: '0–6개월', distance: '0.8km', region: '송파구', emoji: '🪑', retraded: 1 },
    { id: 3, title: '유축기 메델라', price: '대여 15,000원/월', discount: '구매 대비 90%↓', status: '대여가능', month: '신생아', distance: '2.1km', region: '강남구', emoji: '🍼', retraded: 0 },
    { id: 4, title: '아기 점퍼루', price: '대여 10,000원/월', discount: '구매 대비 85%↓', status: '대여가능', month: '6–12개월', distance: '1.5km', region: '송파구', emoji: '🎪', retraded: 0 },
    { id: 5, title: '원목 아기침대', price: '120,000원', discount: '정가 대비 60%↓', status: '상', month: '신생아–12개월', distance: '3.2km', region: '강동구', emoji: '🛏️', retraded: 3 },
  ];

  const posts = [
    { id: 1, category: '중고팁', title: '유모차 직거래할 때 꼭 보셔야 해요!', meta: '댓글 18 · 좋아요 92', author: '민지마망', region: '송파구', time: '2시간 전' },
    { id: 2, category: '대여후기', title: '바운서 2개월 대여해본 솔직 후기 남겨요 🍼', meta: '댓글 9 · 좋아요 47', author: '도하맘', region: '송파구', time: '5시간 전' },
    { id: 3, category: '7-12개월', title: '이유식 식기 추천 부탁드려요!', meta: '댓글 24 · 좋아요 63', author: '선하마망', region: '강남구', time: '1일 전' },
    { id: 4, category: '동네정보', title: '잠실 롯데월드몰 수유실 정보 공유해요', meta: '댓글 15 · 좋아요 38', author: '잠실마망', region: '송파구', time: '3시간 전' },
    { id: 5, category: '중고팁', title: '카시트 중고 거래 체크리스트', meta: '댓글 31 · 좋아요 105', author: '수진맘', region: '송파구', time: '1일 전' },
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    alert(`${filter} 필터 선택됨!`);
  };

  const handleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMsg]);
      setNewMessage('');
      
      // 자동 응답 시뮬레이션
      setTimeout(() => {
        const autoReply = {
          id: chatMessages.length + 2,
          text: '네, 확인했습니다!',
          sender: 'other',
          time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, autoReply]);
      }, 1000);
    }
  };

  const handleAttachment = (type) => {
    const newMsg = {
      id: chatMessages.length + 1,
      text: type === 'image' ? '📷 [사진]' : type === 'video' ? '🎥 [영상]' : '📁 [파일]',
      sender: 'me',
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      type: type
    };
    setChatMessages([...chatMessages, newMsg]);
    setShowAttachMenu(false);
  };

  const handleEmojiSelect = (emoji) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleUploadSubmit = () => {
    if (!uploadForm.title || !uploadForm.price || !uploadForm.category) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }
    alert('상품이 등록되었습니다!');
    setShowUploadForm(false);
    setUploadForm({
      title: '',
      price: '',
      originalPrice: '',
      rememberOriginalPrice: true,
      category: '',
      condition: '중고',
      isRental: false,
      rentalPrice: '',
      month: '',
      description: '',
      images: [],
    });
  };

  const handleImageUpload = () => {
    // 사진 첨부 시뮬레이션
    const mockImageUrl = '📷';
    setUploadForm({
      ...uploadForm,
      images: [...uploadForm.images, mockImageUrl]
    });

    // AI 분석 시뮬레이션 - 1초 후 자동 작성
    setTimeout(() => {
      if (uploadForm.images.length === 0) {
        // 첫 번째 사진일 때만 자동 작성
        setUploadForm(prev => ({
          ...prev,
          title: '휴대용 유모차',
          price: '85000',
          originalPrice: '180000',
          category: '외출용품',
          condition: '상',
          month: '7–12개월',
          description: '코지코지 브랜드 휴대용 유모차입니다.\n\n【상품 상태】\n• 작동 상태: 정상 작동, 모든 기능 이상 없음\n• 바퀴: 회전 원활, 잠금장치 정상\n• 접이식 기능: 정상 작동\n• 시트: 깨끗한 편, 약간의 사용감 있음\n• 외관: 전체적으로 양호, 눈에 띄는 흠집 없음\n\n송파구 직거래 선호합니다!'
        }));
        alert('🤖 AI가 사진을 분석했습니다!\n\n✓ 유사 상품 분석 완료\n✓ 적정 판매가 자동 설정\n✓ 상품 상태 자동 작성\n\n내용을 확인하고 수정해주세요.');
      }
    }, 1000);
  };

  // 상품 등록 화면
  const renderUploadForm = () => {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: COLORS.bg, paddingBottom: '100px' }}>
        {/* 헤더 */}
        <div style={{ backgroundColor: COLORS.card, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${COLORS.border}`, position: 'sticky', top: 0, zIndex: 10 }}>
          <button
            onClick={() => setShowUploadForm(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '16px',
              color: COLORS.text,
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            취소
          </button>
          <h1 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text }}>포켓 등록</h1>
          <button
            onClick={handleUploadSubmit}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '16px',
              color: COLORS.primary,
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            완료
          </button>
        </div>

        <div style={{ padding: '20px' }}>
          {/* 사진 등록 */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '8px' }}>
              사진 <span style={{ color: COLORS.primary }}>*</span>
            </div>
            <div style={{ fontSize: '12px', color: COLORS.subText, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              AI가 사진을 분석하여 상품 정보를 자동으로 작성해드려요
            </div>
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
              {/* 사진 추가 버튼 */}
              <div
                onClick={handleImageUpload}
                style={{
                  minWidth: '100px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '12px',
                  backgroundColor: COLORS.card,
                  border: `2px dashed ${COLORS.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.primary;
                  e.currentTarget.style.backgroundColor = COLORS.peach;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.backgroundColor = COLORS.card;
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.subText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span style={{ fontSize: '12px', color: COLORS.subText }}>{uploadForm.images.length}/10</span>
              </div>

              {/* 업로드된 사진들 */}
              {uploadForm.images.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    minWidth: '100px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '12px',
                    backgroundColor: COLORS.peach,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                  }}
                >
                  {img}
                  <button
                    onClick={() => {
                      const newImages = uploadForm.images.filter((_, i) => i !== idx);
                      setUploadForm({...uploadForm, images: newImages});
                    }}
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      border: 'none',
                      color: '#FFF',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 제목 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              제목 <span style={{ color: COLORS.primary }}>*</span>
            </label>
            <input
              type="text"
              value={uploadForm.title}
              onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})}
              placeholder="상품명을 입력하세요"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: `1px solid ${COLORS.border}`,
                fontSize: '15px',
                backgroundColor: COLORS.card,
                color: COLORS.text,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* 카테고리 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              카테고리 <span style={{ color: COLORS.primary }}>*</span>
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setUploadForm({...uploadForm, category: cat.label})}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    backgroundColor: uploadForm.category === cat.label ? COLORS.primary : COLORS.card,
                    border: uploadForm.category === cat.label ? 'none' : `1px solid ${COLORS.border}`,
                    fontSize: '14px',
                    fontWeight: uploadForm.category === cat.label ? '600' : '400',
                    color: COLORS.text,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 거래 방식 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              거래 방식
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setUploadForm({...uploadForm, isRental: false})}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: !uploadForm.isRental ? COLORS.primary : COLORS.card,
                  border: !uploadForm.isRental ? 'none' : `1px solid ${COLORS.border}`,
                  fontSize: '15px',
                  fontWeight: '600',
                  color: COLORS.text,
                  cursor: 'pointer',
                }}
              >
                중고 판매
              </button>
              <button
                onClick={() => setUploadForm({...uploadForm, isRental: true})}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: uploadForm.isRental ? COLORS.mint : COLORS.card,
                  border: uploadForm.isRental ? 'none' : `1px solid ${COLORS.border}`,
                  fontSize: '15px',
                  fontWeight: '600',
                  color: COLORS.text,
                  cursor: 'pointer',
                }}
              >
                대여
              </button>
            </div>
          </div>

          {/* 구매 가격 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              구매 가격 (정가)
            </label>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={!uploadForm.rememberOriginalPrice}
                  onChange={(e) => setUploadForm({...uploadForm, rememberOriginalPrice: !e.target.checked, originalPrice: e.target.checked ? '' : uploadForm.originalPrice})}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '13px', color: COLORS.subText }}>구매 가격이 기억나지 않아요</span>
              </label>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={uploadForm.originalPrice}
                onChange={(e) => setUploadForm({...uploadForm, originalPrice: e.target.value.replace(/[^0-9]/g, '')})}
                placeholder="0"
                disabled={!uploadForm.rememberOriginalPrice}
                style={{
                  width: '100%',
                  padding: '14px 50px 14px 16px',
                  borderRadius: '12px',
                  border: `1px solid ${COLORS.border}`,
                  fontSize: '15px',
                  backgroundColor: uploadForm.rememberOriginalPrice ? COLORS.card : COLORS.bg,
                  color: uploadForm.rememberOriginalPrice ? COLORS.text : COLORS.subText,
                  outline: 'none',
                  boxSizing: 'border-box',
                  opacity: uploadForm.rememberOriginalPrice ? 1 : 0.5,
                }}
              />
              <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', color: uploadForm.rememberOriginalPrice ? COLORS.text : COLORS.subText, fontWeight: '500' }}>원</span>
            </div>
          </div>

          {/* 판매 가격 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {uploadForm.isRental ? '대여 가격 (월)' : '판매 가격'} <span style={{ color: COLORS.primary }}>*</span>
              {uploadForm.rememberOriginalPrice && uploadForm.originalPrice && uploadForm.price && (
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#FF6B6B', backgroundColor: '#FFE5E5', padding: '2px 8px', borderRadius: '8px', marginLeft: '4px' }}>
                  {Math.round((1 - parseInt(uploadForm.price) / parseInt(uploadForm.originalPrice)) * 100)}% 할인
                </span>
              )}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={uploadForm.price}
                onChange={(e) => setUploadForm({...uploadForm, price: e.target.value.replace(/[^0-9]/g, '')})}
                placeholder="0"
                style={{
                  width: '100%',
                  padding: '14px 50px 14px 16px',
                  borderRadius: '12px',
                  border: `1px solid ${COLORS.border}`,
                  fontSize: '15px',
                  backgroundColor: COLORS.card,
                  color: COLORS.text,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', color: COLORS.text, fontWeight: '500' }}>원</span>
            </div>
            {uploadForm.rememberOriginalPrice && uploadForm.originalPrice && uploadForm.price && (
              <div style={{ marginTop: '8px', fontSize: '13px', color: COLORS.subText }}>
                정가 {parseInt(uploadForm.originalPrice).toLocaleString()}원 → 판매가 {parseInt(uploadForm.price).toLocaleString()}원
              </div>
            )}
          </div>

          {/* 상태 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              상태
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['새상품', '상', '중', '하'].map((cond) => (
                <button
                  key={cond}
                  onClick={() => setUploadForm({...uploadForm, condition: cond})}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '999px',
                    backgroundColor: uploadForm.condition === cond ? COLORS.mint : COLORS.card,
                    border: uploadForm.condition === cond ? 'none' : `1px solid ${COLORS.border}`,
                    fontSize: '14px',
                    fontWeight: uploadForm.condition === cond ? '600' : '400',
                    color: COLORS.text,
                    cursor: 'pointer',
                  }}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          {/* 사용 시기 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              사용 시기
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['신생아', '0–6개월', '7–12개월', '12개월+'].map((m) => (
                <button
                  key={m}
                  onClick={() => setUploadForm({...uploadForm, month: m})}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    backgroundColor: uploadForm.month === m ? COLORS.peach : COLORS.card,
                    border: uploadForm.month === m ? 'none' : `1px solid ${COLORS.border}`,
                    fontSize: '14px',
                    fontWeight: uploadForm.month === m ? '600' : '400',
                    color: COLORS.text,
                    cursor: 'pointer',
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* 설명 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'block' }}>
              상품 설명
            </label>
            <textarea
              value={uploadForm.description}
              onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
              placeholder="상품에 대한 설명을 자유롭게 작성해주세요.&#10;(브랜드, 구매 시기, 사용 횟수, 하자 여부 등)"
              rows={6}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: `1px solid ${COLORS.border}`,
                fontSize: '15px',
                backgroundColor: COLORS.card,
                color: COLORS.text,
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                lineHeight: '1.5',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* 안전 체크리스트 */}
          <div style={{ backgroundColor: COLORS.mint, borderRadius: '16px', padding: '16px', marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              안전 거래 체크리스트
            </div>
            <div style={{ fontSize: '13px', color: COLORS.text, lineHeight: '20px' }}>
              • KC 인증 마크를 확인했나요?<br />
              • 제조 일자와 사용 기한을 확인했나요?<br />
              • 작동에 이상은 없나요?<br />
              • 외관 상태를 정확히 표시했나요?
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 채팅 화면
  const renderChat = () => {
    if (!selectedProduct) return null;

    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: COLORS.bg }}>
        {/* 채팅 헤더 */}
        <div style={{ backgroundColor: COLORS.card, padding: '16px 20px', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setShowChat(false)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.bg,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👩</div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text }}>송파 마망</div>
              <div style={{ fontSize: '12px', color: COLORS.subText }}>송파구</div>
            </div>
          </div>
          <button
            onClick={() => alert('메뉴')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.bg,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>

        {/* 상품 정보 카드 */}
        <div style={{ backgroundColor: COLORS.card, padding: '12px 20px', borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              {selectedProduct.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: COLORS.text, marginBottom: '4px' }}>{selectedProduct.title}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: COLORS.text }}>{selectedProduct.price}</div>
            </div>
          </div>
        </div>

        {/* 채팅 메시지 영역 */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: COLORS.subText, backgroundColor: COLORS.card, padding: '6px 12px', borderRadius: '12px' }}>
              2025년 11월 17일
            </span>
          </div>

          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                marginBottom: '12px',
              }}
            >
              <div style={{ maxWidth: '70%' }}>
                {msg.sender === 'other' && (
                  <div style={{ fontSize: '12px', color: COLORS.subText, marginBottom: '4px', marginLeft: '8px' }}>송파 마망</div>
                )}
                <div
                  style={{
                    backgroundColor: msg.sender === 'me' ? COLORS.primary : COLORS.card,
                    color: msg.sender === 'me' ? '#FFF' : COLORS.text,
                    padding: '12px 16px',
                    borderRadius: '18px',
                    fontSize: '15px',
                    lineHeight: '22px',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: COLORS.subText,
                    marginTop: '4px',
                    textAlign: msg.sender === 'me' ? 'right' : 'left',
                    marginLeft: msg.sender === 'me' ? '0' : '8px',
                    marginRight: msg.sender === 'me' ? '8px' : '0',
                  }}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 메시지 입력 영역 */}
        <div style={{ backgroundColor: COLORS.card, borderTop: `1px solid ${COLORS.border}` }}>
          {/* 첨부 메뉴 */}
          {showAttachMenu && (
            <div style={{ padding: '12px 20px', borderBottom: `1px solid ${COLORS.border}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              <div
                onClick={() => handleAttachment('image')}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <span style={{ fontSize: '12px', color: COLORS.text }}>사진</span>
              </div>
              <div
                onClick={() => handleAttachment('video')}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.mint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <span style={{ fontSize: '12px', color: COLORS.text }}>영상</span>
              </div>
              <div
                onClick={() => handleAttachment('file')}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <span style={{ fontSize: '12px', color: COLORS.text }}>파일</span>
              </div>
              <div
                onClick={() => {
                  setShowAttachMenu(false);
                  setShowEmojiPicker(true);
                }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: '#FFF9C4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  😊
                </div>
                <span style={{ fontSize: '12px', color: COLORS.text }}>이모티콘</span>
              </div>
            </div>
          )}

          {/* 이모티콘 피커 */}
          {showEmojiPicker && (
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${COLORS.border}`, backgroundColor: COLORS.bg }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: COLORS.text }}>이모티콘</span>
                <button
                  onClick={() => setShowEmojiPicker(false)}
                  style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: COLORS.subText }}
                >
                  ✕
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '8px' }}>
                {['😊', '😂', '🥰', '😍', '🤗', '👍', '👏', '🙏', '❤️', '💕', '✨', '🎉', '🎊', '🙌', '👶', '🍼', '🛒', '🏠', '💰', '📦', '🚗', '🎁', '⭐', '💯'].map((emoji, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleEmojiSelect(emoji)}
                    style={{
                      fontSize: '28px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      padding: '4px',
                      borderRadius: '8px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.card}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 입력창 */}
          <div style={{ padding: '12px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => {
                setShowAttachMenu(!showAttachMenu);
                setShowEmojiPicker(false);
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: showAttachMenu ? COLORS.primary : COLORS.bg,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transform: showAttachMenu ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'all 0.3s',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={showAttachMenu ? '#FFF' : COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="메시지를 입력하세요"
              style={{
                flex: 1,
                backgroundColor: COLORS.bg,
                border: 'none',
                borderRadius: '20px',
                padding: '12px 16px',
                fontSize: '15px',
                color: COLORS.text,
                outline: 'none',
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: newMessage.trim() ? COLORS.primary : COLORS.border,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: newMessage.trim() ? 'pointer' : 'not-allowed',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 카테고리 상세 목록 페이지
  const renderCategoryDetail = () => {
    let categoryProducts = products.filter(p => {
      // 실제로는 카테고리별로 필터링해야 하지만, 데모용으로 모든 상품 표시
      return true;
    });

    // 필터 적용
    if (categoryFilter === '중고') {
      categoryProducts = categoryProducts.filter(p => p.status !== '대여가능');
    } else if (categoryFilter === '대여') {
      categoryProducts = categoryProducts.filter(p => p.status === '대여가능');
    }

    // 정렬 적용
    if (categorySortBy === '가격순') {
      categoryProducts = [...categoryProducts].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (categorySortBy === '최신순') {
      // 기본 순서 유지
    }

    return (
      <div style={{ paddingBottom: '100px' }}>
        {/* 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setCategoryFilter('전체');
              setCategorySortBy('최신순');
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: COLORS.text }}>{selectedCategory}</h1>
        </div>

        {/* 필터와 정렬 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          {/* 좌측 필터 */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['전체', '중고', '대여'].map((filter) => {
              const isActive = categoryFilter === filter;
              
              return (
                <button
                  key={filter}
                  onClick={() => setCategoryFilter(filter)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    backgroundColor: isActive ? COLORS.primary : COLORS.card,
                    border: isActive ? 'none' : `1px solid ${COLORS.border}`,
                    fontSize: '13px',
                    fontWeight: isActive ? '600' : '400',
                    color: COLORS.text,
                    cursor: 'pointer',
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* 우측 정렬 드롭다운 */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                fontSize: '13px',
                fontWeight: '500',
                color: COLORS.text,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {categorySortBy}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={COLORS.text} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transform: showSortDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* 드롭다운 메뉴 */}
            {showSortDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '4px',
                backgroundColor: COLORS.card,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                zIndex: 10,
                minWidth: '120px',
              }}>
                {['최신순', '가격순'].map((sort, idx) => (
                  <div
                    key={sort}
                    onClick={() => {
                      setCategorySortBy(sort);
                      setShowSortDropdown(false);
                    }}
                    style={{
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: categorySortBy === sort ? COLORS.primary : COLORS.text,
                      fontWeight: categorySortBy === sort ? '600' : '400',
                      cursor: 'pointer',
                      backgroundColor: COLORS.card,
                      borderBottom: idx === 0 ? `1px solid ${COLORS.border}` : 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.bg}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.card}
                  >
                    {sort}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 상품 개수 */}
        <div style={{ marginBottom: '16px', fontSize: '14px', color: COLORS.subText }}>
          총 {categoryProducts.length}개의 상품
        </div>

        {/* 상품 리스트 */}
        {categoryProducts.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedProduct(item)}
            style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginBottom: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer' }}
          >
            <div style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', flexShrink: 0 }}>{item.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text }}>{item.title}</span>
                {item.retraded > 0 && (
                  <span style={{ fontSize: '10px', fontWeight: '600', color: '#FF6B6B', backgroundColor: '#FFE5E5', padding: '2px 6px', borderRadius: '8px' }}>재거래 {item.retraded}회</span>
                )}
              </div>
              <div style={{ fontSize: '11px', color: COLORS.subText, marginBottom: '6px' }}>{item.discount}</div>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                <span style={{ display: 'inline-block', backgroundColor: COLORS.mint, borderRadius: '999px', padding: '2px 8px', fontSize: '10px' }}>{item.status}</span>
                <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.month}</span>
                <span style={{ fontSize: '11px', color: COLORS.primary, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <MapPin size={10} />
                  {item.region}
                </span>
                <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.distance}</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 상품 상세 페이지
  const renderProductDetail = () => {
    if (!selectedProduct) return null;

    return (
      <div style={{ paddingBottom: '100px' }}>
        {/* 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={() => alert('공유하기')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>

        {/* 상품 이미지 */}
        <div style={{ width: '100%', height: '300px', backgroundColor: COLORS.peach, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', marginBottom: '20px' }}>
          {selectedProduct.emoji}
        </div>

        {/* 판매자 정보 */}
        <div style={{ backgroundColor: COLORS.card, borderRadius: '20px', padding: '16px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👩</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text }}>송파 마망</div>
              <div style={{ fontSize: '12px', color: COLORS.subText, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} />
                {selectedProduct.region} · 재거래 {selectedProduct.retraded}회
              </div>
            </div>
            <button
              onClick={() => setShowChat(true)}
              style={{
                backgroundColor: COLORS.peach,
                border: 'none',
                borderRadius: '12px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '600',
                color: COLORS.text,
                cursor: 'pointer',
              }}
            >
              채팅하기
            </button>
          </div>
        </div>

        {/* 상품 정보 */}
        <div style={{ backgroundColor: COLORS.card, borderRadius: '20px', padding: '18px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-block', backgroundColor: COLORS.mint, borderRadius: '999px', padding: '4px 10px', fontSize: '11px', fontWeight: '500' }}>{selectedProduct.status}</span>
            <span style={{ fontSize: '12px', color: COLORS.subText }}>{selectedProduct.month}</span>
            <span style={{ fontSize: '12px', color: COLORS.primary, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <MapPin size={12} />
              {selectedProduct.region}
            </span>
            <span style={{ fontSize: '12px', color: COLORS.subText }}>{selectedProduct.distance}</span>
          </div>
          
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: COLORS.text, marginBottom: '8px' }}>{selectedProduct.title}</h1>
          <div style={{ fontSize: '26px', fontWeight: '700', color: COLORS.text, marginBottom: '4px' }}>{selectedProduct.price}</div>
          <div style={{ fontSize: '14px', color: COLORS.primary, marginBottom: '16px' }}>{selectedProduct.discount}</div>

          <div style={{ height: '1px', backgroundColor: COLORS.border, marginBottom: '16px' }} />

          <div style={{ fontSize: '15px', color: COLORS.text, lineHeight: '24px', marginBottom: '16px' }}>
            2개월 정도 사용했어요. 작동 완벽하고 깨끗한 상태입니다.
            <br />브랜드는 코지코지이고, 구매가는 180,000원이었어요.
            <br /><br />
            {selectedProduct.region} 직거래 가능합니다!
          </div>

          <div style={{ height: '1px', backgroundColor: COLORS.border, marginBottom: '16px' }} />

          {/* 안전 체크리스트 */}
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text, marginBottom: '12px' }}>안전 체크리스트</h3>
          {['KC 인증 확인', '제조일자 확인', '작동부 이상 없음', '외관 상태 양호'].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span style={{ fontSize: '14px', color: COLORS.text }}>{item}</span>
            </div>
          ))}
        </div>

        {/* 연관 상품 */}
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, marginBottom: '12px' }}>비슷한 포켓</h2>
        {products.slice(0, 2).map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginBottom: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer' }}
          >
            <div style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', flexShrink: 0 }}>{item.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 전체 목록 페이지
  const renderAllProducts = () => {
    let allProducts = [...products];

    // 필터 적용
    if (categoryFilter === '중고') {
      allProducts = allProducts.filter(p => p.status !== '대여가능');
    } else if (categoryFilter === '대여') {
      allProducts = allProducts.filter(p => p.status === '대여가능');
    }

    // 정렬 적용
    if (categorySortBy === '가격순') {
      allProducts = allProducts.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    }

    return (
      <div style={{ paddingBottom: '100px' }}>
        {/* 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <button
            onClick={() => {
              setShowAllProducts(false);
              setCategoryFilter('전체');
              setCategorySortBy('최신순');
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: COLORS.text }}>
            {categoryFilter === '대여' ? '대여 가능한 포켓' : '전체 포켓'}
          </h1>
        </div>

        {/* 필터와 정렬 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          {/* 좌측 필터 */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['전체', '중고', '대여'].map((filter) => {
              const isActive = categoryFilter === filter;
              
              return (
                <button
                  key={filter}
                  onClick={() => setCategoryFilter(filter)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    backgroundColor: isActive ? COLORS.primary : COLORS.card,
                    border: isActive ? 'none' : `1px solid ${COLORS.border}`,
                    fontSize: '13px',
                    fontWeight: isActive ? '600' : '400',
                    color: COLORS.text,
                    cursor: 'pointer',
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* 우측 정렬 드롭다운 */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                fontSize: '13px',
                fontWeight: '500',
                color: COLORS.text,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {categorySortBy}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={COLORS.text} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transform: showSortDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* 드롭다운 메뉴 */}
            {showSortDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '4px',
                backgroundColor: COLORS.card,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                zIndex: 10,
                minWidth: '120px',
              }}>
                {['최신순', '가격순'].map((sort, idx) => (
                  <div
                    key={sort}
                    onClick={() => {
                      setCategorySortBy(sort);
                      setShowSortDropdown(false);
                    }}
                    style={{
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: categorySortBy === sort ? COLORS.primary : COLORS.text,
                      fontWeight: categorySortBy === sort ? '600' : '400',
                      cursor: 'pointer',
                      backgroundColor: COLORS.card,
                      borderBottom: idx === 0 ? `1px solid ${COLORS.border}` : 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.bg}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.card}
                  >
                    {sort}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 상품 개수 */}
        <div style={{ marginBottom: '16px', fontSize: '14px', color: COLORS.subText }}>
          총 {allProducts.length}개의 상품
        </div>

        {/* 전체 상품 리스트 */}
        {allProducts.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginBottom: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer' }}
          >
            <div style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', flexShrink: 0 }}>{item.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text }}>{item.title}</span>
                {item.retraded > 0 && (
                  <span style={{ fontSize: '10px', fontWeight: '600', color: '#FF6B6B', backgroundColor: '#FFE5E5', padding: '2px 6px', borderRadius: '8px' }}>재거래 {item.retraded}회</span>
                )}
              </div>
              <div style={{ fontSize: '11px', color: COLORS.subText, marginBottom: '6px' }}>{item.discount}</div>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                <span style={{ display: 'inline-block', backgroundColor: COLORS.mint, borderRadius: '999px', padding: '2px 8px', fontSize: '10px' }}>{item.status}</span>
                <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.month}</span>
                <span style={{ fontSize: '11px', color: COLORS.primary, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <MapPin size={10} />
                  {item.region}
                </span>
                <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.distance}</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 홈 화면
  const renderHome = () => (
    <div style={{ paddingBottom: '100px' }}>
      {/* 프로필 카드 */}
      <div style={{ backgroundColor: COLORS.card, borderRadius: '24px', padding: '18px', marginTop: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>👶</div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                송파 7개월 마망
                <span style={{ fontSize: '12px', fontWeight: '500', color: COLORS.primary, backgroundColor: COLORS.peach, padding: '2px 8px', borderRadius: '8px' }}>송파구</span>
              </div>
              <div style={{ fontSize: '12px', color: COLORS.subText, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} />
                거주: 송파구 · 활동: 강남구
              </div>
            </div>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => alert('알림 페이지')}>
            <Bell size={24} color={COLORS.text} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ backgroundColor: COLORS.peach, padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '500' }}>우리집 포켓 8개</span>
          <span style={{ backgroundColor: COLORS.mint, padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '500' }}>대여 중 2개</span>
        </div>
      </div>

      {/* 지역 필터 버튼 - 스크롤 없이 래핑 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        {['우리 동네만', '인근 지역', '전체', '필터'].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            style={{
              padding: '8px 14px',
              borderRadius: '999px',
              backgroundColor: selectedFilter === filter ? COLORS.primary : COLORS.card,
              border: selectedFilter === filter ? 'none' : `1px solid ${COLORS.border}`,
              fontSize: '13px',
              fontWeight: selectedFilter === filter ? '600' : '400',
              color: COLORS.text,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            {filter === '우리 동네만' && <MapPin size={14} />}
            {filter === '필터' && <Filter size={14} />}
            {filter}
          </button>
        ))}
      </div>

      {/* 카테고리 */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', marginTop: '16px', paddingBottom: '10px' }}>
        {categories.map((cat) => (
          <button 
            key={cat.label}
            onClick={() => {
              console.log(`${cat.label} 클릭됨`);
              setSelectedCategory(cat.label);
            }}
            style={{ 
              minWidth: '88px', 
              height: '96px', 
              borderRadius: '22px', 
              backgroundColor: COLORS.card, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 3px 8px rgba(0,0,0,0.03)', 
              cursor: 'pointer', 
              flexShrink: 0,
              border: 'none',
              padding: '0',
              transition: 'transform 0.2s',
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '26px', pointerEvents: 'none' }}>{cat.icon}</div>
            <div style={{ fontSize: '12px', color: COLORS.text, marginTop: '6px', pointerEvents: 'none' }}>{cat.label}</div>
          </button>
        ))}
      </div>

      {/* 송파구 인기 포켓 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '22px', marginBottom: '10px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={18} color={COLORS.primary} />
          송파구 인기 포켓
        </h2>
        <span 
          onClick={() => setShowAllProducts(true)}
          style={{ fontSize: '12px', color: COLORS.subText, cursor: 'pointer' }}
        >
          전체보기
        </span>
      </div>

      {products.filter(p => p.region === '송파구').map((item) => (
        <div 
          key={item.id} 
          onClick={() => setSelectedProduct(item)}
          style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginBottom: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer' }}
        >
          <div style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', flexShrink: 0 }}>{item.emoji}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text }}>{item.title}</span>
              {item.retraded > 0 && (
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#FF6B6B', backgroundColor: '#FFE5E5', padding: '2px 6px', borderRadius: '8px' }}>재거래 {item.retraded}회</span>
              )}
            </div>
            <div style={{ fontSize: '11px', color: COLORS.subText, marginBottom: '6px' }}>{item.discount}</div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
              <span style={{ display: 'inline-block', backgroundColor: COLORS.mint, borderRadius: '999px', padding: '2px 8px', fontSize: '10px' }}>{item.status}</span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.month}</span>
              <span style={{ fontSize: '11px', color: COLORS.primary, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <MapPin size={10} />
                {item.region}
              </span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.distance}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text }}>{item.price}</div>
          </div>
        </div>
      ))}

      {/* 인근 지역 포켓 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', marginBottom: '10px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text }}>인근 지역 포켓</h2>
        <span 
          onClick={() => setShowAllProducts(true)}
          style={{ fontSize: '12px', color: COLORS.subText, cursor: 'pointer' }}
        >
          전체보기
        </span>
      </div>

      {products.filter(p => p.region !== '송파구').slice(0, 2).map((item) => (
        <div 
          key={item.id} 
          onClick={() => setSelectedProduct(item)}
          style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginBottom: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer' }}
        >
          <div style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', flexShrink: 0 }}>{item.emoji}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text }}>{item.title}</span>
              {item.retraded > 0 && (
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#FF6B6B', backgroundColor: '#FFE5E5', padding: '2px 6px', borderRadius: '8px' }}>재거래 {item.retraded}회</span>
              )}
            </div>
            <div style={{ fontSize: '11px', color: COLORS.subText, marginBottom: '6px' }}>{item.discount}</div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
              <span style={{ display: 'inline-block', backgroundColor: COLORS.mint, borderRadius: '999px', padding: '2px 8px', fontSize: '10px' }}>{item.status}</span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.month}</span>
              <span style={{ fontSize: '11px', color: COLORS.text, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <MapPin size={10} />
                {item.region}
              </span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{item.distance}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text }}>{item.price}</div>
          </div>
        </div>
      ))}

      {/* 대여 추천 */}
      <div style={{ backgroundColor: COLORS.card, borderRadius: '22px', padding: '18px', marginTop: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text }}>바운서 · 유축기 · 쪽잠침대</h3>
        <p style={{ fontSize: '13px', color: COLORS.subText, marginTop: '8px', lineHeight: '20px' }}>사용기간이 짧은 육아템은<br />마망포켓 대여로 가볍게 써보세요.</p>
        <button 
          onClick={() => {
            setShowAllProducts(true);
            setCategoryFilter('대여');
          }}
          style={{ marginTop: '14px', backgroundColor: COLORS.peach, border: 'none', borderRadius: '999px', padding: '6px 14px', fontSize: '13px', fontWeight: '600', color: COLORS.text, cursor: 'pointer' }}
        >
          대여 가능한 포켓 보기
        </button>
      </div>

      {/* 플로팅 버튼 */}
      <button 
        onClick={() => setShowUploadForm(true)}
        style={{ position: 'fixed', right: '20px', bottom: '90px', width: '56px', height: '56px', borderRadius: '28px', backgroundColor: COLORS.primary, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', cursor: 'pointer', zIndex: 10 }}
      >
        <Plus size={28} />
      </button>
    </div>
  );

  // 커뮤니티 화면
  const renderCommunity = () => {
    const filteredPosts = communityView === 'myArea' 
      ? posts.filter(p => p.region === '송파구')
      : posts;

    return (
      <div style={{ paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: COLORS.text, marginTop: '8px' }}>마망 커뮤니티</h1>
        <p style={{ fontSize: '13px', color: COLORS.subText, marginTop: '6px' }}>우리 동네 마망들의 진짜 이야기</p>

        {/* 내 지역 / 전체 토글 */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px', backgroundColor: COLORS.card, padding: '4px', borderRadius: '12px', width: 'fit-content' }}>
          <button
            onClick={() => setCommunityView('myArea')}
            style={{
              padding: '8px 20px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: communityView === 'myArea' ? COLORS.primary : 'transparent',
              fontSize: '14px',
              fontWeight: '600',
              color: COLORS.text,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <MapPin size={14} />
            내 지역
          </button>
          <button
            onClick={() => setCommunityView('all')}
            style={{
              padding: '8px 20px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: communityView === 'all' ? COLORS.primary : 'transparent',
              fontSize: '14px',
              fontWeight: '600',
              color: COLORS.text,
              cursor: 'pointer',
            }}
          >
            전체
          </button>
        </div>

        {/* 카테고리 탭 */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', marginTop: '16px', paddingBottom: '10px' }}>
          {['전체', '임신', '신생아', '0–6개월', '7–12개월', '대여후기', '중고팁', '동네정보'].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => alert(`${tab} 카테고리`)}
              style={{ padding: '6px 14px', borderRadius: '999px', backgroundColor: idx === 0 ? COLORS.peach : COLORS.card, border: `1px solid ${idx === 0 ? COLORS.peach : COLORS.border}`, fontSize: '13px', fontWeight: idx === 0 ? '600' : '400', color: idx === 0 ? COLORS.text : COLORS.subText, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 지역 필터 알림 */}
        {communityView === 'myArea' && (
          <div style={{ backgroundColor: COLORS.mint, borderRadius: '12px', padding: '12px', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color={COLORS.text} />
            <span style={{ fontSize: '13px', color: COLORS.text, fontWeight: '500' }}>
              송파구 마망들의 글만 보고 있어요
            </span>
          </div>
        )}

        {/* 글쓰기 카드 - 상단으로 이동 */}
        <div 
          onClick={() => setShowPostForm(true)}
          style={{ backgroundColor: COLORS.card, borderRadius: '20px', padding: '18px', marginTop: '16px', marginBottom: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)', cursor: 'pointer', border: `2px dashed ${COLORS.border}` }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text }}>궁금한 거 있으신가요?</div>
              <div style={{ fontSize: '13px', color: COLORS.subText, marginTop: '4px' }}>우리 동네 마망들에게 질문해보세요</div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, marginTop: '20px' }}>
          {communityView === 'myArea' ? '우리 동네 인기 포스트' : '오늘의 인기 포스트'}
        </h2>

        {filteredPosts.map((post) => (
          <div 
            key={post.id} 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('게시글 클릭:', post);
              setSelectedPost(post);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('게시글 터치:', post);
              setSelectedPost(post);
            }}
            style={{ backgroundColor: COLORS.card, borderRadius: '18px', padding: '16px', marginTop: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.03)', cursor: 'pointer', position: 'relative', zIndex: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{post.category}</span>
              <span style={{ fontSize: '11px', fontWeight: '500', color: COLORS.primary, backgroundColor: COLORS.peach, padding: '2px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <MapPin size={10} />
                {post.region}
              </span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>·</span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{post.time}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '8px' }}>{post.title}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: COLORS.text, fontWeight: '500' }}>{post.author}</span>
              <span style={{ fontSize: '12px', color: COLORS.subText }}>{post.meta}</span>
            </div>
          </div>
        ))}

        {/* 글쓰기 카드 */}
        <div style={{ backgroundColor: COLORS.mint, borderRadius: '20px', padding: '18px', marginTop: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text }}>궁금한 거 있으신가요?</h3>
          <p style={{ fontSize: '13px', color: COLORS.text, marginTop: '6px', lineHeight: '20px' }}>
            우리 동네 마망들에게<br />
            중고 거래 팁, 동네 정보 등을 편하게 물어보세요.
          </p>
          <button 
            onClick={() => alert('글쓰기')}
            style={{ marginTop: '14px', backgroundColor: COLORS.card, border: 'none', borderRadius: '999px', padding: '7px 16px', fontSize: '13px', fontWeight: '600', color: COLORS.text, cursor: 'pointer' }}
          >
            질문 글 쓰기
          </button>
        </div>
      </div>
    );
  };

  // 포켓 화면
  const renderPocket = () => {
    // 실제 찜한 상품 개수 계산
    const likedCount = Object.values(likedProducts).filter(Boolean).length;
    
    return (
      <div style={{ paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: COLORS.text, marginTop: '8px' }}>내 포켓</h1>
        <p style={{ fontSize: '13px', color: COLORS.subText, marginTop: '6px' }}>관심있는 육아템을 모아두었어요</p>

        <div style={{ display: 'flex', backgroundColor: COLORS.card, borderRadius: '20px', padding: '20px', marginTop: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: COLORS.text }}>{likedCount}</div>
            <div style={{ fontSize: '13px', color: COLORS.subText, marginTop: '4px' }}>찜한 포켓</div>
          </div>
          <div style={{ width: '1px', backgroundColor: COLORS.border, margin: '0 20px' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: COLORS.text }}>2</div>
            <div style={{ fontSize: '13px', color: COLORS.subText, marginTop: '4px' }}>가격 알림</div>
          </div>
        </div>

        {/* 찜한 상품만 표시 */}
        {products.filter(item => likedProducts[item.id]).map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: COLORS.card, borderRadius: '20px', padding: '14px', marginTop: '12px', boxShadow: '0 3px 8px rgba(0,0,0,0.04)' }}>
            <div 
              onClick={() => setSelectedProduct(item)}
              style={{ width: '72px', height: '72px', borderRadius: '18px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '14px', cursor: 'pointer' }}
            >
              {item.emoji}
            </div>
            <div 
              onClick={() => setSelectedProduct(item)}
              style={{ flex: 1, cursor: 'pointer' }}
            >
              <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text }}>{item.title}</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: COLORS.text, marginTop: '4px' }}>{item.price}</div>
            </div>
            <div 
              onClick={(e) => {
                e.stopPropagation();
                handleLike(item.id);
              }}
              style={{ cursor: 'pointer' }}
            >
              <Heart 
                size={24} 
                fill={likedProducts[item.id] ? '#FF6B6B' : 'none'} 
                color={likedProducts[item.id] ? '#FF6B6B' : COLORS.text}
              />
            </div>
          </div>
        ))}

        {/* 찜한 상품이 없을 때 */}
        {likedCount === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>❤️</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: COLORS.text, marginBottom: '8px' }}>
              아직 찜한 포켓이 없어요
            </div>
            <div style={{ fontSize: '14px', color: COLORS.subText }}>
              마음에 드는 육아템을 찜해보세요!
            </div>
          </div>
        )}
      </div>
    );
  };

  // 마이페이지
  const renderMyPage = () => (
    <div style={{ paddingBottom: '100px' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '700', color: COLORS.text, marginTop: '8px' }}>마이 마망포켓</h1>

      <div style={{ backgroundColor: COLORS.card, borderRadius: '24px', padding: '18px', marginTop: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>👩</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text }}>송파 7개월 마망</div>
            <div style={{ fontSize: '12px', color: COLORS.subText, marginTop: '2px' }}>송파구 · 7개월 아기</div>
          </div>
          <ChevronRight />
        </div>
      </div>

      <div style={{ backgroundColor: COLORS.card, borderRadius: '22px', marginTop: '18px', overflow: 'hidden' }}>
        {['내 포켓(찜 · 보관함)', '판매 · 대여 내역', '커뮤니티 활동 기록', '안전·중고 거래 가이드', '알림 설정'].map((menu, idx) => (
          <div 
            key={menu} 
            onClick={() => alert(menu)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: idx < 4 ? `1px solid ${COLORS.border}` : 'none', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '14px', color: COLORS.text }}>{menu}</span>
            <ChevronRight size={18} />
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: COLORS.card, borderRadius: '22px', marginTop: '16px', overflow: 'hidden' }}>
        {['고객센터', '버전 정보 (v1.0.0)'].map((menu, idx) => (
          <div 
            key={menu}
            onClick={() => alert(menu)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: idx < 1 ? `1px solid ${COLORS.border}` : 'none', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '14px', color: COLORS.text }}>{menu}</span>
            <ChevronRight size={18} />
          </div>
        ))}
      </div>
    </div>
  );

  // 게시글 상세 페이지
  const renderPostDetail = () => {
    if (!selectedPost) return null;

    return (
      <div style={{ paddingBottom: '100px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={() => alert('공유하기')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: COLORS.card,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>

        {/* Post Content */}
        <div style={{ backgroundColor: COLORS.card, borderRadius: '20px', padding: '18px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: COLORS.subText }}>{selectedPost.category}</span>
            <span style={{ fontSize: '11px', fontWeight: '500', color: COLORS.primary, backgroundColor: COLORS.peach, padding: '2px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <MapPin size={10} />
              {selectedPost.region}
            </span>
            <span style={{ fontSize: '11px', color: COLORS.subText }}>·</span>
            <span style={{ fontSize: '11px', color: COLORS.subText }}>{selectedPost.time}</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: COLORS.text, marginBottom: '8px' }}>{selectedPost.title}</h1>
          <div style={{ fontSize: '14px', color: COLORS.text, lineHeight: '24px', marginBottom: '16px' }}>
            {selectedPost.category === '중고팁' && '유모차 직거래 시에는 프레임의 흔들림, 바퀴 마모도, 브레이크 작동 여부, 안전벨트 상태를 꼭 확인하세요. 특히 안전벨트는 아기 안전과 직결되므로 꼼꼼히 살펴보는 것이 중요합니다.'}
            {selectedPost.category === '대여후기' && '바운서 2개월 대여해본 솔직 후기 남겨요 🍼\n\n아기가 바운서를 잘 탈지 몰라서 2개월 대여해봤는데, 정말 만족스러웠어요! 특히 식사 준비할 때나 잠시 집안일 할 때 유용했습니다. 대여 서비스도 깔끔하고 좋았어요.'}
            {selectedPost.category === '7-12개월' && '이유식 식기 추천 부탁드려요!\n\n우리 아기가 이제 8개월인데 이유식을 시작하려고 해요. 어떤 식기를 사용하시는지 추천해주시면 감사하겠습니다!\n\n고려사항:\n- 안전한 재질 (BPA free)\n- 세척이 쉬운 제품\n- 가격대는 중간 정도\n\n혹시 중고로 구매해도 괜찮을까요? 아니면 신품을 사는 게 나을까요?'}
            {selectedPost.category === '동네정보' && '잠실 롯데월드몰 수유실 정보 공유해요\n\n롯데월드몰 3층에 있는 수유실이 정말 잘 되어 있어요. 기저귀 갈이대, 수유 공간, 정수기, 전자레인지까지 완비되어 있어서 편하게 이용했습니다. 아기랑 외출할 때 참고하세요!'}
            {selectedPost.category !== '중고팁' && selectedPost.category !== '대여후기' && selectedPost.category !== '7-12개월' && selectedPost.category !== '동네정보' && '게시글 내용이 여기에 표시됩니다.'}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', color: COLORS.text, fontWeight: '500' }}>{selectedPost.author}</span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: COLORS.text, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Heart size={16} color={COLORS.text} fill={COLORS.text} />
                <span style={{ fontSize: '14px', color: COLORS.text, fontWeight: '500' }}>{selectedPost.meta.split('좋아요 ')[1]?.split(' ')[0] || '0'}</span>
              </span>
              <span style={{ fontSize: '12px', color: COLORS.text, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MessageCircle size={16} color={COLORS.text} />
                <span style={{ fontSize: '14px', color: COLORS.text, fontWeight: '500' }}>{selectedPost.meta.split('댓글 ')[1]?.split(' ')[0] || '0'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div style={{ backgroundColor: COLORS.card, borderRadius: '20px', padding: '18px', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, marginBottom: '16px' }}>댓글 {selectedPost.meta.split('댓글 ')[1]?.split(' ')[0] || '0'}</h2>
          {/* Sample Comments */}
          {[
            { id: 1, author: '육아맘1', text: '좋은 정보 감사합니다!', time: '1시간 전' },
            { id: 2, author: '초보맘', text: '저도 궁금했는데 덕분에 해결됐어요!', time: '30분 전' }
          ].map((comment) => (
            <div key={comment.id} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: COLORS.mint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>👶</div>
              <div style={{ marginLeft: '12px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: COLORS.text }}>{comment.author}</span>
                  <span style={{ fontSize: '11px', color: COLORS.subText }}>{comment.time}</span>
                </div>
                <div style={{ fontSize: '14px', color: COLORS.text, lineHeight: '20px' }}>
                  {comment.text}
                </div>
              </div>
            </div>
          ))}

          {/* Comment Input */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: COLORS.peach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👶</div>
            <input
              type="text"
              placeholder="댓글을 입력하세요..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '20px',
                border: `1px solid ${COLORS.border}`,
                fontSize: '14px',
                backgroundColor: COLORS.bg,
                color: COLORS.text,
                outline: 'none',
              }}
            />
            <button
              onClick={() => alert('댓글 작성')}
              style={{
                backgroundColor: COLORS.primary,
                border: 'none',
                borderRadius: '20px',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FFF',
                cursor: 'pointer',
              }}
            >
              등록
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: COLORS.text, marginBottom: '12px' }}>관련 게시글</h2>
        {posts.slice(0, 2).map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            style={{ backgroundColor: COLORS.card, borderRadius: '18px', padding: '16px', marginTop: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.03)', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{post.category}</span>
              <span style={{ fontSize: '11px', fontWeight: '500', color: COLORS.primary, backgroundColor: COLORS.peach, padding: '2px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <MapPin size={10} />
                {post.region}
              </span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>·</span>
              <span style={{ fontSize: '11px', color: COLORS.subText }}>{post.time}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: COLORS.text, marginBottom: '8px' }}>{post.title}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: COLORS.text, fontWeight: '500' }}>{post.author}</span>
              <span style={{ fontSize: '12px', color: COLORS.subText }}>{post.meta}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.bg, position: 'relative' }}>
      {showUploadForm ? (
        renderUploadForm()
      ) : showChat ? (
        renderChat()
      ) : (
        <>
          <div style={{ padding: '20px' }}>
            {selectedPost ? (
              renderPostDetail()
            ) : selectedProduct ? (
              renderProductDetail()
            ) : showAllProducts ? (
              renderAllProducts()
            ) : selectedCategory ? (
              renderCategoryDetail()
            ) : (
              <>
                {currentTab === 'home' && renderHome()}
                {currentTab === 'search' && <div style={{ paddingTop: '60px', textAlign: 'center', color: COLORS.subText }}>검색 기능 준비중</div>}
                {currentTab === 'community' && renderCommunity()}
                {currentTab === 'pocket' && renderPocket()}
                {currentTab === 'my' && renderMyPage()}
              </>
            )}
          </div>

          {/* 하단 네비게이션 - 상세 페이지에서는 숨김 */}
          {!selectedCategory && !selectedProduct && !showAllProducts && !selectedPost && (
            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', backgroundColor: COLORS.card, borderTop: `1px solid ${COLORS.border}`, padding: '12px 0', boxShadow: '0 -2px 10px rgba(0,0,0,0.05)', zIndex: 100 }}>
              {[
                { key: 'home', icon: Home, label: '홈' },
                { key: 'search', icon: Search, label: '검색' },
                { key: 'community', icon: MessageCircle, label: '커뮤니티' },
                { key: 'pocket', icon: Heart, label: '포켓' },
                { key: 'my', icon: User, label: '마이' },
              ].map(({ key, icon: Icon, label }) => (
                <div
                  key={key}
                  onClick={() => setCurrentTab(key)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', fontSize: '11px', flex: 1 }}
                >
                  <Icon size={24} color={currentTab === key ? COLORS.text : COLORS.subText} />
                  <span style={{ marginTop: '4px', fontWeight: currentTab === key ? '600' : '400', color: currentTab === key ? COLORS.text : COLORS.subText }}>{label}</span>
                </div>
              ))}
            </div>
          )}

          {/* 상품 상세 페이지 하단 고정 버튼 */}
          {selectedProduct && !showChat && (
            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', gap: '12px', backgroundColor: COLORS.card, borderTop: `1px solid ${COLORS.border}`, padding: '16px 20px', boxShadow: '0 -2px 10px rgba(0,0,0,0.05)', zIndex: 100 }}>
              <button
                onClick={() => handleLike(selectedProduct.id)}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: COLORS.bg,
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Heart 
                  size={28} 
                  color={likedProducts[selectedProduct.id] ? '#FF6B6B' : COLORS.text}
                  fill={likedProducts[selectedProduct.id] ? '#FF6B6B' : 'none'}
                />
              </button>
              <button
                onClick={() => setShowChat(true)}
                style={{
                  flex: 1,
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: COLORS.primary,
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#FFF',
                  cursor: 'pointer',
                }}
              >
                채팅으로 거래하기
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
