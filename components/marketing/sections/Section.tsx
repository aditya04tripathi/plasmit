import type { ReactNode } from "react"

import { sectionClassName } from "@/components/marketing/sections/section-class-name"

export function Section({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "muted"
}) {
  return (
    <section className={sectionClassName(tone)}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  )
}
