import { notFound } from "next/navigation"
import { Metadata } from "next"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { BlogArticle } from "@/components/blog/blog-article"
import { getCompareBySlug, getAllCompares } from "@/lib/compare"
import { keywordsForArticle } from "@/lib/seo-keywords"

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

  return {
    title: `${post.title} | Layouts360 Compare`,
    description: post.excerpt,
    keywords: keywordsForArticle(post.tags),
    alternates: {
      canonical: `https://layouts360.com/compare/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://layouts360.com/compare/${post.slug}`,
    },
  }
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
        />
      </main>
      <Footer />
    </div>
  )
}
