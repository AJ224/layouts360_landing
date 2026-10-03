import { readdirSync } from "fs"
import { join } from "path"

/** @type {import('next').NextConfig} */

/** Keep in sync with LANDING_CONSOLIDATION_REDIRECTS in lib/indexing-policy.ts */
const LANDING_CONSOLIDATION_REDIRECTS = [
  { source: "/layout-management-software", destination: "/real-estate-plot-management-software" },
  { source: "/digital-layout-maps", destination: "/real-estate-plot-management-software" },
  { source: "/township-management-software", destination: "/real-estate-plot-management-software" },
  { source: "/launch-day-plot-sales-software", destination: "/real-estate-plot-management-software" },
  { source: "/real-estate-inventory-management", destination: "/real-estate-inventory-management-software" },
  { source: "/property-inventory-management-platform", destination: "/real-estate-inventory-management-software" },
  { source: "/apartment-inventory-management-software", destination: "/real-estate-inventory-management-software" },
  { source: "/real-estate-asset-management-software", destination: "/real-estate-inventory-management-software" },
  { source: "/real-estate-crm", destination: "/real-estate-crm-software" },
  { source: "/real-estate-client-management-software", destination: "/real-estate-crm-software" },
  { source: "/real-estate-lead-management-software", destination: "/real-estate-crm-software" },
  { source: "/real-estate-sales-automation-software", destination: "/real-estate-crm-software" },
  { source: "/site-visit-management", destination: "/real-estate-crm-software" },
  { source: "/affordable-crm-for-realtors", destination: "/affordable-real-estate-crm" },
  { source: "/real-estate-booking-management-software", destination: "/online-plot-booking-software" },
  { source: "/real-estate-back-office-software", destination: "/real-estate-accounting-software" },
  { source: "/real-estate-erp-software", destination: "/360-management-software" },
]

function getCompareRedirects() {
  try {
    const dir = join(process.cwd(), "content/compare")
    return readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "")
        return {
          source: `/blog/${slug}`,
          destination: `/compare/${slug}`,
          permanent: true,
        }
      })
  } catch {
    return []
  }
}

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{lowerCase memberName}}",
      skipDefaultConversion: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/compare",
        destination: "/blog#comparisons",
        permanent: true,
      },
      {
        source: "/land-converter",
        destination: "/tools/land-converter",
        permanent: true,
      },
      // Short/alternate slugs → canonical landing pages (avoid duplicate content)
      {
        source: "/plot-management-software",
        destination: "/real-estate-plot-management-software",
        permanent: true,
      },
      {
        source: "/plot-booking-software",
        destination: "/online-plot-booking-software",
        permanent: true,
      },
      {
        source: "/plot-layout-software",
        destination: "/real-estate-plot-management-software",
        permanent: true,
      },
      {
        source: "/plot-inventory-management",
        destination: "/real-estate-inventory-management-software",
        permanent: true,
      },
      {
        source: "/real-estate-sales-software",
        destination: "/real-estate-crm-software",
        permanent: true,
      },
      {
        source: "/partner-management",
        destination: "/real-estate-channel-partner-management-software",
        permanent: true,
      },
      {
        source: "/payment-tracking",
        destination: "/real-estate-accounting-software",
        permanent: true,
      },
      {
        source: "/best-crm-for-brokers",
        destination: "/best-real-estate-crm-software",
        permanent: true,
      },
      ...LANDING_CONSOLIDATION_REDIRECTS.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      ...getCompareRedirects(),
    ]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      }
    }
    return config
  },
}

export default nextConfig
