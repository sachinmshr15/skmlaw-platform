import { ReactNode } from "react";
import clsx from "clsx";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function PremiumCard({
  children,
  className,
  hover = true,
}: PremiumCardProps) {
  return (
    <div
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-yellow-500/10
        bg-[#0B1625]
        p-8
        transition-all
        duration-500
        `,
        hover &&
          `
          hover:-translate-y-2
          hover:border-yellow-500/30
          hover:shadow-[0_30px_70px_rgba(212,175,55,.15)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}