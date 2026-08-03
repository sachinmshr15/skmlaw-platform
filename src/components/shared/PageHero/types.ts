import { ReactNode } from "react";

export type PageHeroProps = {
  badge?: string;

  title: string;

  highlight?: string;

  description?: string;

  breadcrumbs?: {
    label: string;
    href?: string;
  }[];

  actions?: ReactNode;

  align?: "left" | "center";

  size?: "default" | "large";
};