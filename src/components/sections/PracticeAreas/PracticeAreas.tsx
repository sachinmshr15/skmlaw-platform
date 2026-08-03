import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import PracticeGrid from "./PracticeGrid";
import PracticeCTA from "./PracticeCTA";

export default function PracticeAreas() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#081321] py-28 lg:py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-yellow-500/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-500/5
            blur-[150px]
          "
        />

      </div>

      <Container className="relative z-10">

        <SectionHeading
          badge="Practice Areas"
          title="Professional Legal"
          highlight="& Tax Services"
          description="Comprehensive legal, taxation and business advisory services tailored for individuals, professionals, startups and enterprises across India."
        />

        <PracticeGrid />

        <PracticeCTA />

      </Container>

    </section>
  );
}