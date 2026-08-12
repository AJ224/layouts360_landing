interface ToolStatProps {
  label: string
  value: string
  hint?: string
  emphasize?: boolean
}

export function ToolStat({ label, value, hint, emphasize = false }: Readonly<ToolStatProps>) {
  return (
    <div className={emphasize ? "rounded-xl bg-slate-900 px-4 py-3 text-white" : "rounded-xl bg-slate-50 px-4 py-3"}>
      <p className={emphasize ? "text-xs text-slate-300" : "text-xs text-slate-500"}>{label}</p>
      <p className={`mt-1 text-lg font-semibold tabular-nums ${emphasize ? "text-white" : "text-slate-900"}`}>
        {value}
      </p>
      {hint ? <p className="mt-0.5 text-xs text-slate-400">{hint}</p> : null}
    </div>
  )
}
