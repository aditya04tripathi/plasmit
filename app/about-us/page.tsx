import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "About PlasmIT: healthcare visionaries, global footprint, vision and mission, leadership, and contact.",
  path: "/about-us",
  keywords: ["about plasmit", "vision and mission", "healthcare leadership"],
})

export default function AboutUsPage() {
  redirect("/vision-and-values")
}
