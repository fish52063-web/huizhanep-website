import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import TableOfContents from '@/components/TableOfContents'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { SERVICES, SITE_NAME } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name}｜${service.keyword}推薦｜${SITE_NAME}`,
    description: `${service.keyword}推薦惠展環保！${service.shortDesc}免費到府估價，專業施工有保固。依照面積報價，歡迎來電洽詢。`,
    alternates: { canonical: `/services/${slug}/` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const post = await getPostBySlug('services', slug)
  const relatedPosts = getAllPosts('blog')
    .filter((p) => p.title.includes(service.name) || p.keywords?.some((k: string) => service.keyword.includes(k)))
    .slice(0, 5)

  const faqs = getFAQsForService(slug)

  return (
    <>
      <SchemaMarkup
        schema={[
          generateServiceSchema({ name: service.name, description: service.shortDesc, slug: service.slug, priceRange: service.priceRange }),
          generateFAQSchema(faqs),
          generateBreadcrumbSchema([
            { name: '首頁', url: '/' },
            { name: '服務項目', url: '/services/' },
            { name: service.name, url: `/services/${slug}/` },
          ]),
        ]}
      />

      {/* Service Hero Image */}
      <div className="relative h-64 md:h-80">
        <Image
          src={`/images/service-${slug === 'post-renovation-cleaning' ? 'post-renovation' : slug === 'formaldehyde-removal' ? 'formaldehyde' : slug === 'bathroom-coating' ? 'bathroom' : slug === 'solar-panel-installation' ? 'solar' : slug === 'concrete-grinding' ? 'concrete' : slug === 'stone-care' ? 'stone' : slug === 'exterior-wall-cleaning' ? 'exterior' : 'tile'}.jpg`}
          alt={`${service.name} - ${service.keyword}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center px-4">{service.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav items={[{ label: '服務項目', href: '/services/' }, { label: service.name }]} />

        <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.keyword}｜{service.name}服務</h2>
        <p className="text-lg text-gray-600 mb-2">{service.shortDesc}</p>
        <p className="text-primary-700 font-medium mb-8">報價方式：依照面積報價，歡迎來電免費估價</p>

        {post ? (
          <>
            <TableOfContents headings={post.headings} />
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </>
        ) : (
          <div className="prose max-w-none">
            <ServiceContent slug={slug} serviceName={service.name} keyword={service.keyword} />
          </div>
        )}

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{service.name} 常見問題</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">相關文章</h2>
            <div className="space-y-3">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-medium text-gray-800">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <CTASection title={`需要${service.name}服務？`} description="立即聯繫惠展環保，免費到府估價，專業施工有保固。" />
    </>
  )
}

