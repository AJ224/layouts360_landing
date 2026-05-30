import { Check, X } from "lucide-react"

interface SeoComparisonCardsProps {
  negative: { title: string; body: string }
  positive: { title: string; body: string }
}

export function SeoComparisonCards({ negative, positive }: SeoComparisonCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-red-100 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-start gap-3">
          <X className="mt-1 h-6 w-6 shrink-0 text-red-500" />
          <h3 className="text-xl font-semibold text-gray-900">{negative.title}</h3>
        </div>
        <p className="text-gray-700">{negative.body}</p>
      </div>
      <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-start gap-3">
          <Check className="mt-1 h-6 w-6 shrink-0 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-900">{positive.title}</h3>
        </div>
        <p className="text-gray-700">{positive.body}</p>
      </div>
    </div>
  )
}
