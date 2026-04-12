import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { AboutUsPageView } from "@/components/pages/about-us/AboutUsPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "About PlasmIT",
  description:
    "PlasmIT Pty Ltd: Australia-headquartered critical care health-tech, PiMed (QLMed) Smart ICU on Mobile™, vision and mission from the investor pack.",
  path: "/about-us",
})

export default function AboutUsPage() {
  return <AboutUsPageView />
}
