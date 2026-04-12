"use client"

import { motion } from "framer-motion"
import { Lock, Radio, Stethoscope, TriangleAlert, Users } from "lucide-react"
import { useMemo, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const steps = [
  {
    title: "Every patient. Continuously visible.",
    label: "Continuous Monitoring",
    icon: Stethoscope,
    detail: "Vitals stream into a single, stable system view.",
  },
  {
    title: "Signals are interpreted before they become emergencies.",
    label: "AI Detection",
    icon: TriangleAlert,
    detail: "Anomalies surface early, as quiet, actionable alerts.",
  },
  {
    title: "Care is delivered without being physically present.",
    label: "Remote Care",
    icon: Radio,
    detail: "Specialists connect instantly across distance and time.",
  },
  {
    title: "Decisions happen across teams, instantly.",
    label: "Collaboration",
    icon: Users,
    detail: "Shared context reduces delays and duplicated effort.",
  },
  {
    title: "Secure. Interoperable. Always available.",
    label: "System Integrity",
    icon: Lock,
    detail: "Integrity-by-design with compliance-grade foundations.",
  },
] as const

function SystemCard({ idx }: { idx: number }) {
  const step = steps[idx]
  const Icon = step.icon

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Card className="bg-card/60">
        <CardHeader className="flex flex-col justify-center gap-2 pb-0">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                {step.label}
              </p>
              <CardTitle className="mt-3 text-2xl leading-[1.08] font-normal tracking-[-0.04em] text-foreground">
                {step.title}
              </CardTitle>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-card/20">
              <Icon className="h-5 w-5 text-foreground/90" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {step.detail}
          </p>
          <div className="divider mt-6" />
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Built for continuity: signals, context, and collaboration converge
            in one view, without requiring physical presence.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SystemStepLabel({
  label,
  index,
  active,
}: {
  label: string
  index: number
  active: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors",
        active ? "border-border/70 bg-card/25" : "border-border/60 bg-card/15"
      )}
    >
      <span className="text-xs tracking-[0.26em] text-foreground uppercase">
        {label}
      </span>
      <span className="text-xs text-muted-foreground tabular-nums">
        0{index + 1}
      </span>
    </div>
  )
}

export function System() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative bg-background">
      <div
        className="ambient-grid absolute inset-0 opacity-35"
        aria-hidden="true"
      />
      <div
        className="edge-vignette absolute inset-0 opacity-90"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              System
            </p>
            <h2 className="mt-6 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              The core experience of connected critical care.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              One capability at a time, with a stable system view.
            </p>

            <div className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="w-full text-left"
                >
                  <SystemStepLabel
                    label={s.label}
                    index={i}
                    active={i === activeIndex}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <SystemCard idx={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  )
}
