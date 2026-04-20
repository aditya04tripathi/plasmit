import type { StoryCard } from "@/lib/site-content"
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
      <div className="mt-5 grid gap-2.5 lg:grid-cols-2 lg:gap-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="border-l-2 border-border/70 bg-background/55 p-4 transition-colors duration-200 hover:border-primary hover:bg-background/70"
          >
            <h3 className="leading-snug font-medium tracking-[-0.03em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[65ch] leading-body text-muted-foreground">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
