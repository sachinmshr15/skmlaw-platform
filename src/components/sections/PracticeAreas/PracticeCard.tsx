import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { iconMap } from "@/lib/icon-map";
import type { Service } from "@/types/site";

type PracticeCardProps = {
  service: Service;
};

export default function PracticeCard({
  service,
}: PracticeCardProps) {
  const Icon = iconMap[service.icon] ?? FileText;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0d1b2a]
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-400/40
        hover:shadow-[0_30px_70px_rgba(234,179,8,.10)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-yellow-500/5
          via-transparent
          to-transparent
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-yellow-500/10
          transition-all
          duration-300
          group-hover:bg-yellow-500
          group-hover:rotate-3
        "
      >
        <Icon
          size={34}
          className="
            text-yellow-400
            transition-all
            duration-300
            group-hover:text-black
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          relative
          mt-8
          text-2xl
          font-bold
          text-white
        "
      >
        {service.title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          mt-5
          text-base
          leading-8
          text-gray-400
        "
      >
        {service.description}
      </p>

      {/* CTA */}

      <Link
        href={`/services/${service.slug}`}
        className="
          group/link
          relative
          mt-8
          inline-flex
          items-center
          gap-3
          font-semibold
          text-yellow-400
          transition-colors
          duration-300
          hover:text-yellow-300
        "
      >
        Explore Service

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover/link:translate-x-1
          "
        />
      </Link>
    </article>
  );
}