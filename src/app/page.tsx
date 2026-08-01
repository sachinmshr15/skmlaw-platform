import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import TrustBar from "@/components/sections/TrustBar/TrustBar";
import WhyChoose from "@/components/sections/WhyChoose/WhyChoose";
import PracticeAreas from "@/components/sections/PracticeAreas/PracticeAreas";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChoose />
      <PracticeAreas />
    </>
  );
}