import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SKM Laws And Associates",
    short_name: "SKM Laws",

    description:
      "Legal, GST and Income Tax Advisory Services",

    start_url: "/",

    display: "standalone",

    background_color: "#07111d",

    theme_color: "#07111d",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}