import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Demo",
  description:
    "Book a free 20-minute Layouts360 demo. See live inventory, interactive layouts, holds, bookings, and sales workflow for plots, apartments, and townships.",
  path: "/contact",
  keywords: [
    "layouts360 demo",
    "real estate software demo India",
    "plot management software demo",
    "inventory management software demo",
    "real estate crm demo",
    "book layouts360 walkthrough",
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
