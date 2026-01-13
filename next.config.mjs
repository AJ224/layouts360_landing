/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Disabled to enable Next.js Image Optimization
  },
  experimental: {
    modularizeImports: {
      "lucide-react": {
        transform: "lucide-react/dist/esm/icons/{{lowerCase memberName}}",
        skipDefaultConversion: true,
      },
    },
  },
}

export default nextConfig
