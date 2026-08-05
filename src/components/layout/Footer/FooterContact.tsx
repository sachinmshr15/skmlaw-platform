import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import FooterSocial from "./FooterSocial";

import { siteConfig } from "@/config/site";
import { footerConfig } from "@/config/footer";

export default function FooterContact() {
  return (
    <div>

      {/* Heading */}

      <h3
        className="
          font-heading
          text-2xl
          font-semibold
          text-yellow-400
        "
      >
        Contact
      </h3>

      {/* Contact Items */}

      <div className="mt-8 space-y-6">

        {/* Phone */}

        <Link
          href={`tel:${siteConfig.phone}`}
          className="group flex items-start gap-4"
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-500/10
              bg-[#081321]
              transition-all
              duration-300
              group-hover:border-yellow-500/30
              group-hover:bg-yellow-500/10
            "
          >
            <Phone
              size={18}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Call Us
            </p>

            <p className="text-gray-300">
              {siteConfig.phone}
            </p>

          </div>

        </Link>

        {/* Email */}

        <Link
          href={`mailto:${siteConfig.email}`}
          className="group flex items-start gap-4"
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-500/10
              bg-[#081321]
              transition-all
              duration-300
              group-hover:border-yellow-500/30
              group-hover:bg-yellow-500/10
            "
          >
            <Mail
              size={18}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="break-all text-gray-300">
              {siteConfig.email}
            </p>

          </div>

        </Link>

        {/* Office */}

        <Link
          href={siteConfig.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4"
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-500/10
              bg-[#081321]
              transition-all
              duration-300
              group-hover:border-yellow-500/30
              group-hover:bg-yellow-500/10
            "
          >
            <MapPin
              size={18}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Office
            </p>

            <p className="text-gray-300">
              {siteConfig.address}
            </p>

          </div>

        </Link>

        {/* Working Hours */}

        <div className="flex items-start gap-4">

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-500/10
              bg-[#081321]
            "
          >
            <Clock
              size={18}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Working Days
            </p>

            <p className="text-gray-300">
              {footerConfig.office.workingDays}
            </p>

            <p className="text-gray-400">
              {footerConfig.office.workingHours}
            </p>

          </div>

        </div>

      </div>

      {/* WhatsApp CTA */}

      <Link
        href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-10
          inline-flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          px-6
          py-4
          font-semibold
          text-black
          shadow-lg
          shadow-yellow-500/20
          transition-all
          duration-300
          hover:scale-[1.02]
        "
      >
        <MessageCircle size={20} />

        WhatsApp Consultation
      </Link>

      {/* Social */}

      <FooterSocial />

    </div>
  );
}