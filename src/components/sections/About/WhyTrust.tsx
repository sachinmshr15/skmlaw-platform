import {
  ShieldCheck,
  MessageSquareText,
  Scale,
  Clock3,
  FileCheck2,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/Container";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Professional Integrity",
    description:
      "Every matter is handled with honesty, confidentiality and professional responsibility.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Legal and tax matters are explained in a practical and easy-to-understand manner.",
  },
  {
    icon: Scale,
    title: "Practical Legal Strategy",
    description:
      "Advice is based on applicable law, facts and practical business requirements.",
  },
  {
    icon: Clock3,
    title: "Timely Compliance",
    description:
      "Focus on timely filings, regulatory compliance and proactive planning.",
  },
  {
    icon: FileCheck2,
    title: "Detail-Oriented Approach",
    description:
      "Careful review of documents and compliance requirements before every filing.",
  },
  {
    icon: Handshake,
    title: "Client-Focused Service",
    description:
      "Long-term professional relationships built on trust, transparency and responsiveness.",
  },
];

export default function WhyTrust() {
  return (
    <section className="bg-[#081321] py-24 text-white">
      <Container>

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            Why Clients Choose SKM Laws
          </span>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Professional
            <span className="block text-yellow-400">
              Commitment
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every engagement is guided by professionalism,
            ethical practice and a commitment to providing
            practical legal and taxation solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {commitments.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-yellow-500/20 bg-[#0d1b2a] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 transition group-hover:bg-yellow-400">

                  <Icon
                    size={34}
                    className="text-yellow-400 transition group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}