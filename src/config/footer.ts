import {
  Receipt,
  Landmark,
  Scale,
  FileCheck,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

export const footerConfig = {
  brand: {
    description:
      "Professional legal, taxation and business advisory services specializing in Income Tax, GST, Appeals, Litigation, Business Registration and Regulatory Compliance across India.",

    trustTitle: "Trusted Tax & Legal Advisors",

    trustDescription:
      "Delivering practical, ethical and result-oriented professional services with transparency and long-term client relationships.",
  },

  office: {
    workingDays: "Monday – Saturday",

    workingHours: "10:00 AM – 7:00 PM",
  },

  practiceAreas: [
    {
      title: "Income Tax",
      icon: Receipt,
    },

    {
      title: "GST Advisory",
      icon: Landmark,
    },

    {
      title: "Tax Litigation",
      icon: Scale,
    },

    {
      title: "Income Tax Appeals",
      icon: FileCheck,
    },

    {
      title: "Business Registration",
      icon: Building2,
    },

    {
      title: "Business Advisory",
      icon: BriefcaseBusiness,
    },
  ],
} as const;