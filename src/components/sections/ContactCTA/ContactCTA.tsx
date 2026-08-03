import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactHighlights from "./ContactHighlights";
import ContactButtons from "./ContactButtons";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#081321] py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[460px] w-[460px] rounded-full bg-yellow-500/5 blur-[190px]" />

      {/* Decorative Ring */}

      <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/5" />

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <SectionHeading
            badge="Free Initial Consultation"
            title="Ready To Discuss"
            highlight="Your Legal Matter?"
            description="Whether you need assistance with Income Tax, GST, Appeals, Business Registration or Legal Advisory, SKM Laws & Associates provides practical, transparent and professional guidance tailored to your requirements."
          />

          <ContactHighlights />

          <ContactButtons />

        </div>

      </Container>

    </section>
  );
}