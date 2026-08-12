import Link from "next/link"
import { getPostBySlug } from "@/lib/blog"

interface ToolsBlogBarProps {
  slugs: readonly string[]
}

export function ToolsBlogBar({ slugs }: Readonly<ToolsBlogBarProps>) {
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => post != null)
    .slice(0, 4)

  if (posts.length === 0) return null

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">From the blog</p>
        <Link href="/blog" className="text-xs font-medium text-teal-700 hover:text-teal-800">
          All guides →
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="max-w-full truncate rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-teal-200 hover:text-teal-800"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
