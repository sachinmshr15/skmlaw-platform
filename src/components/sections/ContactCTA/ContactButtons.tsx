import Button from "@/components/ui/Button";
import { contactConfig } from "@/config/contact";

export default function ContactButtons() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

      {/* Primary CTA */}

      <Button href={contactConfig.social.call}>
        Schedule Consultation
      </Button>

      {/* WhatsApp */}

      <a
        href={contactConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          border
          border-yellow-500
          px-7
          py-4
          font-semibold
          text-yellow-400
          transition-all
          duration-300
          hover:scale-105
          hover:bg-yellow-500
          hover:text-black
        "
      >
        WhatsApp Now
      </a>

    </div>
  );
}