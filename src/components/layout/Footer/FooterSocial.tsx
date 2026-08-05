import SocialLinks from "@/components/shared/SocialLinks";

export default function FooterSocial() {
  return (
    <div className="mt-10">

      {/* Divider */}

      <div className="flex items-center gap-4">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/60 to-yellow-500/20" />

        <span
          className="
            whitespace-nowrap
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-yellow-400
          "
        >
          Follow Us
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-500/60 to-yellow-500/20" />

      </div>

      {/* Social Icons */}

      <div className="mt-6 flex justify-center">

        <SocialLinks />

      </div>

    </div>
  );
}