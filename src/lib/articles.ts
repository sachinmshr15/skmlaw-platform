// ============================================================================
// SKM Laws & Associates
// Enterprise Knowledge Repository
// Build 023.9
// ============================================================================

import type { Article } from "@/types/article";

import { getArticleFiles } from "./content-index";
import { getArticleFromFile } from "./article";

let articleCache: Article[] | null = null;

/**
 * Build-time cache
 */
async function loadArticles(): Promise<Article[]> {
  if (articleCache) {
    return articleCache;
  }

  const files = await getArticleFiles();

  const articles = await Promise.all(
    files.map((file) => getArticleFromFile(file)),
  );

  articleCache = articles
    .filter((article) => article.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );

  return articleCache;
}

export async function getAllArticles(): Promise<Article[]> {
  return loadArticles();
}

export async function getArticleBySlug(
  slug: string,
): Promise<Article | null> {
  const articles = await loadArticles();

  return (
    articles.find(
      (article) => article.slug === slug,
    ) ?? null
  );
}

export async function getFeaturedArticles(): Promise<Article[]> {
  const articles = await loadArticles();

  return articles.filter(
    (article) => article.featured,
  );
}

export async function getLatestArticles(
  limit = 10,
): Promise<Article[]> {
  const articles = await loadArticles();

  return articles.slice(0, limit);
}

export async function getArticlesByCategory(
  category: string,
): Promise<Article[]> {
  const articles = await loadArticles();

  return articles.filter(
    (article) => article.category === category,
  );
}

export async function getRelatedArticles(
  slug: string,
  limit = 3,
): Promise<Article[]> {
  const current =
    await getArticleBySlug(slug);

  if (!current) {
    return [];
  }

  return (await loadArticles())
    .filter(
      (article) =>
        article.slug !== slug &&
        (
          article.category === current.category ||
          article.tags.some((tag) =>
            current.tags.includes(tag),
          )
        ),
    )
    .slice(0, limit);
}