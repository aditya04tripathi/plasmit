import type { StoryCard } from "@/lib/site-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

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
      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-5">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card active:translate-y-0"
          >
            <CardHeader className="flex flex-col justify-center gap-2">
              <CardTitle className="leading-snug font-medium tracking-[-0.03em] text-foreground">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              {item.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
