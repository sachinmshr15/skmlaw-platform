import type { Article } from "@/types/article";

type ArticleHeroProps = {
  article: Article;
};

export default function ArticleHero({
  article,
}: ArticleHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-yellow-500/10
        bg-gradient-to-br
        from-[#0B1525]
        via-[#0F1E33]
        to-[#0B1525]
        px-10
        py-14
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* Category */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-yellow-500/30
          bg-yellow-500/10
          px-4
          py-1.5
          text-sm
          font-semibold
          tracking-wide
          text-yellow-400
        "
      >
        {article.category}
      </span>

      {/* Title */}

      <h1
        className="
          mt-6
          max-w-5xl
          font-serif
          text-5xl
          font-bold
          leading-tight
          text-white
          lg:text-6xl
        "
      >
        {article.title}
      </h1>

      {/* Excerpt */}

      <p
        className="
          mt-6
          max-w-3xl
          text-xl
          leading-9
          text-slate-300
        "
      >
        {article.excerpt}
      </p>

      {/* Meta */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          items-center
          gap-6
          text-sm
          text-slate-400
        "
      >
        <span>
          👤 {article.author.name}
        </span>

        <span>
          ⏱ {article.readingTime} min read
        </span>

        <span>
          📅{" "}
          {new Date(
            article.publishedAt,
          ).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </section>
  );
}