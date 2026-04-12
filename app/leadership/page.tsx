import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { LeadershipPageView } from "@/components/pages/leadership/LeadershipPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Leadership",
  description:
    "Core eight-person team from the investor pack: CEO, CTO, intensivist product owner, AI lead, engineering, interoperability, compliance and growth, and implementation.",
  path: "/leadership",
  keywords: ["healthcare experts", "critical care specialists", "PlasmIT team"],
})

export default function LeadershipPage() {
  return <LeadershipPageView />
}
