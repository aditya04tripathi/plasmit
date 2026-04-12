import type { ReactNode } from "react"

import { sectionClassName } from "@/components/marketing/sections/section-class-name"
import { cn } from "@/lib/utils"

const densityPadding = {
  compact: "py-8 sm:py-10 lg:py-12",
  default: "py-10 sm:py-12 lg:py-16",
  airy: "py-12 sm:py-16 lg:py-20",
} as const

export function Section({
  children,
  tone = "default",
  density = "default",
}: {
  children: ReactNode
  tone?: "default" | "muted"
  density?: keyof typeof densityPadding
}) {
  return (
    <section className={sectionClassName(tone)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          densityPadding[density]
        )}
      >
        {children}
      </div>
    </section>
  )
}
