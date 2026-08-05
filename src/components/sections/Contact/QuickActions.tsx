import Link from "next/link";

import {
  CalendarDays,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import { siteConfig } from "@/config/site";

const actions = [
  {
    title: "Call Now",
    description: "Talk directly with our legal team.",
    icon: Phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    title: "WhatsApp",
    description: "Get a faster response on WhatsApp.",
    icon: MessageCircle,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
  },
  {
    title: "Email Us",
    description: "Send your legal enquiry by email.",
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "Book Consultation",
    description: "Schedule your professional consultation.",
    icon: CalendarDays,
    href: "#contact-form",
  },
];

export default function QuickActions() {
  return (
    <div className="mt-10">

      <h3 className="font-heading text-2xl font-semibold text-white">
        Quick Actions
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                rounded-2xl
                border
                border-yellow-500/10
                bg-[#0B1625]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-400
                hover:shadow-[0_20px_50px_rgba(234,179,8,.18)]
              "
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400">
                  <Icon size={20} />
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {action.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {action.description}
                  </p>

                </div>

              </div>

            </Link>
          );
        })}

      </div>

    </div>
  );
}