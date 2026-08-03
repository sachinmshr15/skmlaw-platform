import { Target, Eye } from "lucide-react";

import Container from "@/components/ui/Container";
import PremiumCard from "@/components/ui/PremiumCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MissionVision() {
  return (
    <section className="bg-[#07111d] py-28 text-white">

      <Container>

        <SectionHeading
          badge="Our Philosophy"
          title="Mission"
          highlight="& Vision"
          description="The principles that guide every legal opinion, tax strategy and client relationship at SKM Laws & Associates."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <PremiumCard>

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                <Target size={34} />

              </div>

              <h3 className="text-3xl font-bold">

                Our Mission

              </h3>

            </div>

            <p className="mt-8 leading-9 text-gray-400">

              To provide reliable, ethical and practical legal,
              taxation and business advisory services that help
              individuals, professionals, startups and enterprises
              make informed decisions with confidence.

            </p>

          </PremiumCard>

          {/* Vision */}

          <PremiumCard>

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                <Eye size={34} />

              </div>

              <h3 className="text-3xl font-bold">

                Our Vision

              </h3>

            </div>

            <p className="mt-8 leading-9 text-gray-400">

              To become a trusted legal and taxation advisory firm
              recognised for professional excellence, integrity,
              innovation and long-term client relationships across India.

            </p>

          </PremiumCard>

        </div>

      </Container>

    </section>
  );
}