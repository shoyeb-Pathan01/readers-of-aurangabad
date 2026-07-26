import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://readersofaurangabad.in"

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/community", priority: 0.8 },
    { path: "/books", priority: 0.9 },
    { path: "/meetups", priority: 0.9 },
    { path: "/gallery", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }))
}
