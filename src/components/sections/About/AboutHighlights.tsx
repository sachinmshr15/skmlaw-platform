import { CheckCircle2 } from "lucide-react";
import { founder } from "@/content/founder";

export default function AboutHighlights() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">

      {founder.highlights.map((item) => (
        <div
          key={item}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-yellow-500/10
            bg-white/[0.03]
            p-5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-yellow-400/40
            hover:bg-yellow-500/[0.06]
            hover:shadow-[0_20px_50px_rgba(234,179,8,.10)]
          "
        >
          {/* Gold Glow */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
              bg-gradient-to-br
              from-yellow-500/5
              to-transparent
            "
          />

          <div className="relative flex items-center gap-4">

            {/* Icon */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-yellow-500/10
                transition-all
                duration-300
                group-hover:bg-yellow-500/20
              "
            >
              <CheckCircle2
                size={20}
                className="
                  text-yellow-400
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />
            </div>

            {/* Text */}

            <span className="text-base font-medium text-gray-200">
              {item}
            </span>

          </div>
        </div>
      ))}

    </div>
  );
}