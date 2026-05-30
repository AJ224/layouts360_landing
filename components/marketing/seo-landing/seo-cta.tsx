import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SeoCtaProps {
  title: string
  description: string
}

export function SeoCta({ title, description }: SeoCtaProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mb-8 text-xl opacity-90">{description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact#demo-form">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-blue-600"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
