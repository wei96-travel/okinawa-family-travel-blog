import type { MetadataRoute } from "next";
import { translatedPosts } from "@/lib/i18n";
import { getAllEnglishPosts, getAllPosts } from "@/lib/posts";
import { categoryDefinitions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";
  const localizedStaticRoutes = [
    {
      route: "",
      languages: {
        "zh-TW": siteUrl,
        en: siteUrl + "/en",
        "x-default": siteUrl
      }
    },
    {
      route: "/blog",
      languages: {
        "zh-TW": siteUrl + "/blog",
        en: siteUrl + "/en/blog",
        "x-default": siteUrl + "/blog"
      }
    }
  ].map(({ route, languages }) => ({
    url: siteUrl + route,
    lastModified: new Date(),
    alternates: { languages }
  }));

  const staticRoutes = [
    "/about",
    "/contact",
    "/privacy",
    "/okinawa-family-trip-booking",
    "/okinawa-family-travel-gear"
  ].map(
    (route) => ({
      url: siteUrl + route,
      lastModified: new Date()
    })
  );

  const categoryRoutes = categoryDefinitions.map((category) => ({
    url: siteUrl + "/category/" + category.slug,
    lastModified: new Date()
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: siteUrl + "/blog/" + post.slug,
    lastModified: new Date(post.modifiedDate),
    ...(translatedPosts.find((item) => item.zh === post.slug)
      ? {
          alternates: {
            languages: {
              "zh-TW": siteUrl + "/blog/" + post.slug,
              en:
                siteUrl +
                "/en/blog/" +
                translatedPosts.find((item) => item.zh === post.slug)!.en,
              "x-default": siteUrl + "/blog/" + post.slug
            }
          }
        }
      : {})
  }));

  const englishStaticRoutes = [
    {
      route: "/en",
      languages: {
        "zh-TW": siteUrl,
        en: siteUrl + "/en",
        "x-default": siteUrl
      }
    },
    {
      route: "/en/blog",
      languages: {
        "zh-TW": siteUrl + "/blog",
        en: siteUrl + "/en/blog",
        "x-default": siteUrl + "/blog"
      }
    }
  ].map(({ route, languages }) => ({
    url: siteUrl + route,
    lastModified: new Date(),
    alternates: { languages }
  }));

  const englishPostRoutes = getAllEnglishPosts().map((post) => {
    const translation = translatedPosts.find((item) => item.en === post.slug);
    const chineseUrl = translation ? siteUrl + "/blog/" + translation.zh : siteUrl;
    const englishUrl = siteUrl + "/en/blog/" + post.slug;

    return {
      url: englishUrl,
      lastModified: new Date(post.modifiedDate),
      alternates: {
        languages: {
          "zh-TW": chineseUrl,
          en: englishUrl,
          "x-default": chineseUrl
        }
      }
    };
  });

  return [...localizedStaticRoutes, ...staticRoutes, ...categoryRoutes, ...postRoutes, ...englishStaticRoutes, ...englishPostRoutes];
}
