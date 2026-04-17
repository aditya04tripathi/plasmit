import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description: "Company pages: vision and values, leadership, and contact.",
  path: "/about-us",
  keywords: ["about us", "vision and values", "leadership"],
})

export default function AboutUsPage() {
  redirect("/vision-and-values")
}
