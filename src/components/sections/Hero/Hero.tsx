import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroImage from "./HeroImage";
import HeroGlow from "./components/HeroGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081321] pt-28 text-white">

      <HeroGlow />

      <Container className="flex min-h-screen flex-col items-center gap-16 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1 relative z-10">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400">
            Advocate • Tax Consultant • GST Consultant
          </span>

          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-tight lg:text-7xl">

            Strategic Legal

            <span className="block text-yellow-400">
              &amp; Tax Advisory
            </span>

          </h1>

          <h2 className="mt-6 text-2xl text-gray-300">

            For Individuals, Businesses &amp; Startups

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            Delivering practical legal, taxation,
            GST and business advisory services with
            integrity, precision and a client-first
            approach.

          </p>

          {/* Services */}

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm">

            <div>✔ Income Tax Returns</div>

            <div>✔ GST Compliance</div>

            <div>✔ Appeals & Litigation</div>

            <div>✔ Tax Planning</div>

            <div>✔ Business Advisory</div>

            <div>✔ Startup Assistance</div>

          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Button href="tel:+917007756899">
              Schedule Consultation
            </Button>

            <a
              href="https://wa.me/917007756899"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-yellow-500 px-7 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative z-10 flex flex-1 justify-center">

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}