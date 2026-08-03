import { services } from "@/content/services";

import ServiceCard from "./ServiceCard";

type ServicesGridProps = {
  featuredOnly?: boolean;
};

export default function ServicesGrid({
  featuredOnly = false,
}: ServicesGridProps) {
  const items = featuredOnly
    ? services.filter((service) => service.featured)
    : services;

  return (
    <div
      className="
mx-auto
mt-16
grid
max-w-7xl
gap-7
md:grid-cols-2
xl:grid-cols-3
"
    >
      {items.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
        />
      ))}
    </div>
  );
}