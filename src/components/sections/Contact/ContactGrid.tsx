import Container from "@/components/ui/Container";

import ContactInfo from "@/components/shared/ContactInfo";

import ContactForm from "./ContactForm";
import MapCard from "./MapCard";
import OfficeHours from "./OfficeHours";
import QuickActions from "./QuickActions";

export default function ContactGrid() {
  return (
    <section className="bg-[#07111d] py-28">

      <Container>

        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
              Contact Information
            </span>

            <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-white">
              Let's Discuss
              <br />
              Your Requirements
            </h2>

            <p className="mt-8 max-w-xl leading-9 text-gray-400">
              Whether you need assistance with Income Tax,
              GST, Appeals, Registrations or Legal Advisory,
              our team is ready to provide professional
              guidance tailored to your requirements.
            </p>

            <div className="mt-14">
              <ContactInfo showSocial />
            </div>

            <OfficeHours />

            <QuickActions />

          </div>

          {/* Right */}

          <div>

            <div id="contact-form">

              <ContactForm />

            </div>

            <MapCard />

          </div>

        </div>

      </Container>

    </section>
  );
}