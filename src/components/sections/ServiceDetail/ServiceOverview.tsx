import Container from "@/components/ui/Container";

type Props = {
  title: string;
  description: string;
};

export default function ServiceOverview({
  title,
  description,
}: Props) {
  return (
    <section className="bg-[#07111d] py-24 text-white">

      <Container>

        <div className="mx-auto max-w-5xl">

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-yellow-400
            "
          >
            Service Overview
          </span>

          {/* Heading */}

          <h2 className="mt-8 font-heading text-5xl font-bold leading-tight lg:text-6xl">

            {title}

          </h2>

          {/* Divider */}

          <div className="mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent" />

          {/* Description */}

          <p className="mt-10 text-lg leading-9 text-gray-300">

            {description}

          </p>

        </div>

      </Container>

    </section>
  );
}