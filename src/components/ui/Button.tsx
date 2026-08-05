import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = clsx(
    `
      inline-flex
      items-center
      justify-center
      rounded-xl
      font-semibold
      transition-all
      duration-300
      whitespace-nowrap
      select-none
      active:scale-[0.98]
    `,
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "bg-[var(--color-primary)] text-black shadow-[var(--shadow-gold)] hover:bg-[var(--color-primary-light)] hover:-translate-y-1":
        variant === "primary",

      "bg-white text-[#07111D] hover:bg-gray-100 hover:-translate-y-1":
        variant === "secondary",

      "border border-[var(--border-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black":
        variant === "outline",

      "bg-transparent text-white hover:text-[var(--color-primary)]":
        variant === "ghost",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
}