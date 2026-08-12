import { LAND_UNITS, type LandUnitId } from "@/lib/land-conversions"
import { TOOL_SELECT_CLASS } from "@/lib/tools"
import { cn } from "@/lib/utils"

interface UnitSelectProps {
  id: string
  value: LandUnitId
  onChange: (unitId: LandUnitId) => void
  className?: string
}

export function UnitSelect({ id, value, onChange, className }: Readonly<UnitSelectProps>) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value as LandUnitId)}
      className={cn(TOOL_SELECT_CLASS, className)}
    >
      {LAND_UNITS.map((unit) => (
        <option key={unit.id} value={unit.id}>
          {unit.label}
        </option>
      ))}
    </select>
  )
}
