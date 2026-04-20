import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { getAllBlogPosts } from "@/lib/blog"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { PageHero } from "@/components/marketing/sections/PageHero"
import { Section } from "@/components/marketing/sections/Section"
import { CTASection } from "@/components/marketing/sections/CTASection"
import { BlogListView } from "@/components/blog/blog-list-view"
import { BlogFilters } from "@/components/blog/blog-filters"
import { BlogPagination } from "@/components/blog/blog-pagination"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Blog",
    description:
      "Insights, technical deep-dives, and healthcare perspectives from the PlasmIT team.",
    path: "/blog",
  })
}

const PAGE_SIZE = 9

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {
  const { q, page = "1" } = await searchParams
  let posts = await getAllBlogPosts()

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
        badge="Insights & perspectives"
        title="Thinking at the edge of critical care."
        intro="Technical deep-dives, healthcare perspectives, and clinical insight from the PlasmIT team — written for clinicians, engineers, and anyone curious about the future of the ICU."
      />

      <Section
        tone="muted"
        density="compact"
        className="marketing-index-drift"
      >
        <BlogFilters activeCategory="all" defaultSearch={q} />
      </Section>

      <Section className="marketing-index-list">
        <BlogListView posts={paginatedPosts} />
        {totalPages > 1 && (
          <div className="mt-10 border-t border-border pt-8">
            <BlogPagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        )}
      </Section>

      <CTASection
        badge="PiMed"
        title="See PiMed in action."
        description="Smart ICU on Mobile™ — continuous monitoring, intelligent alerts, and connected care on mobile, 24×7."
        primary={{ label: "Explore PiMed", href: "/pimed" }}
        secondary={{ label: "Start a conversation", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
