import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

export function SplitShowcase({
  badge,
  title,
  description,
  leftTitle,
  leftLink,
  leftBody,
  rightTitle,
  rightBody,
  rightLink,
}: {
  badge?: string
  title: string
  description?: string
  leftTitle: string
  leftLink?: string
  leftBody: string
  rightTitle: string
  rightLink?: string
  rightBody: string
}) {
  const leftCard = (
    <Card className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card active:translate-y-0">
      <CardHeader className="flex flex-col justify-center gap-2">
        <CardTitle className="leading-snug font-medium tracking-[-0.03em] text-foreground">
          {leftTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-7 text-muted-foreground">
        {leftBody}
      </CardContent>
    </Card>
  )

  const rightCard = (
    <Card className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card active:translate-y-0">
      <CardHeader className="flex flex-col justify-center gap-2">
        <CardTitle className="leading-snug font-medium tracking-[-0.03em] text-foreground">
          {rightTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-7 text-muted-foreground">
        {rightBody}
      </CardContent>
    </Card>
  )

  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {leftLink ? (
          <Link
            href={leftLink}
            className="block rounded-none outline-none focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {leftCard}
          </Link>
        ) : (
          leftCard
        )}
        {rightLink ? (
          <Link
            href={rightLink}
            className="block rounded-none outline-none focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {rightCard}
          </Link>
        ) : (
          rightCard
        )}
      </div>
    </Section>
  )
}
