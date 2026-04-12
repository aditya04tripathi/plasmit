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
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84"
          >
            <CardHeader className="flex flex-col justify-center gap-2">
              <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              {item.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
