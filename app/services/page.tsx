import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTASection from '@/components/CTASection'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: '服務項目｜高雄清潔・除甲醛・環保工程',
  description: '惠展環保八大專業服務：裝潢後細清、除甲醛、衛浴鍍膜、太陽能板安裝、混凝土地坪研磨、石材美容、外牆清洗防水、磁磚縫美容。高雄地區免費到府估價。',
  alternates: { canonical: '/services/' },
}

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/service-section-bg.jpg"
          alt="惠展環保服務項目"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">服務項目</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            惠展環保提供全方位的清潔工程與環保服務，所有服務皆使用環保材料，並提供施工保固。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '服務項目' }]} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative w-1/3 min-h-[180px]">
                <Image
                  src={serviceImages[s.slug]}
                  alt={`${s.name} - ${s.keyword}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
                  {s.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{s.shortDesc}</p>
                <p className="text-primary-700 text-sm font-medium">{s.priceRange}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  )
}
