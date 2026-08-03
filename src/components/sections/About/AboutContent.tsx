import SectionHeading from "@/components/ui/SectionHeading";

import { founder } from "@/content/founder";

import AboutHighlights from "./AboutHighlights";
import AboutCTA from "./AboutCTA";

export default function AboutContent() {
  return (
    <div className="relative z-20 max-w-2xl">

      <SectionHeading
        badge="Meet Your Legal Advisor"
        title="About"
        highlight="SKM Laws"
        description={founder.shortBio}
        align="left"
      />

      {/* Founder Name */}

      <h3 className="mt-10 text-3xl font-semibold text-white">
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

      {/* Highlights */}

      <AboutHighlights />

      {/* CTA */}

      <div className="mt-14">
        <AboutCTA />
      </div>

    </div>
  );
}