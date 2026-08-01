import {
  ShieldCheck,
  Clock3,
  Handshake,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent Advice",
    desc: "Clear legal guidance with complete transparency and ethical practice.",
  },
  {
    icon: Clock3,
    title: "Timely Compliance",
    desc: "Helping clients meet statutory deadlines with confidence.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Approach",
    desc: "Every matter is handled with personal attention and practical solutions.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Integrity",
    desc: "Committed to accuracy, confidentiality and long-term trust.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-yellow-500/10 bg-[#0b1625]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
            Our Commitment
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built on Trust, Driven by Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            SKM Laws & Associates is committed to delivering reliable,
            transparent and client-focused legal and taxation advisory
            services with professionalism and integrity.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-yellow-500/10 bg-[#111f30] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={34}
                    className="text-yellow-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}