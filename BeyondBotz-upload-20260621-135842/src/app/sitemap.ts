import type { MetadataRoute } from "next";
import { navigation, platformLinks, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [...navigation, ...platformLinks].filter(
    (item, index, list) => list.findIndex((candidate) => candidate.href === item.href) === index
  );

  return routes.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
