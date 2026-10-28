import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "免費沖繩親子檢查表",
  description:
    "留下 Email，完成確認後即可開啟沖繩租車證件檢查表。",
  alternates: {
    canonical: "/newsletter"
  }
};

export default function NewsletterPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">免費沖繩親子檢查表</h1>
      <p className="mt-4 text-base leading-8 text-[#5f594f]">
        出發前最容易卡住的租車證件，我整理成一張可直接勾選的清單。留下 Email、完成確認後就能開啟；
        領取後不會自動加入多封行前信的寄送流程。
      </p>

      <div className="mt-8">
        <NewsletterSignup spacing="page" />
      </div>

      <h2 className="mt-14 text-2xl font-bold text-[#34302b]">這張檢查表有什麼</h2>
      <p className="mt-3 text-sm leading-7 text-[#5f594f]">
        依出發前一個月到取車當天的順序，先確認日文譯本、駕照正本、護照、取還車時間與兒童安全座椅。到櫃檯前勾一次，就不用臨時翻聊天紀錄找資料。
      </p>

      <div className="mt-10 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-5 text-sm leading-7 text-[#5f594f]">
        Email 用於寄送確認信、提供本次檢查表，以及日後可能寄送的本站更新通知。領取後不會自動加入多封行前信的寄送流程；你可以隨時取消訂閱。我們不會出售或提供 Email 給第三方作行銷使用，詳細寫在
        <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/privacy">
          隱私權政策
        </Link>
        。
      </div>
    </section>
  );
}
