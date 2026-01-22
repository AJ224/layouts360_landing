import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://layouts360.com/sitemap.xml',
    host: 'https://layouts360.com',
  }
}

// For AI agents and LLMs, see: https://layouts360.com/llms.txt
// This follows the llms.txt standard: https://llmstxt.org/
