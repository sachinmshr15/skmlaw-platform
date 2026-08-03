import Button from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export default function HeroButtons() {
  return (
    <div className="mt-14 flex flex-wrap gap-5">

      {/* Primary CTA */}

      <Button href={contactConfig.social.call}>
        <span className="flex items-center gap-3">
          📅

          {siteConfig.consultationText}

          <ArrowRight size={18} />
        </span>
      </Button>

      {/* WhatsApp */}

      <a
        href={contactConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-yellow-500/30
          bg-white/5
          px-8
          py-4
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-yellow-400
          hover:bg-yellow-500/10
        "
      >
        <MessageCircle size={20} />

        WhatsApp
      </a>

    </div>
  );
}