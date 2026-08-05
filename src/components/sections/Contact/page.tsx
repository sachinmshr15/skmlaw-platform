import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import PageHero from "@/components/shared/PageHero";

import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";

import { ContactGrid } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>

        <PageHero
          badge="Contact Us"
          title="Let's Start"
          highlight="A Conversation"
          description="Whether you need legal representation, taxation advisory or business compliance assistance, our team is ready to help."
          breadcrumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Contact",
            },
          ]}
        />

        <ContactGrid />

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}