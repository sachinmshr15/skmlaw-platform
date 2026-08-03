import Container from "@/components/ui/Container";

import PageHeroContent from "./PageHeroContent";
import type { PageHeroProps } from "./types";

export default function PageHero(props: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#081321] py-32 text-white lg:py-40">

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-40
          top-16
          h-[520px]
          w-[520px]
          rounded-full
          bg-yellow-500/10
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[460px]
          w-[460px]
          rounded-full
          bg-sky-500/5
          blur-[170px]
        "
      />

      {/* Decorative Ring */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[720px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-yellow-500/5
        "
      />

      <Container>

        <PageHeroContent {...props} />

      </Container>

    </section>
  );
}