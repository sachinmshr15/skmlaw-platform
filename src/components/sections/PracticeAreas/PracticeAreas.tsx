import {
  Calculator,
  Landmark,
  Scale,
  Building2,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Income Tax",
    desc: "ITR Filing, Tax Audit, Notice Replies, Assessment & Compliance.",
  },
  {
    icon: Landmark,
    title: "GST Services",
    desc: "GST Registration, Return Filing, Audit, Refund & Compliance.",
  },
  {
    icon: Scale,
    title: "Appeals & Litigation",
    desc: "Representation before Income Tax & GST Authorities.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "Proprietorship, Partnership, LLP, Company & MSME Registration.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Tax Planning",
    desc: "Capital Gain Planning, Tax Saving & Business Structuring.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Centre",
    desc: "Latest Tax Updates, Articles, Circulars & Legal Resources.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="services"
      className="bg-[#07111d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
            Practice Areas
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Legal & Tax Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Comprehensive legal, taxation and business advisory
            services designed for individuals, professionals,
            startups and enterprises.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group rounded-3xl border border-yellow-500/10 bg-[#0d1b2a] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={34}
                    className="text-yellow-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.desc}
                </p>

                <button
                  className="mt-8 font-semibold text-yellow-400 transition-all group-hover:translate-x-2"
                >
                  Learn More →
                </button>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}