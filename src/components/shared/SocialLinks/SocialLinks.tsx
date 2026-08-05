import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import SocialIcon from "./SocialIcon";

import { siteConfig } from "@/config/site";

const socials = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: siteConfig.social.x,
    icon: FaXTwitter,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: MdEmail,
  },
];

export default function SocialLinks() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-3
      "
    >
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <SocialIcon
            key={item.label}
            href={item.href}
            label={item.label}
          >
            <Icon size={18} />
          </SocialIcon>
        );
      })}
    </div>
  );
}