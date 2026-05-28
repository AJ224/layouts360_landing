import Link from "next/link"
import type { ComponentProps } from "react"
import type { MDXComponents } from "mdx/types"
import { cn } from "@/lib/utils"

function ProseTable({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table
        className={cn(
          "w-full min-w-[540px] border-collapse text-left text-sm",
          className,
        )}
        {...props}
      />
    </div>
  )
}

function ProseTh({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600",
        className,
      )}
      {...props}
    />
  )
}

function ProseTd({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "border-b border-slate-100 px-4 py-3 align-top text-slate-700",
        className,
      )}
      {...props}
    />
  )
}

function ProseTr({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("transition-colors hover:bg-slate-50/80", className)}
      {...props}
    />
  )
}

export const blogMdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mb-4 mt-12 scroll-mt-24 border-b border-slate-200 pb-3 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mb-3 mt-8 text-lg font-bold text-slate-900 sm:text-xl"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="mb-2 mt-6 text-base font-semibold text-slate-900"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      className="mb-5 text-base leading-7 text-slate-700 sm:text-[1.0625rem] sm:leading-8"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="mb-6 list-none space-y-3 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.7rem] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-[#00C29F]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="mb-6 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-[#00C29F]"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      className="text-base leading-7 text-slate-700 [&>ol]:mt-2 [&>ul]:mt-2"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-8 rounded-r-xl border-l-4 border-[#00C29F] bg-teal-50/60 px-5 py-4 text-base italic leading-relaxed text-slate-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http")
    const className =
      "font-medium text-[#00A884] underline decoration-[#00C29F]/40 underline-offset-2 transition-colors hover:text-[#00C29F] hover:decoration-[#00C29F]"

    if (isExternal) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href ?? "#"} className={className} {...props}>
        {children}
      </Link>
    )
  },
  table: ProseTable,
  thead: ({ className, ...props }) => (
    <thead className={cn("", className)} {...props} />
  ),
  tbody: ({ className, ...props }) => (
    <tbody className={cn("divide-y divide-slate-100", className)} {...props} />
  ),
  tr: ProseTr,
  th: ProseTh,
  td: ProseTd,
  hr: () => <hr className="my-10 border-slate-200" />,
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-slate-900" {...props}>
      {children}
    </strong>
  ),
}
