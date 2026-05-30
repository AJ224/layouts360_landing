import "./blog-prose.css"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { blogMdxComponents } from "@/components/blog/mdx-components"
import { blogMdxOptions } from "@/lib/mdx"
import type { BlogPost } from "@/lib/blog"
import type { ComparePost } from "@/lib/compare"

type ArticlePost = BlogPost | ComparePost
import { RelatedArticles } from "@/components/blog/related-articles"
import {
  estimateReadingTime,
  formatBlogDate,
  getPrimaryTag,
} from "@/lib/blog-display"
import type { ContentKind } from "@/lib/content-feed"

interface BlogArticleProps {
  post: ArticlePost
  backHref?: string
  backLabel?: string
  categoryBadge?: string
  contentKind?: ContentKind
}

export function BlogArticle({
  post,
  backHref = "/blog",
  backLabel = "Back to blog",
  categoryBadge,
  contentKind = "blog",
}: BlogArticleProps) {
  const readingTime = estimateReadingTime(post.content)
  const primaryTag = getPrimaryTag(post.tags)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white pt-20">
        <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <Link
            href={backHref}
            className="group mb-8 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            {backLabel}
          </Link>

          {(categoryBadge || primaryTag) && (
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
              <Tag className="h-3.5 w-3.5" aria-hidden />
              {categoryBadge ?? primaryTag}
            </p>
          )}

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {post.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              {formatBlogDate(post.date)}
            </span>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {readingTime} min read
            </span>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <article className="blog-article mx-auto max-w-3xl">
            <MDXRemote
              source={post.content}
              options={blogMdxOptions}
              components={blogMdxComponents}
            />
          </article>
        </div>

        <RelatedArticles slug={post.slug} kind={contentKind} tags={post.tags} />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            See how Layouts360 works for your layout
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Interactive maps, live inventory, CRM, and payments—built for Indian
            plot developers.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center rounded-lg bg-[#00C29F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00A884]"
          >
            Book a free demo
          </Link>
        </div>
      </div>
    </div>
  )
}