function ServiceContent({ slug, serviceName, keyword }: { slug: string; serviceName: string; keyword: string }) {
  const contents: Record<string, React.ReactNode> = {
    'post-renovation-cleaning': (
      <>
        <h2>什麼是裝潢後細清？</h2>
        <p>裝潢後細清是指房屋裝修工程完成後，針對施工過程中產生的粉塵、殘膠、水泥漬、油漆點等進行全面深度清潔的專業服務。一般的打掃無法徹底清除裝潢後的細微汙垢，需要專業的設備和清潔技術才能還原居住空間的潔淨。</p>
        <h2>裝潢後細清包含哪些項目？</h2>
        <p>惠展環保的裝潢後細清服務涵蓋以下範圍：</p>
        <ul>
          <li><strong>天花板與牆面</strong>：清除粉塵、膠點、油漆飛濺</li>
          <li><strong>窗戶與窗溝</strong>：玻璃清潔、鋁框除膠、窗溝吸塵</li>
          <li><strong>地板</strong>：木地板除膠除漬、磁磚清潔拋光</li>
          <li><strong>廚房</strong>：櫥櫃內外清潔、流理台除膠、五金擦拭</li>
          <li><strong>浴室</strong>：馬桶、面盆、鏡面清潔、磁磚縫清理</li>
          <li><strong>收納空間</strong>：衣櫃、鞋櫃、儲藏室內部清潔</li>
          <li><strong>電器設備</strong>：冷氣面板、開關面板、插座清潔</li>
        </ul>
        <h2>為什麼需要專業裝潢後細清？</h2>
        <p>許多屋主在裝潢完成後嘗試自己清潔，但往往發現：</p>
        <ul>
          <li>裝潢粉塵非常細微，一般吸塵器無法徹底清除</li>
          <li>殘膠需要專業溶劑才能去除，錯誤使用可能損傷表面</li>
          <li>水泥漬凝固後極難清除，需要專業工具處理</li>
          <li>窗溝、排水孔等死角難以自行清理</li>
        </ul>
        <p>專業的裝潢後細清團隊擁有工業級設備和環保清潔劑，能夠安全有效地完成所有清潔工作，讓您直接入住全新的家。</p>
        <h2>施工流程</h2>
        <p>惠展環保裝潢後細清標準作業流程：</p>
        <ol>
          <li><strong>預約評估</strong>：到場確認坪數、裝潢狀況、報價</li>
          <li><strong>粗清作業</strong>：清除大型廢棄物、粗塵掃除</li>
          <li><strong>細清作業</strong>：由上而下逐一清潔每個區域</li>
          <li><strong>除膠除漬</strong>：處理殘膠、水泥漬、油漆點</li>
          <li><strong>收尾驗收</strong>：最終檢查、客戶驗收</li>
        </ol>
        <h2>報價方式</h2>
        <p>裝潢後細清費用依照面積大小、裝潢程度及清潔難度而定，歡迎來電預約免費到府估價，專業人員將到場評估並提供詳細報價單。</p>
      </>
    ),
    'formaldehyde-removal': (
      <>
        <h2>甲醛是什麼？為什麼要除甲醛？</h2>
        <p>甲醛（HCHO）是一種無色但有刺激性氣味的氣體，被世界衛生組織（WHO）列為第一級致癌物。新裝潢的房屋中，甲醛主要來自木作板材、油漆塗料、黏著劑、窗簾布料等材料，其釋放期長達3-15年。</p>
        <p>長期暴露在甲醛超標環境中可能導致：眼睛刺痛、喉嚨不適、頭痛頭暈、皮膚過敏，嚴重者可能增加罹患白血病和鼻咽癌的風險。特別是孕婦、嬰幼兒、老年人等敏感族群更需要注意。</p>
        <h2>我們的除甲醛技術</h2>
        <p>惠展環保採用多種專業除甲醛技術，根據現場狀況選擇最佳方案：</p>
        <ul>
          <li><strong>日本光觸媒</strong>：利用奈米二氧化鈦，在光照下持續分解甲醛，效果長達5-10年</li>
          <li><strong>高濃度臭氧</strong>：強氧化性快速分解甲醛，適合急需入住的情況</li>
          <li><strong>甲醛捕捉劑</strong>：滲入板材內部，從源頭分解甲醛分子</li>
          <li><strong>空氣清淨機</strong>：搭配 HEPA + 活性碳濾網，持續淨化空氣</li>
        </ul>
        <h2>除甲醛施工流程</h2>
        <ol>
          <li><strong>甲醛檢測</strong>：使用專業儀器檢測室內甲醛濃度</li>
          <li><strong>方案制定</strong>：根據檢測結果制定最佳除甲醛方案</li>
          <li><strong>施工處理</strong>：全面噴塗光觸媒/除甲醛劑</li>
          <li><strong>複檢驗收</strong>：施工後再次檢測，確保達標（≤0.08 mg/m³）</li>
          <li><strong>保固追蹤</strong>：一年保固，定期追蹤檢測</li>
        </ol>
        <h2>報價方式</h2>
        <p>除甲醛費用依照面積大小及施工方案而定，歡迎來電預約免費到府檢測與估價。</p>
      </>
    ),
  }

  return contents[slug] || (
    <>
      <h2>服務介紹</h2>
      <p>惠展環保的{serviceName}服務，由專業團隊使用先進設備和環保材料，為您提供最高品質的施工服務。我們服務高雄全區、屏東及台南地區，提供免費到府估價。</p>
      <h2>為什麼選擇惠展環保的{serviceName}？</h2>
      <ul>
        <li><strong>專業團隊</strong>：擁有多年{serviceName}施工經驗</li>
        <li><strong>環保材料</strong>：使用經認證的環保清潔材料</li>
        <li><strong>施工保固</strong>：提供完善的售後保固服務</li>
        <li><strong>免費估價</strong>：到府評估，報價透明無隱藏費用</li>
      </ul>
      <h2>施工流程</h2>
      <ol>
        <li>免費諮詢與預約到府評估</li>
        <li>專業人員現場勘查並提供報價</li>
        <li>確認方案後安排施工時間</li>
        <li>專業團隊到府施工</li>
        <li>施工完成後驗收與保固說明</li>
      </ol>
      <h2>服務區域</h2>
      <p>我們的{serviceName}服務涵蓋高雄市全區（含橋頭、左營、鳳山、三民、前鎮、楠梓、苓雅等）、屏東市及台南市。如需{keyword}服務，歡迎來電免費諮詢。</p>
    </>
  )
}

