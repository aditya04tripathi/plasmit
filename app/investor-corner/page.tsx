import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { InvestorCornerPageView } from "@/components/pages/investor-corner/InvestorCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Investor Corner",
  description:
    "PlasmIT Pty Ltd seed narrative: thesis, market snapshot, fund summary, and expandable diligence tables (financials, GTM, roadmap).",
  path: "/investor-corner",
})

export default function InvestorCornerPage() {
  return <InvestorCornerPageView />
}
