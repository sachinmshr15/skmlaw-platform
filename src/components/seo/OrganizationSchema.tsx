import { siteConfig } from "@/config/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    email: siteConfig.email,

    telephone: siteConfig.phone,

    logo: `${siteConfig.url}${siteConfig.footerLogo}`,

    image: `${siteConfig.url}${siteConfig.ogImage}`,

    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.x,
    ],

    founder: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}