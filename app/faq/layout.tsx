import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"

export const metadata: Metadata = {
  title: "FAQ | Real Estate Plot Management Software",
  description:
    "Answers about Layouts360 real estate software—plot management, digital layouts, CRM, inventory, pricing, and setup for Indian developers.",
  keywords: [...PAGE_KEYWORDS.faq],
  alternates: {
    canonical: "https://layouts360.com/faq",
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
