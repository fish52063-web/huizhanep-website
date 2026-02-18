import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  keywords: string[]
  image?: string
  readingTime: string
}

export interface Post extends PostMeta {
  contentHtml: string
  headings: { id: string; text: string; level: number }[]
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: { id: string; text: string; level: number }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff]+/g, '-')
      .replace(/^-|-$/g, '')
    headings.push({
      id,
      text,
      level: match[1].length,
    })
  }

  return headings
}

export function getAllPosts(subdir: string): PostMeta[] {
  const dir = path.join(contentDirectory, subdir)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, '')
    const filePath = path.join(dir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '2025-01-01',
      category: data.category || '',
      keywords: data.keywords || [],
      image: data.image || null,
      readingTime: stats.text.replace('read', '閱讀'),
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(subdir: string, slug: string): Promise<Post | null> {
  const dir = path.join(contentDirectory, subdir)
  const mdxPath = path.join(dir, `${slug}.mdx`)
  const mdPath = path.join(dir, `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  const headings = extractHeadings(content)

  const processedContent = await remark().use(html, { sanitize: false }).process(content)
  let contentHtml = processedContent.toString()

  // Add IDs to headings in HTML
  headings.forEach((heading) => {
    const tag = `h${heading.level}`
    contentHtml = contentHtml.replace(
      new RegExp(`<${tag}>${escapeRegex(heading.text)}</${tag}>`),
      `<${tag} id="${heading.id}">${heading.text}</${tag}>`
    )
  })

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '2025-01-01',
    category: data.category || '',
    keywords: data.keywords || [],
    image: data.image || undefined,
    readingTime: stats.text.replace('read', '閱讀'),
    contentHtml,
    headings,
  }
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function getPostsByCategory(subdir: string, category: string): PostMeta[] {
  return getAllPosts(subdir).filter((p) => p.category === category)
}

export function getAllCategories(subdir: string): string[] {
  const posts = getAllPosts(subdir)
  return [...new Set(posts.map((p) => p.category).filter(Boolean))]
}
