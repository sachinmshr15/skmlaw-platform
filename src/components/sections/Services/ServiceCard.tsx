import Link from "next/link";

import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  FileText,
  Receipt,
  Rocket,
  Scale,
} from "lucide-react";

import PremiumCard from "@/components/ui/PremiumCard";
import type { Service } from "@/content/services";

type Props = {
  service: Service;
};

const icons = {
  receipt: Receipt,
  "badge-percent": BadgePercent,
  scale: Scale,
  briefcase: BriefcaseBusiness,
  rocket: Rocket,
  "file-text": FileText,
};

export default function ServiceCard({
  service,
}: Props) {
  const Icon =
    icons[service.icon as keyof typeof icons] ??
    BriefcaseBusiness;

  return (
    <PremiumCard
      className="
        group
        flex
        min-h-[270px]
        flex-col
        justify-between
      "
    >
      {/* Top */}

      <div>

        <div
          className="
            mb-5
            inline-flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-yellow-500/10
            text-yellow-400
            transition-all
            duration-300
            group-hover:bg-yellow-500
            group-hover:text-black
          "
        >
          <Icon size={30} />
        </div>

        <h3
          className="
            text-[30px]
            font-heading
            font-bold
            leading-tight
            text-white
          "
        >
          {service.shortTitle}
        </h3>

        <p
          className="
            mt-5
            text-[17px]
            leading-7
            text-gray-400
          "
        >
          {service.description}
        </p>

      </div>

      {/* Bottom */}

      <Link
        href={`/services/${service.slug}`}
        className="
          mt-8
          inline-flex
          items-center
          gap-3
          font-semibold
          text-yellow-400
          transition-all
          duration-300
          group-hover:gap-5
        "
      >
        Learn More

        <ArrowRight size={18} />

      </Link>

    </PremiumCard>
  );
}