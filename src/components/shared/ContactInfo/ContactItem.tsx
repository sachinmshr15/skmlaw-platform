import { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export default function ContactItem({
  icon,
  label,
  value,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="mt-1 text-yellow-400">
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {label}
        </p>

        <p className="mt-1 text-gray-300">
          {value}
        </p>

      </div>

    </div>
  );
}