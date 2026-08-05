"use client";

import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";

import NavItem from "./NavItem";

export default function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <div
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {navigation.main.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          active={pathname === item.href}
        />
      ))}
    </div>
  );
}