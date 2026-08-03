import {
  GraduationCap,
  BadgeCheck,
  Scale,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "@/components/ui/Container";
import PremiumCard from "@/components/ui/PremiumCard";
import SectionHeading from "@/components/ui/SectionHeading";

const qualifications = [
  {
    icon: GraduationCap,
    title: "LL.B.",
    description:
      "Professional legal education with a focus on civil, taxation and commercial laws.",
  },
  {
    icon: GraduationCap,
    title: "B.A. (Economics)",
    description:
      "Academic foundation in economics, finance and public policy supporting legal and taxation practice.",
  },
  {
    icon: BadgeCheck,
    title: "GST Practitioner",
    description:
      "Registered GST Practitioner (GSTP ID - 092200010948GPD).",
  },
  {
    icon: Scale,
    title: "Legal Practice",
    description:
      "Income Tax, GST, Appeals, Litigation Support and Regulatory Compliance.",
  },
];

export default function Qualifications() {
  return (
    <section className="bg-[#081321] py-28 text-white">
      <Container>

        <SectionHeading
          badge="Qualifications"
          title="Professional"
          highlight="Credentials"
          description="Academic qualifications and professional certifications that support the firm's legal and taxation practice."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {qualifications.map((item) => {
            const Icon = item.icon;

            return (
              <PremiumCard key={item.title}>

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">
                    <Icon size={30} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </div>

              </PremiumCard>
            );
          })}

        </div>

      </Container>
    </section>
  );
}