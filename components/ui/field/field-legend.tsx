import * as React from "react"
import { cn } from "@/lib/utils"

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn("mb-2.5 font-medium", className)}
      {...props}
    />
  )
}

export { FieldLegend }
