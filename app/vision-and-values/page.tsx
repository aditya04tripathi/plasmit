import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { VisionAndValuesPageView } from "@/components/pages/vision-and-values/VisionAndValuesPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Vision and Values",
  description:
    "Read PlasmIT’s mission, care philosophy, and the six operating principles derived from the company’s public 6C framework narrative.",
  path: "/vision-and-values",
})

export default function VisionAndValuesPage() {
  return <VisionAndValuesPageView />
}
