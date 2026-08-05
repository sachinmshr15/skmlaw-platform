import Link from "next/link";

import Container from "@/components/ui/Container";

import { siteConfig } from "@/config/site";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-yellow-500/10 bg-[#040B14]">

      <Container>

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8
            py-8
            text-center
            lg:flex-row
          "
        >
          {/* Left */}

          <div>

            <p className="text-sm text-gray-500">

              © {year} {siteConfig.name}. All Rights Reserved.

            </p>

            <p className="mt-2 text-xs text-gray-600">

              Professional Taxation, GST & Legal Advisory Services.

            </p>

          </div>

          {/* Center */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              text-sm
            "
          >

            <Link
              href="/privacy"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Disclaimer
            </Link>

            <Link
              href="/sitemap"
              className="text-gray-500 transition hover:text-yellow-400"
            >
              Sitemap
            </Link>

          </div>

          {/* Right */}

          <div>

            <p className="text-sm text-gray-500">

              Made with ❤️ in India

            </p>

          </div>

        </div>

      </Container>

    </div>
  );
}