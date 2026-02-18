import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTASection from '@/components/CTASection'
import { AREAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: '服務區域｜高雄・屏東・台南清潔服務',
  description: '惠展環保服務區域涵蓋高雄市全區、屏東市、台南市。各區域提供裝潢後細清、除甲醛、外牆清洗等專業服務，30分鐘快速到達。',
  alternates: { canonical: '/areas/' },
}

export default function AreasPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '服務區域' }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">服務區域</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          惠展環保總部位於高雄市橋頭區，服務範圍涵蓋高雄市全區、屏東市及台南市地區。高雄市區內30分鐘可快速到達，提供最即時的專業清潔服務。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}/`}
              className="group block bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
                {area.name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.desc}</p>
              <span className="text-primary-700 text-sm font-medium">查看{area.name}服務 →</span>
            </Link>
          ))}
        </div>
      </div>

      <CTASection title="找不到您的區域？" description="我們的服務範圍持續擴大中，歡迎來電詢問您所在區域是否在服務範圍內。" />
    </>
  )
}
