import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SeoLandingBreadcrumbProps {
  label: string
}

export function SeoLandingBreadcrumb({ label }: SeoLandingBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-slate-200 bg-slate-50 pt-20"
    >
      <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <Link href="/solutions" className="hover:text-slate-900">
              Solutions
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="font-medium text-slate-900">{label}</li>
        </ol>
      </div>
    </nav>
  )
}
