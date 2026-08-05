import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Advocate | Income Tax | GST | Legal Services`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.author,

  publisher: siteConfig.name,

  applicationName: siteConfig.shortName,

  category: "Legal Services",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: siteConfig.locale,

    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  alternates: {
    canonical: siteConfig.url,
  },

  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <AnnouncementBar />

        {children}
      </body>
    </html>
  );
}