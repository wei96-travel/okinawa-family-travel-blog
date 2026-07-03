import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "沖繩親子旅遊筆記的隱私權政策。"
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">隱私權政策</h1>
      <div className="prose-travel mt-8">
        <p>
          本網站重視你的隱私。當你瀏覽本站時，可能會透過網站分析工具了解整體瀏覽狀況，例如頁面瀏覽量、使用裝置與來源管道。這些資料會以彙整方式使用，不會用來辨識你的個人身分。
        </p>
        <h2>Cookie 與分析工具</h2>
        <p>本站已預留 Google Analytics 設定位置，但目前尚未填入實際追蹤 ID。日後啟用時，可能會使用 Cookie 協助分析網站表現。</p>
        <h2>外部連結</h2>
        <p>本站文章可能包含外部網站連結。當你點擊並離開本站後，該網站的隱私政策將由對方負責，建議你自行確認。</p>
        <h2>聯絡</h2>
        <p>若你對隱私權政策有任何疑問，可透過網站日後公布的聯絡方式與我們聯繫。</p>
      </div>
    </section>
  );
}
