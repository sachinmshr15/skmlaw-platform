import {
  Target,
  Eye,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide practical, transparent and legally sound advisory services that help individuals, professionals and businesses make informed decisions while remaining compliant with applicable laws.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a trusted legal and taxation advisory practice recognised for professionalism, integrity, knowledge and long-term client relationships.",
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    description:
      "Integrity, confidentiality, ethical practice, continuous learning and a client-focused approach form the foundation of every professional engagement.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#081321] py-24 text-white">
      <Container>

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            Our Philosophy
          </span>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Mission, Vision
            <span className="block text-yellow-400">
              & Core Values
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every client engagement is guided by professionalism,
            transparency and a commitment to delivering practical,
            legally sound advice.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="group rounded-3xl border border-yellow-500/20 bg-[#0d1b2a] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 transition group-hover:bg-yellow-400">

                  <Icon
                    size={34}
                    className="text-yellow-400 transition group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  {card.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}