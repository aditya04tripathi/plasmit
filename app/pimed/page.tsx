import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { PiMedPageView } from "@/components/pages/pimed/PiMedPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "PiMed Product Overview",
  description:
    "Explore PiMed as a connected, mobile-first digital care platform built for continuous monitoring, collaboration, and intervention across care settings.",
  path: "/pimed",
})

export default function PiMedPage() {
  return <PiMedPageView />
}
