import { readdirSync } from "fs"
import { join } from "path"

/** @type {import('next').NextConfig} */

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
  images: {},
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
        source: "/:path*",
        has: [{ type: "host", value: "www.layouts360.com" }],
        destination: "https://layouts360.com/:path*",
        permanent: true,
      },
      {
        source: "/compare",
        destination: "/blog#comparisons",
        permanent: false,
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
        source: "/plot-inventory-management",
        destination: "/real-estate-inventory-management",
        permanent: true,
      },
      {
        source: "/real-estate-sales-software",
        destination: "/real-estate-sales-automation-software",
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
