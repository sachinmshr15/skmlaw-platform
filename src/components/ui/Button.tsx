import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-2xl
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        `,
        variant === "primary" &&
          `
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          text-black
          shadow-[0_15px_40px_rgba(234,179,8,.35)]
          hover:shadow-[0_20px_60px_rgba(234,179,8,.45)]
          `,

        variant === "secondary" &&
          `
          bg-white/5
          border
          border-yellow-500/20
          text-white
          backdrop-blur-md
          hover:border-yellow-400
          hover:bg-yellow-500/10
          `,

        variant === "outline" &&
          `
          border
          border-yellow-500
          text-yellow-400
          hover:bg-yellow-500
          hover:text-black
          `,

        className
      )}
    >
      {children}
    </Link>
  );
}