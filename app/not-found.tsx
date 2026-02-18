import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">找不到此頁面</h2>
        <p className="text-gray-600 mb-8">您要找的頁面可能已移除或網址有誤，請重新確認。</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
            返回首頁
          </Link>
          <Link href="/contact/" className="px-6 py-3 border border-primary-700 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors">
            聯繫我們
          </Link>
        </div>
      </div>
    </div>
  )
}
