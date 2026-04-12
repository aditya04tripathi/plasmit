import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HospitalCornerPageView } from "@/components/pages/hospital-corner/HospitalCornerPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital Corner",
  description:
    "Review the hospital-facing case for PiMed, including ICU outcome claims, workflow improvements, resource optimization, and revenue expansion potential.",
  path: "/hospital-corner",
})

export default function HospitalCornerPage() {
  return <HospitalCornerPageView />
}
