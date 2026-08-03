import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import ServiceRibbon from "@/components/sections/ServiceRibbon/ServiceRibbon";
import TrustBar from "@/components/sections/TrustBar/TrustBar";
import About from "@/components/sections/About/About";
import PracticeAreas from "@/components/sections/PracticeAreas/PracticeAreas";
import WhyChoose from "@/components/sections/WhyChoose/WhyChoose";
import KnowledgeCentre from "@/components/sections/KnowledgeCentre/KnowledgeCentre";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <ServiceRibbon />

      <TrustBar />

      <About />

      <PracticeAreas />

      <WhyChoose />

      <KnowledgeCentre />

      <ContactCTA />

      <Footer />
    </>
  );
}