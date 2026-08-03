import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function PageHeroBreadcrumb({
  items,
}: PageHeroBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="
                  text-gray-400
                  transition-colors
                  duration-300
                  hover:text-yellow-400
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "font-medium text-yellow-400"
                    : "text-gray-400"
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight
                size={16}
                className="text-gray-500"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}