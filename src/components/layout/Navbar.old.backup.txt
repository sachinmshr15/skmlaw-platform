"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarCTA from "./NavbarCTA";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        `
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
        `,
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-5">

        <nav
          className={clsx(
            `
              flex
              items-center
              justify-between
              rounded-[30px]
              border
              backdrop-blur-2xl
              transition-all
              duration-500
            `,
            scrolled
              ? `
                  h-[76px]
                  border-[var(--border-primary)]
                  bg-[rgba(7,17,29,.94)]
                  px-7
                  shadow-[var(--shadow-luxury)]
                `
              : `
                  h-[92px]
                  border-[var(--border-secondary)]
                  bg-[rgba(7,17,29,.82)]
                  px-8
                `
          )}
        >
          {/* Logo */}

          <div
            className={clsx(
              "transition-all duration-500",
              scrolled ? "scale-95" : "scale-100"
            )}
          >
            <NavbarLogo />
          </div>

          {/* Desktop Menu */}

          <NavbarDesktop />

          {/* Right */}

          <div className="flex items-center gap-4">

            <div
              className={clsx(
                "hidden lg:block transition-all duration-500",
                scrolled ? "scale-95" : "scale-100"
              )}
            >
              <NavbarCTA />
            </div>

            <NavbarMobile />

          </div>

        </nav>

      </div>
    </header>
  );
}