import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
  description: "聯絡沖繩親子慢旅筆記，提供問題、補充資料或合作洽詢。"
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">CONTACT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">聯絡沖繩親子慢旅筆記</h1>
      <div className="prose-travel mt-8">
        <p>
          如果你正在規劃第一次沖繩親子旅行，有想問的問題、想補充的資訊，或發現文章裡有需要更新的地方，之後可以透過這裡聯絡。
        </p>
        <p>
          網站目前先不開放留言，避免垃圾留言和審核負擔。比起公開留言，我更希望先把內容整理得穩、資料來源清楚，再慢慢建立讀者互動。
        </p>
        <h2>暫時聯絡方式</h2>
        <p>
          正式上線前，這裡先預留聯絡頁。等你決定要使用的信箱或表單服務後，可以把聯絡方式放在這裡。
        </p>
        <blockquote>建議正式信箱格式：hello@你的網域.com</blockquote>
        <h2>可以聯絡什麼</h2>
        <ul>
          <li>文章內容有錯誤或需要更新。</li>
          <li>想補充親子旅行經驗或問題。</li>
          <li>合作、聯盟行銷或媒體洽詢。</li>
        </ul>
      </div>
    </section>
  );
}
