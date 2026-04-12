import React from "react"
import { cn } from "@/lib/utils"

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export { CardFooter }
