import SectionHeading from "@/components/ui/SectionHeading";

import PageHeroBreadcrumb from "./PageHeroBreadcrumb";
import type { PageHeroProps } from "./types";

export default function PageHeroContent({
  badge,
  title,
  highlight,
  description,
  breadcrumbs,
  align = "center",
  size = "large",
}: PageHeroProps) {
  return (
    <div className="relative z-10">

      <SectionHeading
        badge={badge}
        title={title}
        highlight={highlight}
        description={description}
        align={align}
        headingLevel="h1"
        size={size}
        descriptionWidth="xl"
      />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <PageHeroBreadcrumb items={breadcrumbs} />
      )}

    </div>
  );
}