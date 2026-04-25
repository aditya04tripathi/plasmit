import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { InvestorCornerPageView } from "@/components/pages/investor-corner/InvestorCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Investor Corner",
  description:
    "PlasmIT investor narrative: critical-care opportunity, market momentum, platform scalability, and early validation from hospital partners.",
  path: "/investor-corner",
  keywords: ["healthcare investment", "critical care market", "AI healthtech"],
})

export default function InvestorCornerPage() {
  return <InvestorCornerPageView />
}
