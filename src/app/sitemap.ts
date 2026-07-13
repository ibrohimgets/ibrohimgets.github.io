import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

// Emitted as a static /sitemap.xml during `next build` (output: 'export').
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
