# 惠展環保網站重建 - 工作日誌

## 專案概要
- **專案名稱**：惠展環保官方網站重建
- **目標**：重建為最高 SEO 標準的網站，生成 100+ 篇文章，90 天內 30 組關鍵字衝首頁
- **技術棧**：Next.js 16 (App Router) + Tailwind CSS 4 + MDX + Vercel
- **專案路徑**：`/Users/jiahaolu/huizhanep-website/`

---

## 2026-02-18 工作紀錄

### 完成項目

#### 1. 專案初始化
- [x] 建立 Next.js 16 專案（App Router + TypeScript + Tailwind CSS 4）
- [x] 安裝依賴：gray-matter, remark, remark-html, reading-time
- [x] 設定 tsconfig.json, next.config.ts, postcss.config.mjs
- [x] 建立完整專案目錄結構

#### 2. 核心元件與佈局
- [x] `app/layout.tsx` — 全站佈局 + Organization/LocalBusiness Schema
- [x] `components/Header.tsx` — Logo + 響應式導航 + 手機漢堡選單 + CTA
- [x] `components/Footer.tsx` — 服務連結 + 聯繫方式 + Logo
- [x] `components/BreadcrumbNav.tsx` — 自動麵包屑導航
- [x] `components/CTASection.tsx` — 免費諮詢 CTA 區塊（含背景圖）
- [x] `components/FAQAccordion.tsx` — FAQ 手風琴元件
- [x] `components/ServiceCard.tsx` — 服務卡片元件
- [x] `components/TestimonialCard.tsx` — 客戶見證卡片
- [x] `components/TableOfContents.tsx` — 文章目錄元件
- [x] `components/SchemaMarkup.tsx` — JSON-LD Schema 注入

#### 3. 工具庫
- [x] `lib/constants.ts` — 公司資訊、8大服務、10個區域、部落格分類
- [x] `lib/schema.ts` — 7 種 Schema 生成器（Organization, LocalBusiness, WebSite, Service, Article, FAQ, Breadcrumb, Area）
- [x] `lib/mdx.ts` — MDX 解析器（frontmatter、headings 提取、閱讀時間）

#### 4. 頁面建設（156 頁 SSG）

| 類型 | 數量 | 頁面 |
|------|------|------|
| 靜態頁面 | 8 | 首頁、關於、聯繫、FAQ、案例、服務總覽、區域總覽、部落格列表 |
| 服務頁面 | 8 | 裝潢後細清、除甲醛、衛浴鍍膜、太陽能、混凝土研磨、石材美容、外牆清洗、磁磚縫美容 |
| 區域頁面 | 10 | 高雄、橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅、屏東、台南 |
| 部落格文章 | 116 | 10 大分類（細清知識、除甲醛、清潔技巧、石材磁磚、衛浴、外牆、太陽能、地區指南、產業趨勢、案例分享） |
| 分類頁面 | 10 | 對應 10 大文章分類 |
| 系統頁面 | 4 | sitemap.xml, robots.txt, 404, layout |
| **總計** | **156** | |

#### 5. SEO 完成項目
- [x] 每頁獨立 title + meta description
- [x] Canonical URL + hreflang (zh-TW)
- [x] Open Graph + Twitter Cards
- [x] JSON-LD Schema Markup（7 種類型）
- [x] 自動生成 sitemap.xml（含所有 156 頁 URL）
- [x] robots.txt
- [x] 麵包屑導航（含 BreadcrumbList Schema）
- [x] 響應式設計（Mobile First）
- [x] next/image 圖片優化（WebP/AVIF）
- [x] 404 自訂頁面
- [x] SSG 預渲染 + Vercel CDN 架構

#### 6. 圖片整合（84 張）
- [x] 從原網站 (huizhanep.com.tw) 下載所有圖片
- [x] Logo → Header + Footer
- [x] Hero 背景圖 → 首頁
- [x] 8 張服務圖片 → 服務卡片 + 詳情頁 Hero
- [x] 施工流程圖示 (4張) → 首頁
- [x] 特色圖示 (3張) → 「為什麼選擇惠展」
- [x] 11 張案例照片 → 案例展示頁 + 首頁施工實績
- [x] 32 張施工細節照 → `/images/cases/`
- [x] Banner 圖片 (2張) → 備用
- [x] CTA 背景圖、關於背景圖、服務頁背景圖
- [x] 社群圖示 (FB, Phone, LINE)

#### 7. 公司資訊更新
- [x] 電話更新為 0976-101-519（全站 + 116 篇文章）
- [x] 地址更新為 高雄市橋頭區德松里德松路4號

### Build 結果
```
✓ Compiled successfully
✓ 156/156 static pages generated (2.9s)
0 errors, 0 warnings
```

### 待辦事項
- [ ] GitHub 登入 (`gh auth login`)
- [ ] 推送至 GitHub repo
- [ ] Vercel 部署
- [ ] 購買網域並綁定
- [ ] Google Search Console 提交 sitemap
- [ ] 設定 GA4 追蹤碼
- [ ] 舊網站 301 重定向對照表（如使用同一網域）

---

## 30 組目標關鍵字

### Tier 1: 核心服務（8 組）
1. 高雄裝潢後細清 → `/services/post-renovation-cleaning/`
2. 高雄除甲醛 → `/services/formaldehyde-removal/`
3. 高雄清潔公司 → `/` + `/areas/kaohsiung/`
4. 高雄外牆清洗 → `/services/exterior-wall-cleaning/`
5. 高雄石材美容 → `/services/stone-care/`
6. 高雄衛浴鍍膜 → `/services/bathroom-coating/`
7. 高雄磁磚縫美容 → `/services/tile-grout-repair/`
8. 高雄混凝土地坪研磨 → `/services/concrete-grinding/`

### Tier 2: 長尾（12 組） → 對應部落格文章
### Tier 3: 地區+問答（8 組） → 對應區域頁 + 文章
### Tier 4: 大字（2 組）→ 首頁 + Topic Cluster
