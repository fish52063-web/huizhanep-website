import type { Metadata } from 'next'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: '常見問題 FAQ｜惠展環保清潔服務',
  description: '惠展環保常見問題解答：裝潢後細清流程、除甲醛費用、服務區域、施工時間、保固方式等。一次解答您的所有疑問。',
  alternates: { canonical: '/faq/' },
}

const faqSections = [
  {
    title: '服務相關',
    faqs: [
      { question: '惠展環保提供哪些服務？', answer: '我們提供裝潢後細清、除甲醛工程、衛浴鍍膜、外牆清洗防水、石材美容養護、混凝土地坪研磨、磁磚縫防霉美容、太陽能板安裝等八大專業服務。每項服務都有專業施工團隊負責。' },
      { question: '你們的服務範圍涵蓋哪裡？', answer: '我們的服務範圍涵蓋高雄市全區（橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅等），並延伸至屏東市及台南市。高雄市區內30分鐘可到達。' },
      { question: '可以只做部分區域的清潔嗎？', answer: '當然可以。我們會根據您的需求提供客製化服務，無論是全屋清潔或局部區域清潔都可以。到府評估時會詳細討論您的需求。' },
    ],
  },
  {
    title: '價格與報價',
    faqs: [
      { question: '如何取得報價？', answer: '您可以撥打免費專線0976-101-519，或透過網站聯繫表單預約免費到府估價。我們的專業人員會到現場評估後提供詳細的書面報價。' },
      { question: '裝潢後細清費用大約多少？', answer: '裝潢後細清費用依坪數、裝潢程度而定，一般20-40坪住宅約NT$3,000-15,000。實際費用需到場評估後提供準確報價。' },
      { question: '除甲醛費用怎麼算？', answer: '除甲醛費用依空間大小、甲醛濃度、使用的除甲醛技術而定，一般20-40坪約NT$5,000-30,000。建議先做甲醛檢測再評估施工方案。' },
      { question: '有額外或隱藏費用嗎？', answer: '絕對沒有。我們的報價都是到場評估後的定價，不會有任何隱藏費用或額外加價。報價單上會清楚列明所有項目。' },
    ],
  },
  {
    title: '施工相關',
    faqs: [
      { question: '施工需要多久時間？', answer: '依服務項目和空間大小而定：裝潢後細清約4-8小時，除甲醛約2-4小時，衛浴鍍膜約2-3小時。到場評估時會告知預估時間。' },
      { question: '施工時需要在場嗎？', answer: '建議施工開始和結束時在場進行確認和驗收。施工過程中不需要全程在場，但需要確保施工團隊可以進入施工區域。' },
      { question: '施工後多久可以使用空間？', answer: '裝潢後細清完成即可入住使用。除甲醛施工後建議通風24-48小時後再入住。其他服務依項目不同有不同的養護時間。' },
      { question: '你們使用的清潔劑安全嗎？', answer: '我們全面使用經過SGS認證的環保清潔劑與材料，不含甲醛、苯等有害物質，對人體、寵物和環境都安全無虞。' },
    ],
  },
  {
    title: '保固與售後',
    faqs: [
      { question: '有施工保固嗎？', answer: '所有服務都提供施工保固。裝潢後細清保固7天，除甲醛保固1年（保證檢測合格），衛浴鍍膜保固6個月，其他服務依項目提供3-12個月不等。' },
      { question: '保固期內出問題怎麼辦？', answer: '保固期內如有任何品質問題，請來電通知，我們會在48小時內安排技師免費回訪處理，直到您滿意為止。' },
      { question: '有提供施工後的保養建議嗎？', answer: '有的。施工完成後我們會提供書面的保養維護建議，教您如何延長施工效果。有任何保養問題也歡迎隨時來電詢問。' },
    ],
  },
]

const allFaqs = faqSections.flatMap((s) => s.faqs)

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          generateFAQSchema(allFaqs),
          generateBreadcrumbSchema([{ name: '首頁', url: '/' }, { name: '常見問題', url: '/faq/' }]),
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '常見問題' }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">常見問題 FAQ</h1>
        <p className="text-gray-600 mb-8">以下整理了客戶最常詢問的問題，如果找不到您要的答案，歡迎直接聯繫我們。</p>

        {faqSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">{section.title}</h2>
            <FAQAccordion faqs={section.faqs} />
          </div>
        ))}
      </div>

      <CTASection title="還有其他問題？" description="歡迎來電或線上諮詢，我們的專業顧問會為您詳細解答。" />
    </>
  )
}
