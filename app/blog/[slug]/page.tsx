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
                    <div className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                        prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
                        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2
                        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                        prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4
                        prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-500 hover:prose-a:underline
                        prose-strong:text-slate-900 prose-strong:font-semibold
                        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                        prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                        prose-li:text-slate-700 prose-li:my-2
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:my-6
                        prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-slate-800 prose-code:font-mono
                        prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                        prose-table:w-full prose-table:my-6 prose-table:border-collapse
                        prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-slate-300
                        prose-td:p-3 prose-td:border prose-td:border-slate-300
                        prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                        prose-hr:my-8 prose-hr:border-slate-200
                    ">
                        {/* @ts-expect-error Server Component */}
                        <MDXRemote source={post.content} />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
