import {
  ShieldCheck,
  PhoneCall,
  Clock3,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Confidential Consultation",
  },
  {
    icon: PhoneCall,
    title: "Online & Offline Support",
  },
  {
    icon: Clock3,
    title: "Prompt Professional Response",
  },
];

export default function ContactHighlights() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-3">

      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-yellow-500/15
              bg-[#0B1625]/70
              px-5
              py-5
              backdrop-blur
            "
          >
            <div className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400">
              <Icon size={22} />
            </div>

            <span className="text-sm font-medium text-gray-200">
              {item.title}
            </span>
          </div>
        );
      })}

    </div>
  );
}