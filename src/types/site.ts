import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export interface Founder {
  name: string;
  designation: string;
  experience: string;
  experienceLabel: string;
  tagline: string;
  shortBio: string;
  highlights: string[];
  cta: string;
}