"use client"

import {
  investorCompetitiveColumns,
  investorCompetitiveRows,
  investorFinancialColumns,
  investorFinancialRows,
  investorFundAllocationColumns,
  investorFundAllocationRows,
  investorFundAsk,
  investorGtmColumns,
  investorGtmRows,
  productRoadmapPhases,
} from "@/lib/site-content"
import { SimpleTable } from "@/components/marketing/sections/SimpleTable"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InvestorDueDiligenceAccordion() {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      aria-label="Investor diligence tables and roadmap"
    >
      <AccordionItem value="competitive">
        <AccordionTrigger className="font-medium text-foreground">
          Competitive comparison
        </AccordionTrigger>
        <AccordionContent className="max-w-none">
          <SimpleTable
            srTitle="Tele-ICU and PiMed comparison"
            columns={investorCompetitiveColumns}
            rows={investorCompetitiveRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="financials">
        <AccordionTrigger className="font-medium text-foreground">
          Five-year financial model (USD)
        </AccordionTrigger>
        <AccordionContent className="max-w-none">
          <SimpleTable
            caption="Bed counts, revenue, and profitability themes. K = $1,000 · M = $1,000,000."
            columns={investorFinancialColumns}
            rows={investorFinancialRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="fund">
        <AccordionTrigger className="font-medium text-foreground">
          Fund allocation and year-one commitments
        </AccordionTrigger>
        <AccordionContent className="max-w-none space-y-4">
          <SimpleTable
            caption="Allocation of funds"
            columns={investorFundAllocationColumns}
            rows={investorFundAllocationRows}
          />
          <Card className="border border-border bg-card/90 text-card-foreground shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="font-medium tracking-[-0.02em]">
                Year-one milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="max-w-[65ch] list-disc space-y-1.5 ps-5 leading-body text-muted-foreground">
                {investorFundAsk.y1Milestones.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="gtm">
        <AccordionTrigger className="font-medium text-foreground">
          Post-funding Year 1 GTM
        </AccordionTrigger>
        <AccordionContent className="max-w-none">
          <SimpleTable
            caption="Post-funding Year 1 milestones"
            columns={investorGtmColumns}
            rows={investorGtmRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="roadmap">
        <AccordionTrigger className="font-medium text-foreground">
          Product phases (Life → Nirvana)
        </AccordionTrigger>
        <AccordionContent>
          <ul className="max-w-[65ch] space-y-3 leading-body text-muted-foreground">
            {productRoadmapPhases.map((p) => (
              <li key={p.title}>
                <span className="font-medium text-foreground">{p.title}.</span>{" "}
                {p.body}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
