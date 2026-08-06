// ============================================================================
// SKM Laws And Associates
// Enterprise SEO Configuration
// Build 022.5 – Release 1
// ============================================================================

import { siteConfig } from "./site";

export const seoConfig = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.shortName} | Advocate & Tax Consultant`,
    template: `%s | ${siteConfig.shortName}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.shortName,

  category: "Legal Services",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.author,

  publisher: siteConfig.shortName,

  keywords: [...siteConfig.keywords],

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website" as const,

    locale: siteConfig.locale,

    url: siteConfig.url,

    siteName: siteConfig.shortName,

    title: `${siteConfig.shortName} | Advocate & Tax Consultant`,

    description: siteConfig.description,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.shortName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image" as const,

    title: `${siteConfig.shortName} | Advocate & Tax Consultant`,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview": "large" as const,

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
} as const;