import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { buildPageMetadata } from "@/lib/page-metadata"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { CTASection } from "@/components/marketing/sections/CTASection"
import { BlogPostView } from "@/components/blog/blog-post-view"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <SiteFrame>
      <BlogPostView post={post} />
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
