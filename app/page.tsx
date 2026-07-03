import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CategoryPill } from "@/components/category-pill";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/site";

const readingPath = [
  {
    step: "01",
    title: "先決定住哪一區",
    description: "用天數、班機時間和孩子作息，先把住宿範圍縮小。",
    href: "/blog/first-okinawa-where-to-stay"
  },
  {
    step: "02",
    title: "再挑適合家庭的飯店",
    description: "不要只看海景，也要看房型、停車、早餐和洗衣。",
    href: "/blog/how-to-choose-family-hotel"
  },
  {
    step: "03",
    title: "最後安排南部或那霸收尾",
    description: "把最後一天交通壓力降下來，旅程會舒服很多。",
    href: "/blog/south-okinawa-family-stay"
  }
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <div>
      <section className="bg-[#fffdf8]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-lg border border-[#eadfce] bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[360px] bg-[#f6efe4] lg:min-h-[560px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/okinawa-family-hero.png"
                alt="沖繩海邊親子旅行筆記封面"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a22]/55 via-[#2f2a22]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold tracking-[0.22em]">OKINAWA FAMILY NOTES</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/90">
                  住宿、行程、親子景點與租車交通，寫給第一次出發的家庭。
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
              <p className="text-sm font-semibold text-[#9a6b43]">日本親子旅遊</p>
              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-[#34302b] sm:text-5xl">
                第一次帶孩子去沖繩，也可以慢慢來。
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-9 text-[#5f594f]">
                不追逐打卡清單，而是把住宿區域、移動節奏、孩子作息和大人的疲勞感，一起放進旅行規劃裡。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-[#694624] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#543719]"
                  href="/blog"
                >
                  看最新文章
                </Link>
                <Link
                  className="rounded-full border border-[#d7c7af] px-5 py-3 text-sm font-semibold text-[#694624] transition hover:bg-[#fbf6ee]"
                  href="/about"
                >
                  關於這份筆記
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
              第一次規劃沖繩親子自由行，先把住宿、交通和孩子能不能好好休息想清楚，行程自然會變簡單。
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
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
            <h2 className="mt-1 text-2xl font-bold text-[#34302b]">新手爸媽的沖繩筆記</h2>
          </div>
          <Link className="hidden text-sm font-semibold text-[#694624] sm:inline" href="/blog">
            全部文章
          </Link>
        </div>

        {featuredPost ? (
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <ArticleCard post={featuredPost} variant="featured" />
            <div className="grid gap-5">
              {secondaryPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
