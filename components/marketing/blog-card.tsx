import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { BlogPostThumbnail } from "@/components/marketing/blog-post-thumbnail"
import type { BlogPost } from "@/lib/blog"
import type { FeedItem } from "@/lib/content-feed"
import {
  estimateReadingTime,
  formatBlogDate,
} from "@/lib/blog-display"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost | FeedItem
  featured?: boolean
  className?: string
  /** Base path for article links, e.g. /blog or /compare */
  basePath?: string
  /** Small label on card, e.g. Guide or Comparison */
  badge?: string
}

export function BlogCard({
  post,
  featured = false,
  className,
  basePath = "/blog",
  badge,
}: BlogCardProps) {
  const articleHref =
    "href" in post && post.href ? post.href : `${basePath}/${post.slug}`
  const readingTime = estimateReadingTime(post.content)

  if (featured) {
    return (
      <Link href={articleHref} className={cn("group block", className)}>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-xl">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <BlogPostThumbnail
              slug={post.slug}
              title={post.title}
              tags={post.tags}
              coverImage={post.coverImage}
              featured
            />

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              {badge && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {badge}
                </span>
              )}
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                Featured
              </span>

              <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-[#00C29F] sm:text-3xl">
                {post.title}
              </h2>

              <p className="mb-6 line-clamp-3 text-base leading-relaxed text-slate-600">
                {post.excerpt}
              </p>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden />
                  {formatBlogDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden />
                  {readingTime} min read
                </span>
              </div>

              <span className="inline-flex items-center text-sm font-semibold text-[#00C29F]">
                Read article
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={articleHref} className={cn("group block h-full", className)}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg">
        <BlogPostThumbnail
          slug={post.slug}
          title={post.title}
          tags={post.tags}
          coverImage={post.coverImage}
        />

        <div className="flex flex-grow flex-col p-5 sm:p-6">
          {badge && (
            <span className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
              {badge}
            </span>
          )}
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {formatBlogDate(post.date)}
            </span>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {readingTime} min
            </span>
          </div>

          <h2 className="mb-2 line-clamp-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#00C29F]">
            {post.title}
          </h2>

          <p className="mb-5 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#00C29F]">
            Read article
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  )
}
