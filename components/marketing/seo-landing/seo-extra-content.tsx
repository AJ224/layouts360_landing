import { getSeoLandingPageByPath } from "@/lib/seo-landing-pages"
import { SeoSection } from "./seo-section"

interface SeoExtraContentProps {
  path: string
}

export function SeoExtraContent({ path }: SeoExtraContentProps) {
  const block = getSeoLandingPageByPath(path)?.extraContent
  if (!block) return null

  return (
    <SeoSection title={block.title} muted>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-lg leading-relaxed text-gray-700 last:mb-0">
          {paragraph}
        </p>
      ))}
    </SeoSection>
  )
}
