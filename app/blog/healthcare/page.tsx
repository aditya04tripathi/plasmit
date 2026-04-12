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
    title: "Healthcare Blog",
    description:
      "Insights on critical care delivery, patient outcomes, and the future of hospital infrastructure.",
    path: "/blog/healthcare",
  })
}

const PAGE_SIZE = 9

export default async function HealthcareBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {
  const { q, page = "1" } = await searchParams
  let posts = await getBlogPostsByCategory("healthcare")

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
        badge="Healthcare"
        title="Critical care, clinical outcomes, and hospital economics."
        intro="Perspectives on ICU delivery, interoperability, and the real-world challenges facing hospitals building connected care infrastructure."
      />

      <Section tone="muted" density="compact">
        <BlogFilters activeCategory="healthcare" defaultSearch={q} />
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
        badge="Hospital corner"
        title="How PiMed works for hospitals."
        description="Understand the clinical and economic case for a mobile-first, utilisation-based ICU monitoring platform."
        primary={{ label: "Hospital corner", href: "/hospital-corner" }}
        secondary={{ label: "Start a conversation", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
