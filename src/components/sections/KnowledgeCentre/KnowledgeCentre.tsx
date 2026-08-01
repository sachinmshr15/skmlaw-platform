import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    category: "Income Tax",
    title: "How to Respond to an Income Tax Notice",
    description:
      "Understand common notices and the first steps you should take before replying.",
    href: "/knowledge",
  },
  {
    category: "GST",
    title: "GST Registration Mistakes Every Business Must Avoid",
    description:
      "Avoid costly compliance errors while starting or running your business.",
    href: "/knowledge",
  },
  {
    category: "Legal",
    title: "When Should You File an Income Tax Appeal?",
    description:
      "Know the situations where filing an appeal may be the appropriate legal remedy.",
    href: "/knowledge",
  },
];

export default function KnowledgeCentre() {
  return (
    <section className="bg-[#081321] py-24 text-white">
      <Container>

        <SectionHeading
          subtitle="Knowledge Centre"
          title="Latest Tax & Legal Insights"
          description="Professional articles, tax updates, GST compliance guides and legal resources."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (

            <div
              key={article.title}
              className="rounded-2xl border border-yellow-500/20 bg-[#0D1B2A] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >

              <span className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
                {article.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-8 inline-block font-semibold text-yellow-400 hover:text-yellow-300"
              >
                Read Article →
              </Link>

            </div>

          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/knowledge"
            className="inline-flex rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            View All Articles
          </Link>

        </div>

      </Container>
    </section>
  );
}