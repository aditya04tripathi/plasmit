import type { FeatureCard } from "@/lib/site-content"
import { featureGridIcons } from "@/components/marketing/sections/feature-grid-icons"
import { ScrollDrivenFeatureRail } from "@/components/marketing/sections/ScrollDrivenFeatureRail"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

export function FeatureGrid({
  badge,
  title,
  description,
  items,
  layout = "grid",
}: {
  badge?: string
  title: string
  description?: string
  items: FeatureCard[]
  layout?: "grid" | "scroll-driven-horizontal"
}) {
  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      {layout === "scroll-driven-horizontal" ? (
        <ScrollDrivenFeatureRail items={items} />
      ) : (
        <ul className="mt-5 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = featureGridIcons[item.icon]
            return (
              <li
                key={item.title}
                className="group border-l-2 border-border/70 bg-muted/20 p-4 transition-colors duration-200 hover:border-primary hover:bg-muted/35"
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-foreground/10 bg-foreground/5 text-primary transition-colors duration-200 group-hover:bg-primary/12">
                    <Icon className="size-4" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="leading-snug font-medium tracking-[-0.025em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </Section>
  )
}
