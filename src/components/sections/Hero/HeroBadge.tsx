import { siteConfig } from "@/config/site";

export default function HeroBadge() {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-yellow-500/20
        bg-white/5
        px-6
        py-3
        text-xs
        font-semibold
        uppercase
        tracking-[3px]
        text-yellow-400
        backdrop-blur-md
      "
    >
      {siteConfig.badge}
    </span>
  );
}