import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SeoHeroIntro } from "@/components/marketing/seo-landing/seo-hero-intro"

interface SeoHeroProps {
  title: string
  /** @deprecated Use introParagraphs */
  subtitle?: React.ReactNode
  introParagraphs?: string[]
  readingTimeMinutes?: number
  primaryKeyword?: string
}

export function SeoHero({
  title,
  subtitle,
  introParagraphs,
  readingTimeMinutes,
  primaryKeyword,
}: SeoHeroProps) {
  const paragraphs =
    introParagraphs && introParagraphs.length > 0
      ? introParagraphs
      : subtitle
        ? [typeof subtitle === "string" ? subtitle : String(subtitle)]
        : []

  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-teal-50/50 via-white to-slate-50 py-8 sm:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl text-left">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {primaryKeyword && (
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                {primaryKeyword}
              </span>
            )}
            {readingTimeMinutes !== undefined && (
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                <Clock className="h-4 w-4 shrink-0" aria-hidden />
                {readingTimeMinutes} min read
              </span>
            )}
          </div>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.2]">
            {title}
          </h1>

          {paragraphs.length > 0 && (
            <div className="mt-5 sm:mt-6">
              <SeoHeroIntro paragraphs={paragraphs} />
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact#demo-form">
              <Button size="lg" className="w-full bg-[#00C29F] hover:bg-[#00A884] sm:w-auto">
                Get free demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
