import {
  investorAtGlance,
  investorDisclaimer,
  investorFundAsk,
  investorHighlights,
  investorMetrics,
  investorPageIntro,
  investorProblemSolution,
  investorSnapshotProse,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  Section,
  SectionHeading,
  SplitShowcase,
} from "@/components/marketing/sections"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { InvestorDueDiligenceAccordion } from "@/components/pages/investor-corner/InvestorDueDiligenceAccordion"

export function InvestorCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Investors"
        title="Seed round: PiMed and connected critical care."
        intro={investorPageIntro}
        primary={{ label: "Investor enquiry", href: "/contact-us" }}
        secondary={{ label: "Leadership", href: "/leadership" }}
        metrics={investorMetrics}
      />

      <Section tone="muted" density="compact">
        <p className="max-w-[65ch] leading-7 text-muted-foreground">
          {investorSnapshotProse}
        </p>
      </Section>

      <FeatureGrid
        badge="Thesis"
        title="Why this opportunity is different."
        description="Traction, product maturity, mobility, and economics versus legacy tele-ICU."
        items={investorHighlights}
      />

      <SplitShowcase
        badge="Problem / solution"
        title="Visibility gaps versus a mobile intervention surface."
        leftTitle={investorProblemSolution.problemTitle}
        leftBody={investorProblemSolution.problemBody}
        rightTitle={investorProblemSolution.solutionTitle}
        rightBody={investorProblemSolution.solutionBody}
      />

      <Section tone="muted" density="compact">
        <div className="rounded-none border border-primary/30 bg-primary/4 p-6 shadow-sm sm:p-8">
          <SectionHeading
            badge="Fund ask"
            title={`${investorFundAsk.round} terms (summary).`}
            description="Indicative only; confirm with the company. Not an offer to sell securities."
          />
          <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-2">
            <Card className="border-0 bg-card text-foreground">
              <CardHeader>
                <CardTitle className="metric-value font-medium tracking-[-0.04em]">
                  {investorFundAsk.amountUsd}
                </CardTitle>
                <CardDescription>Raise target</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-card text-foreground">
              <CardHeader>
                <CardTitle className="metric-value font-medium tracking-[-0.04em]">
                  {investorFundAsk.valuationUsd}
                </CardTitle>
                <CardDescription>
                  Indicative valuation · {investorFundAsk.instrument}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="border-b border-border pb-10">
          <p className="font-medium tracking-wide text-muted-foreground uppercase">
            At a glance
          </p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {investorAtGlance.map((row) => (
              <div key={row.label} className="min-w-0">
                <dt className="font-medium tracking-wide text-muted-foreground uppercase">
                  {row.label}
                </dt>
                <dd className="mt-2 leading-6 text-pretty text-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12">
          <SectionHeading
            badge="Due diligence"
            title="Tables and roadmap."
            description="Open a section for full figures. Same data as the investor pack extraction."
          />
        </div>
        <Card className="mt-6 border border-border bg-card/90 text-card-foreground shadow-sm">
          <CardContent className="px-4 pt-2 pb-4 sm:px-6">
            <InvestorDueDiligenceAccordion />
          </CardContent>
        </Card>
        <p className="mt-4 max-w-[65ch] leading-5 text-muted-foreground">
          {investorDisclaimer}
        </p>
      </Section>

      <CTASection
        badge="Next"
        title="Request the data room."
        description="Full diligence, clinical appendix, and introductions via contact."
        primary={{ label: "Contact", href: "/contact-us" }}
        secondary={{ label: "Leadership", href: "/leadership" }}
      />
    </SiteFrame>
  )
}
