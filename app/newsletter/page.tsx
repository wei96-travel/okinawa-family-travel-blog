import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "行前信與免費檢查表",
  description:
    "留下 Email，先拿到沖繩租車證件檢查表，之後陸續收到租車、住宿、行程與雨天備案的行前信。",
  alternates: {
    canonical: "/newsletter"
  }
};

const upcoming = [
  {
    title: "租車現場會卡住你的三件事",
    detail: "安全座椅要一起訂、取還車時間會影響最後一天的班機、市區飯店的停車型態差很多。"
  },
  {
    title: "第一次去，住哪一區最不會出錯",
    detail: "中部為什麼適合當主住宿區，那霸的功能是什麼，換飯店的成本比想像中高。"
  },
  {
    title: "行程排多鬆才不會全家在車上吵架",
    detail: "一天兩個點是上限，沖繩南北開起來比地圖看起來遠。"
  },
  {
    title: "下雨或颱風，行程要怎麼救",
    detail: "室內備案要事先排好，颱風要處理的是航班而不是行程。"
  },
  {
    title: "出發前最後確認",
    detail: "打包、藥品防曬防蚊，還有回程那天為什麼不要排景點。"
  }
];

export default function NewsletterPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">行前信與免費檢查表</h1>
      <p className="mt-4 text-base leading-8 text-[#5f594f]">
        這不是每週寄一次的電子報。你訂閱之後，會照著出發前的節奏，陸續收到幾封整理好的行前信，
        從最容易卡住第一天的證件開始，一路到出發前的最後確認。看完就結束，不會一直寄。
      </p>

      <div className="mt-8">
        <NewsletterSignup spacing="page" />
      </div>

      <h2 className="mt-14 text-2xl font-bold text-[#34302b]">訂閱之後會收到什麼</h2>
      <p className="mt-3 text-sm leading-7 text-[#5f594f]">
        第一封就是租車證件檢查表，接下來依序是：
      </p>
      <div className="mt-5 space-y-4">
        {upcoming.map((item, index) => (
          <div className="rounded-lg border border-[#eadfce] bg-white p-5 shadow-sm" key={item.title}>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#9a6b43]">
              {String(index + 2).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-snug text-[#34302b]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#5f594f]">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-5 text-sm leading-7 text-[#5f594f]">
        每封信最下方都有取消連結，隨時可以停。Email 只用來寄這些信，不會提供給第三方，詳細寫在
        <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/privacy">
          隱私權政策
        </Link>
        。
      </div>
    </section>
  );
}
