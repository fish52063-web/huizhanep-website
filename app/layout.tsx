import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}｜高雄專業清潔公司・裝潢後細清・除甲醛`,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['高雄清潔公司', '裝潢後細清', '除甲醛', '外牆清洗', '石材美容', '衛浴鍍膜', '惠展環保'],
  authors: [{ name: '惠展環保有限公司' }],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME}｜高雄專業清潔公司`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}｜高雄專業清潔公司`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'zh-TW': SITE_URL },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const GA4_ID = 'G-3F85BE3EV1';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <meta name="google-site-verification" content="geZNPHoFtllblmpWCz5v31cfRlUQui-AU9iJJ3ZhMzw" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics GA4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}} />
        <SchemaMarkup schema={[generateOrganizationSchema(), generateLocalBusinessSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
