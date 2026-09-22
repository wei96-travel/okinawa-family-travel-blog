import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFunnelTracker } from "@/components/newsletter-funnel-tracker";

export const metadata: Metadata = {
  title: "沖繩伴手禮回程打包卡",
  description: "訂閱者專用的沖繩伴手禮回程打包卡。",
  // 這是訂閱後才拿到的內容，不進搜尋結果，也不放進 sitemap。
  robots: { index: false, follow: false },
  // 不覆寫的話會沿用 layout 的預設值，指到首頁去。
  alternates: { canonical: "/checklist/okinawa-souvenir-packing-card" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "在店裡，還沒結帳",
    title: "每一樣都翻背面看成分",
    items: [
      "看到「豚肉」「ポーク」「ラフテー」「ソーキ」就放回架上。",
      "肉乾、肉鬆、香腸、火腿、培根都是肉。",
      "含肉的泡麵調理包、含肉塊的乾燥湯包、含肉月餅也是肉。",
      "生鮮水果不買，生的紅芋不買。加工過的紅芋塔可以。",
      "天然珊瑚不買。",
      "農畜水產品類總量會不會超過 6 公斤，心裡先有數。",
      "食米、熟花生、熟蒜頭、乾金針、乾香菇、茶葉，各自不超過 1 公斤。"
    ],
    note: "沖繩的豬肉料理是招牌，伴手禮區含肉的比例特別高。不是挑幾樣抽查，是每一樣都翻背面。真空包裝、已經煮熟、只有一點肉末，都一樣不能帶。"
  },
  {
    when: "回程前一晚",
    title: "液體、膏狀、膠狀先全部分出來",
    items: [
      "超過 100 毫升的容器，全部從隨身包裡拿出來。",
      "留在隨身包的：單一容器不超過 100 毫升，裝進 1 公升以內、可重複密封的透明袋，每人一袋。",
      "要託運的：瓶蓋鎖緊，原封膜不要先拆。",
      "每一瓶分開放進夾鏈袋，不要不同液體全部塞同一袋。",
      "外面包衣物或毛巾，放在行李箱中央。",
      "不貼著箱殼、輪子或拉桿骨架。"
    ],
    note: "醬料、果醬、化妝水、乳霜這些膏狀膠狀物也算。容器本身超過 100 毫升，就算裡面只剩一點，也不要期待能過隨身安檢。酒類、噴霧要託運，還得看你的航空公司規定。"
  },
  {
    when: "回程前一晚",
    title: "秤重和易碎品",
    items: [
      "每件託運行李分開量過，不是只量總重量。",
      "額外的旅行袋算不算第二件託運，已經向航空公司確認。",
      "易碎品放在行李箱中央，晃動時不會移動。",
      "易碎品不是只包一層衣服。"
    ]
  },
  {
    when: "出門前 10 分鐘",
    title: "最後一次對整包行李",
    items: [
      "超過 100 毫升的液體沒有留在隨身包。",
      "瓶蓋、夾鏈袋與外層緩衝都檢查過。",
      "食品成分都確認過，鮮果、含肉或不確定的商品沒有帶。",
      "每件託運行李都量過。",
      "護照、藥品、孩子的替換衣物和貴重物品仍在隨身行李。"
    ],
    note: "最後一天還有加油、還車和機場報到。行李前一晚收完，早上才不會一邊找秤一邊催孩子穿鞋。"
  },
  {
    when: "機場，去航空公司櫃檯之前",
    title: "免稅品要託運的話，多一個步驟",
    items: [
      "有免稅品要放進託運行李。",
      "在辦理託運之前，先取得日本海關確認。",
      "護照帶在手上，離境時海關可能確認護照與商品。"
    ],
    note: "這個步驟和航空公司的報到順序很容易打架。免稅品買得多的時候，不要壓線到機場。店家封裝、護照紀錄與現場查驗方式可能調整，買的時候先問店員。"
  },
  {
    when: "回到台灣，入境時",
    title: "不確定的就走紅線",
    items: [
      "有任何不確定的食品，走紅線申報。",
      "不要自己判斷「應該沒關係」。"
    ],
    note: "主動申報不會罰；被查到才承認才會罰。這一條是整張卡裡最省錢的一條。"
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

export default function SouvenirPackingCard() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      <NewsletterFunnelTracker
        eventName="lead_magnet_delivery_view"
        leadMagnet="okinawa_souvenir_packing_card"
      />
      {/* 封面：跟站上文章明顯不同的深色區塊，讓它一眼就是「一份文件」 */}
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">
            沖繩伴手禮回程打包卡
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            從店裡結帳前，到台灣入境走哪條線。買什麼好吃不在這張卡裡，
            這張卡只管「買了之後怎麼帶得回去」。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span>
              <span className="text-[#8c8375]">使用方式</span>　照時間軸往下勾
            </span>
            <span>
              <span className="text-[#8c8375]">最該記住的</span>　看到肉就放回去
            </span>
            <span>
              <span className="text-[#8c8375]">整理日期</span>　2026 年 9 月 23 日
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
            <li
              className="doc-step rounded-xl border border-[#eadfce] bg-white p-6 shadow-sm sm:p-8"
              key={step.title}
            >
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
          <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">唯一的例外</p>
          <h2 className="mt-1.5 text-xl font-bold text-[#34302b] sm:text-2xl">
            肉罐頭：四個條件要同時成立
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#4a443c]">
            疫區的動物產品原則上禁止輸入，符合「高溫滅菌罐製要件」的罐頭除外。關務署列出的四個條件必須同時成立：
          </p>

          <ol className="mt-5 space-y-2.5 text-sm leading-7 text-[#4a443c]">
            <li>1. 包裝容器完全密閉。</li>
            <li>2. 經高溫處理且可在常溫下保存。</li>
            <li>3. 不含防腐劑。</li>
            <li>4. 含有適當量湯汁。</li>
          </ol>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#e3c7a0] bg-white p-4">
              <p className="text-sm font-bold text-[#34302b]">乾式壓製的午餐肉罐頭</p>
              <p className="mt-2 text-sm leading-7 text-[#5f594f]">沒有湯汁，卡在第四項。</p>
            </div>
            <div className="rounded-lg border border-[#e3c7a0] bg-white p-4">
              <p className="text-sm font-bold text-[#34302b]">含硝酸鹽類保存劑的產品</p>
              <p className="mt-2 text-sm leading-7 text-[#5f594f]">卡在第三項。</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5f594f]">
            市面上多數肉類伴手禮罐頭達不到這四個條件。四項沒辦法逐一確認，就走紅線申報，不要自己判斷。
          </p>
        </section>

        <section className="doc-step mt-10 rounded-xl border border-[#d9b3b3] bg-[#fdf1f1] p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#a05252]">帶錯的代價</p>
          <h2 className="mt-1.5 text-xl font-bold text-[#34302b] sm:text-2xl">罰鍰從 1 萬元起跳</h2>
          <p className="mt-5 text-sm leading-7 text-[#4a443c]">
            依農業部動植物防疫檢疫署的裁罰基準，攜帶違規肉品入境，罰鍰新臺幣 1 萬元起、最高 100
            萬元。來自非洲豬瘟疫區的豬肉製品更重，第一次違規就是 20 萬元起跳。
          </p>
          <p className="mt-4 text-sm leading-7 text-[#5f594f]">
            日本豬肉被擋的原因是傳統豬瘟，不是非洲豬瘟 ——
            很多文章寫錯這一點。2023 年起台灣同意日本加熱豬肉產品輸台，但那是商業輸入、要經核准工廠與檢疫程序，
            不適用旅客自行攜帶。
          </p>
        </section>

        <section className="doc-step mt-10 rounded-xl bg-[#34302b] p-6 text-[#f6efe4] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#d9b98c]">一句話總結</p>
          <p className="mt-3 text-lg leading-9 sm:text-xl">
            每一樣都翻背面看成分，<strong className="font-bold">看到肉就放回去</strong>；
            不確定的不要自己判斷，回台灣走紅線申報。
          </p>
        </section>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">資料來源</p>
          <p className="mt-2">
            本卡整理於 2026 年 9 月 23 日，內容出自本站兩篇文章的查核結果（海關品項查核日 2026 年 9 月
            9 日，打包規定查核日 2026 年 7 月）。檢疫、關稅、液體安檢與免稅規定都會調整，出發前請以官方公告為準。
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>農業部動植物防疫檢疫署：入境旅客攜帶動植物或其產品檢疫規定、攜帶違規肉品入境裁罰基準</li>
            <li>財政部關務署臺北關：含肉罐頭、真空包裝肉製品、農畜水產品及食品相關說明</li>
            <li>日本國土交通省：國際線液體、噴霧與膠狀物限制　mlit.go.jp</li>
            <li>日本海關：旅客購買免稅品說明　customs.go.jp</li>
            <li>林業及自然保育署：瀕臨絕種野生動植物國際貿易公約（CITES）相關規定</li>
          </ul>

          <div className="doc-no-print mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/">
              沖繩親子旅遊筆記
            </Link>
            <Link
              className="text-[#694624] underline underline-offset-4"
              href="/blog/okinawa-souvenir-customs-taiwan"
            >
              哪些不能帶的完整說明
            </Link>
            <Link
              className="text-[#694624] underline underline-offset-4"
              href="/blog/okinawa-souvenir-packing-guide"
            >
              怎麼打包的完整說明
            </Link>
          </div>
          <p className="mt-6">沖繩親子旅遊筆記　okinawafamilynotes.com</p>
        </footer>
      </div>
    </div>
  );
}
