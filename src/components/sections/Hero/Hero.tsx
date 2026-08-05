import Container from "@/components/ui/Container";

import HeroGlow from "./components/HeroGlow";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        text-white
      "
    >
      {/* Background Effects */}

      <HeroGlow />

      {/* Decorative Glow */}

      <div
        className="
          absolute
          -left-32
          top-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.06]
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.05]
          blur-[220px]
        "
      />

      <Container
        className="
          relative
          z-10
          grid
          min-h-[920px]
          items-end
          gap-20
          pt-40
          pb-24
          lg:grid-cols-[1.05fr_.95fr]
        "
      >
        {/* =======================================================
            LEFT
        ======================================================= */}

        <HeroContent />

        {/* =======================================================
            RIGHT
        ======================================================= */}

        <div
          className="
            relative
            flex
            items-end
            justify-center
            lg:justify-end
          "
        >
          <HeroImage />
        </div>

      </Container>
    </section>
  );
}