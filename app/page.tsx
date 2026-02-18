import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { generateWebSiteSchema, generateFAQSchema } from '@/lib/schema'
import { SERVICES, AREAS, COMPANY_INFO, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '高雄專業清潔公司｜裝潢後細清・除甲醛・環保工程｜惠展環保',
  description: '惠展環保為高雄專業清潔公司，提供裝潢後細清、除甲醛、外牆清洗、石材美容、衛浴鍍膜等服務。免費到府估價，專業施工團隊，環保安全有保固。立即來電諮詢！',
  alternates: { canonical: SITE_URL },
}

const homeFaqs = [
  { question: '惠展環保提供哪些清潔服務？', answer: '我們提供裝潢後細清、除甲醛工程、衛浴鍍膜、外牆清洗防水、石材美容養護、混凝土地坪研磨、磁磚縫防霉美容、太陽能板安裝等八大專業服務。' },
  { question: '服務範圍涵蓋哪些地區？', answer: '我們的服務範圍涵蓋高雄市全區（橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅等）、屏東市及台南市地區。' },
  { question: '如何取得報價？', answer: '您可以撥打免費專線或透過網站聯繫表單預約免費到府估價，我們的專業人員會到現場評估後提供詳細報價。' },
  { question: '你們的清潔劑安全嗎？', answer: '我們使用經過認證的環保清潔劑，不含有害化學物質，對人體、寵物和環境都安全無虞。' },
  { question: '施工後有保固嗎？', answer: '依照不同服務項目，我們提供 3 個月至 1 年不等的施工保固，確保服務品質。' },
]

const testimonials = [
  { name: '陳先生', location: '高雄左營', service: '裝潢後細清', content: '新家裝潢完請惠展來做細清，團隊非常專業細心，連窗溝都清得乾乾淨淨，大推！', rating: 5 },
  { name: '林小姐', location: '高雄鳳山', service: '除甲醛', content: '新房子甲醛味很重，施作光觸媒後味道明顯改善，檢測數值也合格了，很放心。', rating: 5 },
  { name: '王太太', location: '高雄三民', service: '衛浴鍍膜', content: '浴室鍍膜後水垢真的不容易附著，清潔變得好輕鬆，效果維持很久。', rating: 5 },
  { name: '張先生', location: '屏東市', service: '外牆清洗', content: '大樓外牆清洗得很乾淨，連多年的水漬都去除了，鄰居都說像新房子一樣。', rating: 5 },
]

const serviceImages: Record<string, string> = {
  'post-renovation-cleaning': '/images/service-post-renovation.jpg',
  'formaldehyde-removal': '/images/service-formaldehyde.jpg',
  'bathroom-coating': '/images/service-bathroom.jpg',
  'solar-panel-installation': '/images/service-solar.jpg',
  'concrete-grinding': '/images/service-concrete.jpg',
  'stone-care': '/images/service-stone.jpg',
  'exterior-wall-cleaning': '/images/service-exterior.jpg',
  'tile-grout-repair': '/images/service-tile.jpg',
}

const processSteps = [
  { step: '1', title: '免費諮詢', desc: '來電或線上預約，說明您的需求', img: '/images/flow-1.png' },
  { step: '2', title: '到府評估', desc: '專業人員現場勘查，提供詳細報價', img: '/images/flow-2.png' },
  { step: '3', title: '專業施工', desc: '約定時間到府，使用專業設備施工', img: '/images/flow-3.png' },
  { step: '4', title: '驗收保固', desc: '施工完成驗收，提供保固服務', img: '/images/flow-4.png' },
]

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[generateWebSiteSchema(), generateFAQSchema(homeFaqs)]} />

      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="惠展環保專業清潔服務"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            高雄專業清潔<br className="sm:hidden" /> · 除甲醛 · 環保工程
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            惠展環保提供裝潢後細清、除甲醛、外牆清洗、石材美容等專業服務，環保施工有保固
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
            >
              免費諮詢 {COMPANY_INFO.phone}
            </a>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-lg"
            >
              查看服務項目
            </Link>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about-scroll.jpg"
                alt="惠展環保施工團隊"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">關於惠展環保</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                惠展環保有限公司位於高雄市橋頭區，專注於提供高品質的清潔工程與環保服務。我們的專業團隊擁有多年施工經驗，堅持使用環保認證材料，為客戶打造健康、安全、舒適的生活環境。
              </p>
              <Link href="/about/" className="text-primary-700 font-medium hover:text-primary-800">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">八大專業服務</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">從居家清潔到環保工程，惠展環保提供全方位的專業服務</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <div className="relative h-40">
                  <Image
                    src={serviceImages[s.slug]}
                    alt={`${s.name} - ${s.keyword}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary-700 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  <p className="text-primary-700 text-sm font-medium">{s.priceRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">為什麼選擇惠展環保？</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '專業團隊', desc: '擁有多年清潔工程經驗的專業施工團隊，定期接受培訓，掌握最新技術與設備。', img: '/images/feature-1.png' },
              { title: '環保安全', desc: '全面使用環保認證清潔劑與材料，施工過程安全無毒，守護您和家人的健康。', img: '/images/feature-2.png' },
              { title: '施工保固', desc: '所有服務皆提供施工保固，若有任何問題我們將立即回訪處理，讓您安心無憂。', img: '/images/feature-3.png' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image src={item.img} alt={item.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/about-bg.jpg"
          alt="服務流程背景"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服務流程</h2>
            <p className="text-gray-600">簡單四步驟，輕鬆享受專業清潔服務</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <Image src={p.img} alt={p.title} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">施工實績</h2>
            <p className="text-gray-600">精選案例展示，見證惠展環保的專業品質</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/cases/sanmin-house.jpg', alt: '三民區透天裝潢後細清' },
              { src: '/images/cases/r5-new-century.jpg', alt: 'R5新世紀大樓清潔' },
              { src: '/images/cases/king-palace.jpg', alt: '國王一號院清潔工程' },
              { src: '/images/cases/office-cleaning.jpg', alt: '商辦清潔服務' },
              { src: '/images/cases/qingchuan.jpg', alt: '晴川社區清潔' },
              { src: '/images/cases/senyuan.jpg', alt: '森遠社區裝潢後細清' },
              { src: '/images/cases/nanzi-community.jpg', alt: '楠梓區大樓社區清潔' },
              { src: '/images/cases/pingtung-villa.jpg', alt: '屏東透天別墅清潔' },
            ].map((img, i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/cases/" className="inline-block px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
              查看更多案例
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">客戶好評推薦</h2>
            <p className="text-gray-600">超過 500 位客戶的信賴選擇</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服務區域</h2>
            <p className="text-gray-600">涵蓋高雄、屏東、台南地區</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/`}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-primary-400 hover:text-primary-700 transition-colors text-sm font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">常見問題</h2>
          </div>
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
