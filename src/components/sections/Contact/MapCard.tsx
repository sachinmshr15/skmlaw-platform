import Link from "next/link";

import { ExternalLink, MapPinned } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function MapCard() {
  return (
    <div
      className="
        mt-10
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0B1625]
      "
    >
      <div
        className="
          flex
          h-64
          items-center
          justify-center
          border-b
          border-yellow-500/10
          bg-gradient-to-br
          from-[#091321]
          to-[#10233B]
        "
      >
        <div className="text-center">

          <MapPinned
            size={56}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-5 font-heading text-2xl font-semibold text-white">
            Office Location
          </h3>

          <p className="mt-3 max-w-sm text-gray-400">
            Visit our office or open the location directly in Google Maps.
          </p>

        </div>

      </div>

      <div className="p-8">

        <p className="leading-8 text-gray-300">
          {siteConfig.address}
        </p>

        <Link
          href={siteConfig.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-yellow-400
            px-6
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-yellow-300
            hover:shadow-[0_20px_50px_rgba(234,179,8,.25)]
          "
        >
          Open in Google Maps

          <ExternalLink size={18} />

        </Link>

      </div>

    </div>
  );
}