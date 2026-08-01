import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
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
  metadataBase: new URL("https://www.skmlaws.com"),

  title: {
    default: "SKM Laws & Associates | Advocate | Income Tax | GST | Legal Services",
    template: "%s | SKM Laws & Associates",
  },

  description:
    "SKM Laws & Associates provides professional legal, Income Tax, GST, litigation, appeals and business advisory services across India.",

  keywords: [
    "SKM Laws",
    "Advocate Sachin Kumar Mishra",
    "Income Tax Consultant",
    "GST Consultant",
    "GST Registration",
    "GST Return Filing",
    "Income Tax Return",
    "ITR Filing",
    "Tax Planning",
    "Business Registration",
    "GST Appeal",
    "Income Tax Appeal",
    "Tax Litigation",
    "Legal Services",
    "Sitapur Advocate",
    "Misrikh Advocate",
    "Uttar Pradesh Advocate",
  ],

  authors: [
    {
      name: "Advocate Sachin Kumar Mishra",
    },
  ],

  creator: "SKM Laws & Associates",

  publisher: "SKM Laws & Associates",

  applicationName: "SKM Laws",

  category: "Legal Services",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "SKM Laws & Associates | Legal, GST & Income Tax Experts",

    description:
      "Professional legal, GST and Income Tax advisory services for individuals, businesses and startups.",

    url: "https://www.skmlaws.com",

    siteName: "SKM Laws & Associates",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/skm-logo.png",
        width: 1200,
        height: 630,
        alt: "SKM Laws & Associates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SKM Laws & Associates",

    description:
      "Professional Legal, GST & Income Tax Advisory.",

    images: ["/skm-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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