import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "IdeatoLive - Professional Real Estate Management Solutions",
    template: "%s | IdeatoLive"
  },
  description:
    "Transform your real estate business with our comprehensive suite of digital tools. From interactive layouts to payment management, we help developers scale efficiently.",
  keywords: [
    "real estate management software",
    "property management system",
    "real estate CRM",
    "plot booking system",
    "real estate website development",
    "property management solutions",
    "real estate analytics",
    "property sales management",
    "real estate digital transformation",
    "property management platform"
  ],
  authors: [{ name: "IdeatoLive" }],
  creator: "IdeatoLive",
  publisher: "IdeatoLive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ideatolive.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ideatolive.com',
    title: 'IdeatoLive - Professional Real Estate Management Solutions',
    description: 'Transform your real estate business with our comprehensive suite of digital tools. From interactive layouts to payment management, we help developers scale efficiently.',
    siteName: 'IdeatoLive',
    images: [
      {
        url: '/herosection.png',
        width: 1200,
        height: 630,
        alt: 'IdeatoLive Real Estate Management Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IdeatoLive - Professional Real Estate Management Solutions',
    description: 'Transform your real estate business with our comprehensive suite of digital tools.',
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
  generator: "v0.app",
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'IdeatoLive',
  description: 'Professional real estate management solutions for developers. Interactive layouts, plot booking, payment tracking, and customer portals.',
  url: 'https://ideatolive.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '20000',
    priceCurrency: 'INR',
    description: 'Website development starting from ₹20,000'
  },
  provider: {
    '@type': 'Organization',
    name: 'IdeatoLive',
    url: 'https://ideatolive.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-72764-95199',
      contactType: 'sales'
    }
  },
  featureList: [
    'Interactive Layout Management',
    'Enterprise CRM System',
    'Financial Management',
    'Project Management',
    'Document Management',
    'Analytics & Reporting'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
