import Link from "next/link"
import { CRM_CLUSTER_LINKS, CRM_CLUSTER_PATHS } from "@/lib/crm-cluster-links"
import { PLOT_CLUSTER_LINKS, PLOT_CLUSTER_PATHS } from "@/lib/plot-cluster-links"

interface SeoClusterNavProps {
  currentPath: string
}

function clusterForPath(currentPath: string) {
  if (PLOT_CLUSTER_PATHS.has(currentPath) && !CRM_CLUSTER_PATHS.has(currentPath)) {
    return { title: "Plot management resources", links: PLOT_CLUSTER_LINKS }
  }
  if (CRM_CLUSTER_PATHS.has(currentPath)) {
    return { title: "CRM resources", links: CRM_CLUSTER_LINKS }
  }
  if (PLOT_CLUSTER_PATHS.has(currentPath)) {
    return { title: "Plot management resources", links: PLOT_CLUSTER_LINKS }
  }
  return { title: "Related solutions", links: CRM_CLUSTER_LINKS }
}

export function SeoClusterNav({ currentPath }: SeoClusterNavProps) {
  const { title, links: clusterLinks } = clusterForPath(currentPath)
  const links = clusterLinks.filter((item) => item.href !== currentPath)

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
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
