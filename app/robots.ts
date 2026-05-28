import { MetadataRoute } from "next"
import { DISCOVERY_URLS } from "@/lib/site-seo"

const ALLOW_ALL = {
  allow: "/",
  disallow: ["/api/"],
} as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...ALLOW_ALL },
      // AI crawlers — explicit allow for discovery (content is public marketing)
      { userAgent: "GPTBot", ...ALLOW_ALL },
      { userAgent: "ChatGPT-User", ...ALLOW_ALL },
      { userAgent: "OAI-SearchBot", ...ALLOW_ALL },
      { userAgent: "Google-Extended", ...ALLOW_ALL },
      { userAgent: "anthropic-ai", ...ALLOW_ALL },
      { userAgent: "ClaudeBot", ...ALLOW_ALL },
      { userAgent: "PerplexityBot", ...ALLOW_ALL },
      { userAgent: "Applebot-Extended", ...ALLOW_ALL },
      { userAgent: "cohere-ai", ...ALLOW_ALL },
    ],
    sitemap: DISCOVERY_URLS.sitemap,
    host: "https://layouts360.com",
  }
}
