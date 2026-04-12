import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { MetricCard } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/marketing/sections/Section"

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
      <div className="space-y-5 sm:space-y-6">
        <div className="space-y-5 sm:space-y-6">
          <Badge
            variant="outline"
            className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
          >
            {badge}
          </Badge>

          <h1 className="max-w-[min(100%,40rem)] text-[clamp(2.05rem,8.5vw,3.85rem)] leading-[0.97] font-medium tracking-[-0.052em] text-foreground text-balance sm:max-w-[min(100%,44rem)] sm:text-[clamp(2.35rem,6vw,3.35rem)] sm:leading-[0.95] lg:text-[clamp(2.75rem,4.5vw,3.85rem)]">
            {title}
          </h1>

          <p className="max-w-prose text-base leading-8 text-muted-foreground text-pretty sm:text-lg sm:leading-8">
            {intro}
          </p>

          {primary || secondary ? (
            <div className="flex flex-col gap-3 border-t border-foreground/10 pt-6 sm:flex-row sm:flex-wrap sm:pt-8">
              {primary ? (
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
              ) : null}
              {secondary ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-11 w-full border-border bg-muted/30 px-4 text-foreground hover:bg-muted/50 hover:text-foreground active:bg-muted/40 sm:w-auto"
                >
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {metrics?.length ? (
        <div className="mt-8 grid gap-px border border-border bg-border sm:mt-10 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card
              key={`${metric.value}-${metric.label}`}
              className="border-0 bg-card/95 text-foreground transition-colors duration-200 hover:bg-card dark:bg-card/90"
            >
              <CardHeader className="flex flex-col justify-center gap-2">
                <CardTitle className="text-4xl leading-none font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
                  {metric.value}
                </CardTitle>
                <CardDescription className="text-sm leading-6 text-muted-foreground">
                  {metric.label}
                </CardDescription>
              </CardHeader>
              {metric.note ? (
                <CardContent className="pt-0 text-xs text-muted-foreground">
                  {metric.note}
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      ) : null}
    </Section>
  )
}
