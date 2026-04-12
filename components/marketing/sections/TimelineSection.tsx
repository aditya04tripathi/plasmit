import type { TimelineStep } from "@/lib/site-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

export function TimelineSection({
  badge,
  title,
  description,
  steps,
}: {
  badge?: string
  title: string
  description?: string
  steps: TimelineStep[]
}) {
  return (
    <Section tone="muted">
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-10 grid gap-4">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            className="border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84"
          >
            <CardHeader className="flex flex-col justify-center gap-2">
              <div className="mb-3 text-xs tracking-[0.28em] text-muted-foreground uppercase">
                Step {index + 1}
              </div>
              <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              {step.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
