import type { TimelineStep } from "@/lib/site-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      <div className="mt-5 grid gap-2.5">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card active:translate-y-0"
          >
            <CardHeader className="flex flex-col justify-center gap-1.5">
              <div className="mb-2 tracking-[0.28em] text-muted-foreground uppercase">
                Step {index + 1}
              </div>
              <CardTitle className="leading-snug font-medium tracking-[-0.03em] text-foreground">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="leading-6 text-muted-foreground">
              {step.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
