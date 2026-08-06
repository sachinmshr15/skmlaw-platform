// ============================================================================
// SKM Laws And Associates
// Knowledge Centre Configuration
// Build 023.2
// ============================================================================

import type { Article } from "@/types/article";

export const knowledgeConfig = {
  title: "Knowledge Centre",

  subtitle: "Latest Legal & Tax Insights",

  description:
    "Expert articles on Income Tax, GST, litigation, compliance, tax planning and business advisory.",

  searchPlaceholder: "Search legal articles...",

  featuredSectionTitle: "Featured Insights",

  latestSectionTitle: "Latest Articles",

  popularSectionTitle: "Popular Articles",

  newsletterTitle: "Stay Updated",

  newsletterDescription:
    "Receive practical tax, GST and legal updates directly in your inbox.",

  categories: [
    "All",

    "Income Tax",

    "GST",

    "Appeals",

    "Litigation",

    "Compliance",

    "Business Registration",

    "Company Law",

    "TDS",

    "Tax Planning",

    "Startups",
  ] as const,
} as const;

// ============================================================================
// Initial Articles
// ============================================================================

export const articles: Article[] = [
  {
    slug: "gst-registration-complete-guide",

    title: "GST Registration Complete Guide",

    excerpt:
      "Complete step-by-step guide to GST registration for businesses in India.",

contentFile: "articles/gst-registration.md",

content: "",

category: "GST",

    tags: [
      "GST",
      "Registration",
      "Business",
    ],

    featured: true,

    published: true,

    publishedAt: "2026-08-06",

    updatedAt: "2026-08-06",

    readingTime: 7,

    coverImage:
      "/images/articles/gst-registration.jpg",

    coverImageAlt:
      "GST Registration Guide",

    author: {
      name: "Adv. Sachin Mishra",

      designation:
        "Advocate & Tax Consultant",

      image:
        "/images/team/sachin-mishra.jpg",
    },

    seo: {
      title:
        "GST Registration Complete Guide",

      description:
        "Complete GST Registration Guide for businesses.",

      keywords: [
        "GST",
        "GST Registration",
        "Business Registration",
      ],
    },
  },

  {
    slug: "income-tax-notice-response",

    title:
      "How to Reply to an Income Tax Notice",

    excerpt:
      "Understand different income tax notices and the correct response process.",

    contentFile:
      "articles/income-tax-notice.md",
content: "",
    category: "Income Tax",

    tags: [
      "Income Tax",
      "Notice",
      "Compliance",
    ],

    featured: true,

    published: true,

    publishedAt: "2026-08-06",

    updatedAt: "2026-08-06",

    readingTime: 8,

    coverImage:
      "/images/articles/income-tax-notice.jpg",

    coverImageAlt:
      "Income Tax Notice",

    author: {
      name: "Adv. Sachin Mishra",

      designation:
        "Advocate & Tax Consultant",

      image:
        "/images/team/sachin-mishra.jpg",
    },

    seo: {
      title:
        "Income Tax Notice Guide",

      description:
        "Professional guide to replying to Income Tax notices.",

      keywords: [
        "Income Tax Notice",
        "Income Tax",
      ],
    },
  },

  {
    slug: "gst-appeal-process",

    title:
      "GST Appeal Process Explained",

    excerpt:
      "Complete overview of GST appeals before appellate authorities.",

    contentFile:
      "articles/gst-appeal.md",
content: "",
    category: "Appeals",

    tags: [
      "GST Appeal",
      "Litigation",
    ],

    featured: false,

    published: true,

    publishedAt: "2026-08-06",

    readingTime: 9,

    coverImage:
      "/images/articles/gst-appeal.jpg",

    coverImageAlt:
      "GST Appeal",

    author: {
      name: "Adv. Sachin Mishra",

      designation:
        "Advocate & Tax Consultant",

      image:
        "/images/team/sachin-mishra.jpg",
    },

    seo: {
      title:
        "GST Appeal Process",

      description:
        "Guide to GST appellate proceedings.",

      keywords: [
        "GST Appeal",
        "Appeal",
      ],
    },
  },
];