import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateServiceLink } from "@/components/affiliate-service-link";

export const metadata: Metadata = {
  title: "沖繩親子旅行怎麼訂｜住宿、租車與用品整理",
  description:
    "第一次帶孩子去沖繩，先依班機、作息和行程判斷住宿區，再比較租車與行前用品。整理那霸、恩納住宿、沖繩租車及親子旅行用品入口。",
  alternates: {
    canonical: "/okinawa-family-trip-booking"
  },
  openGraph: {
    title: "沖繩親子旅行怎麼訂",
    description: "先判斷住宿區與移動方式，再打開訂房、租車和用品入口。",
    url: "/okinawa-family-trip-booking",
    images: [
      {
        url: "/images/okinawa-realistic-cover.webp",
        alt: "沖繩親子旅行預訂整理"
      }
    ]
  }
};

const stayOptions = [
  {
    area: "那霸",
    bestFor: "晚班機抵達、最後一天早班機，或想把市區購物排在前後兩晚",
    check: "停車費、房型床寬、兒童入住規定、單軌或租車公司的移動方式",
    href:
      "https://tw.trip.com/hotels/naha-hotels-list-92573/?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_naha&trip_sub3=D18913050",
    articleHref: "/blog/naha-family-stay-guide",
    articleLabel: "先看那霸親子住宿判斷"
  },
  {
    area: "恩納",
    bestFor: "想安排海邊、飯店設施與中北部行程，而且願意以租車為主要移動方式",
    check: "晚餐選擇、停車、海灘開放方式、泳池季節、接駁與兒童用品",
    href:
      "https://tw.trip.com/hotels/onna-hotels-list-35725/?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_onna&trip_sub3=D18913057",
    articleHref: "/blog/onna-family-stay-guide",
    articleLabel: "先看恩納住兩晚是否適合"
  }
] as const;

const decisionQuestions = [
  {
    number: "01",
    title: "班機幾點到、幾點走？",
    description: "晚到或早走的那一晚，通常不適合再拉長車程。"
  },
  {
    number: "02",
    title: "孩子能坐多久？",
    description: "住宿省下的錢，如果每天換成更多車程，不一定比較輕鬆。"
  },
  {
    number: "03",
    title: "主要行程在哪一區？",
    description: "先抓兩個最想去的地方，再決定住宿中心，不要反過來硬湊行程。"
  }
] as const;

