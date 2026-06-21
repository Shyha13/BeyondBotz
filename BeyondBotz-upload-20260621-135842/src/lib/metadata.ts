import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/beyondbotz-research-hero.png",
          width: 1536,
          height: 864,
          alt: "A dark robotics research workspace with analytics and autonomous trajectory visuals."
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/images/beyondbotz-research-hero.png"]
    }
  };
}
