"use client"

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
import { motion, useReducedMotion } from "framer-motion"

import type {
  FeatureCard,
  LeadershipProfile,
  MetricCard,
  StoryCard,
  TimelineStep,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

const revealTransition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

function HoverCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function WebflowSection({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "soft"
}) {
  return (
    <section
      className={cn(
        tone === "soft" ? "border-y border-sky-950/8 bg-sky-50/60" : "",
        "relative"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  )
}

export function WebflowSectionHeading({
  badge,
  title,
  description,
}: {
  badge?: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="max-w-3xl">
      {badge ? (
        <Badge
          variant="outline"
          className="border-sky-200 bg-white text-sky-700"
        >
          {badge}
        </Badge>
      ) : null}
      <h2 className="mt-5 text-4xl leading-[0.96] font-medium tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

export function WebflowHero({
  badge,
  title,
  intro,
  metrics,
  primary,
  secondary,
}: {
  badge: string
  title: string
  intro: string
  metrics?: MetricCard[]
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <WebflowSection>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal>
          <Badge
            variant="outline"
            className="border-sky-200 bg-white text-sky-700"
          >
            {badge}
          </Badge>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[0.9] font-medium tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primary ? (
              <Button
                asChild
                size="lg"
                className="border border-sky-500 bg-sky-500 px-4 text-white hover:bg-sky-600"
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
                className="border-sky-200 bg-white px-4 text-slate-950 hover:bg-sky-50"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
        <div className="grid gap-4">
          {(metrics ?? []).map((metric, index) => (
            <Reveal
              key={`${metric.value}-${metric.label}`}
              delay={0.08 * (index + 1)}
            >
              <HoverCard>
                <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_20px_60px_rgba(30,64,175,0.08)] transition-colors duration-300 hover:border-sky-300/80">
                  <CardHeader>
                    <CardTitle className="text-4xl leading-none font-medium tracking-[-0.05em] text-slate-950 sm:text-5xl">
                      {metric.value}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-slate-600">
                      {metric.label}
                    </CardDescription>
                  </CardHeader>
                  {metric.note ? (
                    <CardContent className="pt-0 text-xs text-slate-500">
                      {metric.note}
                    </CardContent>
                  ) : null}
                </Card>
              </HoverCard>
            </Reveal>
          ))}
        </div>
      </div>
    </WebflowSection>
  )
}

export function WebflowStory({
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
    <WebflowSection tone="soft">
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={0.06 * index}>
            <HoverCard>
              <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
                <CardHeader>
                  <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-600">
                  {item.body}
                </CardContent>
              </Card>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </WebflowSection>
  )
}

export function WebflowFeatures({
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
    <WebflowSection>
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = featureIcons[item.icon]
          return (
            <Reveal key={item.title} delay={0.05 * index}>
              <HoverCard>
                <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-none border border-sky-200 bg-sky-50 text-sky-700">
                      <Icon className="size-4" />
                    </div>
                    <CardTitle className="text-xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-slate-600">
                    {item.body}
                  </CardContent>
                </Card>
              </HoverCard>
            </Reveal>
          )
        })}
      </div>
    </WebflowSection>
  )
}

export function WebflowTimeline({
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
    <WebflowSection tone="soft">
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <div className="mt-10 grid gap-4">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={0.06 * index}>
            <HoverCard>
              <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
                <CardHeader>
                  <p className="text-xs tracking-[0.28em] text-sky-700 uppercase">
                    Stage {index + 1}
                  </p>
                  <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-600">
                  {step.body}
                </CardContent>
              </Card>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </WebflowSection>
  )
}

export function WebflowSplit({
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
    <WebflowSection>
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {[
          { title: leftTitle, body: leftBody },
          { title: rightTitle, body: rightBody },
        ].map((item, index) => (
          <Reveal key={item.title} delay={0.08 * index}>
            <HoverCard>
              <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
                <CardHeader>
                  <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-600">
                  {item.body}
                </CardContent>
              </Card>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </WebflowSection>
  )
}

export function WebflowLeadership({
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
    <WebflowSection>
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {profiles.map((profile, index) => (
          <Reveal key={profile.name} delay={0.04 * index}>
            <HoverCard>
              <Card className="h-full rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="w-fit border-sky-200 bg-sky-50 text-sky-700"
                  >
                    {profile.role}
                  </Badge>
                  <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                    {profile.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-600">
                  {profile.summary}
                </CardContent>
              </Card>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </WebflowSection>
  )
}

export function WebflowFAQ({
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
    <WebflowSection tone="soft">
      <WebflowSectionHeading
        badge={badge}
        title={title}
        description={description}
      />
      <Reveal className="mt-10">
        <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)]">
          <CardContent className="pt-4">
            <Accordion type="single" collapsible>
              {items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-sm font-medium text-slate-950">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </Reveal>
    </WebflowSection>
  )
}

export function WebflowCTA({
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
    <WebflowSection>
      <Reveal>
        <Card className="rounded-none border border-sky-950/10 bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
          <CardHeader>
            {badge ? (
              <Badge
                variant="outline"
                className="border-sky-200 bg-white text-sky-700"
              >
                {badge}
              </Badge>
            ) : null}
            <CardTitle className="max-w-3xl text-4xl leading-tight font-medium tracking-[-0.05em] text-slate-950 sm:text-5xl">
              {title}
            </CardTitle>
            <CardDescription className="max-w-2xl text-sm leading-7 text-slate-600">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="border border-sky-500 bg-sky-500 px-4 text-white hover:bg-sky-600"
            >
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white px-4 text-slate-950 hover:bg-sky-50"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </Reveal>
    </WebflowSection>
  )
}

export function WebflowOfficeCards({
  items,
}: {
  items: readonly { label: string; address: string; note: string }[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => (
        <Reveal key={item.label} delay={0.05 * index}>
          <HoverCard>
            <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-sky-300/80">
              <CardHeader>
                <Badge
                  variant="outline"
                  className="w-fit border-sky-200 bg-sky-50 text-sky-700"
                >
                  {item.label}
                </Badge>
                <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                  {item.address}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-slate-600">
                {item.note}
              </CardContent>
            </Card>
          </HoverCard>
        </Reveal>
      ))}
    </div>
  )
}
