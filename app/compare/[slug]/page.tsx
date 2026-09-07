import { notFound } from "next/navigation"
import { Metadata } from "next"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { BlogArticle } from "@/components/blog/blog-article"
import { getCompareBySlug, getAllCompares } from "@/lib/compare"
import { robotsForArticle } from "@/lib/indexing-policy"
import { keywordsForArticle } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllCompares().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getCompareBySlug(params.slug)

  if (!post) {
    return { title: "Comparison Not Found" }
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/compare/${post.slug}`,
    keywords: keywordsForArticle(post.tags),
    robots: robotsForArticle(post.content, "compare", post.slug),
    ogType: "article",
  })
}

export default function ComparePostPage({ params }: Props) {
  const post = getCompareBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header theme="light" />
      <main className="flex-grow">
        <BlogArticle
          post={post}
          backHref="/blog#comparisons"
          backLabel="Back to blog"
          categoryBadge="Comparison"
          contentKind="compare"
        />
      </main>
      <Footer />
    </div>
  )
}
