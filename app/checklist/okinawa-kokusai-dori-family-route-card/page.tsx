import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩國際通親子動線卡",
  description: "訂閱者專用的沖繩國際通親子動線卡。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checklist/okinawa-kokusai-dori-family-route-card" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "出門前 5 分鐘",
    title: "先選一個起點，不要一開始就想走完整條",
    items: [
      "帶幼兒、推車或只想輕鬆逛：先把牧志一帶當成主要範圍，安排一兩個想逛的點就好。",
      "孩子年紀較大、體力也夠：可安排從縣廳前往牧志的單向走法，避免走回頭路。",
      "把今天最想完成的一件事寫下來，例如買伴手禮、吃一餐或逛公設市場；其他都當成有餘裕再加。",
      "出門前先看天氣和當天交通公告；下雨或炎熱時，行程要留得比平常更鬆。"
    ],
    note: "國際通不是一定要走到底才算逛到。帶孩子時，能從容完成一小段，通常比硬走完整條更好。"
  },
  {
    when: "出發前先存地圖",
    title: "先把四個需要時才找得到的點存好",
    items: [
      "牧志公設市場：適合當作休息與用餐的備用點；出發前再確認當天營業與公休資訊。",
      "縣廳前站與牧志站：兩端各留一個車站當作集合、折返或改搭單軌的選項。",
      "牧志周邊的圖書館與公共設施：推車、換尿布或想坐一下時，先在地圖留作備案。",
      "最近的停車場或還車時間：自行開車時，先決定停哪裡與最晚離開時間，避免逛到一半才開始找。"
    ],
    note: "廁所、哺乳室與電梯的開放狀況可能調整；抵達前再以現場公告或官方資訊確認。"
  },
  {
    when: "走到一半",
    title: "用孩子的節奏決定要不要繼續",
    items: [
      "先抓 1.5 到 2.5 小時當作一段，不必把午睡、吃飯和逛街塞在同一個時段。",
      "推車不好走、孩子開始想抱或天氣變熱時，就直接切換到室內吃飯、休息或搭單軌離開。",
      "雨天記得把雨罩、飲水和室內備案放在容易拿的位置，不要等真的下雨才翻行李。",
      "想買的東西先拍下店名或位置；不必在孩子狀態不好時強撐著完成採買。"
    ]
  },
  {
    when: "離開前",
    title: "留一點餘裕給回程",
    items: [
      "確認下一段是回飯店、去還車還是去機場，再決定是否多停一間店。",
      "雨傘、購物袋和孩子隨身物品先整理一次，避免上單軌或回車上才發現少一件。",
      "如果今天只完成一件事也沒關係；把沒逛到的店留給下一次，比一家人都累更值得。"
    ]
  }
];

function CheckBox() {
  return <span aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#b9a68b] bg-white" />;
}

export default function OkinawaKokusaiDoriFamilyRouteCard() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker eventName="lead_magnet_delivery_view" leadMagnet="okinawa_kokusai_dori_family_route_card" />
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩國際通親子動線卡</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            這張卡不是景點清單，而是幫你在帶孩子、推車和天氣都不一定配合時，先把走法、休息點與離開時機留好。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span><span className="text-[#8c8375]">使用方式</span> 出門前存到手機</span>
            <span><span className="text-[#8c8375]">份數</span> 每個家庭一份</span>
            <span><span className="text-[#8c8375]">整理日期</span> 2026 年 10 月 8 日</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          想留紙本時，可用瀏覽器的列印功能存成 PDF 或印出來。實際開放、營業與交通安排仍以現場公告和官方資訊為準。
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
              {step.note ? <p className="mt-6 border-l-[3px] border-[#d9c3a4] bg-[#fbf6ee] py-3 pl-4 pr-3 text-sm leading-7 text-[#5f594f]">{step.note}</p> : null}
            </li>
          ))}
        </ol>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">延伸閱讀</p>
          <p className="mt-2">
            <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-kokusai-dori-family-guide">國際通廁所、推車與停車動線完整說明</Link>
          </p>
          <p className="mt-6">沖繩親子旅遊筆記 @ okinawafamilynotes.com</p>
        </footer>
      </main>
    </div>
  );
}
