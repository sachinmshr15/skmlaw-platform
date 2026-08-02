import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founder } from "@/content/founder";

export default function AboutCTA() {
  return (
    <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center">

      {/* Primary */}

      <Link
        href="/about"
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-yellow-400
          via-yellow-500
          to-yellow-600
          px-8
          py-4
          font-semibold
          text-black
          shadow-[0_18px_45px_rgba(234,179,8,.28)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_25px_60px_rgba(234,179,8,.4)]
        "
      >
        {founder.cta}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary */}

      <Link
        href="/contact"
        className="
          inline-flex
          items-center
          justify-center
          rounded-2xl
          border
          border-yellow-500/30
          px-8
          py-4
          font-semibold
          text-yellow-400
          transition-all
          duration-300
          hover:bg-yellow-500/10
          hover:border-yellow-400
        "
      >
        Schedule Consultation
      </Link>

    </div>
  );
}