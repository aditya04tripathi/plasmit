import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HospitalCornerPageView } from "@/components/pages/hospital-corner/HospitalCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital Corner",
  description:
    "PiMed SmartICU on Mobile creates measurable value for hospitals, medical staff, and care recipients through continuous connected ICU workflows.",
  path: "/hospital-corner",
  keywords: [
    "hospital ROI",
    "ICU efficiency",
    "ICU mortality reduction",
    "healthcare SaaS pricing",
    "patient outcomes",
  ],
})

export default function HospitalCornerPage() {
  return <HospitalCornerPageView />
}
