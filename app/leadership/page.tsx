import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { LeadershipPageView } from "@/components/pages/leadership/LeadershipPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Leadership",
  description:
    "Meet the PlasmIT leadership team spanning clinical care, interoperability, data, research, product, and healthcare technology delivery.",
  path: "/leadership",
})

export default function LeadershipPage() {
  return <LeadershipPageView />
}
