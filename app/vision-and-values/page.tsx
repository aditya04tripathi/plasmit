import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { VisionAndValuesPageView } from "@/components/pages/vision-and-values/VisionAndValuesPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Vision and Values",
  description:
    "Official vision and mission from the investor pack, plus six operating principles for connected, contextual, compliant care delivery.",
  path: "/vision-and-values",
})

export default function VisionAndValuesPage() {
  return <VisionAndValuesPageView />
}
