import Link from 'next/link'

interface ServiceCardProps {
  slug: string
  name: string
  shortDesc: string
  icon: string
  priceRange: string
}

export default function ServiceCard({ slug, name, shortDesc, icon, priceRange }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}/`}
      className="group block bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-primary-200 transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{shortDesc}</p>
      <p className="text-primary-700 text-sm font-medium">{priceRange}</p>
    </Link>
  )
}
