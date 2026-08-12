import type { Metadata } from "next"
import { FsiCoverageCalculator } from "@/components/tools/fsi-coverage-calculator"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool } from "@/lib/tools"
import { absoluteUrl } from "@/lib/site-seo"

const tool = getTool("fsi-calculator")

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: absoluteUrl(tool.href) },
}

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
