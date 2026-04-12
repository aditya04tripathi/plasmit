import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  actions,
}: {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  actions?: ReactNode
}) {
  const isCenter = align === "center"

  return (
    <div
      className={
        isCenter
          ? "mx-auto flex max-w-3xl flex-col items-center text-center"
          : "flex max-w-3xl flex-col"
      }
    >
      {badge ? (
        <Badge
          variant="outline"
          className="mb-3 w-fit border-foreground/12 bg-foreground/4 text-muted-foreground"
        >
          {badge}
        </Badge>
      ) : null}
      <h2 className="text-[clamp(2.1rem,9.5vw,3.75rem)] leading-[0.95] font-medium tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
      {actions ? (
        <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          {actions}
        </div>
      ) : null}
    </div>
  )
}
