import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PracticeCTA() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6 text-center">

      <p className="max-w-2xl text-lg leading-8 text-gray-400">
        Looking for professional legal, taxation or business advisory
        services? Explore all our practice areas or schedule a
        consultation with our experts.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">

        {/* Primary Button */}

        <Link
          href="/services"
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
            px-8
            py-4
            font-semibold
            text-black
            shadow-[0_18px_45px_rgba(234,179,8,.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_25px_60px_rgba(234,179,8,.40)]
          "
        >
          View All Services

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        {/* Secondary Button */}

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
            hover:border-yellow-400
            hover:bg-yellow-500/10
          "
        >
          Schedule Consultation
        </Link>

      </div>

    </div>
  );
}