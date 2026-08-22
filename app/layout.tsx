import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { OrganizationWebSiteSchema } from "@/components/seo/schema"
import { DEFAULT_OG_IMAGE, OG_LOCALE, SITE_NAME } from "@/lib/page-metadata"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"
import "./globals.css"

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false },
)

export const metadata: Metadata = {
  title: {
    default: "Layouts360 | Live Plot Maps, Inventory & CRM for Real Estate Companies",
    template: "%s | Layouts360"
  },
  description:
    "Plot & inventory management software with built-in CRM and booking for real estate companies. Live digital layouts, channel partners, and payment tracking—not generic PropTech.",
  keywords: [
    "real estate software",
    "real estate management software",
    "real estate crm software",
    "real estate inventory management software",
    "real estate plot management software",
    "real estate asset management software",
    "real estate accounting software",
    "commercial real estate software",
    "plot management software for real estate companies",
    "real estate client management software",
    "digital layout software",
    "real estate transaction management software",
  ],
  authors: [{ name: "Layouts360" }],
  creator: "Layouts360",
  publisher: "Layouts360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: absoluteUrl("/"),
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLMs.txt" }],
    },
  },
  openGraph: {
    type: 'website',
    locale: OG_LOCALE,
    url: SITE_URL,
    title: 'Layouts360 | Live Plot Maps, Inventory & CRM for Real Estate Companies',
    description:
      'Plot & inventory management with CRM and booking for real estate companies. Live maps, partners, and payments in one platform.',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layouts360 | Live Plot Maps, Inventory & CRM for Real Estate Companies',
    description: 'Live layouts, inventory, CRM, and booking for real estate companies selling plots.',
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <OrganizationWebSiteSchema />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
