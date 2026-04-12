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
          className="mb-3 w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
        >
          {badge}
        </Badge>
      ) : null}
      <h2 className="text-[clamp(1.75rem,5.2vw,2.85rem)] leading-[1.05] font-medium tracking-[-0.045em] text-balance text-foreground sm:text-4xl lg:text-[2.85rem]">
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
