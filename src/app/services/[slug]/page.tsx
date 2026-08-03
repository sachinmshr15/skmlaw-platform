import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";
import ServiceOverview from "@/components/sections/ServiceDetail/ServiceOverview";

import { services } from "@/content/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found | SKM Laws & Associates",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>

        <PageHero
          badge="Professional Service"
          title={service.shortTitle}
          highlight="Services"
          description={service.description}
          breadcrumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: service.shortTitle,
            },
          ]}
        />

        <ServiceOverview
          title={service.title}
          description={service.longDescription}
        />

        <ContactCTA />

      </main>

      <Footer />

    </>
  );
}