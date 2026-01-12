import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"

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
    }
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header theme="light" />

            <main className="flex-grow">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-10 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-500 border-b pb-8">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                5 min read
                            </span>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                        {/* @ts-expect-error Server Component */}
                        <MDXRemote source={post.content} options={{ parseFrontmatter: true }} />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
