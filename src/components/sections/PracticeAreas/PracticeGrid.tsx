import { services } from "@/content/services";
import PracticeCard from "./PracticeCard";

export default function PracticeGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <PracticeCard
          key={service.slug}
          service={service}
        />
      ))}
    </div>
  );
}