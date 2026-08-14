import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "沖繩租車證件檢查表",
  description: "訂閱者專用的沖繩租車證件檢查表。",
  // 這是訂閱後才拿到的內容，不進搜尋結果，也不放進 sitemap。
  robots: { index: false, follow: false },
  // 不覆寫的話會沿用 layout 的預設值，指到首頁去。
  alternates: { canonical: "/checklist/okinawa-rental-car-documents" }
};

type Step = {
  when: string;
  title: string;
  items: string[];
  note?: string;
};

const steps: Step[] = [
  {
    when: "出發前一個月",
    title: "確認駕照，然後把譯本辦起來",
    items: [
      "翻出台灣駕照，看效期。已經過期或快到期，要先換發新照才能辦譯本，換照要另外準備 1 吋照片 2 張與規費。",
      "確認你要辦的是「駕照日文譯本」，不是國際駕照。",
      "選一種申辦方式：監理站臨櫃（帶身分證正本與駕照正本，規費新台幣 100 元，多數情況當天拿到，全國各監理單位都可辦，不限戶籍地），或用自然人憑證在監理服務網線上申辦、寄到家裡。",
      "會開車的人都辦了嗎？每一位駕駛都要各自辦一份。"
    ],
    note: "台灣核發的國際駕照，日本不承認。這不是「帶了比較保險」的問題，帶了也沒用。"
  },
  {
    when: "出發前兩週",
    title: "核對譯本上的資料",
    items: [
      "譯本拿到手了。",
      "姓名與駕照正本相符。",
      "駕照號碼與駕照正本相符。",
      "車種跟你台灣駕照上的一樣。"
    ],
    note: "自行翻譯的版本無效，必須由公路監理單位或其他受理單位核發。對不上就回監理單位處理，現在還來得及。"
  },
  {
    when: "出發前三天",
    title: "三樣證件全部找出來，放在一起",
    items: [
      "護照。",
      "台灣駕照正本 —— 最常見的漏法是只帶譯本，駕照留在家裡。",
      "駕照日文譯本 —— 另一種常見錯誤是以為國際駕照可以取代。",
      "兩位駕駛的證件分開放，不要混在一起。"
    ],
    note: "譯本拿到手看起來很正式，會下意識覺得它就是那份文件。實際上譯本本身不具效力，一定要和駕照正本一起出示。"
  },
  {
    when: "出發前一晚",
    title: "放進隨身行李",
    items: [
      "三樣證件放進隨身行李，不是托運行李。",
      "每位駕駛的三樣都各自放好。",
      "拍照存一份在手機裡。"
    ],
    note: "托運行李萬一延誤，你就是帶著證件在沖繩卻拿不到。照片不能代替正本取車，但補辦和報案時用得上。"
  },
  {
    when: "取車現場",
    title: "櫃檯會核對這四件事",
    items: [
      "駕照正本還在有效期限內。",
      "譯本上的姓名、駕照號碼與駕照相符。",
      "護照上的入境日期 —— 台日駕照互惠適用的是入境後一年內的短期使用。",
      "誰要開車，誰就出示自己的那一套。"
    ],
    note: "能開的車種和你台灣駕照上的車種相同。這個安排不適用於計程車、大客車這類營利用途。"
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

export default function RentalCarDocumentsChecklist() {
  return (
    <div className="bg-[#fbf6ee]" data-standalone-doc>
      {/* 封面：跟站上文章明顯不同的深色區塊，讓它一眼就是「一份文件」 */}
      <header className="doc-cover bg-[#34302b] text-[#f6efe4]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#d9b98c]">訂閱者專用文件</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">
            沖繩租車證件檢查表
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ded5c6] sm:text-base sm:leading-8">
            這份表只處理一件事：讓你在沖繩的租車櫃檯順利把車開走。
            安全座椅、加油、停車不在這份表裡。
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#57504733] pt-6 text-xs text-[#c5bcac] sm:text-sm">
            <span>
              <span className="text-[#8c8375]">使用方式</span>　從出發日往回推，照時間軸勾
            </span>
            <span>
              <span className="text-[#8c8375]">份數</span>　每位會開車的人各一份
            </span>
            <span>
              <span className="text-[#8c8375]">整理日期</span>　2026 年 8 月 14 日
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
          <p className="text-xs font-semibold tracking-[0.18em] text-[#9a6b43]">萬一到了日本才發現沒帶</p>
          <h2 className="mt-1.5 text-xl font-bold text-[#34302b] sm:text-2xl">先看你幾號要取車</h2>

          <p className="mt-5 text-sm leading-7 text-[#4a443c]">
            日本自動車聯盟（JAF）受日本台灣交流協會委託，在日本境內辦理翻譯文核發，台灣屬於優先處理地區。
            只接受線上申請，不受理臨櫃或郵寄；日本國內駕駛用途 6,000 日圓；台灣等優先處理地區平均 2 到 3
            個工作天；在全國便利商店列印領取。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#e3c7a0] bg-white p-4">
              <p className="text-sm font-bold text-[#34302b]">取車日在 3 個工作天以後</p>
              <p className="mt-2 text-sm leading-7 text-[#5f594f]">線上申請 JAF，還來得及。</p>
            </div>
            <div className="rounded-lg border border-[#e3c7a0] bg-white p-4">
              <p className="text-sm font-bold text-[#34302b]">明天或後天就要取車</p>
              <p className="mt-2 text-sm leading-7 text-[#5f594f]">
                這條路救不了你。行程前段的租車要重排，先改成單軌電車、巴士或計程車能到的行程。
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5f594f]">
            也可以在駐日代表處或經濟文化辦事處辦理，真的遇到就兩邊都問。但不要把它當備案來規劃 ——
            出發前辦好，成本是監理站一趟、100 元、一小時。
          </p>
        </section>

        <section className="doc-step mt-10 rounded-xl bg-[#34302b] p-6 text-[#f6efe4] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#d9b98c]">一句話總結</p>
          <p className="mt-3 text-lg leading-9 sm:text-xl">
            出發前一個月做兩件事：確認駕照沒過期，把譯本辦起來。
            <strong className="font-bold">會開車的人，每個人都要一份。</strong>
          </p>
        </section>

        <footer className="mt-12 border-t border-[#e0d3bd] pt-6 text-xs leading-6 text-[#6f675b]">
          <p className="font-semibold text-[#34302b]">資料來源</p>
          <p className="mt-2">
            本表整理於 2026 年 8 月 14 日。規費、應備文件、處理時間與受理方式都可能調整，出發前請以各單位最新公告為準。
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>交通部公路局：臺日駕照互惠　thb.gov.tw</li>
            <li>臺北市區監理所：申請日文譯本　tpcmv.thb.gov.tw</li>
            <li>監理服務網　mvdis.gov.tw</li>
            <li>JAF：翻訳文の申請方法　jaf.or.jp</li>
          </ul>

          <div className="doc-no-print mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/">
              沖繩親子旅遊筆記
            </Link>
            <Link
              className="text-[#694624] underline underline-offset-4"
              href="/blog/okinawa-rental-car-license-translation"
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
