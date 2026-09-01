import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩颱風應變卡",
  description: "訂閱者專用的沖繩颱風應變卡。",
  // 這是訂閱後才拿到的內容，不進搜尋結果，也不放進 sitemap。
  robots: { index: false, follow: false },
  // 不覆寫的話會沿用 layout 的預設值，指到首頁去。
  alternates: { canonical: "/checklist/okinawa-typhoon-action-card" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "還沒出發・第一件事",
    title: "航班找航空公司，不要找機場",
    items: [
      "查你的票種能不能免費改期。廉航與傳統航空的規則不同，看自己的訂單，不要問親友以前的經驗。",
      "把航空公司的客服電話與線上改票網址，存進手機的離線筆記。",
      "訂位代號記下來，或截圖存進相簿。"
    ],
    note: "機場只公告跑道與航廈狀況，能不能改期、怎麼補位是航空公司決定的。先打給航空公司，不要盯著機場網站等答案。"
  },
  {
    when: "還沒出發・第二件事",
    title: "租車直接通知營業所",
    items: [
      "問清楚三件事：航班取消能不能免費取消、能不能延後取車、颱風天營業所開不開。",
      "把對方的回覆截圖存下來。",
      "預約編號與營業所電話存進手機。"
    ],
    note: "不要自己猜能不能延、能不能退。各家規則不同，同一家的不同門市也可能不一樣。"
  },
  {
    when: "還沒出發・第三件事",
    title: "飯店的取消政策要問過",
    items: [
      "直接聯絡飯店，確認颱風期間的取消與改期規則。",
      "訂房平台的「不可退款」方案，不一定會自動適用天災條款，要問清楚。",
      "訂房編號與飯店電話存進手機。"
    ]
  },
  {
    when: "人已經在沖繩",
    title: "先把孩子的 24 小時補齊",
    items: [
      "水：每人每天 2 公升，先買足兩天的量。",
      "孩子的食物：習慣的零食、沖泡食品、副食品。",
      "藥：常備藥、退燒藥，以及平常在吃的處方藥。",
      "電：行動電源充飽，手機開省電模式。",
      "光：確認手電筒或手機手電筒能用，飯店停電時要靠它。",
      "尿布與濕紙巾：算到比預期多一天的量。"
    ],
    note: "超市和便利商店會在颱風前一天被清空。要買就前一天早上去，不要等當天。"
  },
  {
    when: "颱風期間",
    title: "這三件事不要做",
    items: [
      "不要把「雨天備案」直接當成颱風備案。雨天可以去的水族館、美國村，颱風天會關門，路上還有飛落物風險。",
      "不要在颱風警報期間開車移動。強風會影響車輛，租車保險也可能不理賠警報期間自行移動造成的損害。",
      "不要一解除警報就衝去海邊。長浪與離岸流恢復得比天氣慢。"
    ]
  }
];

const contactRows = [
  "航空公司客服電話",
  "訂位代號",
  "租車公司營業所電話",
  "租車預約編號",
  "飯店電話",
  "訂房編號",
  "駐日經濟文化代表處那霸分處",
  "保險公司緊急聯絡電話",
  "保單號碼"
];

function CheckBox() {
  return (
    <span
      aria-hidden="true"
      className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#b9a68b] bg-white"
    />
  );
}

export default function TyphoonActionCard() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker
        eventName="lead_magnet_delivery_view"
        leadMagnet="okinawa_typhoon_action_card"
      />
      {/* 封面：跟站上文章明顯不同的深色區塊，讓它一眼就是「一份文件」 */}
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩颱風應變卡</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            颱風來的時候，最花時間的是「先處理哪一件」。
            這張卡把順序排好：航班、租車、飯店，然後才是孩子的補給。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span>
              <span className="text-[#8c8375]">使用方式</span>　出發前填好聯絡清單，印一份放行李
            </span>
            <span>
              <span className="text-[#8c8375]">適用</span>　行前與人在當地都能用
            </span>
            <span>
              <span className="text-[#8c8375]">整理日期</span>　2026 年 9 月 1 日
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          要紙本的話，用瀏覽器的列印功能（電腦按 Ctrl + P，手機在分享選單裡找「列印」）就能存成 PDF
          或印出來，印出來不會有這段說明和網站選單。颱風天最可能發生的狀況是沒有網路，紙本或離線截圖比書籤可靠。
        </div>

        <ol className="mt-10 space-y-8">
          {steps.map((step, index) => (
            <li className="doc-step rounded-xl border border-[#eadfce] bg-white p-6 shadow-sm sm:p-8" key={step.when}>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-bold tabular-nums text-[#d9c3a4]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">{step.when}</p>
                  <h2 className="mt-1.5 text-xl font-bold leading-snug text-[#34302b] sm:text-2xl">
                    {step.title}
                  </h2>
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

        <section className="doc-step mt-12 rounded-xl border border-[#e3c7a0] bg-[#fdf3e4] p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">出發前填好，印出來放行李</p>
          <h2 className="mt-1.5 text-xl font-bold text-[#34302b] sm:text-2xl">緊急聯絡清單</h2>
          <p className="mt-5 text-sm leading-7 text-[#4a443c]">
            颱風天最先失效的是「我等一下再查」。這幾個號碼在手機沒電或沒網路時，紙本才救得了你。
          </p>

          <dl className="mt-6 divide-y divide-[#e3c7a0] border-t border-[#e3c7a0]">
            {contactRows.map((row) => (
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6" key={row}>
                <dt className="w-full shrink-0 text-sm font-semibold text-[#34302b] sm:w-56">{row}</dt>
                <dd className="min-h-6 w-full border-b border-dashed border-[#c9b291]" />
              </div>
            ))}
          </dl>
        </section>

        <section className="doc-step mt-10 rounded-xl bg-[#34302b] p-6 text-[#f6efe4] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#d9b98c]">一句話總結</p>
          <p className="mt-3 text-lg leading-9 sm:text-xl">
            颱風來了先打給航空公司，再通知租車營業所和飯店，然後才去補水和孩子的東西。
            <strong className="font-bold">順序錯了會白跑一趟。</strong>
          </p>
        </section>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">資料來源</p>
          <p className="mt-2">
            本卡整理於 2026 年 9 月 1 日，依官方與各公司公開資訊彙整，非個人實地經驗。
            颱風期間的航班、租車與住宿政策依各公司當次公告為準。
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>日本氣象廳：颱風與警報資訊　jma.go.jp</li>
            <li>那霸機場：航班運航情報　naha-airport.co.jp</li>
            <li>沖繩縣：防災情報　pref.okinawa.jp</li>
          </ul>

          <div className="doc-no-print mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/">
              沖繩親子旅遊筆記
            </Link>
            <Link
              className="text-[#694624] underline underline-offset-4"
              href="/blog/okinawa-typhoon-family-travel-guide"
            >
              看完整說明
            </Link>
          </div>
          <p className="mt-6">沖繩親子旅遊筆記　okinawafamilynotes.com</p>
        </footer>
      </div>
    </div>
  );
}
