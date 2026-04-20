import type { FeatureCard } from "@/lib/site-content"
import { featureGridIcons } from "@/components/marketing/sections/feature-grid-icons"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"
import { Reveal } from "@/components/motion/Reveal"

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
      <Reveal>
        <SectionHeading badge={badge} title={title} description={description} />
      </Reveal>
      <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = featureGridIcons[item.icon]
          const isFeatured = index === 0
          return (
            <li
              key={item.title}
              className={
                isFeatured
                  ? "border-t border-border/70 pt-4 md:col-span-2"
                  : "border-t border-border/70 pt-4"
              }
            >
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-foreground/10 text-primary">
                  <Icon className="size-4" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="leading-snug font-medium tracking-[-0.025em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-body text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
