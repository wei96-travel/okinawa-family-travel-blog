import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "沖繩親子旅遊筆記的隱私權政策。",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">隱私權政策</h1>
      <div className="prose-travel mt-8">
        <p>最後更新日期：2026 年 7 月 9 日</p>
        <p>
          本網站重視你的隱私。當你瀏覽本站時，可能會透過網站分析工具了解整體瀏覽狀況，例如頁面瀏覽量、使用裝置與來源管道。這些資料會以彙整方式使用，不會用來辨識你的個人身分。
        </p>
        <h2>Cookie 與分析工具</h2>
        <p>
          本站使用 Google Analytics 4 分析整體瀏覽狀況，可能透過 Cookie 收集裝置、瀏覽頁面、停留時間與來源管道等資訊。本站使用這些彙整資料改善內容與閱讀體驗，不會要求你提供姓名或聯絡資料。你也可以透過瀏覽器設定限制或刪除 Cookie。
        </p>
        <h2>外部連結</h2>
        <p>本站文章可能包含外部網站連結。當你點擊並離開本站後，該網站的隱私政策將由對方負責，建議你自行確認。</p>
        <h2>聯絡</h2>
        <p>若你對隱私權政策有任何疑問，可透過網站日後公布的聯絡方式與我們聯繫。</p>
      </div>
    </section>
  );
}
