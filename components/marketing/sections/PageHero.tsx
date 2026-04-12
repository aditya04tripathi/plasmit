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
  asideTitle,
  asideBody,
}: {
  badge: string
  title: string
  intro: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  metrics?: MetricCard[]
  asideTitle?: string
  asideBody?: string
}) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <Badge
            variant="outline"
            className="border-foreground/12 bg-foreground/4 text-muted-foreground"
          >
            {badge}
          </Badge>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.25rem,10.5vw,5rem)] leading-[0.95] font-medium tracking-[-0.055em] text-foreground sm:text-6xl sm:leading-[0.92] sm:tracking-[-0.06em] lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primary ? (
              <Button
                asChild
                size="lg"
                className="min-h-11 w-full border border-primary/60 bg-primary px-4 text-primary-foreground hover:bg-primary/85 sm:w-auto"
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
                className="min-h-11 w-full border-foreground/12 bg-foreground/4 px-4 text-foreground hover:bg-foreground/8 hover:text-foreground sm:w-auto"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {metrics?.length ? (
        <div className="mt-10 grid gap-px border border-foreground/8 bg-foreground/8 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card
              key={`${metric.value}-${metric.label}`}
              className="border-0 bg-background/90 text-foreground transition-colors duration-200 hover:bg-card"
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
