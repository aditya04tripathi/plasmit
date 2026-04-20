import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { MetricCard } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/marketing/sections/Section"
import { Pressable } from "@/components/motion/Pressable"
import { cn } from "@/lib/utils"

const metricNudgeDelay = [
  "",
  "marketing-view-nudge-delay-1",
  "marketing-view-nudge-delay-2",
] as const

export function PageHero({
  badge,
  title,
  intro,
  primary,
  secondary,
  metrics,
}: {
  badge: string
  title: string
  intro: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  metrics?: MetricCard[]
}) {
  return (
    <Section>
      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-3 sm:space-y-4">
          <div className="marketing-hero-drift-1">
            <Badge
              variant="outline"
              className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
            >
              {badge}
            </Badge>
          </div>

          <div className="marketing-hero-drift-2">
            <h1 className="max-w-[min(100%,44rem)] leading-[0.97] font-medium tracking-[-0.05em] text-balance text-foreground">
              {title}
            </h1>
          </div>

          <div className="marketing-hero-drift-3">
            <p className="max-w-[65ch] leading-body text-pretty text-muted-foreground">
              {intro}
            </p>
          </div>

          {primary || secondary ? (
            <div className="marketing-hero-drift-4 flex flex-col gap-2 border-t border-foreground/10 pt-3 sm:flex-row sm:flex-wrap sm:pt-4">
              {primary ? (
                <Pressable className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="min-h-11 w-full border border-primary/60 bg-primary px-4 text-primary-foreground hover:bg-primary/85 active:bg-primary/90 sm:w-auto"
                  >
                    <Link href={primary.href}>
                      {primary.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </Pressable>
              ) : null}
              {secondary ? (
                <Pressable className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-h-11 w-full border-border bg-muted/30 px-4 text-foreground hover:bg-muted/50 hover:text-foreground active:bg-muted/40 sm:w-auto"
                  >
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                </Pressable>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {metrics?.length ? (
        <dl className="mt-5 grid gap-2.5 sm:mt-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className={cn(
                "marketing-view-nudge border-l-2 border-border/70 bg-muted/20 p-4 transition-colors duration-200 hover:border-primary hover:bg-muted/35",
                metricNudgeDelay[Math.min(index, 2) as 0 | 1 | 2]
              )}
            >
              <dt className="metric-value leading-none font-medium tracking-[-0.04em] text-foreground">
                {metric.value}
              </dt>
              <dd className="mt-1.5 leading-body text-muted-foreground">
                {metric.label}
              </dd>
              {metric.note ? (
                <p className="mt-2 text-muted-foreground">{metric.note}</p>
              ) : null}
            </div>
          ))}
        </dl>
      ) : null}
    </Section>
  )
}
