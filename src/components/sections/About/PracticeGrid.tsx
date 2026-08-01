import Link from "next/link";

import {
  Calculator,
  Landmark,
  Scale,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
} from "lucide-react";

import Container from "@/components/ui/Container";

const practiceAreas = [
  {
    icon: Calculator,
    title: "Income Tax",
    desc: "Return Filing, Assessments, Notices, Appeals & Tax Compliance.",
    href: "/services/income-tax",
  },
  {
    icon: Landmark,
    title: "GST Advisory",
    desc: "GST Registration, Returns, Audit & Litigation Support.",
    href: "/services/gst",
  },
  {
    icon: Scale,
    title: "Appeals & Litigation",
    desc: "Representation before Income Tax & GST Authorities.",
    href: "/services/appeals",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    desc: "Professional advisory for startups, MSMEs and enterprises.",
    href: "/services/business-advisory",
  },
  {
    icon: FileCheck2,
    title: "Tax Planning",
    desc: "Strategic planning for efficient and compliant taxation.",
    href: "/services/tax-planning",
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "Company, LLP, Partnership, MSME and Startup Registration.",
    href: "/services/business-registration",
  },
];

export default function PracticeGrid() {
  return (
    <section className="bg-[#07111d] py-24 text-white">
      <Container>

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            Areas of Practice
          </span>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Professional
            <span className="block text-yellow-400">
              Practice Areas
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Comprehensive legal, taxation and business advisory
            services delivered with professionalism, precision
            and practical solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {practiceAreas.map((area) => {

            const Icon = area.icon;

            return (

              <div
                key={area.title}
                className="group rounded-3xl border border-yellow-500/20 bg-[#0d1b2a] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 transition group-hover:bg-yellow-400">

                  <Icon
                    size={34}
                    className="text-yellow-400 transition group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {area.desc}
                </p>

                <Link
                  href={area.href}
                  className="mt-8 inline-flex font-semibold text-yellow-400 transition group-hover:translate-x-2"
                >
                  Explore Service →
                </Link>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}