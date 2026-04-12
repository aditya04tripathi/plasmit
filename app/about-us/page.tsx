import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { AboutUsPageView } from "@/components/pages/about-us/AboutUsPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "About PlasmIT",
  description:
    "Learn about PlasmIT’s origin, healthcare systems focus, Australia-plus-India footprint, and the company narrative behind PiMed.",
  path: "/about-us",
})

export default function AboutUsPage() {
  return <AboutUsPageView />
}
