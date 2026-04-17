import {
  investorHighlights,
  investorMetrics,
  investorPageIntro,
  investorProblemSolution,
  investorSnapshotProse,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureGrid,
  PageHero,
  Section,
  SplitShowcase,
} from "@/components/marketing/sections"

export function InvestorCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Investors"
        title="PlasmIT invites visionary and growth investors."
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
        badge="Where are we"
        title="Product status and market traction"
        description="Current readiness, validation, and traction signals from hospitals."
        items={investorHighlights}
      />

      <SplitShowcase
        badge="Investment thesis"
        title="What your investments can do"
        leftTitle={investorProblemSolution.problemTitle}
        leftBody={investorProblemSolution.problemBody}
        rightTitle={investorProblemSolution.solutionTitle}
        rightBody={investorProblemSolution.solutionBody}
      />
    </SiteFrame>
  )
}
