import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { getBlogPostsByCategory } from "@/lib/blog"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { PageHero } from "@/components/marketing/sections/PageHero"
import { Section } from "@/components/marketing/sections/Section"
import { CTASection } from "@/components/marketing/sections/CTASection"
import { BlogListView } from "@/components/blog/blog-list-view"
import { BlogFilters } from "@/components/blog/blog-filters"
import { BlogPagination } from "@/components/blog/blog-pagination"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Technical Blog",
    description:
      "Engineering deep-dives into AI, edge computing, and health-tech architecture at PlasmIT.",
    path: "/blog/technical",
  })
}

const PAGE_SIZE = 9

export default async function TechnicalBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {
  const { q, page = "1" } = await searchParams
  let posts = await getBlogPostsByCategory("technical")

  if (q) {
    const query = q.toLowerCase()
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.keywords?.some((k) => k.toLowerCase().includes(query)),
    )
  }

  const currentPage = Math.max(1, parseInt(page, 10))
  const totalPages = Math.ceil(posts.length / PAGE_SIZE)
  const paginatedPosts = posts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <SiteFrame>
      <PageHero
        badge="Technical"
        title="Engineering AI, edge, and interoperability for critical care."
        intro="Deep-dives into the architecture, algorithms, and trade-offs behind PiMed — written for engineers and technically curious clinicians."
      />

      <Section tone="muted" density="compact">
        <BlogFilters activeCategory="technical" defaultSearch={q} />
      </Section>

      <Section>
        <BlogListView posts={paginatedPosts} />
        {totalPages > 1 && (
          <div className="mt-10 border-t border-border pt-8">
            <BlogPagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        )}
      </Section>

      <CTASection
        badge="PiMed platform"
        title="Explore the PiMed architecture."
        description="From edge ingestion to mobile delivery — see how PiMed brings continuous ICU intelligence to mobile."
        primary={{ label: "Explore PiMed", href: "/pimed" }}
        secondary={{ label: "Start a conversation", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
