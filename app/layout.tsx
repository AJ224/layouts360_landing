import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { OrganizationWebSiteSchema } from "@/components/seo/schema"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"
import "./globals.css"

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false },
)

export const metadata: Metadata = {
  title: {
    default: "Layouts360 - The Essential Real Estate ERP & Digital Layout CRM",
    template: "%s | Layouts360 - Real Estate Operating System"
  },
  description:
    "Real estate software for Indian layout developers—plot management, inventory, CRM, accounting, and digital layouts in one platform. Stop Excel chaos and double bookings.",
  keywords: [
    "real estate software",
    "real estate management software",
    "real estate crm software",
    "real estate inventory management software",
    "real estate plot management software",
    "real estate asset management software",
    "real estate accounting software",
    "commercial real estate software",
    "plot management software India",
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
    locale: 'en_US',
    url: SITE_URL,
    title: 'Layouts360 - The Essential Real Estate ERP & Digital Layout CRM',
    description: 'The must-have software to operate your real estate business. Combine Digital Layout Visualization with a powerful CRM/ERP.',
    siteName: 'Layouts360',
    images: [
      {
        url: '/herosection.png',
        width: 1200,
        height: 630,
        alt: 'Layouts360 Real Estate ERP Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layouts360 - The Essential Real Estate ERP',
    description: 'Operate your real estate business with Digital Layouts & CRM.',
    images: ['/herosection.png'],
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
    <html lang="en">
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
