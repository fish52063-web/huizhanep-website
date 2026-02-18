import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import { BLOG_CATEGORIES, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `清潔知識部落格｜${SITE_NAME}`,
  description: '惠展環保清潔知識部落格：裝潢後細清教學、除甲醛方法、清潔技巧、石材保養、衛浴維護等100+篇專業文章。學習清潔知識，打造健康居家環境。',
  alternates: { canonical: '/blog/' },
}

const POSTS_PER_PAGE = 12

export default function BlogPage() {
  const allPosts = getAllPosts('blog')
  const categories = getAllCategories('blog')
  const posts = allPosts.slice(0, POSTS_PER_PAGE)
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbNav items={[{ label: '部落格' }]} />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">清潔知識部落格</h1>
      <p className="text-gray-600 mb-8">專業清潔知識、實用技巧、最新趨勢，幫助您打造健康舒適的居家環境。</p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/blog/"
          className="px-3 py-1 bg-primary-700 text-white text-sm rounded-full"
        >
          全部文章
        </Link>
        {BLOG_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog/category/${cat.slug}/`}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-700 transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="bg-gray-100 h-40 flex items-center justify-center text-gray-400 text-sm">
                文章圖片
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded">
                    {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name || post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
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
          <p className="text-lg mb-2">文章即將上線</p>
          <p className="text-sm">我們正在準備精彩的清潔知識內容，敬請期待！</p>
        </div>
      )}

      {/* Simple info about total */}
      {allPosts.length > POSTS_PER_PAGE && (
        <div className="text-center mt-8 text-gray-500 text-sm">
          顯示 1-{Math.min(POSTS_PER_PAGE, allPosts.length)} 篇，共 {allPosts.length} 篇文章
        </div>
      )}
    </div>
  )
}
