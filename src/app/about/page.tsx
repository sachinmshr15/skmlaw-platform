import AboutHero from "@/components/sections/About/AboutHero";
import Biography from "@/components/sections/About/Biography";
import MissionVision from "@/components/sections/About/MissionVision";
import PracticeGrid from "@/components/sections/About/PracticeGrid";
import WhyTrust from "@/components/sections/About/WhyTrust";
import AboutCTA from "@/components/sections/About/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Biography />
      <MissionVision />
      <PracticeGrid />
      <WhyTrust />
      <AboutCTA />
    </>
  );
}