import { notFound } from "next/navigation"
import { Metadata } from "next"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { BlogArticle } from "@/components/blog/blog-article"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { robotsForArticle } from "@/lib/indexing-policy"
import { keywordsForArticle } from "@/lib/seo-keywords"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Layouts360 Blog`,
    description: post.excerpt,
    keywords: keywordsForArticle(post.tags),
    robots: robotsForArticle(post.content),
    alternates: {
      canonical: `https://layouts360.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://layouts360.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header theme="light" />
      <main className="flex-grow">
        <BlogArticle post={post} />
      </main>
      <Footer />
    </div>
  )
}
