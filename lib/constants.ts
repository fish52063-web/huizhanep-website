export const SITE_NAME = '惠展環保'
export const SITE_URL = 'https://www.huizhanep.com.tw'
export const SITE_DESCRIPTION = '高雄專業清潔公司｜裝潢後細清、除甲醛、外牆清洗、石材美容、衛浴鍍膜、太陽能板安裝。惠展環保提供全方位環保清潔工程服務，服務高雄、屏東、台南地區。'

export const COMPANY_INFO = {
  name: '惠展環保有限公司',
  nameEn: 'Hui Zhan Environmental Protection Co., Ltd.',
  phone: '0976-101-519',
  mobile: '0976-101-519',
  email: 'service@huizhanep.com.tw',
  address: '高雄市橋頭區',
  addressFull: '高雄市橋頭區德松里德松路4號',
  businessHours: '週一至週六 08:00-18:00',
  lat: 22.7570,
  lng: 120.3054,
  founding: '2018',
  logo: '/images/logo.png',
  slogan: '專業清潔 · 環保工程 · 安心保固',
}

export const NAV_ITEMS = [
  { label: '首頁', href: '/' },
  { label: '服務項目', href: '/services/' },
  { label: '服務區域', href: '/areas/' },
  { label: '部落格', href: '/blog/' },
  { label: '案例展示', href: '/cases/' },
  { label: '常見問題', href: '/faq/' },
  { label: '關於我們', href: '/about/' },
  { label: '聯繫我們', href: '/contact/' },
]

export const SERVICES = [
  {
    slug: 'post-renovation-cleaning',
    name: '裝潢後細清',
    shortDesc: '新屋裝潢後的深度清潔，去除粉塵、殘膠、水泥漬，還您乾淨舒適的新居。',
    keyword: '高雄裝潢後細清',
    icon: '🏠',
    priceRange: 'NT$3,000 - NT$15,000',
  },
  {
    slug: 'formaldehyde-removal',
    name: '除甲醛工程',
    shortDesc: '採用日本光觸媒技術，有效分解甲醛、TVOC，守護家人健康。',
    keyword: '高雄除甲醛',
    icon: '🧪',
    priceRange: 'NT$5,000 - NT$30,000',
  },
  {
    slug: 'bathroom-coating',
    name: '衛浴鍍膜',
    shortDesc: '奈米鍍膜技術，防水垢、防霉菌，讓浴室長效亮麗。',
    keyword: '高雄衛浴鍍膜',
    icon: '🚿',
    priceRange: 'NT$3,000 - NT$12,000',
  },
  {
    slug: 'solar-panel-installation',
    name: '光伏設置工程',
    shortDesc: '太陽能板規劃、安裝、維護一站式服務，節能減碳愛地球。',
    keyword: '高雄太陽能板安裝',
    icon: '☀️',
    priceRange: '依坪數報價',
  },
  {
    slug: 'concrete-grinding',
    name: '混凝土地坪研磨',
    shortDesc: '專業地坪研磨拋光，打造光亮耐用的水泥地面。',
    keyword: '高雄混凝土地坪研磨',
    icon: '🏗️',
    priceRange: 'NT$800 - NT$2,000/坪',
  },
  {
    slug: 'stone-care',
    name: '石材美容養護',
    shortDesc: '大理石、花崗石研磨拋光、晶化處理，恢復石材天然光澤。',
    keyword: '高雄石材美容',
    icon: '💎',
    priceRange: 'NT$1,000 - NT$3,000/坪',
  },
  {
    slug: 'exterior-wall-cleaning',
    name: '外牆清洗/防水',
    shortDesc: '高空外牆清洗、防水塗層施工，解決壁癌漏水問題。',
    keyword: '高雄外牆清洗',
    icon: '🏢',
    priceRange: '依面積報價',
  },
  {
    slug: 'tile-grout-repair',
    name: '磁磚縫防霉美容',
    shortDesc: '磁磚縫隙清潔、填縫、防霉處理，煥然一新。',
    keyword: '高雄磁磚縫美容',
    icon: '🔲',
    priceRange: 'NT$2,000 - NT$8,000',
  },
]

export const AREAS = [
  { slug: 'kaohsiung', name: '高雄市', keyword: '高雄清潔公司', lat: 22.6273, lng: 120.3014, desc: '惠展環保總部所在地，提供高雄全區清潔服務，30 分鐘內快速到達。' },
  { slug: 'qiaotou', name: '橋頭區', keyword: '橋頭清潔公司推薦', lat: 22.7570, lng: 120.3054, desc: '惠展環保公司所在地，橋頭區客戶享有最快速的到府服務。' },
  { slug: 'zuoying', name: '左營區', keyword: '左營裝潢後細清', lat: 22.6847, lng: 120.2942, desc: '左營高鐵站周邊、巨蛋商圈，大量新屋裝潢後細清需求。' },
  { slug: 'fengshan', name: '鳳山區', keyword: '鳳山除甲醛', lat: 22.6271, lng: 120.3571, desc: '鳳山區為高雄人口最多區域，住宅密集，清潔需求量大。' },
  { slug: 'sanmin', name: '三民區', keyword: '三民區清潔公司', lat: 22.6474, lng: 120.3176, desc: '三民區交通便利，商業住宅混合區，提供全方位清潔服務。' },
  { slug: 'qianzhen', name: '前鎮區', keyword: '前鎮清潔服務', lat: 22.5968, lng: 120.3229, desc: '前鎮加工出口區周邊，提供辦公室與廠房清潔服務。' },
  { slug: 'nanzi', name: '楠梓區', keyword: '楠梓裝潢清潔', lat: 22.7280, lng: 120.3260, desc: '楠梓科技園區周邊，新建案眾多，裝潢後細清需求旺盛。' },
  { slug: 'lingya', name: '苓雅區', keyword: '苓雅清潔公司', lat: 22.6197, lng: 120.3100, desc: '苓雅區為高雄市中心精華地段，商辦與高級住宅林立。' },
  { slug: 'pingtung', name: '屏東市', keyword: '屏東裝潢後細清', lat: 22.6762, lng: 120.4929, desc: '惠展環保服務範圍延伸至屏東地區，提供同等品質的專業服務。' },
  { slug: 'tainan', name: '台南市', keyword: '台南除甲醛推薦', lat: 22.9998, lng: 120.2269, desc: '服務範圍涵蓋台南地區，為台南客戶提供專業清潔與除甲醛服務。' },
]

export const BLOG_CATEGORIES = [
  { slug: 'post-renovation', name: '裝潢後細清知識' },
  { slug: 'formaldehyde', name: '除甲醛專題' },
  { slug: 'cleaning-tips', name: '清潔技巧教學' },
  { slug: 'stone-tile', name: '石材/磁磚養護' },
  { slug: 'bathroom', name: '衛浴保養' },
  { slug: 'exterior', name: '外牆/防水' },
  { slug: 'solar-green', name: '太陽能/環保' },
  { slug: 'area-guide', name: '地區指南' },
  { slug: 'industry', name: '產業趨勢' },
  { slug: 'case-study', name: '案例分享' },
]
