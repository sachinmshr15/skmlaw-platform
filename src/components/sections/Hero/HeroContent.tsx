import { siteConfig } from "@/config/site";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./components/HeroButtons";
import HeroServices from "./HeroServices";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-3xl pb-10">

      <HeroBadge />

      <h1 className="font-heading mt-8 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-3px] text-white lg:text-7xl xl:text-[88px]">

        Trusted{" "}

        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Legal
        </span>

        <br />

        & Tax Advisory

        <br />

        <span className="text-gray-300">
          Services
        </span>

      </h1>

      <div className="mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-yellow-500 to-transparent" />

      <h2 className="mt-8 max-w-2xl text-2xl font-light leading-10 text-gray-300 lg:text-3xl">
        {siteConfig.subtitle}
      </h2>

      <p className="mt-10 max-w-2xl text-xl leading-10 text-gray-400">
        {siteConfig.description}
      </p>

      <HeroServices />

      <HeroButtons />

      <HeroStats />

    </div>
  );
}