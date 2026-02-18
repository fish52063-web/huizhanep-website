import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO, SERVICES, NAV_ITEMS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src="/images/logo.png" alt="惠展環保" width={140} height={44} className="mb-3 brightness-0 invert" />
            <h3 className="text-white text-lg font-bold mb-4">惠展環保</h3>
            <p className="text-sm mb-3">{COMPANY_INFO.slogan}</p>
            <ul className="space-y-2 text-sm">
              <li>電話：{COMPANY_INFO.phone}</li>
              <li>手機：{COMPANY_INFO.mobile}</li>
              <li>信箱：{COMPANY_INFO.email}</li>
              <li>地址：{COMPANY_INFO.addressFull}</li>
              <li>營業時間：{COMPANY_INFO.businessHours}</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">服務項目</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-primary-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">服務區域</h3>
            <p className="text-sm mb-3">
              高雄市全區、屏東市、台南市
            </p>
            <p className="text-sm mb-4">
              包含：橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅等區域
            </p>
            <Link
              href="/contact/"
              className="inline-block px-4 py-2 bg-primary-700 text-white text-sm font-medium rounded-lg hover:bg-primary-800 transition-colors"
            >
              立即免費諮詢
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
