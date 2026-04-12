"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Thesis",
    detail:
      "A shift from periodic rounds to continuous connected care, enabling earlier intervention and better coordination.",
  },
  {
    title: "Why now",
    detail:
      "Critical care demand is rising while workforce constraints intensify, continuity becomes a system requirement.",
  },
  {
    title: "What to review",
    detail:
      "Investment thesis, addressable verticals, and team, designed for fast diligence.",
  },
] as const

export function InvestorSnapshot() {
  return (
    <section className="relative bg-background">
      <div className="edge-vignette absolute inset-0 opacity-90" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              Investor snapshot
            </p>
            <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              Decide in minutes, not hours.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A calm, investor-first path through the thesis and the supporting
              materials.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact-us">Investor enquiry</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/investor-corner">Read the thesis</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/leadership">Team</Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <div className="grid gap-8 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="min-w-0">
                  <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                    {p.title}
                  </p>
                  <div className="divider mt-4" />
                  <p className="mt-4 text-sm leading-7 text-foreground/90">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
