import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯盟行銷揭露",
  description: "沖繩親子旅遊筆記的聯盟行銷揭露說明。"
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">聯盟行銷揭露</h1>
      <div className="prose-travel mt-8">
        <p>本站部分文章未來可能放置聯盟連結。當你透過這些連結完成訂房、購買或預訂服務時，本站可能取得少量佣金，但不會增加你的購買成本。</p>
        <p>
          我們希望內容仍以讀者需求為優先，推薦與整理會盡量說明適合情境、限制與需要注意的地方。是否購買或預訂，仍建議依照你自己的家庭需求與預算判斷。
        </p>
        <p>若文章包含合作、贊助或聯盟連結，會盡量在文章中清楚標示。</p>
      </div>
    </section>
  );
}
