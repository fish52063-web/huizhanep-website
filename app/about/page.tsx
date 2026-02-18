import type { Metadata } from 'next'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTASection from '@/components/CTASection'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '關於惠展環保｜高雄專業清潔公司',
  description: '惠展環保成立於高雄橋頭，專注於裝潢後細清、除甲醛、環保清潔工程。擁有專業施工團隊與環保認證，服務高雄、屏東、台南地區。',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '關於我們' }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-8">關於惠展環保</h1>

        <div className="prose max-w-none">
          <h2>公司簡介</h2>
          <p>
            惠展環保有限公司成立於{COMPANY_INFO.founding}年，總部位於高雄市橋頭區。我們專注於提供高品質的清潔工程與環保服務，
            從裝潢後細清、除甲醛工程到外牆清洗、石材美容，為客戶打造健康、安全、舒適的生活與工作環境。
          </p>

          <h2>我們的理念</h2>
          <p>
            「專業、環保、安心」是惠展環保的核心價值。我們相信專業的清潔服務不僅是打掃乾淨，更要兼顧環境保護與人體健康。
            因此我們堅持使用環保認證的清潔材料與先進的施工技術，確保每次服務都能達到最高標準。
          </p>

          <h2>專業團隊</h2>
          <p>
            我們的施工團隊擁有多年清潔工程經驗，定期接受專業培訓，掌握最新的清潔技術與設備操作。
            每位技師都經過嚴格篩選與訓練，確保為您提供最專業、最細緻的服務。
          </p>

          <h2>服務承諾</h2>
          <ul>
            <li><strong>免費到府估價</strong> — 專業人員現場評估，提供透明合理的報價</li>
            <li><strong>準時到達</strong> — 約定時間準時到府，不浪費您的寶貴時間</li>
            <li><strong>施工保固</strong> — 所有服務提供保固，品質問題免費回訪處理</li>
            <li><strong>環保施工</strong> — 使用環保認證材料，安全無毒無殘留</li>
            <li><strong>售後服務</strong> — 提供施工後保養建議，延長服務效果</li>
          </ul>

          <h2>服務範圍</h2>
          <p>
            我們的服務範圍涵蓋高雄市全區（含橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅等區域），
            並延伸至屏東市及台南市地區，為南台灣客戶提供最便捷的專業清潔服務。
          </p>

          <h2>聯繫方式</h2>
          <ul>
            <li>免費專線：{COMPANY_INFO.phone}</li>
            <li>手機：{COMPANY_INFO.mobile}</li>
            <li>信箱：{COMPANY_INFO.email}</li>
            <li>地址：{COMPANY_INFO.addressFull}</li>
            <li>營業時間：{COMPANY_INFO.businessHours}</li>
          </ul>
        </div>
      </div>

      <CTASection title="想了解更多？" description="歡迎來電或線上諮詢，我們很樂意為您解答任何問題。" />
    </>
  )
}
