"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type Stat = {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { label: "reduction in ICU mortality", value: 50, suffix: "%" },
  { label: "reduction in operational cost", value: 25, suffix: "%" },
  { label: "continuous care", value: 24, suffix: "×7" },
]

function useInViewOnce<T extends Element>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView }
}

function StatBlock({ stat, active }: { stat: Stat; active: boolean }) {
  const [shown, setShown] = useState(0)
  const start = useMemo(() => (stat.value === 24 ? 0 : 0), [stat.value])

  useEffect(() => {
    if (!active) return
    const from = start
    const to = stat.value
    const startTime = performance.now()
    const duration = 1050

    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - startTime) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(Math.round(from + (to - from) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, start, stat.value])

  return (
    <div className="surface-2 min-w-0 px-5 py-5">
      <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
        Impact
      </p>
      <p className="mt-3 text-5xl leading-none font-normal tracking-[-0.06em] text-foreground tabular-nums">
        {stat.prefix ?? ""}
        {shown}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export function Impact() {
  const { ref, inView } = useInViewOnce<HTMLElement>()

  return (
    <section ref={ref} className="relative bg-black">
      <div className="absolute inset-0 ambient-grid opacity-55" />
      <div className="absolute inset-0 edge-vignette" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              Impact
            </p>
            <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              Outcomes that justify the shift.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              These numbers reflect the value proposition presented across the
              live PlasmIT materials.
            </p>

            <div
              aria-hidden="true"
              className="divider-fade mt-10"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 240ms ease-out" }}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatBlock key={stat.label} stat={stat} active={inView} />
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-2xl text-xs leading-6 text-muted-foreground">
          Claims shown are presented as stated. Validation modules can be added when
          source materials are ready to publish.
        </div>
      </div>
    </section>
  )
}

