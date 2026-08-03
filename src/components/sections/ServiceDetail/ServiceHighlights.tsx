import PremiumCard from "@/components/ui/PremiumCard";
import Container from "@/components/ui/Container";

type Props = {
  items: string[];
};

export default function ServiceHighlights({
  items,
}: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#081321] py-24 text-white">

      <Container>

        <div className="mx-auto max-w-6xl">

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
            What We Offer
          </span>

          <h2 className="mt-8 font-heading text-5xl font-bold lg:text-6xl">

            Key Service Highlights

          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">

            Our professional approach combines legal expertise,
            strategic tax planning and practical business guidance
            to deliver reliable solutions.

          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {items.map((item) => (
              <PremiumCard
                key={item}
                className="group h-full"
              >
                <div className="flex items-start gap-4">

                  <div
                    className="
                      mt-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-yellow-500/10
                      font-bold
                      text-yellow-400
                      transition-all
                      duration-300
                      group-hover:bg-yellow-500
                      group-hover:text-black
                    "
                  >
                    ✓
                  </div>

                  <p className="text-lg leading-8 text-gray-300">

                    {item}

                  </p>

                </div>

              </PremiumCard>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}