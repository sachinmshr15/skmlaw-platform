import {
  Scale,
  BadgeCheck,
  Landmark,
  Users,
  Building2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Legal Expertise",
    desc: "Professional legal representation in tax, GST and commercial matters.",
  },
  {
    icon: BadgeCheck,
    title: "Tax Compliance",
    desc: "Accurate Income Tax, GST and statutory compliance services.",
  },
  {
    icon: Landmark,
    title: "Appeals & Litigation",
    desc: "Representation before tax authorities and appellate forums.",
  },
  {
    icon: Users,
    title: "Personal Consultation",
    desc: "Practical advice tailored to every client's requirements.",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    desc: "Helping businesses stay compliant and tax efficient.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Practice",
    desc: "Clear communication and ethical professional services.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#081321] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-yellow-400 uppercase tracking-[4px]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Why Choose SKM Laws
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Trusted legal and taxation advisory for individuals,
            businesses and startups across India.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-yellow-500/10 bg-[#0d1b2a] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >

                <Icon
                  size={42}
                  className="text-yellow-400"
                />

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