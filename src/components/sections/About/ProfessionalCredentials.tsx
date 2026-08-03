import {
  BadgeCheck,
  Scale,
  BriefcaseBusiness,
  Building2,
  Globe,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import CredentialCard from "./CredentialCard";

const credentials = [
  {
    icon: Scale,
    title: "Advocate Enrollment",
    value: "Enrollment No. UP08620/22",
    description:
      "Enrolled with the Bar Council of Uttar Pradesh on 04 June 2022.",
    href: "/certificates/advocate-enrollment.pdf",
  },
  {
    icon: BadgeCheck,
    title: "Certificate of Practice",
    value: "COP No. 241118 / 2023",
    description:
      "Certificate of Practice issued by the Bar Council of Uttar Pradesh.",
    href: "/certificates/certificate-of-practice.pdf",
  },
  {
    icon: ShieldCheck,
    title: "GST Practitioner",
    value: "GSTP ID : 092200010948GPD",
    description:
      "Registered GST Practitioner providing GST advisory and compliance services.",
  },
  {
    icon: Building2,
    title: "Court of Practice",
    value: "District Court, Sitapur",
    description:
      "Professional legal representation before competent authorities.",
  },
  {
    icon: Globe,
    title: "Consultation",
    value: "PAN India",
    description:
      "Online & Offline legal and taxation consultation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practice Areas",
    value: "Income Tax • GST • Appeals",
    description:
      "Taxation, Litigation Support and Business Advisory.",
  },
];

export default function ProfessionalCredentials() {
  return (
    <section className="bg-[#07111d] py-28 text-white">
      <Container>

        <SectionHeading
          badge="Verified Credentials"
          title="Professional"
          highlight="Credentials"
          description="Verified professional registrations, legal practice credentials and taxation certifications supporting our legal services."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {credentials.map((item) => (
            <CredentialCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              description={item.description}
              href={item.href}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}