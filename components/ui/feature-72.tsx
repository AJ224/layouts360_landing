import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { IconBadge } from "@/components/ui/icon-badge"
import { cn } from "@/lib/utils"

export type Feature72Item = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

type Feature72Props = {
  heading: string
  description?: string
  linkUrl?: string
  linkText?: string
  features: Feature72Item[]
  className?: string
}

/**
 * Adapted from 21st.dev Feature 72 (shadcnblocks) —
 * icon cards + left rail heading, Layouts360 tokens.
 */
export function Feature72({
  heading,
  description,
  linkUrl,
  linkText,
  features,
  className,
}: Feature72Props) {
  return (
    <section
      id="features"
      className={cn("section-y border-t border-line bg-white", className)}
      aria-labelledby="features-heading"
    >
      <div className="container-site flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-16">
        <header className="max-w-sm shrink-0 lg:sticky lg:top-28">
          <h2 id="features-heading" className="t-section text-ink" data-split="lines">
            {heading}
          </h2>
          {description ? (
            <p className="t-body mt-4 text-subtle" data-reveal="fade" data-delay="0.1">
              {description}
            </p>
          ) : null}
          {linkUrl && linkText ? (
            <Link
              href={linkUrl}
              className="group mt-5 inline-flex min-h-6 items-center gap-1.5 text-[0.9375rem] font-semibold text-ink sm:mt-6"
              data-reveal="fade"
              data-delay="0.2"
            >
              {linkText}
              <ArrowRight
                className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </Link>
          ) : null}
        </header>

        <ul
          className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          data-reveal="up"
          data-stagger
        >
          {features.map((feature) => (
            <li key={feature.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ground/40 p-5 shadow-[var(--shadow-float)] transition-colors duration-300 hover:border-ink/15 hover:bg-white sm:p-6">
                <IconBadge icon={feature.icon} tone="brand" />
                <h3 className="mt-4 text-[0.9375rem] font-semibold text-ink sm:text-base">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-subtle">{feature.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
