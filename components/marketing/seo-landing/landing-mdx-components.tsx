import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import type { MDXComponents } from "mdx/types"
import { cn } from "@/lib/utils"
import { slugifyHeading } from "@/lib/landing-display"

function flattenText(children: ReactNode): string {
  if (typeof children === "string") return children
  if (typeof children === "number") return String(children)
  if (Array.isArray(children)) return children.map(flattenText).join("")
  if (children && typeof children === "object" && "props" in children) {
    const props = children.props as { children?: ReactNode }
    return flattenText(props.children)
  }
  return ""
}

function ProseTable({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
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
    <tr className={cn("transition-colors hover:bg-slate-50/80", className)} {...props} />
  )
}

const linkClassName =
  "font-medium text-[#00A884] underline decoration-[#00C29F]/40 underline-offset-2 transition-colors hover:text-[#00C29F] hover:decoration-[#00C29F]"

export const landingMdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const id = slugifyHeading(flattenText(children))
    return (
      <h2
        id={id}
        className="scroll-mt-28 border-b border-slate-200 pb-3 text-xl font-bold tracking-tight text-slate-900 first:mt-0 sm:text-2xl [&:not(:first-child)]:mt-10"
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => (
    <h3
      className="mb-2 mt-6 text-base font-bold text-slate-900 sm:text-lg"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mb-2 mt-4 text-sm font-semibold text-slate-900" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 text-base leading-7 text-slate-600" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="mb-6 list-none space-y-2.5 [&>li]:relative [&>li]:pl-5 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.55rem] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-[#00C29F]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="mb-6 list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-[#00C29F]"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      className="pl-1 text-sm leading-relaxed text-slate-600 sm:text-base [&>ol]:mt-2 [&>ul]:mt-2"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 rounded-r-xl border-l-4 border-[#00C29F] bg-teal-50/60 px-5 py-4 text-base leading-relaxed text-slate-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http")

    if (isExternal) {
      return (
        <a
          href={href}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href ?? "#"} className={linkClassName} {...props}>
        {children}
      </Link>
    )
  },
  table: ProseTable,
  thead: ({ className, ...props }) => <thead className={cn("", className)} {...props} />,
  tbody: ({ className, ...props }) => (
    <tbody className={cn("divide-y divide-slate-100", className)} {...props} />
  ),
  tr: ProseTr,
  th: ProseTh,
  td: ProseTd,
  hr: () => <hr className="my-8 border-slate-200" />,
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-slate-900" {...props}>
      {children}
    </strong>
  ),
}
