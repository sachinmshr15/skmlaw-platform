// src/config/navigation.ts

export interface NavItem {
  label: string;
  href: string;
}

export const navigation = {
  main: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Knowledge Centre",
      href: "/knowledge",
    },
    {
      label: "Tools",
      href: "/tools",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  footer: [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Disclaimer",
      href: "/disclaimer",
    },
  ],
} as const;