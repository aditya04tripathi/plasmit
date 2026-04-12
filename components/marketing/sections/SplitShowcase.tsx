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
    <Card className="border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84">
      <CardHeader className="flex flex-col justify-center gap-2">
        <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
          {leftTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-7 text-muted-foreground">
        {leftBody}
      </CardContent>
    </Card>
  )

  const rightCard = (
    <Card className="border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84">
      <CardHeader className="flex flex-col justify-center gap-2">
        <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
          {rightTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-7 text-muted-foreground">
        {rightBody}
      </CardContent>
    </Card>
  )

  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {leftLink ? (
          <Link href={leftLink} className="block">
            {leftCard}
          </Link>
        ) : (
          leftCard
        )}
        {rightLink ? (
          <Link href={rightLink} className="block">
            {rightCard}
          </Link>
        ) : (
          rightCard
        )}
      </div>
    </Section>
  )
}
