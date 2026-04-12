import React from "react"
import { cn } from "@/lib/utils"

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("font-heading font-medium text-foreground", className)}
      {...props}
    />
  )
}

export { CardTitle }
