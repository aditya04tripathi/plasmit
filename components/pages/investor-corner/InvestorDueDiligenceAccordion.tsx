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
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="competitive">
        <AccordionTrigger className="text-sm font-medium text-foreground">
          Competitive comparison
        </AccordionTrigger>
        <AccordionContent>
          <SimpleTable
            srTitle="Tele-ICU and PiMed comparison"
            columns={investorCompetitiveColumns}
            rows={investorCompetitiveRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="financials">
        <AccordionTrigger className="text-sm font-medium text-foreground">
          Five-year financial model (USD)
        </AccordionTrigger>
        <AccordionContent>
          <SimpleTable
            caption="Bed counts, revenue, and profitability themes. K = $1,000 · M = $1,000,000."
            columns={investorFinancialColumns}
            rows={investorFinancialRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="fund">
        <AccordionTrigger className="text-sm font-medium text-foreground">
          Fund allocation and year-one commitments
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <SimpleTable
            caption="Allocation of funds"
            columns={investorFundAllocationColumns}
            rows={investorFundAllocationRows}
          />
          <Card className="border border-foreground/8 bg-card/72 text-card-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium tracking-[-0.02em]">
                Year-one milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                {investorFundAsk.y1Milestones.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="gtm">
        <AccordionTrigger className="text-sm font-medium text-foreground">
          Post-funding Year 1 GTM
        </AccordionTrigger>
        <AccordionContent>
          <SimpleTable
            caption="Post-funding Year 1 milestones"
            columns={investorGtmColumns}
            rows={investorGtmRows}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="roadmap">
        <AccordionTrigger className="text-sm font-medium text-foreground">
          Product phases (Life → Nirvana)
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
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
