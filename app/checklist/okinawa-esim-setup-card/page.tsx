import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩 eSIM 出發前設定檢查表",
  description: "訂閱者專用的沖繩 eSIM 出發前設定檢查表。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checklist/okinawa-esim-setup-card" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "出發前幾天",
    title: "先確認手機和使用方式",
    items: [
      "主要手機支援 eSIM，且沒有被電信商鎖定。",
      "先決定是每位會用網路的大人各買一張，還是由一人開熱點分享。",
      "依旅遊天數、是否常開導航、是否會看影片，選擇天數與流量；不要只看最低價格。",
      "確認方案是否支援熱點、何時開始計算與數據漫遊規則。"
    ],
    note: "不同方案的啟用與漫遊要求不一樣，結帳前以該方案頁面的說明為準。"
  },
  {
    when: "出發前一天",
    title: "在穩定 Wi-Fi 下完成安裝",
    items: [
      "保留訂單、QR Code 或 App 內的安裝資訊，不要只留在單一裝置。",
      "依供應商指示安裝 eSIM；不確定啟用時機時，先不要任意開啟行動數據。",
      "替台灣門號和旅遊 eSIM 取好辨識名稱，避免落地時切錯。",
      "台灣門號保留接收簡訊即可，避免同時把它設為行動數據。"
    ]
  },
  {
    when: "抵達沖繩後",
    title: "再切換行動數據並測試",
    items: [
      "把旅遊 eSIM 設為行動數據使用的門號。",
      "依方案說明開啟或關閉數據漫遊。",
      "連上網路後，先開地圖搜尋下一站與住宿地址，再離開機場 Wi-Fi。",
      "若要開熱點，先用另一台裝置測試一次。"
    ],
    note: "先在機場或租車櫃檯附近測試，比開上高速公路後才發現連不上網好處理得多。"
  },
  {
    when: "連不上網時",
    title: "先檢查，不要急著再買一張",
    items: [
      "確認旅遊 eSIM 已啟用，而且真的被選為行動數據門號。",
      "重新核對方案是否要求數據漫遊或特定啟用方式。",
      "開關飛航模式或重新啟動手機，再測試一次。",
      "仍無法連線時，帶著訂單資料聯絡原供應商客服。"
    ],
    note: "還沒完成基本設定前先別重複購買，避免同一趟旅行留下兩張都用不到的 eSIM。"
  }
];

function CheckBox() {
  return (
    <span
      aria-hidden="true"
      className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#b9a68b] bg-white"
    />
  );
}

export default function OkinawaEsimSetupCard() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker eventName="lead_magnet_delivery_view" leadMagnet="okinawa_esim_setup_card" />
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩 eSIM 出發前設定檢查表</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            這份表只處理一件事：讓你在出發前、落地後和連不上網時，都知道先做哪一步。導航、租車聯絡、飯店查詢不再卡在第一個設定。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span>
              <span className="text-[#8c8375]">使用方式</span> 從出發前幾天一路勾到落地
            </span>
            <span>
              <span className="text-[#8c8375]">份數</span> 每支會使用 eSIM 的手機各看一次
            </span>
            <span>
              <span className="text-[#8c8375]">整理日期</span> 2026 年 10 月 6 日
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          要紙本的話，用瀏覽器列印功能儲存成 PDF 或印出來；列印版不會有這段說明和網站選單。
        </div>

        <ol className="mt-10 space-y-8">
          {steps.map((step, index) => (
            <li className="doc-step rounded-xl border border-[#eadfce] bg-white p-6 shadow-sm sm:p-8" key={step.when}>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-bold tabular-nums text-[#d9c3a4]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">{step.when}</p>
                  <h2 className="mt-1.5 text-xl font-bold leading-snug text-[#34302b] sm:text-2xl">{step.title}</h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {step.items.map((item) => (
                  <li className="flex gap-3 text-sm leading-7 text-[#4a443c]" key={item}>
                    <CheckBox />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {step.note ? (
                <p className="mt-6 border-l-[3px] border-[#d9c3a4] bg-[#fbf6ee] py-3 pl-4 pr-3 text-sm leading-7 text-[#5f594f]">
                  {step.note}
                </p>
              ) : null}
            </li>
          ))}
        </ol>

        <section className="doc-step mt-12 rounded-xl bg-[#34302b] p-6 text-[#f6efe4] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#d9b98c]">一張表的重點</p>
          <p className="mt-3 text-lg leading-9 sm:text-xl">
            出發前先安裝、落地後再依方案切換行動數據。<strong className="font-bold">連不上網時先檢查設定，不要急著再買一張。</strong>
          </p>
        </section>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">使用提醒</p>
          <p className="mt-2">
            eSIM 的支援裝置、流量、啟用時機、熱點與漫遊規則會隨供應商和方案不同。付款與啟用前，請以你實際購買方案的最新說明為準。
          </p>
          <div className="doc-no-print mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/">
              沖繩親子旅遊筆記
            </Link>
            <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-esim-klook-airalo-comparison">
              看 Klook 與 Airalo 的選擇整理
            </Link>
          </div>
          <p className="mt-6">沖繩親子旅遊筆記 @ okinawafamilynotes.com</p>
        </footer>
      </div>
    </div>
  );
}
