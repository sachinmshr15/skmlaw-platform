import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-yellow-500/10 bg-[#081321] py-28 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-yellow-400">
            {eyebrow}
          </span>

          <h1 className="mt-8 font-heading text-5xl font-bold lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            {description}
          </p>

        </div>

      </Container>
    </section>
  );
}