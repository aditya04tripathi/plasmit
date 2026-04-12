import {
  investorDisclaimer,
  investorEssentials,
  investorFundAsk,
  investorHighlights,
  investorMetrics,
  investorProblemSolution,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  Section,
  SectionHeading,
  SplitShowcase,
  StoryGrid,
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
        title="Seed round for connected critical care infrastructure."
        intro="PlasmIT Pty Ltd is raising to finish MMF, prove pilot ROI, and scale PiMed (QLMed): India-first, utilisation-based SaaS."
        primary={{ label: "Investor enquiry", href: "/contact-us" }}
        secondary={{ label: "Leadership", href: "/leadership" }}
        metrics={investorMetrics}
      />

      <FeatureGrid
        badge="Thesis"
        title="Why the opportunity is differentiated."
        description="Traction, product maturity, mobility, and economics versus legacy tele-ICU."
        items={investorHighlights}
      />

      <StoryGrid
        badge="Snapshot"
        title="Market and momentum."
        description="Scale first, then proof."
        items={[...investorEssentials]}
      />

      <SplitShowcase
        badge="Problem / solution"
        title="Visibility gaps versus a mobile intervention surface."
        leftTitle={investorProblemSolution.problemTitle}
        leftBody={investorProblemSolution.problemBody}
        rightTitle={investorProblemSolution.solutionTitle}
        rightBody={investorProblemSolution.solutionBody}
      />

      <Section tone="muted">
        <SectionHeading
          badge="Fund ask"
          title={`${investorFundAsk.round} terms (summary).`}
          description="Indicative only; confirm with the company. Not an offer to sell securities."
        />
        <div className="mt-6 grid gap-px border border-foreground/8 bg-foreground/8 md:grid-cols-2">
          <Card className="border-0 bg-background/90 text-foreground">
            <CardHeader>
              <CardTitle className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                {investorFundAsk.amountUsd}
              </CardTitle>
              <CardDescription>Raise target</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 bg-background/90 text-foreground">
            <CardHeader>
              <CardTitle className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                {investorFundAsk.valuationUsd}
              </CardTitle>
              <CardDescription>
                Indicative valuation · {investorFundAsk.instrument}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          badge="Due diligence"
          title="Tables and roadmap."
          description="Open a section for full figures. Same data as the investor pack extraction."
        />
        <Card className="mt-6 border border-foreground/8 bg-card/72 text-card-foreground">
          <CardContent className="px-4 pt-2 pb-4 sm:px-6">
            <InvestorDueDiligenceAccordion />
          </CardContent>
        </Card>
        <p className="mt-4 max-w-3xl text-xs leading-5 text-muted-foreground">
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
