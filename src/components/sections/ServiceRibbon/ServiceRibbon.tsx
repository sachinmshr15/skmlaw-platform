import Link from "next/link";
import {
  Scale,
  Receipt,
  Landmark,
  TrendingUp,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Income Tax",
    href: "/services/income-tax",
    icon: Scale,
  },
  {
    title: "GST",
    href: "/services/gst",
    icon: Receipt,
  },
  {
    title: "Appeals",
    href: "/services/appeals",
    icon: Landmark,
  },
  {
    title: "Tax Planning",
    href: "/services/tax-planning",
    icon: TrendingUp,
  },
  {
    title: "Business Advisory",
    href: "/services/business-advisory",
    icon: Building2,
  },
  {
    title: "Startup Services",
    href: "/services/startup",
    icon: BriefcaseBusiness,
  },
];

export default function ServiceRibbon() {
  return (
    <section className="sticky top-0 z-20 border-y border-yellow-500/10 bg-[#0d1b2a]/90 backdrop-blur-lg">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 py-5 md:grid-cols-3 xl:grid-cols-6">

        {services.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center justify-center gap-3 rounded-2xl border border-transparent py-3 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/10"
            >

              <Icon
                size={22}
                className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-sm font-medium text-white">
                {item.title}
              </span>

            </Link>

          );

        })}

      </div>

    </section>
  );
}