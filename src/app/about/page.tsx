import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import PageHero from "@/components/shared/PageHero";

import Biography from "@/components/sections/About/Biography";
import FounderTimeline from "@/components/sections/About/FounderTimeline";
import Qualifications from "@/components/sections/About/Qualifications";
import ProfessionalCredentials from "@/components/sections/About/ProfessionalCredentials";
import MissionVision from "@/components/sections/About/MissionVision";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        <PageHero
          badge="About SKM Laws And Associates"

          title="Professional Legal"

          highlight="Excellence"

          description="
          SKM Laws And Associates provides strategic legal,
          taxation and business advisory services with a
          commitment to integrity, professional ethics and
          practical solutions for individuals, businesses
          and startups across India.
          "

          breadcrumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
            },
          ]}
        />

        <Biography />

        <FounderTimeline />
        <Qualifications />
        <MissionVision />
        <ProfessionalCredentials />
        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}