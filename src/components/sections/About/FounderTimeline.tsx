import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const timeline = [
  {
    year: "Academic Foundation",
    title: "Economics & Law",
    description:
      "Built a strong foundation in economics, legal studies and regulatory framework to develop analytical and practical problem-solving skills.",
  },
  {
    year: "Professional Qualification",
    title: "Advocate & GST Practitioner",
    description:
      "Qualified as an Advocate and obtained GST Practitioner registration to provide professional taxation and compliance services.",
  },
  {
    year: "Professional Practice",
    title: "SKM Laws And Associates",
    description:
      "Established an independent practice focusing on Income Tax, GST, legal advisory, appeals, litigation support and business consultancy.",
  },
  {
    year: "Today",
    title: "Serving Clients Across India",
    description:
      "Providing strategic legal and taxation advisory services to individuals, startups, MSMEs and businesses through both online and offline consultations.",
  },
];

export default function FounderTimeline() {
  return (
    <section className="bg-[#07111d] py-28 text-white">
      <Container>

        <SectionHeading
          badge="Professional Journey"
          title="Building Trust Through"
          highlight="Knowledge & Experience"
          description="A journey driven by continuous learning, professional ethics and commitment to delivering practical legal solutions."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-6 top-0 h-full w-px bg-yellow-500/20 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "lg:text-right" : ""
                  }`}
                >
                  <span className="text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div />

                {/* Timeline Dot */}

                <div className="absolute left-6 top-3 h-5 w-5 rounded-full border-4 border-[#07111d] bg-yellow-400 lg:left-1/2 lg:-translate-x-1/2" />
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}