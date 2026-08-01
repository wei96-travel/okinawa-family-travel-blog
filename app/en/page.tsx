import type { Metadata } from "next";
import Link from "next/link";
import { EnglishArticleCard } from "@/components/english-article-card";
import { JsonLd } from "@/components/json-ld";
import { getAllEnglishPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";

export const metadata: Metadata = {
  title: "Okinawa with Kids: Practical Family Travel Guides",
  description: "Start planning an Okinawa family trip with clear guides to accommodation areas, child car seats and Churaumi Aquarium.",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-TW": "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "Okinawa with Kids: Practical Family Travel Guides",
    description: "Clear, practical planning notes for a first Okinawa trip with children.",
    url: "/en",
    type: "website"
  }
};

export default function EnglishHomePage() {
  const posts = getAllEnglishPosts();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": siteUrl + "/en/#website",
          name: "Okinawa Family Notes",
          url: siteUrl + "/en",
          inLanguage: "en"
        }}
      />
      <section className="border-b border-[#eadfce] bg-[#f6efe4]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#9a6b43]">OKINAWA WITH KIDS</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#34302b] sm:text-5xl">
              Plan the parts of an Okinawa family trip that usually cause the most stress
            </h1>
            <p className="mt-5 text-lg leading-9 text-[#5f594f]">
              Choose a base that fits your route, reserve the right child seat and leave enough time for the aquarium. These guides focus on decisions a family can make before arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#9a6b43]">START HERE</p>
            <h2 className="mt-1 text-2xl font-bold text-[#34302b]">Three guides for a first family trip</h2>
          </div>
          <Link className="text-sm font-semibold text-[#694624]" href="/en/blog">
            View all English guides
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <EnglishArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
