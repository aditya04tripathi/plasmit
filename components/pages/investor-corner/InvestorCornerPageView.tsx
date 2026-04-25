import {
  investorHighlights,
  investorMetrics,
  investorPageIntro,
  investorProblemSolution,
  investorSnapshotProse,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureBento,
  PageHero,
  Section,
  SplitShowcase,
} from "@/components/marketing/sections"

export function InvestorCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Investors"
        title="Invest in the future of critical care"
        intro={investorPageIntro}
        primary={{ label: "Schedule a meeting", href: "/contact-us" }}
        secondary={{ label: "View our vision", href: "/vision-and-values" }}
        metrics={investorMetrics}
      />

      <Section tone="muted" density="compact">
        <p className="leading-body max-w-[65ch] text-muted-foreground">
          {investorSnapshotProse}
        </p>
      </Section>

      <FeatureBento
        badge="The opportunity"
        title="Problem, momentum, and platform edge"
        description="From ICU fragmentation to AI-first mobile intervention, with early validation and partner traction."
        items={investorHighlights}
      />

      <SplitShowcase
        badge="Investment thesis"
        title="Why now and how this scales"
        leftTitle={investorProblemSolution.problemTitle}
        leftBody={investorProblemSolution.problemBody}
        rightTitle={investorProblemSolution.solutionTitle}
        rightBody={investorProblemSolution.solutionBody}
      />
    </SiteFrame>
  )
}
