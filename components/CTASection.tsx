import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  description?: string
}

export default function CTASection({
  title = '需要專業清潔服務嗎？',
  description = '惠展環保提供免費到府估價，專業團隊為您量身打造最佳清潔方案。',
}: CTASectionProps) {
  return (
    <section className="relative text-white py-16 overflow-hidden">
      <Image
        src="/images/cta-bg.jpg"
        alt="聯繫惠展環保"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-800/85" />
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-primary-100 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
          >
            立即來電 {COMPANY_INFO.phone}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            免費線上諮詢
          </Link>
        </div>
      </div>
    </section>
  )
}
