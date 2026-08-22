import type { Metadata } from "next"
import { FsiCoverageCalculator } from "@/components/tools/fsi-coverage-calculator"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool } from "@/lib/tools"
import { buildPageMetadata } from "@/lib/page-metadata"

const tool = getTool("fsi-calculator")

export const metadata: Metadata = buildPageMetadata({
  title: tool.title,
  description: tool.metaDescription,
  path: tool.href,
})

export default function FsiCalculatorPage() {
  return (
    <ToolsPageShell
      title={tool.title}
      description={tool.description}
      currentId={tool.id}
      blogSlugs={tool.blogSlugs}
      canonicalPath={tool.href}
    >
      <FsiCoverageCalculator />
    </ToolsPageShell>
  )
}
