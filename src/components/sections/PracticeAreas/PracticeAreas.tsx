import Container from "@/components/ui/Container";

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
            right-0
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-500/5
            blur-[150px]
          "
        />

      </div>

      <Container className="relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-6
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-yellow-400
            "
          >
            Practice Areas
          </span>

          <h2 className="mt-8 font-heading text-5xl font-bold text-white lg:text-6xl">
            Professional Legal
            <span className="text-yellow-400"> &amp; Tax Services</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400">
            Comprehensive legal, taxation and business advisory services
            tailored for individuals, professionals, startups and
            enterprises across India.
          </p>

        </div>

        {/* Grid */}

        <PracticeGrid />

        {/* Bottom CTA */}

        <PracticeCTA />

      </Container>
    </section>
  );
}