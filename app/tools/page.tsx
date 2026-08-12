import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftRight, ArrowRight, Building2, LayoutGrid, type LucideIcon } from "lucide-react"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { TOOLS, TOOLS_HUB_BLOG_SLUGS, type ToolId } from "@/lib/tools"
import { absoluteUrl } from "@/lib/site-seo"

const TOOL_ICONS: Record<ToolId, LucideIcon> = {
  "layout-calculator": LayoutGrid,
  "land-converter": ArrowLeftRight,
  "fsi-calculator": Building2,
}

export const metadata: Metadata = {
  title: "Plot Planning Tools",
  description:
    "Land area converter, layout yield calculator, and FSI / plot coverage tools for Indian layout developers.",
  alternates: { canonical: absoluteUrl("/tools") },
}

export default function ToolsHubPage() {
  return (
    <ToolsPageShell
      title="Plot planning tools"
      description="Convert land units, estimate saleable plots, and check FSI."
      blogSlugs={TOOLS_HUB_BLOG_SLUGS}
      canonicalPath="/tools"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => {
          const Icon = TOOL_ICONS[tool.id]
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-200 hover:bg-teal-50/30 sm:p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-800">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">{tool.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{tool.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700">
                Open
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )
        })}
      </div>
    </ToolsPageShell>
  )
}
