import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import TableOfContents from '@/components/TableOfContents'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { BLOG_CATEGORIES, SITE_NAME } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts('blog')
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)
  if (!post) return {}
  return {
    title: `${post.title}｜${SITE_NAME}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      ...(post.image && { images: [post.image] }),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)
  if (!post) notFound()

  const allPosts = getAllPosts('blog')
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4)

  const categoryName = BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name || post.category

  return (
    <>
      <SchemaMarkup
        schema={[
          generateArticleSchema({ title: post.title, description: post.description, slug, date: post.date, image: post.image }),
          generateBreadcrumbSchema([
            { name: '首頁', url: '/' },
            { name: '部落格', url: '/blog/' },
            { name: categoryName, url: `/blog/category/${post.category}/` },
            { name: post.title, url: `/blog/${slug}/` },
          ]),
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav
          items={[
            { label: '部落格', href: '/blog/' },
            { label: categoryName, href: `/blog/category/${post.category}/` },
            { label: post.title },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href={`/blog/category/${post.category}/`}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full hover:bg-primary-100 transition-colors"
            >
              {categoryName}
            </Link>
            <time className="text-sm text-gray-500">{post.date}</time>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{post.description}</p>
        </header>

        <TableOfContents headings={post.headings} />

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* Keywords */}
        {post.keywords && post.keywords.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw: string) => (
                <span key={kw} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{kw}</span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">相關文章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-800 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTASection />
    </>
  )
}
