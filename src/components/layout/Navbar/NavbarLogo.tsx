import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="
        group
        flex
        items-center
        gap-5
        shrink-0
        select-none
      "
    >
      {/* Shield */}

      <Image
        src="/images/logo/skm-shield.png"
        alt="SKM Laws And Associates"
        width={74}
        height={74}
        priority
        className="
          h-[74px]
          w-[74px]
          shrink-0
          object-contain
          transition-all
          duration-300
          group-hover:scale-105
        "
      />

      {/* Wordmark */}

      <div className="flex flex-col leading-none">

        <span className="navbar-skm">

          SKM

        </span>

        <span className="navbar-subtitle">

          Laws And Associates

        </span>

      </div>

    </Link>
  );
}