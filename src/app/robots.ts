import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://skmlaws.in/sitemap.xml",

    host: "https://skmlaws.in",
  };
}