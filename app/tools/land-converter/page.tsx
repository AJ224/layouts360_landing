import type { Metadata } from "next"
import { ConversionFaqs } from "@/components/tools/conversion-faqs"
import { LandConverter } from "@/components/tools/land-converter"
import { ToolsPageShell } from "@/components/tools/tools-page-shell"
import { getTool, LAND_CONVERTER_FAQS } from "@/lib/tools"
import { absoluteUrl } from "@/lib/site-seo"

const tool = getTool("land-converter")

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: absoluteUrl(tool.href) },
}

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
