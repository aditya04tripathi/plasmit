"use client"

import { useMemo } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const panels = [
  {
    title: "Admission",
    detail: "Initial context becomes immediately visible.",
  },
  {
    title: "ICU Monitoring",
    detail: "Continuous vitals and device data stream in.",
  },
  {
    title: "AI Alert Trigger",
    detail: "Signals surface before becoming emergencies.",
  },
  {
    title: "Remote Intervention",
    detail: "Specialists act without physical presence.",
  },
  {
    title: "Recovery / Home Care",
    detail: "Continuity extends beyond the ward.",
  },
] as const

export function Timeline() {
  const items = useMemo(() => panels.map((p) => p), [])

  return (
    <section className="relative bg-background">
      <div className="edge-vignette absolute inset-0 opacity-90" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
            Timeline of care
          </p>
          <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
            A continuous patient journey over time.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((panel) => (
            <Card key={panel.title} className="bg-card/60">
              <CardHeader className="pb-0">
                <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                  {panel.title}
                </p>
                <CardTitle className="mt-3 text-2xl leading-[1.1] font-normal tracking-[-0.04em] text-foreground">
                  {panel.detail}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="divider mt-6" />
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Continuous visibility across time, one timeline, one context.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
