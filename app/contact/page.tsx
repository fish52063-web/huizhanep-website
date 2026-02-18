import type { Metadata } from 'next'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import SchemaMarkup from '@/components/SchemaMarkup'
import { COMPANY_INFO, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '聯繫我們｜惠展環保免費諮詢',
  description: '聯繫惠展環保，免費到府估價。電話、LINE、表單多種聯繫方式，高雄地區30分鐘內快速回覆。裝潢後細清、除甲醛、清潔工程諮詢。',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phone,
    contactType: 'customer service',
    areaServed: 'TW',
    availableLanguage: 'Chinese',
    url: `${SITE_URL}/contact/`,
  }

  return (
    <>
      <SchemaMarkup schema={contactSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '聯繫我們' }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-8">聯繫我們</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">聯繫方式</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-gray-800">免費專線</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-700 text-lg font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium text-gray-800">手機 / LINE</p>
                  <a href={`tel:${COMPANY_INFO.mobile}`} className="text-primary-700 hover:underline">
                    {COMPANY_INFO.mobile}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium text-gray-800">電子信箱</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-700 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-gray-800">公司地址</p>
                  <p className="text-gray-600">{COMPANY_INFO.addressFull}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-medium text-gray-800">營業時間</p>
                  <p className="text-gray-600">{COMPANY_INFO.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <h3 className="font-bold text-primary-800 mb-2">免費到府估價</h3>
              <p className="text-sm text-gray-600">
                來電預約即可享受免費到府估價服務，專業人員將到現場評估並提供詳細報價單，絕無隱藏費用。
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">線上諮詢</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話 *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">電子信箱</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">需求服務</label>
                <select id="service" name="service" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">請選擇服務項目</option>
                  <option value="post-renovation">裝潢後細清</option>
                  <option value="formaldehyde">除甲醛工程</option>
                  <option value="bathroom">衛浴鍍膜</option>
                  <option value="solar">光伏設置工程</option>
                  <option value="concrete">混凝土地坪研磨</option>
                  <option value="stone">石材美容養護</option>
                  <option value="exterior">外牆清洗/防水</option>
                  <option value="tile">磁磚縫防霉美容</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">需求說明</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="請描述您的需求，如坪數、地點、預計時間等"></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-800 transition-colors"
              >
                送出諮詢
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
