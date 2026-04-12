"use client"

import { Activity, Radio, Users } from "lucide-react"

const scenarios = [
  {
    title: "Deterioration detected before it becomes critical",
    detail:
      "Early warning signals surface from continuous streams, quietly, clearly, and in time.",
    icon: Activity,
  },
  {
    title: "A specialist intervenes remotely",
    detail:
      "Connected care extends ICU capability beyond the walls of the unit.",
    icon: Radio,
  },
  {
    title: "A care team collaborates instantly",
    detail:
      "Shared context enables faster decisions across disciplines and shifts.",
    icon: Users,
  },
] as const

export function Scenarios() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              Scenarios
            </p>
            <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              Visual, not verbose.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Three situations that define the new operating model.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="surface-2 px-6 py-6 lg:col-span-2">
              <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                Spotlight
              </p>
              <h3 className="mt-3 text-2xl leading-[1.1] font-normal tracking-[-0.04em] text-foreground">
                {scenarios[0].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {scenarios[0].detail}
              </p>
            </div>

            {scenarios.slice(1).map((s) => (
              <div
                key={s.title}
                className="surface-2 px-6 py-6 transition-colors hover:bg-card/70"
              >
                <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                  Scenario
                </p>
                <div className="mt-3 flex items-start justify-between gap-6">
                  <h3 className="text-xl leading-[1.15] font-normal tracking-[-0.04em] text-foreground">
                    {s.title}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-card/20">
                    <s.icon className="h-5 w-5 text-foreground/90" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
