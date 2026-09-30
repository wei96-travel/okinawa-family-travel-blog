import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "沖繩親子景點安排檢查表（審閱版）",
  description: "沖繩親子景點安排檢查表的審閱版本。",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "/previews/okinawa-family-attractions-planner" }
};

type Section = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const sections: Section[] = [
  {
    when: "出門前 5 分鐘",
    title: "今天只選一個主行程",
    items: [
      "在今天的行程裡圈一個最想完成的景點；其他都只能當備選，不能同時當目標。",
      "看車程、午睡和用餐時間後，刪掉最遠或最需要排隊的一站。",
      "先決定孩子累了要去哪裡休息：回飯店、回車上，或直接提早吃飯。",
      "遇到下雨時，只保留一個室內替代方案；不要臨時把兩個室內景點塞進同一天。"
    ],
    note: "行程留白不是少玩一站，而是讓主行程還有機會真的玩到。"
  },
  {
    when: "到了景點入口",
    title: "先用孩子當下的狀態決定走多深",
    items: [
      "孩子剛睡醒、願意走路：才進入需要走很多路或階梯的主區域。",
      "孩子已經餓、累或不想下車：先吃、休息，或改成短停，不用硬撐原本的時間表。",
      "推車、背帶與雨具只帶今天真的會用到的；需要收推車才進得去的地方，先想好誰抱、誰拿車。",
      "先約定一個離開訊號，例如看完一個館、看完一輪動物或一場表演就收。"
    ],
    note: "親子行程最常超時的不是景點本身，是每次轉場前都重新討論要不要繼續。"
  },
  {
    when: "三個常見景點",
    title: "用今天的條件挑對一個就好",
    items: [
      "沖繩兒童王國：想把戶外動物、室內館和遊戲區分段玩，才留半天以上；孩子容易累就先選一段。",
      "玉泉洞：孩子能自己走階梯、也不怕暗或濕滑再進洞；還需要長時間坐推車就先改排園區其他區域。",
      "美麗海水族館：只看本館抓 2 到 3 小時；還想看海豚或戶外館才留半天，不要同日再塞另一個北部主景點。"
    ],
    note: "這份表幫你做取捨，不取代各景點的票價、營業時間與當日公告。"
  },
  {
    when: "離開前 30 秒",
    title: "留一件今天沒做的事給下次",
    items: [
      "孩子還有精神才加備選；沒有就直接離開，不拿晚餐或睡眠去交換。",
      "把想去但沒去成的地方記下來，明天有空檔再判斷，不在車上臨時改全盤。",
      "回飯店前確認明天最早的出發時間、停車和天氣，再決定是否調整。"
    ]
  }
];

function CheckBox() {
  return <span aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#b9a68b] bg-white" />;
}

export default function OkinawaFamilyAttractionsPlannerPreview() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <div className="border-b border-[#dfbf8d] bg-[#fff1d8] px-5 py-3 text-center text-xs font-semibold leading-6 text-[#70481f]">
        尚未發布：這是「沖繩親子景點安排檢查表」的手機審閱版
      </div>
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">沖繩親子景點安排檢查表</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            這份表不幫你排滿行程，只幫你在孩子精神、車程和天氣都有限的時候，留下今天最值得去的一站。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span><span className="text-[#8c8375]">使用方式</span>　每天出門前勾一次</span>
            <span><span className="text-[#8c8375]">份數</span>　一個家庭一份</span>
            <span><span className="text-[#8c8375]">整理日期</span>　2026 年 9 月 30 日</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="doc-no-print mt-8 rounded-lg border border-[#eadfce] bg-white p-4 text-sm leading-7 text-[#5f594f]">
          正式版會在訂閱後直接開啟，也會寄一封方便日後再看的信。要印出來時，可用瀏覽器的列印功能存成 PDF。
        </div>

        <ol className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <li className="doc-step rounded-xl border border-[#eadfce] bg-white p-6 shadow-sm sm:p-8" key={section.when}>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-bold tabular-nums text-[#d9c3a4]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">{section.when}</p>
                  <h2 className="mt-1.5 text-xl font-bold leading-snug text-[#34302b] sm:text-2xl">{section.title}</h2>
                </div>
              </div>
              <ul className="mt-6 space-y-3.5">
                {section.items.map((item) => (
                  <li className="flex gap-3 text-sm leading-7 text-[#4a443c]" key={item}>
                    <CheckBox />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {section.note ? <p className="mt-6 border-l-[3px] border-[#d9c3a4] bg-[#fbf6ee] py-3 pl-4 pr-3 text-sm leading-7 text-[#5f594f]">{section.note}</p> : null}
            </li>
          ))}
        </ol>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">延伸閱讀</p>
          <ul className="mt-3 space-y-1.5">
            <li><Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-zoo-museum-family-guide">沖繩兒童王國要排多久？</Link></li>
            <li><Link className="text-[#694624] underline underline-offset-4" href="/blog/okinawa-world-gyokusendo-family-guide">玉泉洞帶小孩要走多久？</Link></li>
            <li><Link className="text-[#694624] underline underline-offset-4" href="/blog/churaumi-aquarium-family-time">美麗海水族館親子行程怎麼抓時間？</Link></li>
          </ul>
          <p className="mt-6">沖繩親子旅遊筆記　okinawafamilynotes.com</p>
        </footer>
      </main>
    </div>
  );
}
