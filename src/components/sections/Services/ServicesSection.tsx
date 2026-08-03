import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ServicesGrid from "./ServicesGrid";

type ServicesSectionProps = {
  featuredOnly?: boolean;
  showButton?: boolean;
};

export default function ServicesSection({
  featuredOnly = false,
  showButton = true,
}: ServicesSectionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#081321]
        py-28
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-yellow-500/8 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-500/5 blur-[140px]" />

      <Container>

        <SectionHeading
          badge="Professional Services"
          title="Legal & Tax"
          highlight="Solutions"
          description="Comprehensive legal, taxation and business advisory services designed for individuals, professionals, startups and businesses."
        />

        <ServicesGrid featuredOnly={featuredOnly} />

        {showButton && (
          <div className="mt-16 flex justify-center">

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-yellow-400
                to-yellow-500
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              View All Services

              <ArrowRight size={18} />

            </Link>

          </div>
        )}

      </Container>
    </section>
  );
}