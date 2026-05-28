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
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {},
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{lowerCase memberName}}",
      skipDefaultConversion: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/compare",
        destination: "/blog#comparisons",
        permanent: false,
      },
      {
        source: "/real-estate-crm-software",
        destination: "/real-estate-client-management-software",
        permanent: true,
      },
      ...getCompareRedirects(),
    ]
  },
}

export default nextConfig
