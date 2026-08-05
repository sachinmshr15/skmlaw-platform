"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({
  open,
  onClose,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={clsx(
          `
            fixed
            inset-0
            z-40
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-300
            lg:hidden
          `,
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      />

      {/* Drawer */}

      <aside
        className={clsx(
          `
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-[320px]
            flex-col
            bg-[var(--surface-2)]
            shadow-[var(--shadow-luxury)]
            transition-transform
            duration-300
            lg:hidden
          `,
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        <div className="border-b border-[var(--border-secondary)] p-8">

          <h2 className="font-heading text-2xl text-white">
            Menu
          </h2>

        </div>

        <nav className="flex flex-1 flex-col p-8">

          <div className="space-y-6">

            {navigation.main.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={clsx(
                  "block text-lg transition",
                  pathname === item.href
                    ? "text-[var(--color-primary)]"
                    : "text-white hover:text-[var(--color-primary)]"
                )}
              >
                {item.label}
              </Link>

            ))}

          </div>

          <div className="mt-auto pt-10">

            <Button
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {siteConfig.consultationText}
            </Button>

          </div>

        </nav>

      </aside>
    </>
  );
}