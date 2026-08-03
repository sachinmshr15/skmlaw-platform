import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

import PremiumCard from "@/components/ui/PremiumCard";

type CredentialCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  href?: string;
  verified?: boolean;
};

export default function CredentialCard({
  icon: Icon,
  title,
  value,
  description,
  href,
  verified = true,
}: CredentialCardProps) {
  return (
    <PremiumCard className="group h-full">

      <div className="flex h-full flex-col">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500/20">

            <Icon size={30} />

          </div>

          {verified && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Verified
            </span>
          )}

        </div>

        {/* Content */}

        <div className="mt-8">

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 font-semibold text-yellow-400">
            {value}
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            {description}
          </p>

        </div>

        {/* Footer */}

        {href && (
          <div className="mt-auto pt-8">

            <Link
              href={href}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-yellow-400
                transition-all
                duration-300
                hover:gap-3
              "
            >
              View Certificate

              <ArrowUpRight size={18} />

            </Link>

          </div>
        )}

      </div>

    </PremiumCard>
  );
}