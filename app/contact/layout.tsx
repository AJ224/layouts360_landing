import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Demo",
  description:
    "Book a free demo of Layouts360—plot management and inventory management software with CRM and digital layouts for Indian developers.",
  path: "/contact",
  keywords: [
    "layouts360 demo",
    "real estate software demo India",
    "plot management software demo",
    "inventory management software demo",
    "real estate crm demo",
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
