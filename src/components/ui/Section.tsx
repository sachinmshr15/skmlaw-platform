import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        bg-[#081321]
        py-28
        lg:py-32
        text-white
        ${className}
      `}
    >
      {/* Left Glow */}

      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[170px]" />

      {/* Right Glow */}

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-500/5 blur-[150px]" />

      {children}
    </section>
  );
}