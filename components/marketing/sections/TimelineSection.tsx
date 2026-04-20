import type { TimelineStep } from "@/lib/site-content"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

export function TimelineSection({
  badge,
  title,
  description,
  steps,
  density = "default",
}: {
  badge?: string
  title: string
  description?: string
  steps: TimelineStep[]
  density?: "default" | "compact" | "airy"
}) {
  return (
    <Section tone="muted" density={density}>
      <SectionHeading badge={badge} title={title} description={description} />
      <ol className="mt-5 grid gap-2.5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[auto,1fr] gap-3 border-l-2 border-border/70 bg-background/55 p-4 transition-colors duration-200 hover:border-primary hover:bg-background/70"
          >
            <div className="inline-flex h-7 w-7 items-center justify-center border border-foreground/20 text-xs font-medium text-foreground">
              {index + 1}
            </div>
            <div>
              <h3 className="leading-snug font-medium tracking-[-0.03em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[65ch] leading-body text-muted-foreground">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
