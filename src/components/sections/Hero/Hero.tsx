import Container from "@/components/ui/Container";
import HeroGlow from "./components/HeroGlow";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-visible bg-[#081321] text-white">
      <HeroGlow />

      <Container className="relative grid min-h-[900px] items-end gap-16 pt-36 pb-20 lg:min-h-[960px] lg:grid-cols-[1.05fr_0.95fr]">

        {/* Left */}
        <HeroContent />

        {/* Right */}
        <div className="relative z-10 flex items-end justify-center lg:justify-end">
          <HeroImage />
        </div>

      </Container>
    </section>
  );
}