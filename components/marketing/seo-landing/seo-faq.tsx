import type { SeoFaqItem } from "@/types/seo-landing"

interface SeoFaqProps {
  items: SeoFaqItem[]
}

export function SeoFaq({ items }: SeoFaqProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.question} className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
