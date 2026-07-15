import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { categoryDefinitions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";
  const staticRoutes = ["", "/blog", "/about", "/contact", "/privacy", "/affiliate-disclosure"].map((route) => ({
    url: siteUrl + route,
    lastModified: new Date()
  }));

  const categoryRoutes = categoryDefinitions.map((category) => ({
    url: siteUrl + "/category/" + category.slug,
    lastModified: new Date()
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: siteUrl + "/blog/" + post.slug,
    lastModified: new Date(post.modifiedDate)
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