export default function OkinawaFamilyTripBookingPage() {
  return (
    <div>
      <section className="relative min-h-[500px] overflow-hidden bg-[#34302b]">
        <img
          alt="沖繩海邊、行李與旅程規劃用品"
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/okinawa-realistic-cover.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211f1b]/90 via-[#211f1b]/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-end px-5 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold">沖繩親子旅行預訂整理</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">先想清楚怎麼玩，再打開訂房網站</h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-white/90">
              這頁把住宿、租車和行前用品放在一起，但不會催你每一項都買。先看家庭的班機、作息與行程，再決定哪些入口真的用得到。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfce] bg-[#fffdf8]">
        <div className="mx-auto max-w-4xl px-5 py-7 sm:px-6 lg:px-8">
          <p className="border-l-4 border-[#9a6b43] bg-[#fbf6ee] px-4 py-3 text-sm leading-7 text-[#5f594f]">
            本頁含 Trip.com 與蝦皮聯盟連結。若你透過連結完成預訂或購買，本站可能取得分潤，但不會增加你的價格。房價、車價、商品規格、庫存與取消條件都可能變動，請以平台、飯店、租車公司與賣場的最新資料為準。
          </p>
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#9a6b43]">下訂以前</p>
            <h2 className="mt-2 text-3xl font-bold text-[#34302b]">先回答這三題，範圍會小很多</h2>
          </div>
          <div className="mt-8 grid border-y border-[#eadfce] md:grid-cols-3">
            {decisionQuestions.map((item, index) => (
              <div
                className={`py-7 md:px-7 ${index > 0 ? "border-t border-[#eadfce] md:border-l md:border-t-0" : ""}`}
                key={item.number}
              >
                <p className="text-xs font-semibold text-[#9a6b43]">{item.number}</p>
                <h3 className="mt-3 text-xl font-bold text-[#34302b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.description}</p>
              </div>
            ))}
          </div>
          <Link
            className="mt-7 inline-flex text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
            href="/blog/first-okinawa-where-to-stay"
          >
            還沒決定住宿區？先看完整判斷方式
          </Link>
        </section>

        <section className="border-y border-[#eadfce] bg-[#f6efe4]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#9a6b43]">住宿</p>
              <h2 className="mt-2 text-3xl font-bold text-[#34302b]">先選區域，再比較兩三間</h2>
              <p className="mt-4 text-base leading-8 text-[#5f594f]">
                訂房平台適合縮小範圍，不適合替你做最後確認。看到合適房型後，還要回飯店官網核對兒童入住、停車、接駁與設施開放時間。
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-2">
              {stayOptions.map((option) => (
                <article className="rounded-lg border border-[#e2d4bf] bg-white p-6 shadow-sm sm:p-7" key={option.area}>
                  <p className="text-sm font-semibold text-[#9a6b43]">{option.area}住宿</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#34302b]">什麼家庭比較適合？</h3>
                  <p className="mt-4 text-base leading-8 text-[#5f594f]">{option.bestFor}</p>
                  <h4 className="mt-6 text-sm font-bold text-[#34302b]">打開房型前先看</h4>
                  <p className="mt-2 text-sm leading-7 text-[#5f594f]">{option.check}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <AffiliateServiceLink
                      href={option.href}
                      itemName={`${option.area}飯店列表`}
                      label={`查看${option.area}住宿`}
                      network="Trip.com"
                    />
                    <Link
                      className="text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
                      href={option.articleHref}
                    >
                      {option.articleLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-9 px-5 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#9a6b43]">租車</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#34302b]">便宜方案，不一定最適合帶小孩</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#5f594f]">
              比價時要一起看取還車地點、接駁時間、行李空間、兒童安全座椅、保障與取消條款。只看首頁價格，很容易漏掉抵達後真正會花時間的地方。
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f594f]">
              <li>晚班機：確認櫃檯營業與接駁截止時間。</li>
              <li>推車加行李箱：不要只用乘坐人數判斷車型。</li>
              <li>異地還車：先確認是否能選、是否另收費。</li>
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <AffiliateServiceLink
                href="https://tw.trip.com/carhire/to-japan-78/okinawa-207/?Allianceid=8075670&SID=305605448&trip_sub1=hub_rental_car&trip_sub3=D18913071"
                itemName="沖繩租車列表"
                label="比較沖繩租車"
                network="Trip.com"
              />
              <Link
                className="text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
                href="/blog/okinawa-rental-car-family-guide"
              >
                先看親子租車完整攻略
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[#eadfce] bg-[#fffdf8]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold text-[#9a6b43]">行前用品</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#34302b]">用品另外整理，不跟訂房混在一起</h2>
              <p className="mt-4 text-base leading-8 text-[#5f594f]">
                奶瓶清潔、車上整理、推車托運和回程收納，已經依旅行情境放在用品頁。每項都會說明用途與限制，不需要在這頁重新看一排商品。
              </p>
              <Link
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-[#b99a76] px-5 py-3 text-sm font-semibold text-[#694624] transition hover:bg-[#fbf6ee]"
                href="/okinawa-family-travel-gear"
              >
                看親子旅行用品整理
              </Link>
            </div>
            <img
              alt="沖繩親子旅行用品整理"
              className="aspect-[4/3] w-full rounded-lg border border-[#eadfce] object-cover shadow-sm"
              src="/images/okinawa-gear-cover.webp"
            />
          </div>
        </section>

      </main>
    </div>
  );
}
