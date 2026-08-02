import { founder } from "@/content/founder";

import AboutHighlights from "./AboutHighlights";
import AboutCTA from "./AboutCTA";

export default function AboutContent() {
  return (
    <div className="relative z-20 max-w-2xl">

      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-yellow-500/20
          bg-yellow-500/10
          px-6
          py-3
          text-xs
          font-semibold
          uppercase
          tracking-[3px]
          text-yellow-400
          backdrop-blur-md
        "
      >
        Meet Your Legal Advisor
      </span>

      {/* Heading */}

      <h2
        className="
          font-heading
          mt-8
          text-5xl
          font-bold
          leading-[1.05]
          tracking-[-2px]
          text-white
          lg:text-6xl
        "
      >
        About{" "}

        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          SKM Laws
        </span>
      </h2>

      {/* Founder Name */}

      <h3 className="mt-8 text-3xl font-semibold text-white">
        {founder.name}
      </h3>

      {/* Designation */}

      <p className="mt-3 text-lg font-medium text-yellow-400">
        {founder.designation}
      </p>

      {/* Premium Divider */}

      <div className="mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent" />

      {/* Tagline */}

      <p className="mt-8 text-xl font-light leading-9 text-gray-300">
        {founder.tagline}
      </p>

      {/* Biography */}

      <p className="mt-8 text-lg leading-9 text-gray-400">
        {founder.shortBio}
      </p>

      {/* Highlights */}

      <AboutHighlights />

      {/* CTA */}

      <div className="mt-14">
        <AboutCTA />
      </div>

    </div>
  );
}