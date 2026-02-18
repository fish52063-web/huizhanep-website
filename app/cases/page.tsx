import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: '案例展示｜惠展環保施工實績',
  description: '惠展環保施工案例展示：裝潢後細清、除甲醛、外牆清洗、石材美容等實際案例。查看施工前後對比，了解我們的專業品質。',
  alternates: { canonical: '/cases/' },
}

const cases = [
  { title: '三民區透天裝潢後細清', area: '高雄三民', service: '裝潢後細清', size: '35坪', desc: '三民區透天厝裝潢完工後全屋細清，包含窗戶、窗溝、地板、浴室、廚房等全區域深度清潔。施工後屋主直接入住，非常滿意。', img: '/images/cases/sanmin-house.jpg' },
  { title: 'R5新世紀大樓清潔工程', area: '高雄市', service: '裝潢後細清', size: '大樓', desc: 'R5新世紀大樓交屋前全面清潔工程，高標準施工品質確保每一戶都乾淨亮麗。', img: '/images/cases/r5-new-century.jpg' },
  { title: '嘉義住宅裝潢後細清', area: '嘉義', service: '裝潢後細清', size: '30坪', desc: '嘉義住宅裝潢後細清服務，惠展環保服務範圍不只侷限高雄，更延伸至嘉義地區。', img: '/images/cases/chiayi-cleaning.jpg' },
  { title: '百達名人集大樓清潔', area: '高雄市', service: '裝潢後細清', size: '大樓', desc: '百達名人集社區大樓裝潢後清潔工程，專業團隊高效率完成，獲得管委會一致好評。', img: '/images/cases/baida-celebrity.jpg' },
  { title: '國王一號院清潔工程', area: '高雄市', service: '裝潢後細清', size: '豪宅', desc: '國王一號院豪宅等級的裝潢後細清服務，針對高級建材使用專業清潔方式。', img: '/images/cases/king-palace.jpg' },
  { title: '屏東內埔透天清潔', area: '屏東內埔', service: '裝潢後細清', size: '40坪', desc: '屏東內埔透天厝裝潢後細清，惠展環保服務範圍延伸至屏東地區，品質一樣有保障。', img: '/images/cases/pingtung-neipu.jpg' },
  { title: '商辦空間深度清潔', area: '高雄市', service: '商辦清潔', size: '100坪', desc: '商業辦公空間深度清潔服務，包含地板、玻璃、設備表面等全方位清潔。', img: '/images/cases/office-cleaning.jpg' },
  { title: '晴川社區裝潢後細清', area: '高雄市', service: '裝潢後細清', size: '社區', desc: '晴川社區多戶裝潢後細清工程，統一安排施工提升效率，為住戶節省費用。', img: '/images/cases/qingchuan.jpg' },
  { title: '森遠社區清潔工程', area: '高雄市', service: '裝潢後細清', size: '社區', desc: '森遠社區交屋前的清潔工程，確保每位新住戶都能入住乾淨的新家。', img: '/images/cases/senyuan.jpg' },
  { title: '楠梓區大樓社區清潔', area: '高雄楠梓', service: '裝潢後細清', size: '大樓', desc: '楠梓區大樓社區的裝潢後清潔服務，科技園區周邊新建案的首選清潔團隊。', img: '/images/cases/nanzi-community.jpg' },
  { title: '屏東透天別墅清潔', area: '屏東市', service: '裝潢後細清', size: '50坪', desc: '屏東透天別墅的全屋裝潢後細清工程，多層樓面的深度清潔服務。', img: '/images/cases/pingtung-villa.jpg' },
]

export default function CasesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '案例展示' }]} />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">案例展示</h1>
        <p className="text-gray-600 mb-8">精選施工案例，展示惠展環保的專業品質與服務成果。</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={c.img}
                  alt={`${c.title} - 惠展環保施工案例`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded">{c.service}</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">{c.area}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 mb-2">施工面積：{c.size}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">想看更多案例分享？請瀏覽我們的部落格</p>
          <Link href="/blog/category/case-study/" className="inline-block px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
            查看更多案例文章
          </Link>
        </div>
      </div>

      <CTASection title="想達到同樣的效果？" description="免費到府估價，讓惠展環保為您打造理想的清潔成果。" />
    </>
  )
}
