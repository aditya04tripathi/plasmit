import type { ReactNode } from "react"

import { sectionClassName } from "@/components/marketing/sections/section-class-name"
import { cn } from "@/lib/utils"

const densityPadding = {
  compact: "py-5 sm:py-7 lg:py-8",
  default: "py-6 sm:py-8 lg:py-10",
  airy: "py-8 sm:py-10 lg:py-12",
} as const

export function Section({
  children,
  tone = "default",
  density = "default",
  className,
}: {
  children: ReactNode
  tone?: "default" | "muted"
  density?: keyof typeof densityPadding
  className?: string
}) {
  return (
    <section className={cn(sectionClassName(tone), className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-5 lg:px-8",
          densityPadding[density]
        )}
      >
        {children}
      </div>
    </section>
  )
}
