export type Service = {
  slug: string;

  title: string;

  shortTitle: string;

  description: string;

  longDescription: string;

  highlights: string[];

  icon: string;

  featured: boolean;

  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "income-tax",

    title: "Income Tax Advisory",

    shortTitle: "Income Tax",

    description:
      "Income Tax return filing, notices, assessments, appeals and strategic tax planning for individuals and businesses.",

    longDescription:
      "",

    highlights: [],

    icon: "receipt",

    featured: true,

    seo: {
      title: "",
      description: "",
    },
  },

  {
    slug: "gst-advisory",

    title: "GST Advisory & Compliance",

    shortTitle: "GST",

    description:
      "GST registration, return filing, departmental notices, audits and litigation support.",

    longDescription:
      "",

    highlights: [],

    icon: "badge-percent",

    featured: true,

    seo: {
      title: "",
      description: "",
    },
  },

  {
    slug: "tax-appeals",

    title: "Tax Appeals & Litigation",

    shortTitle: "Appeals",

    description:
      "Professional representation before appellate authorities in direct and indirect tax matters.",

    longDescription:
      "",

    highlights: [],

    icon: "scale",

    featured: true,

    seo: {
      title: "",
      description: "",
    },
  },

  {
    slug: "business-advisory",

    title: "Business Advisory",

    shortTitle: "Business",

    description:
      "Business structuring, registrations, compliance planning and strategic advisory services.",

    longDescription:
      "",

    highlights: [],

    icon: "briefcase",

    featured: true,

    seo: {
      title: "",
      description: "",
    },
  },

  {
    slug: "startup-consulting",

    title: "Startup Consulting",

    shortTitle: "Startups",

    description:
      "Entity formation, legal documentation, taxation and compliance support for startups.",

    longDescription:
      "",

    highlights: [],

    icon: "rocket",

    featured: false,

    seo: {
      title: "",
      description: "",
    },
  },

  {
    slug: "legal-documentation",

    title: "Legal Documentation",

    shortTitle: "Documentation",

    description:
      "Drafting, agreements, legal notices and documentation for businesses and individuals.",

    longDescription:
      "",

    highlights: [],

    icon: "file-text",

    featured: false,

    seo: {
      title: "",
      description: "",
    },
  },
];