import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LANDING_PLATFORM_LINKS, type LandingHeading } from "@/lib/landing-display"
import type { LandingRelatedLink } from "@/types/landing-mdx"

interface SeoLandingSidebarProps {
  headings: LandingHeading[]
  currentPath: string
  relatedLinks?: LandingRelatedLink[]
}

export function SeoLandingSidebar({
  headings,
  currentPath,
  relatedLinks = [],
}: SeoLandingSidebarProps) {
  const platformLinks = LANDING_PLATFORM_LINKS.filter((l) => l.href !== currentPath)

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {headings.length > 0 && (
        <nav
          aria-label="On this page"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            On this page
          </h2>
          <ul className="max-h-[min(50vh,320px)] space-y-1 overflow-y-auto text-sm">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className="block rounded-md px-2 py-1.5 text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-900"
                >
                  {heading.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Platform modules
        </h2>
        <ul className="space-y-1 text-sm">
          {platformLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-2 py-1.5 font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/solutions"
              className="block rounded-md px-2 py-1.5 font-medium text-teal-700 hover:text-teal-900"
            >
              All solutions →
            </Link>
          </li>
        </ul>
      </div>

      {relatedLinks.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Related guides
          </h2>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-[#00A884] hover:text-[#00C29F] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">See your layout live</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Book a demo with your project map and inventory.
        </p>
        <Link href="/contact#demo-form" className="mt-4 block">
          <Button className="w-full bg-[#00C29F] hover:bg-[#00A884]">
            Get free demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </aside>
  )
}
