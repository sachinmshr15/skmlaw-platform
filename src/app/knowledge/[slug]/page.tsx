import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getArticleBySlug } from "@/lib/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");

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
    <main className="mx-auto max-w-5xl px-6 py-20">

      <p className="text-yellow-400">
        {article.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold text-white">
        {article.title}
      </h1>

      <p className="mt-6 text-xl text-gray-400">
        {article.excerpt}
      </p>

      <div className="mt-6 flex gap-6 text-sm text-gray-500">

        <span>{article.author.name}</span>

        <span>{article.readingTime} min read</span>

        <span>
          {new Date(article.publishedAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>

      </div>

      <article
        className="
          prose
          prose-invert
          mt-16
          max-w-none
        "
      >
        <ReactMarkdown>
          {article.content}
        </ReactMarkdown>
      </article>

    </main>
  );
}