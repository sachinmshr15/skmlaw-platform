import { Mail, MapPin, Phone } from "lucide-react";

import ContactItem from "./ContactItem";

import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/config/site";

type ContactInfoProps = {
  showSocial?: boolean;
};

export default function ContactInfo({
  showSocial = false,
}: ContactInfoProps) {
  return (
    <div className="space-y-6">

      <ContactItem
        icon={<Phone size={18} />}
        label="Phone"
        value={siteConfig.phone}
      />

      <ContactItem
        icon={<Mail size={18} />}
        label="Email"
        value={siteConfig.email}
      />

      <ContactItem
        icon={<MapPin size={18} />}
        label="Office"
        value={siteConfig.address}
      />

      {showSocial && (
        <div className="pt-4">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Follow Us
          </p>

          <SocialLinks />

        </div>
      )}

    </div>
  );
}