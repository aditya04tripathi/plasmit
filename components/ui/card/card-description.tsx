import React from "react"
import { cn } from "@/lib/utils"

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export { CardDescription }
