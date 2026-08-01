import Link from "next/link";
import {
  Calculator,
  Landmark,
  Scale,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Income Tax",
    slug: "income-tax",
    desc: "ITR Filing, Tax Audit, Income Tax Notices, Assessments and Compliance Services.",
  },
  {
    icon: Landmark,
    title: "GST Services",
    slug: "gst",
    desc: "GST Registration, Return Filing, Audit, Refunds and End-to-End GST Compliance.",
  },
  {
    icon: Scale,
    title: "Appeals & Litigation",
    slug: "appeals",
    desc: "Representation before Income Tax, GST Authorities and Appellate Forums.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    slug: "business-registration",
    desc: "Proprietorship, Partnership, LLP, Company Incorporation and MSME Registration.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Tax Planning",
    slug: "tax-planning",
    desc: "Strategic Tax Planning, Capital Gain Planning and Business Structuring.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    slug: "business-advisory",
    desc: "Business Structuring, Regulatory Compliance and Professional Advisory Services.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="services"
      className="bg-[#07111d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            Practice Areas
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Legal & Tax Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Comprehensive legal, taxation and business advisory
            services designed for individuals, professionals,
            startups and enterprises.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                className="group rounded-3xl border border-yellow-500/10 bg-[#0d1b2a] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 transition-all duration-300 group-hover:bg-yellow-400">

                  <Icon
                    size={34}
                    className="text-yellow-400 transition-all duration-300 group-hover:text-black"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-gray-400">
                  {service.desc}
                </p>

                {/* CTA */}

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 inline-flex items-center font-semibold text-yellow-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-yellow-300"
                >
                  Learn More →
                </Link>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}