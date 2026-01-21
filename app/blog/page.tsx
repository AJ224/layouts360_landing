import Link from "next/link"
import { Metadata } from "next"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { getAllPosts } from "@/lib/blog"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Real Estate Growth Blog | Layouts360",
    description: "Insights, tips, and strategies for modern real estate developers. Learn how to digitize your sales and close more deals.",
    keywords: [
        "real estate blog",
        "real estate technology",
        "plot management tips",
        "real estate sales strategies",
        "digital transformation real estate"
    ],
    alternates: {
        canonical: 'https://layouts360.com/blog',
    },
    openGraph: {
        title: "Real Estate Growth Blog | Layouts360",
        description: "Insights, tips, and strategies for modern real estate developers.",
        type: "website",
        url: "https://layouts360.com/blog",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function BlogIndexPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header theme="light" />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="bg-white border-b py-12 sm:py-16 pt-20">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            The <span className="text-[#00C29F]">Growth</span> Blog
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Strategies to modernize your real estate business. Sales, technology, and operations insights.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        {/* Placeholder for Cover Image if I had one, currently using a gradient fallback */}
                                        <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative p-6 flex items-center justify-center">
                                            <span className="text-4xl">📄</span>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {post.author}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00C29F] transition-colors">
                                                {post.title}
                                            </h2>

                                            <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-[#00C29F] font-semibold text-sm mt-auto">
                                                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>

                        {posts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500">No posts found. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
