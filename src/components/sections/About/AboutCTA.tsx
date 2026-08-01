import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function AboutCTA() {
  return (
    <section className="bg-[#07111d] py-24 text-white">
      <Container>

        <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#0d1b2a] via-[#10243a] to-[#081321] p-10 shadow-2xl lg:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-yellow-400">
              Consultation
            </span>

            <h2 className="mt-8 font-heading text-5xl font-bold leading-tight lg:text-6xl">

              Need Professional
              <span className="block text-yellow-400">
                Legal & Tax Guidance?
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

              Whether you need assistance with Income Tax,
              GST, business registrations, appeals or legal
              advisory, SKM Laws & Associates is committed
              to providing practical and professional guidance.

            </p>

            {/* Services */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              {[
                "Income Tax",
                "GST",
                "Appeals",
                "Business Advisory",
                "Tax Planning",
                "Registrations",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-yellow-500/20 bg-[#081321] px-5 py-2 text-sm text-yellow-300"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="tel:+917007756899"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                <Phone size={20} />
                Schedule Consultation
              </Link>

              <Link
                href="https://wa.me/917007756899"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                <MessageCircle size={20} />
                WhatsApp
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-yellow-500"
              >
                Contact Page
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}