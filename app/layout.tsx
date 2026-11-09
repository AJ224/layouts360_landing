import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { GeistMono } from "geist/font/mono"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { OrganizationWebSiteSchema } from "@/components/seo/schema"
import { WhatsAppFloat } from "@/components/marketing/whatsapp-float"
import { Motion } from "@/components/site/motion"
import { DEFAULT_OG_IMAGE, OG_LOCALE, SITE_NAME } from "@/lib/page-metadata"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"
import "./globals.css"

// Manrope (SIL OFL), self-hosted so builds never depend on Google Fonts.
const manrope = localFont({
  src: [{ path: "./fonts/manrope-latin-wght-normal.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Noto Sans Devanagari", "sans-serif"],
})

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false },
)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Layouts360 | Real Estate Software for Plot, Inventory & CRM",
    template: "%s | Layouts360"
  },
  description:
    "Real estate software for Indian layout developers—plot management, inventory management, CRM, and booking with live digital layouts. Not generic PropTech.",
  keywords: [
    "real estate software",
    "real estate software India",
    "plot management software",
    "real estate plot management software",
    "real estate crm software",
    "real estate inventory management software",
    "real estate management software",
    "digital layout software",
    "builder CRM India",
    "layout developer software",
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
    title: 'Layouts360 | Real Estate Software for Plot, Inventory & CRM',
    description:
      'Real estate software for Indian layout developers—plot management, inventory, CRM, and booking with live digital layouts.',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layouts360 | Real Estate Software for Plot, Inventory & CRM',
    description: 'Plot management, inventory, and CRM with live layouts for Indian layout developers. Replace Excel and WhatsApp.',
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
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

// Runs before first paint: hidden-until-revealed styles only apply when JS and motion are on.
const flags = `document.documentElement.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"Sczb9GPnLZLN37zh2GmE1e",debug:true});`,
          }}
        />
        <link rel="describedby" href={`${SITE_URL}/llms.txt`} />
        <OrganizationWebSiteSchema />
      </head>
      <body className="overflow-x-clip font-sans antialiased" suppressHydrationWarning>
        <div id="veil" aria-hidden="true" />
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppFloat />
        <Analytics />
        <Motion />
      </body>
    </html>
  )
}
