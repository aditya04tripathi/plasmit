"use client"

import { motion, useSpring, useTime, useTransform } from "framer-motion"
import { useMemo, useRef } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motionTokens } from "@/lib/animations"
import { cn } from "@/lib/utils"

const frames = [
  "Care is periodic. Not continuous.",
  "Intervention is delayed.",
  "Data exists. But not where it’s needed.",
  "Critical decisions depend on physical presence.",
] as const

function FeedRow({
  text,
  emphasized,
  rowIndex,
}: {
  text: string
  emphasized?: boolean
  rowIndex: number
}) {
  const time = useTime()

  const widthPctRaw = useTransform(time, (ms) => {
    const t = ms / 1000
    const base = 34 + rowIndex * 11
    const amp = 16 - rowIndex * 1.3

    const a = Math.sin(t * (0.95 + rowIndex * 0.12) + rowIndex * 0.7)
    const b = Math.sin(t * (1.7 + rowIndex * 0.09) + rowIndex * 1.9)
    const c = Math.sin(t * (2.45 + rowIndex * 0.05) + rowIndex * 2.6)
    const wave = 0.55 * a + 0.3 * b + 0.15 * c
    const normalized = 0.5 + 0.5 * (wave / 1.0)

    return Math.max(14, Math.min(92, base + amp * normalized))
  })

  const widthPct = useSpring(widthPctRaw, {
    stiffness: 140,
    damping: 28,
    mass: 0.6,
  })

  const scaleX = useTransform(widthPct, (v) => Math.max(0.12, v / 100))

  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-4",
        emphasized
          ? "border-border/70 bg-card/25"
          : "border-border/60 bg-card/20"
      )}
    >
      <p className="text-sm leading-7 text-foreground/90">{text}</p>
      <div className="mt-4 h-[7px] w-full overflow-hidden rounded-full bg-card/35 ring-1 ring-border/50">
        <motion.div
          className="h-full origin-left rounded-full bg-primary"
          style={{ scaleX }}
          transition={{
            duration: motionTokens.duration.fast,
            ease: motionTokens.ease,
          }}
        />
      </div>
    </div>
  )
}

export function Problem() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const feedRows = useMemo(() => frames.map((t) => t), [])

  return (
    <section ref={sectionRef} className="relative bg-background">
      <div
        className="edge-vignette absolute inset-0 opacity-90"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              What breaks today
            </p>
            <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              Critical care fails in the gaps between rounds.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              The system isn’t designed for continuity, it’s designed for
              presence.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-card/60">
              <CardHeader className="flex flex-col justify-center gap-2 pb-0">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                    ICU feed
                  </p>
                  <div className="h-2 w-2 rounded-full bg-primary/70" />
                </div>
                <CardTitle className="mt-3 text-base font-medium tracking-[-0.01em]">
                  Disconnected data, delayed intervention.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mt-6 space-y-4">
                  {feedRows.map((text, idx) => (
                    <FeedRow
                      key={text}
                      text={text}
                      emphasized={idx === 1}
                      rowIndex={idx}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
