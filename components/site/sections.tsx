import Link from "next/link"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cpu,
  Globe2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waypoints,
  Workflow,
} from "lucide-react"

import type {
  FeatureCard,
  LeadershipProfile,
  MetricCard,
  StoryCard,
  TimelineStep,
} from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const featureIcons = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  sparkles: Sparkles,
  workflow: Workflow,
  waypoints: Waypoints,
  "shield-check": ShieldCheck,
  building: Building2,
  stethoscope: Stethoscope,
  briefcase: BriefcaseBusiness,
  globe: Globe2,
  "badge-check": BadgeCheck,
  "arrow-right": ArrowRight,
  cpu: Cpu,
} satisfies Record<FeatureCard["icon"], LucideIcon>

function sectionClassName(tone: "default" | "muted" = "default") {
  return tone === "muted"
    ? "border-y border-white/8 bg-slate-950/92"
    : "border-t border-white/8 bg-slate-950"
}

export function Section({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "muted"
}) {
  return (
    <section className={sectionClassName(tone)}>
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  actions,
}: {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  actions?: ReactNode
}) {
  const isCenter = align === "center"

  return (
    <div
      className={
        isCenter
          ? "mx-auto flex max-w-3xl flex-col items-center text-center"
          : "flex max-w-3xl flex-col"
      }
    >
      {badge ? (
        <Badge variant="outline" className="mb-5 w-fit border-white/12 bg-white/4 text-slate-300">
          {badge}
        </Badge>
      ) : null}
      <h2 className="text-4xl leading-[0.95] font-medium tracking-[-0.05em] text-slate-50 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
      {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  )
}

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
          <Badge variant="outline" className="border-white/12 bg-white/4 text-slate-300">{badge}</Badge>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[0.92] font-medium tracking-[-0.06em] text-slate-50 sm:text-6xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primary ? (
              <Button
                asChild
                size="lg"
                className="border border-emerald-300/60 bg-emerald-300 px-4 text-slate-950 hover:bg-emerald-200"
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
                className="border-white/12 bg-white/4 px-4 text-slate-100 hover:bg-white/8 hover:text-white"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>

        <Card className="border border-white/8 bg-slate-900/72 text-slate-50">
          <CardHeader>
            <CardTitle className="text-xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
              {asideTitle ?? "Story-led clinical platform narrative"}
            </CardTitle>
            <CardDescription className="text-sm leading-7 text-slate-400">
              {asideBody ??
                "Framer/Webflow-style sequencing with Vercel/OpenAI restraint: fewer gimmicks, stronger hierarchy, and a more premium proof posture."}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {metrics?.length ? (
        <div className="mt-10 grid gap-px border border-white/8 bg-white/8 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card
              key={`${metric.value}-${metric.label}`}
              className="border-0 bg-slate-950/90 text-slate-50 transition-colors duration-200 hover:bg-slate-900"
            >
              <CardHeader>
                <CardTitle className="text-4xl leading-none font-medium tracking-[-0.05em] text-slate-50 sm:text-5xl">
                  {metric.value}
                </CardTitle>
                <CardDescription className="text-sm leading-6 text-slate-400">
                  {metric.label}
                </CardDescription>
              </CardHeader>
              {metric.note ? (
                <CardContent className="pt-0 text-xs text-slate-500">
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

export function StoryGrid({
  badge,
  title,
  description,
  items,
}: {
  badge?: string
  title: string
  description?: string
  items: StoryCard[]
}) {
  return (
    <Section tone="muted">
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
            <CardHeader>
              <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-slate-400">
              {item.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function FeatureGrid({
  badge,
  title,
  description,
  items,
}: {
  badge?: string
  title: string
  description?: string
  items: FeatureCard[]
}) {
  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = featureIcons[item.icon]
          return (
            <Card key={item.title} className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/18 hover:bg-slate-900/84">
              <CardHeader>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-emerald-200">
                  <Icon className="size-4" />
                </div>
                <CardTitle className="text-xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-slate-400">
                {item.body}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export function TimelineSection({
  badge,
  title,
  description,
  steps,
}: {
  badge?: string
  title: string
  description?: string
  steps: TimelineStep[]
}) {
  return (
    <Section tone="muted">
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-4">
        {steps.map((step, index) => (
          <Card key={step.title} className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
            <CardHeader>
              <div className="mb-3 text-xs tracking-[0.28em] text-slate-500 uppercase">
                Step {index + 1}
              </div>
              <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-slate-400">
              {step.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function SplitShowcase({
  badge,
  title,
  description,
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}: {
  badge?: string
  title: string
  description?: string
  leftTitle: string
  leftBody: string
  rightTitle: string
  rightBody: string
}) {
  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
          <CardHeader>
            <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
              {leftTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-slate-400">
            {leftBody}
          </CardContent>
        </Card>
        <Card className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
          <CardHeader>
            <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
              {rightTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-slate-400">
            {rightBody}
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export function LeadershipGrid({
  badge,
  title,
  description,
  profiles,
}: {
  badge?: string
  title: string
  description?: string
  profiles: LeadershipProfile[]
}) {
  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {profiles.map((profile) => (
          <Card key={profile.name} className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
            <CardHeader>
              <Badge variant="outline" className="w-fit border-white/12 bg-white/4 text-slate-300">
                {profile.role}
              </Badge>
              <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                {profile.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-slate-400">
              {profile.summary}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function FAQSection({
  badge,
  title,
  description,
  items,
}: {
  badge?: string
  title: string
  description?: string
  items: readonly { question: string; answer: string }[]
}) {
  return (
    <Section tone="muted">
      <SectionHeading badge={badge} title={title} description={description} />
      <Card className="mt-10 border border-white/8 bg-slate-900/72 text-slate-50">
        <CardContent className="pt-4">
          <Accordion type="single" collapsible>
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-sm font-medium text-slate-100">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </Section>
  )
}

export function OfficeCards({
  items,
}: {
  items: readonly { label: string; address: string; note: string }[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <Card key={item.label} className="border border-white/8 bg-slate-900/72 text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/14 hover:bg-slate-900/84">
          <CardHeader>
            <Badge variant="outline" className="w-fit border-white/12 bg-white/4 text-slate-300">
              {item.label}
            </Badge>
            <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
              {item.address}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-slate-400">
            {item.note}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function CTASection({
  badge,
  title,
  description,
  primary,
  secondary,
}: {
  badge?: string
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <Section>
      <Card className="border border-white/8 bg-slate-900/72 text-slate-50 shadow-[0_18px_70px_rgba(2,6,23,0.22)]">
        <CardHeader>
          {badge ? <Badge variant="outline" className="border-white/12 bg-white/4 text-slate-300">{badge}</Badge> : null}
          <CardTitle className="max-w-3xl text-4xl leading-tight font-medium tracking-[-0.05em] text-slate-50 sm:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="max-w-2xl text-sm leading-7 text-slate-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="border border-emerald-300/60 bg-emerald-300 px-4 text-slate-950 hover:bg-emerald-200"
          >
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          {secondary ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/12 bg-white/4 px-4 text-slate-100 hover:bg-white/8 hover:text-white"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </Section>
  )
}

export function PairList({
  title,
  items,
}: {
  title: string
  items: { title: string; body: string }[]
}) {
  return (
    <Card className="border border-white/8 bg-slate-900/72 text-slate-50">
      <CardHeader>
        <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={item.title}>
            {index > 0 ? <Separator className="mb-4" /> : null}
            <p className="text-sm font-medium text-slate-100">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {item.body}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
