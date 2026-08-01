import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Globe2,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section className="bg-[#081321] py-24">

      <Container>

        <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#0d1b2a] to-[#11253b] p-10 shadow-2xl lg:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Let's Connect
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white lg:text-6xl">

              Ready to Discuss

              <span className="block text-yellow-400">

                Your Tax or Legal Matter?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

              Whether you need assistance with Income Tax,
              GST, appeals, registrations or business advisory,
              we are here to provide practical and professional
              guidance tailored to your requirements.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="tel:+917007756899"
                className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Schedule Consultation
              </Link>

              <Link
                href="https://wa.me/917007756899"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                <MessageCircle size={20} />
                WhatsApp
              </Link>

              <Link
                href="tel:+917007756899"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-yellow-500"
              >
                <Phone size={20} />
                Call Now
              </Link>

            </div>

            {/* Trust */}

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="flex items-center justify-center gap-3 text-gray-300">

                <ShieldCheck className="text-yellow-400" />

                Transparent Advice

              </div>

              <div className="flex items-center justify-center gap-3 text-gray-300">

                <Clock3 className="text-yellow-400" />

                Prompt Response

              </div>

              <div className="flex items-center justify-center gap-3 text-gray-300">

                <Globe2 className="text-yellow-400" />

                PAN India Consultation

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}