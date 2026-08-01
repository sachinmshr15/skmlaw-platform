"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full border-b border-yellow-500/20 bg-gradient-to-r from-[#a67c00] via-[#d4af37] to-[#a67c00] text-black">

      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">

        <div className="overflow-hidden whitespace-nowrap">

          <div className="animate-marquee inline-block font-medium">

            Income Tax Returns &nbsp; • &nbsp;
            GST Compliance &nbsp; • &nbsp;
            Tax Planning &nbsp; • &nbsp;
            Appeals & Litigation &nbsp; • &nbsp;
            Business Advisory &nbsp; • &nbsp;
            Schedule Your Consultation Today

          </div>

        </div>

        <div className="hidden items-center gap-4 md:flex">

          <a href="tel:+917007756899">
            <Phone size={18} />
          </a>

          <a href="mailto:info@skmlaws.com">
            <Mail size={18} />
          </a>

          <a
            href="https://wa.me/917007756899"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
          </a>

        </div>

      </div>

    </div>
  );
}