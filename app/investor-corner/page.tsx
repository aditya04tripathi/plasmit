import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { InvestorCornerPageView } from "@/components/pages/investor-corner/InvestorCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Investor Corner",
  description:
    "Investor-facing overview of PlasmIT and PiMed, covering commercialization timing, market opportunity, hospital traction, and platform thesis.",
  path: "/investor-corner",
})

export default function InvestorCornerPage() {
  return <InvestorCornerPageView />
}
