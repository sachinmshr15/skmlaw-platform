import type { Service } from "@/types/site";

import {
  Calculator,
  Landmark,
  Scale,
  Building2,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

export const services: Service[] = [
  {
    title: "Income Tax",
    slug: "income-tax",
    icon: Calculator,
    description:
      "ITR filing, tax audit, notices, assessment, appeals and comprehensive income tax advisory services.",
  },

  {
    title: "GST Services",
    slug: "gst",
    icon: Landmark,
    description:
      "GST registration, return filing, audit, refund, compliance and litigation support for businesses.",
  },

  {
    title: "Appeals & Litigation",
    slug: "appeals",
    icon: Scale,
    description:
      "Professional representation before Income Tax, GST and other statutory authorities.",
  },

  {
    title: "Business Registration",
    slug: "business-registration",
    icon: Building2,
    description:
      "Proprietorship, Partnership, LLP, Private Limited Company, MSME and Startup registrations.",
  },

  {
    title: "Tax Planning",
    slug: "tax-planning",
    icon: BriefcaseBusiness,
    description:
      "Strategic tax planning, capital gains advisory and business structuring solutions.",
  },

  {
    title: "Business Advisory",
    slug: "business-advisory",
    icon: BookOpen,
    description:
      "Business compliance, legal documentation, advisory and ongoing professional support.",
  },
];