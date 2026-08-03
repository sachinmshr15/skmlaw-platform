export type KnowledgeArticle = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  slug: string;
  readTime: string;
  featured?: boolean;
};

export const knowledge: KnowledgeArticle[] = [
  {
    id: 1,
    category: "Income Tax",
    title: "Common Income Tax Return Filing Mistakes Every Taxpayer Should Avoid",
    excerpt:
      "Learn the most common ITR filing mistakes that can lead to notices, delays and unnecessary tax disputes.",
    slug: "/knowledge/income-tax-return-filing-mistakes",
    readTime: "5 min read",
    featured: true,
  },

  {
    id: 2,
    category: "GST",
    title: "GST Compliance Checklist for Small Businesses",
    excerpt:
      "A practical checklist to help businesses remain GST compliant throughout the financial year.",
    slug: "/knowledge/gst-compliance-checklist",
    readTime: "6 min read",
  },

  {
    id: 3,
    category: "Business",
    title: "Business Registration Guide for Startups in India",
    excerpt:
      "Understand the essential legal registrations every startup should complete before commencing operations.",
    slug: "/knowledge/business-registration-guide",
    readTime: "7 min read",
  },
];