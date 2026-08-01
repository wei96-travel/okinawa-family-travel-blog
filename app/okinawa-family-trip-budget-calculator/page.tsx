import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { OkinawaBudgetCalculator } from "@/components/okinawa-budget-calculator";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";
const pagePath = "/okinawa-family-trip-budget-calculator";

export const metadata: Metadata = {
  title: "沖繩親子旅費計算器｜一家人自由行預算快速試算",
  description:
    "輸入成人、兒童、天數、旅行方式與交通選擇，快速估算沖繩親子自由行的住宿、餐飲、交通、景點與備用金。免登入，不儲存個人資料。",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "沖繩親子旅費計算器",
    description: "不用自己做試算表，幾個簡單選項就能先抓出全家沖繩旅行預算。",
    url: pagePath,
    type: "website"
  }
};

export default function OkinawaFamilyTripBudgetCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "沖繩親子旅費計算器",
          url: siteUrl + pagePath,
          applicationCategory: "TravelApplication",
          operatingSystem: "Web",
          inLanguage: "zh-TW",
          offers: { "@type": "Offer", price: "0", priceCurrency: "TWD" }
        }}
      />

      <div className="border-b border-[#eadfce] bg-[#fffdf8]">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#9a6b43]">免費試算</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#34302b] sm:text-4xl">
            沖繩親子旅費計算器
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f594f] sm:text-lg">
            輸入人數、天數與旅行方式，快速估算一家人的旅費範圍。
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f594f]">
            <span>免登入</span>
            <span>不儲存個人資料</span>
            <span>約 1 分鐘完成</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <OkinawaBudgetCalculator />

        <section className="mt-10 border-t border-[#eadfce] pt-8">
          <h2 className="text-xl font-bold text-[#34302b]">這份估算適合什麼時候用？</h2>
          <p className="mt-3 text-base leading-8 text-[#5f594f]">
            適合還沒訂房、正在比較旅行方式的早期規劃。實際價格會受到出發月份、房型、孩子年齡、租車公司與景點選擇影響，付款前仍要以各平台最後顯示的條件為準。
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-[#694624]">
            <Link className="underline decoration-[#d7c7af] underline-offset-4" href="/okinawa-family-trip-booking">
              查看住宿、租車與票券整理
            </Link>
            <Link className="underline decoration-[#d7c7af] underline-offset-4" href="/blog/first-okinawa-where-to-stay">
              第一次去沖繩住哪裡
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
