interface TestimonialCardProps {
  name: string
  location: string
  service: string
  content: string
  rating: number
}

export default function TestimonialCard({ name, location, service, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">&ldquo;{content}&rdquo;</p>
      <div className="text-sm">
        <p className="font-medium text-gray-800">{name}</p>
        <p className="text-gray-500">{location}・{service}</p>
      </div>
    </div>
  )
}
