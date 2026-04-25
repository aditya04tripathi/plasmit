import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { VisionAndValuesPageView } from "@/components/pages/vision-and-values/VisionAndValuesPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Vision and Values",
  description:
    "PlasmIT vision, mission, and values: innovation, integrity, compassion, and six operating principles for connected critical care delivery.",
  path: "/vision-and-values",
  keywords: ["healthcare values", "connected care principles", "patient-centric care"],
})

export default function VisionAndValuesPage() {
  return <VisionAndValuesPageView />
}
