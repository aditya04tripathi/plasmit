import Link from "next/link"

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
      <Card className="shadow-marketing-md border border-foreground/8 bg-card/72 text-card-foreground">
        <CardHeader className="flex flex-col justify-center gap-2">
          {badge ? (
            <Badge
              variant="outline"
              className="border-foreground/12 bg-foreground/4 text-muted-foreground"
            >
              {badge}
            </Badge>
          ) : null}
          <CardTitle className="max-w-3xl text-4xl leading-tight font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="border border-primary/60 bg-primary px-4 text-primary-foreground hover:bg-primary/85"
          >
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          {secondary ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/12 bg-foreground/4 px-4 text-foreground hover:bg-foreground/8 hover:text-foreground"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </Section>
  )
}
