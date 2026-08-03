"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-10 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 pt-5">

        <nav className="flex items-center justify-between rounded-2xl border border-yellow-500/20 bg-[#081321]/80 px-8 py-3 backdrop-blur-xl">

          {/* Logo */}

<Link href="/" className="flex items-center gap-4">

<Image
  src="/images/logo/skm-logo.png"
  alt="SKM Laws"
  width={180}
  height={60}
  priority
  className="w-[180px] h-auto object-contain transition duration-300 hover:scale-105"
/>

</Link>

          {/* Menu */}

          <div className="hidden items-center gap-8 lg:flex">

            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
relative
text-sm
font-medium
text-white
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
              >
                {item.label}
              </Link>
            ))}

          </div>

          {/* CTA */}

          <a
            href="https://wa.me/917007756899"
            target="_blank"
            className="rounded-xl bg-gradient-to-r
from-yellow-400
to-yellow-600
shadow-lg
shadow-yellow-500/30
hover:scale-105
transition-all
duration-300 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            Schedule Consultation
          </a>

        </nav>

      </div>
    </header>
  );
}