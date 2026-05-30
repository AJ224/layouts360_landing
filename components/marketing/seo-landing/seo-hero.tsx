import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SeoHeroProps {
  title: string
  subtitle: React.ReactNode
}

export function SeoHero({ title, subtitle }: SeoHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">{subtitle}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact#demo-form">
              <Button size="lg" className="px-8 py-6 text-lg">
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
