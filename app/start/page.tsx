import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "沖繩親子自由行從哪裡開始？",
  description: "先選你現在最需要解決的事：住宿、租車自駕，或景點與行程。",
  alternates: {
    canonical: "/start"
  },
  robots: {
    index: false,
    follow: true
  }
};

const paths = [
  {
    step: "01",
    title: "第一次規劃，先決定住哪一區",
    description: "先用天數、班機時間與孩子作息，把住宿範圍縮小。",
    href: "/blog/first-okinawa-where-to-stay"
  },
  {
    step: "02",
    title: "要租車自駕，先把第一天顧好",
    description: "從日文譯本、取車到安全座椅，先排除到現場才卡住的事。",
    href: "/okinawa-family-trip-booking"
  },
  {
    step: "03",
    title: "正在排景點與行程",
    description: "用區域、停留時間與雨天備案，把每一天排得不要太趕。",
    href: "/blog"
  }
];

export default function StartPage() {
  return (
    <>
      <section className="border-b border-[#eadfce] bg-white">
        <div className="relative isolate h-44 overflow-hidden sm:h-52">
          <img
            alt="沖繩親子旅行的海邊景色"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
            src="/images/okinawa-attractions-cover.webp"
          />
          <div className="absolute inset-0 bg-[#143942]/35" />
          <div className="relative mx-auto flex h-full max-w-3xl items-end px-5 pb-7 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm font-bold text-[#f6efe4]">沖繩親子自由行</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">從現在最卡的地方開始</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <p className="max-w-2xl text-base leading-8 text-[#5f594f]">
          不用一次看完所有攻略。先選你現在要做的事，下一步再慢慢補齊。
        </p>

        <nav aria-label="沖繩親子旅行起步路徑" className="mt-8 border-y border-[#eadfce]">
          {paths.map((path) => (
            <Link
              className="group grid min-h-32 grid-cols-[3rem_1fr_auto] items-center gap-3 border-b border-[#eadfce] py-5 last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087f8c] focus-visible:ring-inset hover:bg-[#fbf6ee]"
              href={path.href}
              key={path.href}
            >
              <span className="text-sm font-bold text-[#9a6b43]">{path.step}</span>
              <span>
                <span className="block text-lg font-bold leading-snug text-[#34302b] group-hover:text-[#126570]">
                  {path.title}
                </span>
                <span className="mt-2 block text-sm leading-7 text-[#5f594f]">{path.description}</span>
              </span>
              <span aria-hidden="true" className="text-2xl leading-none text-[#087f8c]">
                &gt;
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-12 border-t border-[#eadfce] pt-10">
          <p className="text-sm font-semibold text-[#9a6b43]">還沒開始訂，也可以先做一件小事</p>
          <h2 className="mt-2 text-2xl font-bold text-[#34302b]">先把租車證件準備好</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f594f]">
            留下 Email，我們會先寄租車證件檢查表；確認信點完才算訂閱，之後再依出發前的節奏寄幾封行前信。
          </p>
          <div className="mt-6">
            <NewsletterSignup spacing="page" />
          </div>
        </div>
      </section>
    </>
  );
}
