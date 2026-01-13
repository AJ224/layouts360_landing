import { MetadataRoute } from 'next'
import { servicesConfig } from '@/lib/services-config'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://layouts360.com'
  // Use a fixed date for the last major update to build trust with search engines
  const lastModified = new Date('2026-01-13')

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  const featureRoutes = servicesConfig.map((service) => ({
    url: `${baseUrl}/features/${service.id}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...featureRoutes, ...blogRoutes]
}
