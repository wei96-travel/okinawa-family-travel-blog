import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CategoryPill } from "@/components/category-pill";
import { getAllPosts } from "@/lib/posts";
import { categories, categoryDefinitions } from "@/lib/site";

export const metadata: Metadata = {
  title: "文章閱讀中心",
  description: "第一次去沖繩的親子旅遊閱讀中心，依住宿、行程、景點、租車交通與旅遊用品整理。"
};

const starterPath = [
  {
    title: "第一次去沖繩住哪裡？",
    description: "先用天數、班機和孩子作息，縮小住宿區域。",
    href: "/blog/first-okinawa-where-to-stay"
  },
  {
    title: "恩納海邊飯店值得住兩晚嗎？",
    description: "想住海邊度假飯店，先確認自駕、晚餐與停留時間。",
    href: "/blog/onna-family-stay-guide"
  },
  {
    title: "那霸適合家庭住嗎？",
    description: "判斷第一晚或最後一晚要不要放那霸。",
    href: "/blog/naha-family-stay-guide"
  },
  {
    title: "5 天 4 夜怎麼排？",
    description: "把住宿、車程、午睡和雨天備案排成一條舒服路線。",
    href: "/blog/okinawa-5-days-family-itinerary"
  }
];

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      <section className="bg-[#f6efe4]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#9a6b43]">READING CENTER</p>
            <h1 className="mt-3 text-3xl font-bold text-[#34302b] sm:text-4xl">第一次去沖繩，從這裡慢慢讀</h1>
            <p className="mt-4 text-lg leading-9 text-[#5f594f]">
              這裡不是景點清單，而是一條給新手家庭的閱讀路線。先決定住哪裡，再排天數、交通和雨天備案。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#9a6b43]">STARTER PATH</p>
          <h2 className="mt-1 text-2xl font-bold text-[#34302b]">第一次出發，建議照這 4 步讀</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {starterPath.map((item, index) => (
            <Link
              className="rounded-lg border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              href={item.href}
              key={item.href}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-[#9a6b43]">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-[#34302b]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#9a6b43]">TOPICS</p>
          <h2 className="mt-1 text-2xl font-bold text-[#34302b]">依照你現在最煩惱的問題讀</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {categoryDefinitions.map((category) => (
            <Link
              className="overflow-hidden rounded-lg border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              href={"/category/" + category.slug}
              key={category.slug}
            >
              <img alt="" className="aspect-[4/3] w-full object-cover" src={category.image} />
              <div className="p-5">
                <h3 className="font-bold text-[#34302b]">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f594f]">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#9a6b43]">ALL NOTES</p>
            <h2 className="mt-1 text-2xl font-bold text-[#34302b]">所有文章</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
          {posts.slice(3).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
