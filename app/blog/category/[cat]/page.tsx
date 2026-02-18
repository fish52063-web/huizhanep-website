import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import { getPostsByCategory, getAllPosts } from '@/lib/mdx'
import { BLOG_CATEGORIES, SITE_NAME } from '@/lib/constants'

interface Props {
  params: Promise<{ cat: string }>
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ cat: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const category = BLOG_CATEGORIES.find((c) => c.slug === cat)
  if (!category) return {}
  return {
    title: `${category.name}文章｜${SITE_NAME}部落格`,
    description: `惠展環保${category.name}相關文章。專業清潔知識、實用技巧、產業趨勢，幫助您了解${category.name}的重要資訊。`,
    alternates: { canonical: `/blog/category/${cat}/` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const category = BLOG_CATEGORIES.find((c) => c.slug === cat)
  if (!category) notFound()

  const posts = getPostsByCategory('blog', cat)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbNav items={[{ label: '部落格', href: '/blog/' }, { label: category.name }]} />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">共 {posts.length} 篇文章</p>

      {/* Category Nav */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/blog/" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-700 transition-colors">
          全部文章
        </Link>
        {BLOG_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}/`}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              c.slug === cat
                ? 'bg-primary-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-5">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h2 className="font-bold text-gray-800 mt-1 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
                <p className="text-xs text-gray-400 mt-2">{post.readingTime}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          <p>此分類尚無文章，敬請期待！</p>
        </div>
      )}
    </div>
  )
}
