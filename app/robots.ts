import { MetadataRoute } from "next"
import { DISCOVERY_URLS, SITE_HOST } from "@/lib/site-seo"

const PUBLIC_ALLOW = {
  allow: "/",
  disallow: ["/api/"],
}

const AI_AND_SEARCH_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "PerplexityBot",
  "Applebot-Extended",
  "cohere-ai",
  "Bytespider",
  "Amazonbot",
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...PUBLIC_ALLOW },
      ...AI_AND_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        ...PUBLIC_ALLOW,
      })),
    ],
    sitemap: DISCOVERY_URLS.sitemap,
    host: SITE_HOST,
  }
}
