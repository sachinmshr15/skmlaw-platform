export interface Service {
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