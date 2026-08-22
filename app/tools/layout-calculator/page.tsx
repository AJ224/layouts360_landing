import type { Metadata } from "next"
import { LayoutYieldCalculator } from "@/components/tools/layout-yield-calculator"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool } from "@/lib/tools"
import { buildPageMetadata } from "@/lib/page-metadata"

const tool = getTool("layout-calculator")

export const metadata: Metadata = buildPageMetadata({
  title: tool.title,
  description: tool.metaDescription,
  path: tool.href,
})

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
