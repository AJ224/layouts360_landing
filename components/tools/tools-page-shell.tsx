import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { OtherToolsNav } from "@/components/tools/other-tools-nav"
import { ToolsBlogBar } from "@/components/tools/tools-blog-bar"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema"
import { absoluteUrl } from "@/lib/site-seo"
import type { ToolId } from "@/lib/tools"

interface ToolsPageShellProps {
  title: string
  description: string
  currentId?: ToolId
  blogSlugs: readonly string[]
  canonicalPath: string
  faqs?: ReadonlyArray<{ question: string; answer: string }>
  children: React.ReactNode
  afterBlog?: React.ReactNode
}

export function ToolsPageShell({
  title,
  description,
  currentId,
  blogSlugs,
  canonicalPath,
  faqs,
  children,
  afterBlog,
}: Readonly<ToolsPageShellProps>) {
  const breadcrumb = [
    { name: "Home", url: absoluteUrl("/") },
    { name: "Tools", url: absoluteUrl("/tools") },
    ...(currentId
      ? [{ name: title, url: absoluteUrl(canonicalPath) }]
      : []),
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbSchema items={breadcrumb} />
      {faqs && faqs.length > 0 ? <FAQSchema faqs={[...faqs]} /> : null}
      <Header theme="light" />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">{description}</p>
          </header>
          {currentId ? (
            <div className="lg:shrink-0">
              <OtherToolsNav currentId={currentId} />
            </div>
          ) : null}
        </div>
        {children}
        <ToolsBlogBar slugs={blogSlugs} />
        {afterBlog}
      </main>
      <Footer />
    </div>
  )
}
