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
      <Card className="shadow-marketing-md border border-border bg-card/85 text-card-foreground">
        <CardHeader className="flex flex-col justify-center gap-2">
          {badge ? (
            <Badge
              variant="outline"
              className="border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
            >
              {badge}
            </Badge>
          ) : null}
          <CardTitle className="max-w-3xl leading-[1.04] font-medium tracking-[-0.04em] text-balance text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="max-w-2xl leading-7 text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="min-h-11 border border-primary/60 bg-primary px-4 text-primary-foreground hover:bg-primary/85 active:bg-primary/90"
          >
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          {secondary ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 border-border bg-muted/30 px-4 text-foreground hover:bg-muted/50 hover:text-foreground active:bg-muted/40"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </Section>
  )
}
