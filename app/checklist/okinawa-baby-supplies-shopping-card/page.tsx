import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩嬰幼兒用品採買清單",
  description: "訂閱者專用的沖繩嬰幼兒用品採買清單。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checklist/okinawa-baby-supplies-shopping-card" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "出發前一週",
    title: "有替代風險的東西，先從台灣帶足",
    items: [
      "奶粉請帶足整趟需要的量；旅行中不要因為臨時缺貨或包裝相似就換品牌。",
      "奶瓶、奶嘴、慣用清潔用品與孩子每天一定會用到的餵食工具，先依天數和備用品數量整理好。",
      "孩子需要的特殊尺寸、指定品牌或不容易臨時替代的用品，先放入行李，不要把它們當成到當地再買。",
      "嬰兒床、床圍等飯店用品要在訂房後再次確認，不能把『飯店通常有』當成已保留。"
    ],
    note: "真正需要當地補貨的，多半是體積大、容易用完、但品牌替代性高的消耗品。"
  },
  {
    when: "抵達後",
    title: "尿布與濕紙巾可以補，但先看住哪一區",
    items: [
      "尿布請依孩子平常使用的體重區間挑選，不要只看包裝上的年齡建議。",
      "濕紙巾、簡單盥洗用品與飲品可視行程在超市、藥妝店或量販通路補貨。",
      "住在那霸市區時，先從附近藥妝店、AEON 或晚間仍營業的通路找起，不必特別為了採買繞遠路。",
      "阿卡將的店點不在那霸市中心；若行程本來不會經過北谷、西原或浦添，不要把它當成抵達當天的救援方案。"
    ],
    note: "店點、庫存與營業時間會調整；出發前以店家官方資訊或地圖上的最新營業資訊確認。"
  },
  {
    when: "要買之前",
    title: "用三個問題縮小選擇",
    items: [
      "這是今天一定要用，還是明天再補也可以？不是急件就不用帶著孩子在店裡比較太久。",
      "這個尺寸或品牌能不能接受替代？不行就從行李備品開始用，不要勉強換成不熟悉的款式。",
      "回飯店有沒有地方放？大包尿布或補貨量先看行李箱和車上空間，再決定買多少。"
    ]
  },
  {
    when: "回飯店後",
    title: "把明天會用到的先分出來",
    items: [
      "隔天一整天外出時，尿布、濕紙巾、替換衣物和餵食用品不要全部留在大行李裡。",
      "只帶足夠一天使用的量出門，剩下的放回飯店，減少推車和隨身包的重量。",
      "發現某項用品快用完時，當天傍晚就補，不要拖到隔天早上趕行程才找店。"
    ]
  }
];

function CheckBox() {
  return <span aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#b9a68b] bg-white" />;
}

export default function OkinawaBabySuppliesShoppingCard() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker eventName="lead_magnet_delivery_view" leadMagnet="okinawa_baby_supplies_shopping_card" />
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩嬰幼兒用品採買清單</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            先分清楚哪些必須從台灣帶足、哪些能在沖繩補貨。少帶一點焦慮，也別把全家行程花在找錯地方買東西。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span><span className="text-[#8c8375]">使用方式</span> 打包前與抵達後各看一次</span>
            <span><span className="text-[#8c8375]">份數</span> 每位照顧者一份</span>
            <span><span className="text-[#8c8375]">整理日期</span> 2026 年 10 月 8 日</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          這份清單用來分配「先帶」和「當地補」。店點、庫存、價格與營業時間都會變動，採買前請再確認當天資訊。
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
            <Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-baby-supplies-shopping-guide">尿布、奶粉與嬰幼兒用品：沖繩採買完整說明</Link>
          </p>
          <p className="mt-6">沖繩親子旅遊筆記 @ okinawafamilynotes.com</p>
        </footer>
      </main>
    </div>
  );
}
