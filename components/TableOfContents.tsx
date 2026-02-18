'use client'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null

  return (
    <nav className="bg-gray-50 rounded-lg p-4 mb-8">
      <h2 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">目錄</h2>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${h.id}`}
              className="text-sm text-gray-600 hover:text-primary-700 transition-colors leading-relaxed block py-0.5"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
