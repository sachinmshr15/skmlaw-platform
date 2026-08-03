import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 bg-[#050d18] text-white">

      <Container>

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/logo/skm-logo.png"
              alt={siteConfig.name}
              width={180}
              height={60}
              className="h-auto w-[180px] object-contain"
            />

            <p className="mt-6 leading-8 text-gray-400">

              {siteConfig.description}

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">

              Quick Links

            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/services">Services</Link></li>

              <li><Link href="/knowledge">Knowledge</Link></li>

              <li><Link href="/tools">Tools</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Practice Areas */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">

              Practice Areas

            </h3>

            <ul className="space-y-3">

              <li>Income Tax</li>

              <li>GST Advisory</li>

              <li>Tax Appeals</li>

              <li>Business Advisory</li>

              <li>Tax Planning</li>

              <li>Business Registration</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">

              Contact

            </h3>

            <p className="mb-3">

              📞 {contactConfig.phoneDisplay}

            </p>

            <p className="mb-3">

              ✉ {contactConfig.email}

            </p>

            <p>

              📍 {contactConfig.office.city}, {contactConfig.office.district},{" "}
              {contactConfig.office.state}

            </p>

          </div>

        </div>

        <div className="border-t border-yellow-500/10 py-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 lg:flex-row">

            <p>

              © 2026 {siteConfig.name}. All Rights Reserved.

            </p>

            <div className="flex gap-6">

              <Link href="/privacy">

                Privacy

              </Link>

              <Link href="/terms">

                Terms

              </Link>

              <Link href="/disclaimer">

                Disclaimer

              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  );
}