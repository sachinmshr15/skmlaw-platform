import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ExternalLink,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-secondary)] bg-[var(--surface-1)] text-white">

      {/* Background Glow */}

      <div className="absolute -left-44 top-0 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-[220px]" />

      <div className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[220px]" />

      <Container>

        {/* =======================================================
            TOP
        ======================================================= */}

        <div className="relative grid gap-14 py-24 lg:grid-cols-[1.25fr_1fr_1fr_1.15fr]">

          {/* ===================================================
              BRAND
          =================================================== */}

          <div>

           <Image
  src={siteConfig.footerLogo}
  alt={siteConfig.name}
  width={180}
  height={180}
  className="
    h-auto
    w-[150px]
    object-contain
  "
/>

            <p className="mt-8 max-w-sm leading-8 text-gray-400">
              {siteConfig.description}
            </p>

            <div className="mt-8">
              <SocialLinks />
            </div>

          </div>

          {/* ===================================================
              QUICK LINKS
          =================================================== */}

          <div>

            <h3 className="mb-7 font-heading text-2xl font-semibold text-[var(--color-primary)]">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Knowledge Centre", "/knowledge"],
                ["Free Tools", "/tools"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (

                <li key={href}>

                  <Link
                    href={href}
                    className="text-gray-300 transition hover:pl-2 hover:text-[var(--color-primary)]"
                  >
                    {label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ===================================================
              PRACTICE AREAS
          =================================================== */}

          <div>

            <h3 className="mb-7 font-heading text-2xl font-semibold text-[var(--color-primary)]">
              Practice Areas
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Income Tax Advisory</li>

              <li>GST Advisory</li>

              <li>Income Tax Appeals</li>

              <li>GST Appeals</li>

              <li>Tax Planning</li>

              <li>Business Registration</li>

            </ul>

          </div>

          {/* ===================================================
              CONTACT
          =================================================== */}

          <div>

            <h3 className="mb-7 font-heading text-2xl font-semibold text-[var(--color-primary)]">
              Contact
            </h3>

            <div className="space-y-6">

              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-start gap-3 text-gray-300 transition hover:text-[var(--color-primary)]"
              >

                <Phone
                  size={18}
                  className="mt-1 text-[var(--color-primary)]"
                />

                <span>{siteConfig.phone}</span>

              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-gray-300 transition hover:text-[var(--color-primary)]"
              >

                <Mail
                  size={18}
                  className="mt-1 text-[var(--color-primary)]"
                />

                <span>{siteConfig.email}</span>

              </a>

              <a
                href={siteConfig.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 transition hover:text-[var(--color-primary)]"
              >

                <MapPin
                  size={18}
                  className="mt-1 text-[var(--color-primary)]"
                />

                <span>{siteConfig.address}</span>

              </a>

            </div>

            {/* Office Hours */}

            <div className="mt-10 rounded-2xl border border-[var(--border-secondary)] bg-[var(--surface-3)] p-6">

              <div className="flex items-center gap-3">

                <Clock3
                  size={18}
                  className="text-[var(--color-primary)]"
                />

                <span className="font-medium text-white">
                  Office Hours
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-400">
                Monday – Saturday
              </p>

              <p className="text-white">
                10:00 AM – 7:00 PM
              </p>

            </div>

            <div className="mt-8">

              <Button
                href={siteConfig.maps}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full"
              >

                Open Google Maps

                <ExternalLink
                  size={18}
                  className="ml-2"
                />

              </Button>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM
        ======================================================= */}

        <div className="border-t border-[var(--border-secondary)] py-8">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <p className="text-center text-sm text-gray-500">

              © {year} {siteConfig.name}. All Rights Reserved.

            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm">

              <Link
                href="/privacy"
                className="text-gray-500 transition hover:text-[var(--color-primary)]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-500 transition hover:text-[var(--color-primary)]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="text-gray-500 transition hover:text-[var(--color-primary)]"
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  );
}