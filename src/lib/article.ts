// ============================================================================
// SKM Laws & Associates
// Enterprise Article Reader
// Build 023.4 - Production
// ============================================================================

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

import type { Article } from "@/types/article";

const ARTICLES_DIRECTORY = path.join(
  process.cwd(),
  "src",
  "content",
  "articles",
);

export async function getArticleFromFile(
  filePath: string,
): Promise<Article> {
  const absolutePath = path.join(
    ARTICLES_DIRECTORY,
    filePath,
  );

  const fileContents = await fs.readFile(
    absolutePath,
    "utf8",
  );

  const { data, content } = matter(fileContents);

  // ---------------------------------------------------------------------------
  // Required Frontmatter Validation
  // ---------------------------------------------------------------------------

  if (!data.slug) {
    throw new Error(`${filePath}: missing "slug"`);
  }

  if (!data.title) {
    throw new Error(`${filePath}: missing "title"`);
  }

  if (!data.category) {
    throw new Error(`${filePath}: missing "category"`);
  }

  if (!data.excerpt) {
    throw new Error(`${filePath}: missing "excerpt"`);
  }

  const stats = readingTime(content);

  return {
    slug: data.slug,

    title: data.title,

    excerpt: data.excerpt,

    contentFile: filePath,

    // ⭐ NEW
    content,

    category: data.category,

    tags: data.tags ?? [],

    featured: data.featured ?? false,

    published: data.published ?? true,

    publishedAt: data.publishedAt
  ? new Date(data.publishedAt).toISOString()
  : new Date().toISOString(),

    updatedAt: data.updatedAt
  ? new Date(data.updatedAt).toISOString()
  : undefined,

    readingTime: Math.max(
      1,
      Math.ceil(stats.minutes),
    ),

    coverImage:
      data.coverImage ??
      "/images/articles/default-cover.jpg",

    coverImageAlt:
      data.coverImageAlt ??
      data.title,

    author: {
      name:
        data.author ??
        "Adv. Sachin Mishra",

      designation:
        data.designation ??
        "Advocate & Tax Consultant",

      image:
        data.authorImage ??
        "/images/team/sachin-mishra.jpg",
    },

    seo: {
      title:
        data.seoTitle ??
        data.title,

      description:
        data.seoDescription ??
        data.excerpt,

      keywords:
        data.seoKeywords ?? [],
    },
  };
}