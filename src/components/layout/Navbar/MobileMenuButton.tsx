"use client";

import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function MobileMenuButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      aria-label="Toggle Navigation"
      aria-expanded={open}
      onClick={onClick}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-[var(--border-primary)]
        bg-[var(--surface-3)]
        text-white
        transition-all
        duration-300
        hover:border-[var(--color-primary)]
        hover:text-[var(--color-primary)]
        lg:hidden
      "
    >
      {open ? (
        <X size={22} />
      ) : (
        <Menu size={22} />
      )}
    </button>
  );
}