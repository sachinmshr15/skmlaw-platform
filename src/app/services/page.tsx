import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import PageHero from "@/components/shared/PageHero";

import { ServicesSection } from "@/components/sections/Services";

import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="Professional Services"
          title="Legal & Tax"
          highlight="Solutions"
          description="Comprehensive legal, taxation and business advisory services for individuals, professionals, startups and enterprises across India."
          breadcrumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
            },
          ]}
        />

        <ServicesSection
          featuredOnly={false}
          showButton={false}
        />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}