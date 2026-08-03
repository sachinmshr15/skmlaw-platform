import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import KnowledgeGrid from "./KnowledgeGrid";

export default function KnowledgeCentre() {
  return (
    <section className="relative overflow-hidden bg-[#081321] py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[380px] w-[380px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-10 h-[420px] w-[420px] rounded-full bg-yellow-500/5 blur-[160px]" />

      <Container>

        <SectionHeading
          badge="Knowledge Centre"
          title="Legal Insights"
          highlight="That Keep You Ahead"
          description="Stay informed with practical articles, compliance updates, taxation guidance, legal developments and business insights prepared by SKM Laws & Associates."
        />

        {/* Articles */}

        <KnowledgeGrid />

        {/* Bottom CTA */}

        <div className="mt-20 flex justify-center">

          <Link
            href="/knowledge"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-yellow-500/20
              bg-gradient-to-r
              from-yellow-400
              to-yellow-600
              px-8
              py-4
              font-semibold
              text-black
              shadow-lg
              shadow-yellow-500/20
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explore Knowledge Centre

            <ArrowRight size={20} />

          </Link>

        </div>

      </Container>

    </section>
  );
}