import Link from "next/link"
import { TOOLS, type ToolId } from "@/lib/tools"
import { cn } from "@/lib/utils"

interface OtherToolsNavProps {
  currentId?: ToolId
}

export function OtherToolsNav({ currentId }: Readonly<OtherToolsNavProps>) {
  return (
    <nav aria-label="Tools" className="flex flex-wrap gap-2">
      <Link
        href="/tools"
        className={cn(
          "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
          currentId
            ? "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            : "border-slate-900 bg-slate-900 text-white",
        )}
      >
        All tools
      </Link>
      {TOOLS.map((tool) => {
        const active = tool.id === currentId
        return (
          <Link
            key={tool.id}
            href={tool.href}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
            )}
          >
            {tool.shortTitle}
          </Link>
        )
      })}
    </nav>
  )
}
