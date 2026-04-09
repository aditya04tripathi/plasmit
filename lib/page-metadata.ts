import type { Metadata } from "next"

import { siteMeta } from "@/lib/site-content"

type PageMetadataInput = {
  title: string
  description: string
  path: string
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const urlPath = path === "/" ? "/" : path.replace(/\/+$/, "")

  return {
    title: `${title} | ${siteMeta.name}`,
    description,
    alternates: {
      canonical: urlPath,
    },
    openGraph: {
      title: `${title} | ${siteMeta.name}`,
      description,
      url: urlPath,
      siteName: siteMeta.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteMeta.name}`,
      description,
    },
  }
}
