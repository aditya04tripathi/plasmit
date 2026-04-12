import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"

export function FAQSection({
  badge,
  title,
  description,
  items,
}: {
  badge?: string
  title: string
  description?: string
  items: readonly { question: string; answer: string }[]
}) {
  return (
    <Section tone="muted">
      <SectionHeading badge={badge} title={title} description={description} />
      <Card className="mt-6 border border-border bg-card/80 text-card-foreground shadow-sm">
        <CardContent className="pt-4">
          <Accordion type="single" collapsible>
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-sm font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </Section>
  )
}
