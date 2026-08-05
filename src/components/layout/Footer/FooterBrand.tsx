import Image from "next/image";

import { siteConfig } from "@/config/site";
import { footerConfig } from "@/config/footer";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">

      <Image
        src={siteConfig.footerLogo}
        alt={siteConfig.name}
        width={110}
        height={110}
        priority
        className="
          h-[96px]
          w-[96px]
          object-contain
          drop-shadow-[0_0_20px_rgba(212,175,55,.20)]
          lg:h-[110px]
          lg:w-[110px]
        "
      />

      <h3
        className="
          mt-8
          font-heading
          text-3xl
          font-bold
          text-white
        "
      >
        {siteConfig.shortName}
      </h3>

      <p
        className="
          mt-2
          uppercase
          tracking-[0.28em]
          text-xs
          text-yellow-400
        "
      >
        Laws And Associates
      </p>

      <p
        className="
          mt-7
          leading-8
          text-gray-400
        "
      >
        {footerConfig.brand.description}
      </p>

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-yellow-500/10
          bg-[#081321]
          p-6
        "
      >
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-yellow-400
          "
        >
          {footerConfig.brand.trustTitle}
        </p>

        <p
          className="
            mt-3
            leading-7
            text-gray-300
          "
        >
          {footerConfig.brand.trustDescription}
        </p>
      </div>

    </div>
  );
}