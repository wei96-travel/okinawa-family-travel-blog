import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CategoryPill } from "@/components/category-pill";
import { JsonLd } from "@/components/json-ld";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";

export const metadata: Metadata = {
  title: {
    absolute: "2026 沖繩親子自由行攻略｜行程、住宿、租車與景點"
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-TW": "/",
      en: "/en",
      "x-default": "/"
    }
  }
};

const readingPath = [
  {
    step: "01",
    title: "先決定住哪一區",
    description: "用天數、班機時間和孩子作息，先把住宿範圍縮小。",
    href: "/blog/first-okinawa-where-to-stay"
  },
  {
    step: "02",
    title: "想住海邊，先看恩納",
    description: "判斷度假飯店是否值得住兩晚，以及晚餐、自駕怎麼安排。",
    href: "/blog/onna-family-stay-guide"
  },
  {
    step: "03",
    title: "想住市區，再看那霸",
    description: "確認第一晚或最後一晚放那霸，能不能讓交通更輕鬆。",
    href: "/blog/naha-family-stay-guide"
  }
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": siteUrl + "/#website",
          url: siteUrl,
          name: "沖繩親子旅遊筆記",
          alternateName: "Okinawa Family Notes",
          publisher: {
            "@id": siteUrl + "/#organization"
          }
        }}
      />
      <div>
      <section className="border-b border-[#eadfce] bg-white">
        <div className="relative isolate mx-auto min-h-[520px] max-w-[1440px] overflow-hidden sm:min-h-[560px]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-25 sm:opacity-35"
            fetchPriority="high"
            src="/images/okinawa-attractions-cover.webp"
          />
          <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-5 py-12 sm:min-h-[560px] sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-[#087f8c]">2026 沖繩親子自由行</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#143942] sm:text-5xl lg:text-6xl">
                第一次帶孩子去沖繩，也可以慢慢來。
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-9 text-[#31545a]">
                住宿住哪一區、租車怎麼準備、景點怎麼取捨，這裡整理給第一次帶孩子出發的家庭。
              </p>
              <p className="mt-4 text-sm font-semibold text-[#31545a]">
                住宿規劃 <span className="px-2 text-[#df6b52]">·</span> 租車交通
                <span className="px-2 text-[#df6b52]">·</span> 親子景點
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="rounded-md bg-[#171717] px-5 py-3 text-sm font-bold !text-white shadow-sm transition hover:bg-black"
                  href="/blog/first-okinawa-where-to-stay"
                >
                  第一次去，從這裡開始
                </Link>
                <Link
                  className="rounded-md border border-[#77bbb4] bg-white/90 px-5 py-3 text-sm font-bold text-[#126570] transition hover:bg-white"
                  href="/blog"
                >
                  看所有攻略
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-[#9a6b43]">START HERE</p>
            <h2 className="mt-2 text-2xl font-bold text-[#34302b]">先從最需要的主題開始</h2>
            <p className="mt-3 text-base leading-8 text-[#5f594f]">
              第一次規劃沖繩家庭旅行，先把住宿、交通和孩子能不能好好休息想清楚，行程自然會變簡單。
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
            <div className="mt-4 w-full space-y-3 border-t border-[#eadfce] pt-4">
              <Link
                className="block text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
                href="/okinawa-family-trip-booking"
              >
                已經準備下訂？先看住宿、租車與用品整理
              </Link>
              <Link
                className="block text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
                href="/okinawa-family-travel-gear"
              >
                已經開始整理行李？看核對過的用品清單
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe4]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold text-[#9a6b43]">FIRST TRIP READING PATH</p>
            <h2 className="mt-2 text-2xl font-bold text-[#34302b]">第一次去沖繩，建議照這個順序看</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {readingPath.map((item) => (
              <Link
                className="rounded-lg border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                href={item.href}
                key={item.href}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#9a6b43]">{item.step}</p>
                <h3 className="mt-3 text-xl font-bold text-[#34302b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#9a6b43]">LATEST NOTES</p>
            <h2 className="mt-1 text-2xl font-bold text-[#34302b]">第一次出發的家庭筆記</h2>
          </div>
          <Link className="hidden text-sm font-semibold text-[#694624] sm:inline" href="/blog">
            全部文章
          </Link>
        </div>

        {featuredPost ? (
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <ArticleCard post={featuredPost} variant="featured" />
            <div className="grid gap-5">
              {secondaryPosts.slice(0, 2).map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
      </div>
    </>
  );
}
