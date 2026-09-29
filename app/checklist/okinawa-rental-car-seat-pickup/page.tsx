import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩租車取車與兒童座椅檢查表",
  description: "訂閱者專用的沖繩租車取車與兒童座椅檢查表。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checklist/okinawa-rental-car-seat-pickup" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "訂車前",
    title: "先把人、座椅和行李寫在同一張單上",
    items: [
      "列出同行成人和孩子的人數；每個孩子補上年齡、身高、體重。",
      "確認每個孩子需要的是嬰兒、幼兒或學童座椅；不要只寫「需要兒童座椅」。",
      "量推車收折後的長、寬、高；行李箱也量含輪子的外尺寸。",
      "把座椅數量、推車尺寸和行李件數一起提供給租車公司，請對方確認車型與座位配置。"
    ],
    note: "車子可坐幾人，不等於放入汽座、推車和行李後還有足夠空間。尤其兩張座椅時，要先問第三排還能不能正常進出。"
  },
  {
    when: "到租車門市",
    title: "先裝座椅，再搬行李",
    items: [
      "對照預約資料，確認拿到的座椅類型和孩子目前身形相符。",
      "看座椅標示的身高、體重和使用方向；不確定就請門市人員一起確認。",
      "優先安裝在後座；後向式嬰兒座椅不能裝在有安全氣囊的副駕駛座。",
      "依座椅說明確認安全帶或 ISOFIX 已扣好，讓孩子實際坐上去看肩帶、扣具和帶子有沒有扭轉。"
    ],
    note: "座椅已經放在車內，不代表已經裝好。離開停車場前多花幾分鐘，比上路後才發現問題好處理。"
  },
  {
    when: "上路前",
    title: "做一次後車廂與隨身物品測試",
    items: [
      "先放最大件行李，再放推車和隨身包，確認尾門可以完全關上。",
      "不要讓行李壓到推車煞車、座椅扣具或行李拉桿；也不要堆到妨礙駕駛後方視線。",
      "尿布包、濕紙巾、飲水、雨具和一套換洗衣物留在容易拿的位置。",
      "拍一張汽座和後車廂配置照，回程還車時照著整理會快很多。"
    ],
    note: "孩子上車前，先摸一下座椅扣具和金屬部位。沖繩天氣熱，剛曬過的車內可能燙手。"
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

export default function RentalCarSeatPickupChecklist() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker
        eventName="lead_magnet_delivery_view"
        leadMagnet="okinawa_rental_car_seat_pickup"
      />
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩租車取車與兒童座椅檢查表</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            這份表只處理取車前後最容易卡住的三件事：座椅有沒有選對、推車和行李能不能放下、上路前還漏了什麼。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span>
              <span className="text-[#8c8375]">使用方式</span>　訂車前填一次，取車時再勾一次
            </span>
            <span>
              <span className="text-[#8c8375]">份數</span>　一台車一份
            </span>
            <span>
              <span className="text-[#8c8375]">整理日期</span>　2026 年 9 月 29 日
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          要紙本的話，用瀏覽器的列印功能（電腦按 Ctrl + P，手機在分享選單裡找「列印」）就能存成 PDF
          或印出來，印出來不會有這段說明和網站選單。
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

        <section className="doc-step mt-10 rounded-xl bg-[#34302b] p-6 text-[#f6efe4] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#d9b98c]">最後 30 秒</p>
          <p className="mt-3 text-lg leading-9 sm:text-xl">
            座椅和行李都裝好後，再確認孩子的安全帶沒有扭轉、後車廂能關上、路上要拿的東西沒有被壓在最底下。
          </p>
        </section>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">延伸閱讀</p>
          <ul className="mt-3 space-y-1.5">
            <li>
              <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-car-seat-rental-guide">
                沖繩租車一定要兒童安全座椅嗎？
              </Link>
            </li>
            <li>
              <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-rental-car-luggage-stroller-guide">
                沖繩親子租車行李怎麼放？
              </Link>
            </li>
            <li>
              <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-family-stroller-guide">
                帶小孩去沖繩需要推車嗎？
              </Link>
            </li>
          </ul>
          <p className="mt-6">沖繩親子旅遊筆記　okinawafamilynotes.com</p>
        </footer>
      </div>
    </div>
  );
}
