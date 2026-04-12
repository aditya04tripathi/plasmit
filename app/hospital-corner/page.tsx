import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HospitalCornerPageView } from "@/components/pages/hospital-corner/HospitalCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital Corner",
  description:
    "Hospital ROI narrative for PiMed (QLMed): save lives, efficiency, brand, utilisation-based SaaS, pilot-first deployment, and value drivers from investor materials.",
  path: "/hospital-corner",
  keywords: ["hospital ROI", "ICU efficiency", "healthcare SaaS pricing", "patient outcomes"],
})

export default function HospitalCornerPage() {
  return <HospitalCornerPageView />
}
