import type { FeatureCard } from "@/lib/site-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { featureGridIcons } from "@/components/marketing/sections/feature-grid-icons"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

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
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = featureGridIcons[item.icon]
          return (
            <Card
              key={item.title}
              className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card active:translate-y-0"
            >
              <CardHeader className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center border border-foreground/10 bg-foreground/5 text-primary">
                  <Icon className="size-4" />
                </div>
                <CardTitle className="text-xl leading-tight font-medium tracking-[-0.03em] text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                {item.body}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
