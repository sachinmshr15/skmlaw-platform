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
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0B1625]
        p-7
        transition-all
        duration-300
        `,
        hover &&
          `
          hover:-translate-y-1
          hover:border-yellow-500/25
          hover:shadow-[0_18px_45px_rgba(212,175,55,.12)]
        `,
        className
      )}
    >
      {/* Top Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-yellow-400/40
          to-transparent
        "
      />

      {children}
    </div>
  );
}