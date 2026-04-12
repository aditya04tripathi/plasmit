import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: "technical" | "healthcare"
  keywords?: string[]
  content: string
  readingTime: string
}

const CONTENT_PATH = path.join(process.cwd(), "content/blog")

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, " ")
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getBlogPostsByCategory(category: "technical" | "healthcare"): Promise<BlogPost[]> {
  const categoryPath = path.join(CONTENT_PATH, category)

  try {
    const files = await fs.readdir(categoryPath)
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(categoryPath, file)
        const fileContents = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug: file.replace(".mdx", ""),
          title: data.title as string,
          description: data.description as string,
          date: data.date as string,
          category: data.category as "technical" | "healthcare",
          keywords: (data.keywords as string[] | undefined) ?? [],
          content,
          readingTime: calculateReadingTime(content),
        } satisfies BlogPost
      }),
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error fetching blog posts for category ${category}:`, error)
    return []
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const categories: ("technical" | "healthcare")[] = ["technical", "healthcare"]
  const allPosts = await Promise.all(categories.map((category) => getBlogPostsByCategory(category)))

  return allPosts.flat().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const categories: ("technical" | "healthcare")[] = ["technical", "healthcare"]

  for (const category of categories) {
    try {
      const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`)
      const fileContents = await fs.readFile(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        category: data.category as "technical" | "healthcare",
        keywords: (data.keywords as string[] | undefined) ?? [],
        content,
        readingTime: calculateReadingTime(content),
      } satisfies BlogPost
    } catch {
      // Continue to next category if not found
    }
  }

  return null
}
