import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  label: string;
  active: boolean;
};

export default function NavItem({
  href,
  label,
  active,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        `
          relative
          text-[15px]
          font-medium
          transition-all
          duration-300

          after:absolute
          after:left-0
          after:-bottom-2
          after:h-[2px]
          after:bg-[var(--color-primary)]
          after:transition-all
          after:duration-300
        `,
        active
          ? `
              text-[var(--color-primary)]
              after:w-full
            `
          : `
              text-white
              hover:text-[var(--color-primary)]
              after:w-0
              hover:after:w-full
            `
      )}
    >
      {label}
    </Link>
  );
}