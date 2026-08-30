import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "合作連結說明",
  description: "沖繩親子旅遊筆記使用合作連結的方式與內容原則。",
  alternates: {
    canonical: "/affiliate-disclosure"
  }
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">合作連結說明</h1>
      <div className="prose-travel mt-8">
        <p>
          本站以整理旅遊資訊為主，部分文章會附上相關合作連結，方便讀者自行查看。價格、庫存、票種、取消規則與商品規格，仍以合作平台的最新資訊為準。
        </p>
        <h2>有疑問時</h2>
        <p>
          如果你對某一個連結或本站的合作方式有疑問，可以透過
          <Link href="/contact">聯絡頁</Link>
          告訴我們。
        </p>
      </div>
    </section>
  );
}
