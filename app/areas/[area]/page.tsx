import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { generateAreaSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { AREAS, SERVICES, SITE_NAME, COMPANY_INFO } from '@/lib/constants'

interface Props {
  params: Promise<{ area: string }>
}

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: slug } = await params
  const area = AREAS.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: `${area.name}清潔公司推薦｜${area.keyword}｜${SITE_NAME}`,
    description: `${area.name}清潔公司推薦惠展環保！提供${area.name}地區裝潢後細清、除甲醛、外牆清洗、石材美容等專業服務。免費到府估價，在地服務快速到達。`,
    alternates: { canonical: `/areas/${slug}/` },
  }
}

export default async function AreaPage({ params }: Props) {
  const { area: slug } = await params
  const area = AREAS.find((a) => a.slug === slug)
  if (!area) notFound()

  const faqs = [
    { question: `${area.name}有哪些清潔服務可以選擇？`, answer: `惠展環保在${area.name}提供裝潢後細清、除甲醛工程、衛浴鍍膜、外牆清洗防水、石材美容養護、混凝土地坪研磨、磁磚縫防霉美容等完整服務。` },
    { question: `${area.name}到府服務需要多久？`, answer: `我們從高雄橋頭總部出發，到${area.name}通常在30-60分鐘內可以到達。預約時我們會確認最佳的到府時間。` },
    { question: `${area.name}的清潔服務費用怎麼算？`, answer: `費用依照服務項目、施工面積和難度而定。我們提供免費到府估價服務，歡迎來電${COMPANY_INFO.phone}預約。` },
    { question: `惠展環保在${area.name}有施工案例嗎？`, answer: `是的，我們在${area.name}已完成多個施工案例，包含住宅細清、除甲醛、商辦清潔等。歡迎參考我們的案例展示頁面。` },
  ]

  return (
    <>
      <SchemaMarkup
        schema={[
          generateAreaSchema(area),
          generateFAQSchema(faqs),
          generateBreadcrumbSchema([
            { name: '首頁', url: '/' },
            { name: '服務區域', url: '/areas/' },
            { name: area.name, url: `/areas/${slug}/` },
          ]),
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '服務區域', href: '/areas/' }, { label: area.name }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">{area.name}清潔公司推薦｜{area.keyword}</h1>
        <p className="text-lg text-gray-600 mb-8">{area.desc}</p>

        <div className="prose max-w-none">
          <h2>{area.name}專業清潔服務</h2>
          <p>
            惠展環保為{area.name}地區提供全方位的專業清潔與環保工程服務。我們的專業團隊熟悉{area.name}的環境特性，
            能夠針對當地的氣候條件和建築特點，提供最適合的清潔方案。
          </p>

          <h2>我們在{area.name}提供的服務</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <h3 className="font-medium text-gray-800">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.priceRange}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="prose max-w-none">
          <h2>為什麼{area.name}居民選擇惠展環保？</h2>
          <ul>
            <li><strong>在地服務</strong>：從總部到{area.name}快速到達，提供即時服務</li>
            <li><strong>專業團隊</strong>：擁有豐富的{area.name}地區施工經驗</li>
            <li><strong>環保材料</strong>：使用安全無毒的環保清潔材料</li>
            <li><strong>施工保固</strong>：所有服務提供完善保固，品質有保障</li>
            <li><strong>免費估價</strong>：到府評估，報價透明不加價</li>
          </ul>

          <h2>聯繫方式</h2>
          <p>
            如果您在{area.name}需要清潔服務，歡迎透過以下方式聯繫我們：
          </p>
          <ul>
            <li>免費專線：{COMPANY_INFO.phone}</li>
            <li>手機/LINE：{COMPANY_INFO.mobile}</li>
            <li>線上諮詢：<Link href="/contact/">點此填寫表單</Link></li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{area.name}清潔服務常見問題</h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <CTASection title={`${area.name}清潔服務就找惠展環保`} description={`免費到府估價，${area.name}地區快速到達，專業施工有保固。`} />
    </>
  )
}
