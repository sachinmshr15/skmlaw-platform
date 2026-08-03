import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import type { KnowledgeArticle } from "@/content/knowledge";

type Props = {
  article: KnowledgeArticle;
};

export default function KnowledgeCard({ article }: Props) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0B1625]
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-500/30
        hover:shadow-[0_30px_70px_rgba(212,175,55,.15)]
      "
    >
      {/* Gold Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Header */}

      <div className="flex items-center justify-between">

        <span
          className="
            rounded-full
            border
            border-yellow-500/20
            bg-yellow-500/10
            px-4
            py-1.5
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-yellow-400
          "
        >
          {article.category}
        </span>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock3 size={15} />
          {article.readTime}
        </div>

      </div>

      {/* Title */}

      <h3
        className="
          mt-7
          font-heading
          text-2xl
          font-bold
          leading-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-yellow-300
        "
      >
        {article.title}
      </h3>

      {/* Excerpt */}

      <p className="mt-6 flex-1 leading-8 text-gray-400">
        {article.excerpt}
      </p>

      {/* Footer */}

      <Link
        href={article.slug}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-yellow-400
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Read Article

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>

      {/* Featured */}

      {article.featured && (
        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-yellow-400
            px-3
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-black
          "
        >
          Featured
        </div>
      )}
    </article>
  );
}