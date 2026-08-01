import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#081321] py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-[140px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-yellow-400">

              About SKM Laws

            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-tight lg:text-7xl">

              Professional

              <span className="block text-yellow-400">

                Legal Excellence

              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">

              SKM Laws & Associates provides strategic legal,
              taxation and business advisory services focused
              on practical solutions, professional ethics and
              long-term client relationships.

            </p>

            {/* Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-xl border border-yellow-500/20 bg-[#0D1B2A] p-5">

                <h3 className="text-3xl font-bold text-yellow-400">

                  Tax

                </h3>

                <p className="mt-2 text-gray-300">

                  Income Tax Advisory

                </p>

              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-[#0D1B2A] p-5">

                <h3 className="text-3xl font-bold text-yellow-400">

                  GST

                </h3>

                <p className="mt-2 text-gray-300">

                  Compliance & Litigation

                </p>

              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-[#0D1B2A] p-5">

                <h3 className="text-3xl font-bold text-yellow-400">

                  Legal

                </h3>

                <p className="mt-2 text-gray-300">

                  Appeals & Representation

                </p>

              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-[#0D1B2A] p-5">

                <h3 className="text-3xl font-bold text-yellow-400">

                  Business

                </h3>

                <p className="mt-2 text-gray-300">

                  Advisory Services

                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="tel:+917007756899"
                className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Schedule Consultation
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-[520px] w-[420px] rounded-[40px] bg-yellow-500/10 blur-3xl" />

            <Image
              src="/images/profile/sachin-about.png"
              alt="Advocate Sachin Kumar Mishra"
              width={460}
              height={620}
              priority
              className="relative rounded-[36px] border border-yellow-500/20 shadow-2xl"
            />

          </div>

        </div>

      </Container>

    </section>
  );
}