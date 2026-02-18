import { COMPANY_INFO, SITE_URL, SITE_NAME } from './constants'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: SITE_URL,
    logo: `${SITE_URL}${COMPANY_INFO.logo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      availableLanguage: 'Chinese',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: '高雄市',
      addressRegion: '高雄市',
      addressCountry: 'TW',
      streetAddress: COMPANY_INFO.addressFull,
    },
    sameAs: [],
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY_INFO.name,
    image: `${SITE_URL}${COMPANY_INFO.logo}`,
    url: SITE_URL,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.addressFull,
      addressLocality: '橋頭區',
      addressRegion: '高雄市',
      postalCode: '825',
      addressCountry: 'TW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.lat,
      longitude: COMPANY_INFO.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '$$',
    foundingDate: COMPANY_INFO.founding,
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  slug: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
    },
    url: `${SITE_URL}/services/${service.slug}/`,
    areaServed: {
      '@type': 'City',
      name: '高雄市',
    },
    ...(service.priceRange && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
        },
      },
    }),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  slug: string
  date: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}/`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${COMPANY_INFO.logo}`,
      },
    },
    ...(article.image && {
      image: `${SITE_URL}${article.image}`,
    }),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateAreaSchema(area: {
  name: string
  slug: string
  lat: number
  lng: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${COMPANY_INFO.name} - ${area.name}服務`,
    url: `${SITE_URL}/areas/${area.slug}/`,
    telephone: COMPANY_INFO.phone,
    areaServed: {
      '@type': 'City',
      name: area.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: area.lat,
        longitude: area.lng,
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: '橋頭區',
      addressRegion: '高雄市',
      addressCountry: 'TW',
    },
  }
}
