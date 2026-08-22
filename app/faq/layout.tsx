import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Answers about Layouts360 real estate software—plot management, digital layouts, CRM, inventory, pricing, and setup for Indian developers.",
  path: "/faq",
  keywords: [...PAGE_KEYWORDS.faq],
})

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
