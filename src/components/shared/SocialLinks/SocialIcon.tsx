import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  children: ReactNode;
};

export default function SocialIcon({
  href,
  label,
  children,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-yellow-500/20
        bg-[#0B1625]
        text-yellow-400
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400
        hover:bg-yellow-400
        hover:text-black
      "
    >
      {children}
    </Link>
  );
}