import Link from "next/link"
import type { ContentKind } from "@/lib/content-feed"
import { getRelatedFeedItems } from "@/lib/related-content"
import { SEO_SOLUTION_LINKS } from "@/lib/seo-solutions"
import { TOOLS } from "@/lib/tools"

interface RelatedArticlesProps {
  slug: string
  kind: ContentKind
  tags?: string[]
}

export function RelatedArticles({ slug, kind, tags }: RelatedArticlesProps) {
  const related = getRelatedFeedItems(slug, kind, tags, 4)

  return (
    <aside className="mx-auto mt-10 max-w-3xl space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-lg font-bold text-slate-900">Continue reading</h2>
        <ul className="mt-4 space-y-3">
          {related.map((item) => (
            <li key={`${item.kind}-${item.slug}`}>
              <Link
                href={item.href}
                className="font-medium text-teal-700 hover:text-teal-800 hover:underline"
              >
                {item.title}
              </Link>
              <p className="mt-0.5 text-sm text-slate-500 line-clamp-2">{item.excerpt}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Plot tools
          </p>
          <ul className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:border-teal-200 hover:text-teal-800"
                >
                  {tool.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-slate-900">Layouts360 solutions</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {SEO_SOLUTION_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
