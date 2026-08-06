import { notFound } from "next/navigation";

import ArticleContent from "@/components/knowledge/ArticleContent";
import ArticleHero from "@/components/knowledge/ArticleHero";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/lib/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
  };
}

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <ArticleHero article={article} />

      <ArticleContent
        content={article.content}
      />
    </main>
  );
}