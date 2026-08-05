import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";

import ContactInfo from "@/components/shared/ContactInfo";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";

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

        <section className="bg-[#07111d] py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
                  Contact Information
                </span>

                <h2 className="mt-6 font-heading text-5xl font-bold text-white">
                  We're Ready To Assist You
                </h2>

                <p className="mt-8 max-w-xl leading-9 text-gray-400">
                  Schedule a consultation for Income Tax, GST,
                  litigation, appeals, registrations and business
                  advisory services. We assist clients across India
                  through both online and offline consultation.
                </p>

                <div className="mt-12">
                  <ContactInfo showSocial />
                </div>

              </div>

              {/* Right */}

              <div className="rounded-3xl border border-yellow-500/10 bg-[#0B1625] p-10">

                <h3 className="font-heading text-3xl font-semibold text-white">
                  Send Us A Message
                </h3>

                <p className="mt-4 text-gray-400">
                  Contact form integration will be added in the
                  upcoming build.
                </p>

                <div className="mt-10 space-y-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                  />

                  <textarea
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                  />

                  <button
                    className="
                      w-full
                      rounded-xl
                      bg-yellow-400
                      py-4
                      font-semibold
                      text-black
                      transition
                      hover:bg-yellow-300
                    "
                  >
                    Send Message
                  </button>

                </div>

              </div>

            </div>
          </Container>
        </section>

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}