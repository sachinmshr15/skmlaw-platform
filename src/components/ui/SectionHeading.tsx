import PremiumBadge from "@/components/ui/PremiumBadge";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;

  align?: "left" | "center";

  headingLevel?: "h1" | "h2";

  size?: "default" | "large";

  descriptionWidth?: "md" | "lg" | "xl";
};

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  headingLevel = "h2",
  size = "default",
  descriptionWidth = "lg",
}: SectionHeadingProps) {
  const Heading = headingLevel;

  const wrapperClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl";

  const titleClass =
    size === "large"
      ? "text-5xl lg:text-7xl"
      : "text-5xl lg:text-6xl";

  const descriptionClass = {
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
  }[descriptionWidth];

  return (
    <div className={wrapperClass}>

      {badge && (
        <PremiumBadge>
          {badge}
        </PremiumBadge>
      )}

      <Heading
        className={`
          mt-8
          font-heading
          font-bold
          leading-[1.05]
          tracking-[-0.03em]
          text-white
          ${titleClass}
        `}
      >
        {title}

        {highlight && (
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </Heading>

      {description && (
        <p
          className={`
            mt-8
            text-lg
            leading-9
            text-gray-400
            ${descriptionClass}
            ${align === "center" ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}

    </div>
  );
}