function getFAQsForService(slug: string): { question: string; answer: string }[] {
  const faqMap: Record<string, { question: string; answer: string }[]> = {
    'post-renovation-cleaning': [
      { question: '裝潢後細清需要多少時間？', answer: '一般20-35坪住宅約需4-8小時，視裝潢程度而定。大坪數或汙染嚴重的情況可能需要1-2天。' },
      { question: '裝潢後細清費用怎麼算？', answer: '費用依照面積大小和清潔程度而定。建議預約免費到府估價，專業人員會到場評估後提供準確報價。' },
      { question: '自己做細清和請專業團隊有什麼差別？', answer: '專業團隊擁有工業級設備、專業清潔劑和豐富經驗，能處理殘膠、水泥漬等一般人難以清除的汙漬，效果遠優於DIY。' },
      { question: '裝潢後細清完就可以入住嗎？', answer: '是的，我們使用環保無毒清潔劑，細清完成即可安心入住。若有除甲醛需求，建議同時進行。' },
    ],
    'formaldehyde-removal': [
      { question: '新房子一定要除甲醛嗎？', answer: '建議先進行甲醛檢測。如果裝潢使用了大量木作、系統櫃、油漆等材料，甲醛超標的機率很高，建議進行專業除甲醛。' },
      { question: '除甲醛後多久可以入住？', answer: '光觸媒施工後建議通風24-48小時即可入住。我們會在施工後進行複檢，確認甲醛濃度降至安全標準以下。' },
      { question: '除甲醛費用大概多少？', answer: '費用依照面積大小和施工方案而定，提供一年保固，保證檢測合格。歡迎來電預約免費到府檢測與估價。' },
      { question: '除甲醛效果能維持多久？', answer: '光觸媒除甲醛效果可維持5-10年，且會持續分解新釋放的甲醛。我們提供一年保固，期間免費複檢。' },
    ],
    'bathroom-coating': [
      { question: '衛浴鍍膜效果能維持多久？', answer: '一般可維持6個月至1年，視使用頻率和保養方式而定。我們提供保養指導，幫助延長鍍膜效果。' },
      { question: '鍍膜後怎麼清潔浴室？', answer: '鍍膜後只需用清水或中性清潔劑輕輕擦拭即可，不需要使用強酸強鹼清潔劑，清潔變得更輕鬆。' },
      { question: '衛浴鍍膜施工要多久？', answer: '一間衛浴約需2-3小時，包含清潔前處理和鍍膜施工。施工後建議8小時內避免用水。' },
    ],
    'solar-panel-installation': [
      { question: '安裝太陽能板有什麼好處？', answer: '太陽能板可以自行發電、降低電費、享有政府售電收益，同時減少碳排放、愛護地球。投資回收期約6-8年。' },
      { question: '太陽能板需要多大的屋頂面積？', answer: '一般家用約需10-30坪的屋頂面積。我們會到場評估您的屋頂條件，規劃最佳的太陽能板配置。' },
      { question: '太陽能板維護麻煩嗎？', answer: '太陽能板維護很簡單，主要是定期清潔表面灰塵和落葉。我們也提供太陽能板清潔保養服務。' },
    ],
    'concrete-grinding': [
      { question: '混凝土地坪研磨後可以達到什麼效果？', answer: '研磨後的混凝土地坪可以達到光亮如鏡的效果，表面堅硬耐磨、不起砂不起塵，且容易清潔維護。' },
      { question: '研磨施工會產生大量粉塵嗎？', answer: '我們使用無塵研磨設備，配備工業級吸塵系統，施工過程中粉塵極少，不影響周圍環境。' },
      { question: '混凝土地坪研磨適用哪些場所？', answer: '適用於工廠、倉庫、車庫、展示間、商業空間等。住宅的車庫和工作室也常見使用。' },
    ],
    'stone-care': [
      { question: '石材美容可以處理哪些問題？', answer: '可以處理石材發黃、失光、刮痕、水漬、滲色、風化等問題。研磨拋光後可恢復石材原有光澤。' },
      { question: '石材養護多久需要做一次？', answer: '建議一般家庭每1-2年做一次石材養護，高人流商業空間則建議每6個月至1年養護一次。' },
      { question: '石材美容會損傷石材嗎？', answer: '不會。我們使用專業的石材研磨機和鑽石磨片，按照石材特性選擇合適的研磨工序，只會讓石材更美麗。' },
    ],
    'exterior-wall-cleaning': [
      { question: '外牆清洗多久做一次？', answer: '建議每2-3年清洗一次。如果外牆有明顯的水漬、汙垢或壁癌，建議盡早處理以避免問題惡化。' },
      { question: '外牆清洗會影響住戶嗎？', answer: '施工時需要短暫關閉相關窗戶，施工團隊會提前通知住戶。我們會選擇天氣良好的日子施工，將影響降到最低。' },
      { question: '外牆防水可以解決壁癌嗎？', answer: '壁癌的根本原因是滲水。我們會先找到滲水源頭，進行防水塗層施工，再處理壁癌問題，從根本解決。' },
    ],
    'tile-grout-repair': [
      { question: '磁磚縫發霉可以完全去除嗎？', answer: '可以。我們使用專業的除霉劑和清潔設備，徹底清除磁磚縫隙中的霉菌和污垢，再進行填縫和防霉處理。' },
      { question: '磁磚縫美容後能維持多久？', answer: '經過專業防霉處理後，一般可維持1-2年。我們會提供日常保養建議，幫助延長效果。' },
      { question: '磁磚縫美容適用哪些場所？', answer: '適用於浴室、廚房、陽台、客廳等所有磁磚鋪設區域。特別是浴室和廚房等潮濕區域效果最為明顯。' },
    ],
  }

  return faqMap[slug] || [
    { question: `${SERVICES.find(s => s.slug === slug)?.name}費用怎麼算？`, answer: '費用依照面積大小和施工難度而定。歡迎來電預約免費到府估價，我們會提供詳細的書面報價。' },
    { question: '施工後有保固嗎？', answer: '所有服務都提供施工保固，保固期間如有品質問題免費回訪處理。' },
    { question: '你們的服務範圍涵蓋哪裡？', answer: '我們服務高雄市全區、屏東市及台南市地區。' },
  ]
}
