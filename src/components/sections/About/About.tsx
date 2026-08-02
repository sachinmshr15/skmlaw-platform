import Container from "@/components/ui/Container";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07111d] py-28 lg:py-36"
    >
      {/* ================= Background Effects ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left Gold Glow */}

        <div
          className="
            absolute
            -left-44
            top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-yellow-500/10
            blur-[170px]
          "
        />

        {/* Right Blue Glow */}

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

        {/* Center Soft Light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/5
            blur-[130px]
          "
        />

      </div>

      {/* ================= Content ================= */}

      <Container className="relative z-10">

        <div
          className="
            grid
            items-center
            gap-24
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >

          <AboutImage />

          <AboutContent />

        </div>

      </Container>
    </section>
  );
}