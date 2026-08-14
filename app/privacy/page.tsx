import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "沖繩親子旅遊筆記的隱私權政策。",
  alternates: {
    canonical: "/privacy",
    languages: {
      "zh-TW": "/privacy",
      en: "/en/privacy",
      "x-default": "/privacy"
    }
  }
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">隱私權政策</h1>
      <div className="prose-travel mt-8">
        <p>最後更新日期：2026 年 8 月 14 日</p>
        <p>
          本網站重視你的隱私。當你瀏覽本站時，可能會透過網站分析工具了解整體瀏覽狀況，例如頁面瀏覽量、使用裝置與來源管道。這些資料會以彙整方式使用，不會用來辨識你的個人身分。
        </p>
        <h2>Cookie 與分析工具</h2>
        <p>
          本站使用 Google Analytics 4 分析整體瀏覽狀況，可能透過 Cookie 收集裝置、瀏覽頁面、停留時間與來源管道等資訊。本站使用這些彙整資料改善內容與閱讀體驗，不會要求你提供姓名或聯絡資料。你也可以透過瀏覽器設定限制或刪除 Cookie。
        </p>
        <h2>Google 廣告服務</h2>
        <p>
          本站若啟用 Google AdSense，Google 等第三方供應商可能使用 Cookie，依使用者造訪本站或其他網站的情況顯示廣告。使用者可以前往
          <a href="https://adssettings.google.com/" rel="noreferrer" target="_blank">
            Google 廣告設定
          </a>
          管理個人化廣告。若法規或 Google 政策要求取得同意，本站會提供相應的隱私選項。
        </p>
        <h2>電子報訂閱</h2>
        <p>
          你可以選擇在本站留下 Email 訂閱行前信並取得免費檢查表。這是自願提供的，不留 Email 也能閱讀站上所有內容。
        </p>
        <p>
          訂閱資料由電子報服務商 Kit（ConvertKit, Inc.）代為儲存與寄送，因此你的 Email 會傳輸並保存在該服務商的伺服器。本站只會用它寄送沖繩親子旅行相關的行前信件與網站更新，
          <strong>不會販售、出租或提供給其他第三方</strong>。
        </p>
        <p>
          送出 Email 後會收到一封確認信，點擊信中連結才會完成訂閱。之後每一封信的最下方都有取消訂閱連結，取消後你的 Email 會從名單中移除；你也可以透過聯絡頁要求刪除。
        </p>
        <h2>外部連結</h2>
        <p>本站文章可能包含外部網站連結。當你點擊並離開本站後，該網站的隱私政策將由對方負責，建議你自行確認。</p>
        <h2>聯絡</h2>
        <p>
          若你對隱私權政策有任何疑問，可透過本站的
          <Link href="/contact">聯絡頁</Link>
          與我們聯繫。
        </p>
      </div>
    </section>
  );
}
