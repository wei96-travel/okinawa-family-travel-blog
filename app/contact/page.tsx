import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
  description: "聯絡沖繩親子旅遊筆記，提供文章勘誤、資料補充、旅行經驗分享與合作洽詢方式。",
  alternates: {
    canonical: "/contact",
    languages: {
      "zh-TW": "/contact",
      en: "/en/contact",
      "x-default": "/contact"
    }
  }
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">CONTACT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">聯絡沖繩親子旅遊筆記</h1>
      <div className="prose-travel mt-8">
        <p>
          如果你發現文章裡有需要更新的地方、想補充實際旅行經驗，或有合作提案，可以透過 Facebook 私訊聯絡。
        </p>
        <p>
          傳訊息時，請附上文章名稱或網址，再簡單說明想補充的內容，這樣會比較快找到你提到的位置。
        </p>
        <h2>目前聯絡方式</h2>
        <div className="not-prose mt-5 border-l-4 border-[#b77a4f] bg-[#fbf6ee] px-5 py-5">
          <p className="text-base font-semibold text-[#34302b]">Facebook 私訊</p>
          <p className="mt-2 text-sm leading-7 text-[#5f594f]">
            進入 Wei Fan 的 Facebook 個人檔案後，點選「訊息」即可聯絡。
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-[#694624] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
            href="https://www.facebook.com/profile.php?id=61588725730543"
            rel="noreferrer"
            target="_blank"
          >
            前往 Facebook 聯絡
          </a>
        </div>
        <h2>可以聯絡什麼</h2>
        <ul>
          <li>文章內容有錯誤或需要更新。</li>
          <li>想補充家庭旅行經驗或問題。</li>
          <li>合作或媒體洽詢。</li>
        </ul>
        <p>
          目前不公開私人電話、住址或 LINE。網站專用信箱與其他聯絡管道建立後，會再補到這一頁。
        </p>
      </div>
    </section>
  );
}
