import type { Metadata } from "next"
import { LayoutYieldCalculator } from "@/components/tools/layout-yield-calculator"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool } from "@/lib/tools"
import { absoluteUrl } from "@/lib/site-seo"

const tool = getTool("layout-calculator")

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: absoluteUrl(tool.href) },
}

export default function LayoutCalculatorPage() {
  return (
    <ToolsPageShell
      title={tool.title}
      description={tool.description}
      currentId={tool.id}
      blogSlugs={tool.blogSlugs}
      canonicalPath={tool.href}
    >
      <LayoutYieldCalculator />
    </ToolsPageShell>
  )
}
