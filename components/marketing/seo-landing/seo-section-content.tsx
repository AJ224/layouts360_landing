import Link from "next/link"
import type { ComponentType } from "react"
import { Bell, Check, Target, Users } from "lucide-react"
import { SeoClusterNav } from "@/components/marketing/seo-landing/seo-cluster-nav"
import { SeoComparisonCards } from "@/components/marketing/seo-landing/seo-comparison-cards"
import type { SeoFeatureCardIcon, SeoLandingSection } from "@/types/seo-landing"

const FEATURE_ICONS: Record<SeoFeatureCardIcon, ComponentType<{ className?: string }>> = {
  target: Target,
  users: Users,
  bell: Bell,
}

const FEATURE_ICON_COLORS: Record<SeoFeatureCardIcon, string> = {
  target: "text-blue-600",
  users: "text-purple-600",
  bell: "text-teal-600",
}

interface SeoSectionContentProps {
  section: SeoLandingSection
  path: string
}

export function SeoSectionContent({ section, path }: SeoSectionContentProps) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="mb-4 text-lg leading-relaxed text-gray-700 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mb-4 list-inside list-disc space-y-2 text-lg text-gray-700">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.featureCards && section.featureCards.length > 0 && (
        <div className="mb-4 grid gap-6 md:grid-cols-3">
          {section.featureCards.map((card) => {
            const Icon = FEATURE_ICONS[card.icon]
            return (
              <div
                key={card.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <Icon className={`mb-4 h-10 w-10 ${FEATURE_ICON_COLORS[card.icon]}`} />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-700">{card.body}</p>
              </div>
            )
          })}
        </div>
      )}
      {section.criteria && section.criteria.length > 0 && (
        <ul className="mb-4 space-y-3">
          {section.criteria.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-gray-700">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.comparison && <SeoComparisonCards {...section.comparison} />}
      {section.comparisonTable && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 font-semibold text-gray-900">Capability</th>
                <th className="p-4 font-semibold text-gray-900">Generic CRM</th>
                <th className="p-4 font-semibold text-gray-900">Layouts360</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {section.comparisonTable.rows.map((row) => (
                <tr key={row.capability} className="border-b last:border-b-0">
                  <td className="p-4 font-medium">{row.capability}</td>
                  <td className="p-4">{row.generic}</td>
                  <td className="p-4">{row.layouts360}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.linkParts && section.linkParts.length > 0 && (
        <p className="mt-6 text-lg text-gray-700">
          {section.linkParts.map((part) =>
            part.href ? (
              <Link
                key={`${part.href}-${part.text.slice(0, 24)}`}
                href={part.href}
                className="font-semibold text-blue-600 underline"
              >
                {part.text}
              </Link>
            ) : (
              <span key={part.text.slice(0, 24)}>{part.text}</span>
            ),
          )}
        </p>
      )}
      {section.crossLinks && (
        <p className="mt-6 text-lg text-gray-700">
          {section.crossLinks.prefix.endsWith(" ") ? section.crossLinks.prefix : `${section.crossLinks.prefix} `}
          {section.crossLinks.links.map((link, index) => (
            <span key={link.href}>
              {index > 0 && (index === section.crossLinks!.links.length - 1 ? " and " : ", ")}
              <Link href={link.href} className="font-semibold text-blue-600 underline">
                {link.label}
              </Link>
            </span>
          ))}
          {section.crossLinks.suffix ?? "."}
        </p>
      )}
      {section.footerNote && (
        <p className="mt-6 text-lg text-gray-700">{section.footerNote}</p>
      )}
      {section.clusterNav && <SeoClusterNav currentPath={path} />}
    </>
  )
}
