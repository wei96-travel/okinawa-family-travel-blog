import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
  description: "沖繩親子慢旅筆記的聯絡頁，提供內容勘誤、資料補充與合作洽詢說明。"
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">CONTACT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">聯絡沖繩親子慢旅筆記</h1>
      <div className="prose-travel mt-8">
        <p>
          如果你正在規劃沖繩家庭旅行，發現文章裡有需要更新的地方，或想補充實際旅行經驗，之後可以透過這裡聯絡。
        </p>
        <p>
          網站目前先不開放留言，避免垃圾留言和審核負擔。現階段會優先把文章內容整理得穩、資料來源清楚，再慢慢建立讀者互動。
        </p>
        <h2>聯絡管道準備中</h2>
        <p>
          目前聯絡信箱與表單還在規劃中，暫時不放不存在的信箱，避免讀者寄出後收不到回覆。
        </p>
        <blockquote>聯絡信箱尚未啟用。之後開通正式聯絡方式時，會在這裡公布。</blockquote>
        <h2>可以聯絡什麼</h2>
        <ul>
          <li>文章內容有錯誤或需要更新。</li>
          <li>想補充家庭旅行經驗或問題。</li>
          <li>合作、聯盟行銷或媒體洽詢。</li>
        </ul>
      </div>
    </section>
  );
}
