import type { Metadata } from "next"
import { ConversionFaqs } from "@/components/tools/conversion-faqs"
import { LandConverter } from "@/components/tools/land-converter"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool, LAND_CONVERTER_FAQS } from "@/lib/tools"
import { buildPageMetadata } from "@/lib/page-metadata"

const tool = getTool("land-converter")

export const metadata: Metadata = buildPageMetadata({
  title: tool.title,
  description: tool.metaDescription,
  path: tool.href,
})

export default function LandConverterPage() {
  return (
    <ToolsPageShell
      title={tool.title}
      description={tool.description}
      currentId={tool.id}
      blogSlugs={tool.blogSlugs}
      canonicalPath={tool.href}
      faqs={LAND_CONVERTER_FAQS}
      afterBlog={<ConversionFaqs />}
    >
      <LandConverter />
    </ToolsPageShell>
  )
}
