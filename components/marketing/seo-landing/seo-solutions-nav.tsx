import Link from "next/link"
import { SEO_SOLUTION_LINKS } from "@/lib/seo-solutions"

interface SeoSolutionsNavProps {
  currentPath: string
}

export function SeoSolutionsNav({ currentPath }: SeoSolutionsNavProps) {
  const links = SEO_SOLUTION_LINKS.filter((item) => item.href !== currentPath)

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Related solutions</h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
