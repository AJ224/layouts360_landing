import { Metadata } from "next"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { BlogCard } from "@/components/marketing/blog-card"
import {
  getAllFeedItemsSorted,
  getBlogFeedItems,
  getCompareFeedItems,
} from "@/lib/content-feed"
import { PAGE_KEYWORDS, TIER_2_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Blog & Software Comparisons",
  description:
    "Guides on real estate software, CRM, accounting, and asset management, plus comparisons of Excel, WhatsApp, and paper workflows vs Layouts360.",
  path: "/blog",
  keywords: [
    ...PAGE_KEYWORDS.blog,
    ...TIER_2_KEYWORDS,
    "real estate asset management software",
    "real estate accounting software",
    "commercial real estate software",
    "real estate client management software",
  ],
  ogTitle: "Blog & Comparisons",
  ogDescription: "Guides and workflow comparisons for Indian plot developers.",
})

export default function BlogIndexPage() {
  const guides = getBlogFeedItems()
  const comparisons = getCompareFeedItems()
  const allSorted = getAllFeedItemsSorted()
  const featured = allSorted[0]

  const totalCount = guides.length + comparisons.length

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header theme="light" />

      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#00C29F]">
                Layouts360 Resources
              </p>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Guides &{" "}
                <span className="text-[#00C29F]">comparisons</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Growth guides plus honest side-by-side looks at Excel, WhatsApp,
                and paper workflows vs Layouts360.
              </p>
              {totalCount > 0 && (
                <p className="mt-6 text-sm text-slate-500">
                  {guides.length} guides · {comparisons.length} comparisons
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="container mx-auto px-4 sm:px-6">
            {totalCount === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
                <p className="text-slate-500">No posts yet. Check back soon.</p>
              </div>
            ) : (
              <div className="space-y-14">
                {featured && (
                  <div>
                    <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Featured
                    </h2>
                    <BlogCard
                      post={featured}
                      featured
                      badge={
                        featured.kind === "compare" ? "Comparison" : "Guide"
                      }
                    />
                  </div>
                )}

                {comparisons.length > 0 && (
                  <div id="comparisons">
                    <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Comparisons
                    </h2>
                    <p className="mb-6 max-w-2xl text-sm text-slate-600">
                      Old workflow vs Layouts360: inventory, CRM, payments,
                      launches, and broker sales.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
                      {comparisons.map((post) => (
                        <BlogCard
                          key={post.slug}
                          post={post}
                          badge="Comparison"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {guides.length > 0 && (
                  <div id="guides">
                    <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Guides
                    </h2>
                    <p className="mb-6 max-w-2xl text-sm text-slate-600">
                      Longer reads on digitizing plot sales and choosing the
                      right tools.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
                      {guides.map((post) => (
                        <BlogCard
                          key={post.slug}
                          post={post}
                          badge="Guide"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
