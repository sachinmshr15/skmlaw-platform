import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import ContactHighlights from "./ContactHighlights";

import { siteConfig } from "@/config/site";

export default function ContactCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-32
        text-white
      "
    >
      {/* ==========================================================
         Background Glow
      ========================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.06]
          blur-[190px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.04]
          blur-[220px]
        "
      />

      {/* Decorative Circle */}

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
          border-[var(--border-secondary)]
        "
      />

      <Container>

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            rounded-[36px]
            border
            border-[var(--border-primary)]
            bg-[rgba(11,22,37,.72)]
            p-12
            shadow-[var(--shadow-luxury)]
            backdrop-blur-xl
            lg:p-16
          "
        >

          <SectionHeading
            badge="Free Initial Consultation"
            title="Ready To Discuss"
            highlight="Your Legal Matter?"
            description="Whether you need assistance with Income Tax, GST, Appeals, Business Registration or Legal Advisory, SKM Laws & Associates provides practical, transparent and professional guidance tailored to your requirements."
          />

          <ContactHighlights />

          {/* ==========================================================
             CTA Buttons
          ========================================================== */}

          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >

            <Button
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Chat on WhatsApp
            </Button>

            <Button
              href="/contact"
              variant="outline"
              size="lg"
            >
              Book Consultation
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}