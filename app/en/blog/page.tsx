import type { Metadata } from "next";
import { EnglishArticleCard } from "@/components/english-article-card";
import { JsonLd } from "@/components/json-ld";
import { getAllEnglishPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";

export const metadata: Metadata = {
  title: "Okinawa Family Travel Guides",
  description: "English guides for planning an Okinawa trip with children, including accommodation areas, rental car seats and Churaumi Aquarium.",
  alternates: {
    canonical: "/en/blog",
    languages: {
      "zh-TW": "/blog",
      en: "/en/blog",
      "x-default": "/blog"
    }
  }
};

export default function EnglishBlogPage() {
  const posts = getAllEnglishPosts();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": siteUrl + "/en/blog#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Okinawa Family Notes", item: siteUrl + "/en" },
            { "@type": "ListItem", position: 2, name: "English guides", item: siteUrl + "/en/blog" }
          ]
        }}
      />
      <section className="border-b border-[#eadfce] bg-[#f6efe4]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#9a6b43]">FAMILY GUIDES</p>
          <h1 className="mt-3 text-3xl font-bold text-[#34302b] sm:text-4xl">Okinawa planning, one decision at a time</h1>
          <p className="mt-4 max-w-3xl text-lg leading-9 text-[#5f594f]">
            These are not translated checklists. Each guide is rewritten around the questions families commonly need to answer before the trip.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {posts.map((post) => (
          <EnglishArticleCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
