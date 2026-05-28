import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Demo | Real Estate Software | Layouts360",
  description:
    "Book a free demo of Layouts360 real estate software—plot management, CRM, inventory, and digital layouts for Indian developers.",
  keywords: [
    "layouts360 demo",
    "real estate software demo India",
    "plot management software demo",
    "real estate crm demo",
  ],
  alternates: {
    canonical: "https://layouts360.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
