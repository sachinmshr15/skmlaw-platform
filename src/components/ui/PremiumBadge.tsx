import { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PremiumBadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function PremiumBadge({
  children,
  className,
}: PremiumBadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border
        border-yellow-500/20
        bg-yellow-500/10
        px-5
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.25em]
        text-yellow-400
        backdrop-blur-md
        `,
        className
      )}
    >
      {children}
    </span>
  );
}