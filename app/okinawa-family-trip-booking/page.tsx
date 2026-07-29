import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateServiceLink } from "@/components/affiliate-service-link";

export const metadata: Metadata = {
  title: "沖繩親子旅行怎麼訂｜住宿、租車與用品整理",
  description:
    "第一次帶孩子去沖繩，先依班機、作息和行程判斷住宿區，再處理租車與行前用品。整理那霸、恩納住宿、沖繩租車及親子旅行用品入口。",
  alternates: {
    canonical: "/okinawa-family-trip-booking"
  },
  openGraph: {
    title: "沖繩親子旅行怎麼訂",
    description: "照班機、孩子作息和主要行程，安排住宿、租車與行前用品。",
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
    bestFor: "晚班機抵達、最後一天早班機，或想把市區購物排在旅程前後幾晚",
    check: "停車費、房型床寬、兒童入住規定、從機場到飯店的交通與取車安排",
    href:
      "https://tw.trip.com/hotels/naha-hotels-list-92573/?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_naha&trip_sub3=D18913050",
    articleHref: "/blog/naha-family-stay-guide",
    articleLabel: "先看那霸親子住宿判斷",
    hotels: [
      {
        name: "那霸東急 REI 飯店",
        buttonLabel: "查看東急 REI 房型",
        fit: "第一晚晚到、最後一天早走，想把交通方便和預算放在前面。",
        reminder: "房間偏精簡，帶推車或大件行李要一起確認房型空間。",
        href:
          "https://tw.trip.com/hotels/naha-hotel-detail-974842/naha-tokyu-rei-hotel/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_tokyu_rei_naha&trip_sub3=D18951522"
      },
      {
        name: "東急 STAY 沖繩那霸",
        buttonLabel: "查看東急 STAY 房型",
        fit: "連住兩晚以上，希望房內能洗衣、簡單加熱食物。",
        reminder: "家庭房型、人數上限和停車條件要依日期重新確認。",
        href:
          "https://tw.trip.com/hotels/naha-hotel-detail-45987505/tokyu-stay-okinawa-naha/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_tokyu_stay_naha&trip_sub3=D18926539"
      },
      {
        name: "美居沖繩那霸酒店",
        buttonLabel: "查看美居那霸房型",
        fit: "想靠近單軌站，或一家三口需要三人房。",
        reminder: "國際通不是下樓就到，開車家庭還要把停車費算進去。",
        href:
          "https://tw.trip.com/hotels/naha-hotel-detail-1572595/mercure-okinawa-naha/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_mercure_naha&trip_sub3=D18926581"
      }
    ]
  },
  {
    area: "恩納",
    bestFor: "想安排海邊、飯店設施與中北部行程，而且願意以租車為主要移動方式",
    check: "晚餐選擇、停車、海灘開放方式、泳池季節、接駁與兒童用品",
    href:
      "https://tw.trip.com/hotels/onna-hotels-list-35725/?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_onna&trip_sub3=D18913057",
    articleHref: "/blog/onna-family-stay-guide",
    articleLabel: "先看恩納住兩晚是否適合",
    hotels: [
      {
        name: "PMC 海洋度假村",
        buttonLabel: "查看 PMC 房型",
        fit: "自駕為主，想要較大的房間、簡易廚房和免費停車。",
        reminder: "設備走簡單實用路線，房況和兒童入住條件要依日期確認。",
        href:
          "https://tw.trip.com/hotels/onna-hotel-detail-1499038/pink-marlin-club/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_pmc_onna&trip_sub3=D18951522"
      },
      {
        name: "Rizzan Sea-Park Hotel 谷茶灣",
        buttonLabel: "查看 Rizzan 房型",
        fit: "想把海灘、泳池和吃飯集中在飯店，減少來回開車。",
        reminder: "飯店範圍大，還要一起比較早餐、停車和取消條件。",
        href:
          "https://tw.trip.com/hotels/uruma-hotel-detail-703619/rizzan-sea-park-hotel-tancha-bay/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_rizzan_onna&trip_sub3=D18926609"
      },
      {
        name: "Hotel Miyuki Beach",
        buttonLabel: "查看 Miyuki Beach 房型",
        fit: "自駕為主，想住海邊又在意停車安排。",
        reminder: "周邊較安靜，晚餐和採買要先跟當天行程一起規劃。",
        href:
          "https://tw.trip.com/hotels/onna-hotel-detail-704228/miyuki-beach-hotel-okinawa/?Allianceid=8075670&SID=305605448&trip_sub1=hotel_miyuki_onna&trip_sub3=D18926616"
      }
    ]
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
    description: "如果住宿位置會增加每天的車程，孩子的午睡和體力也要一起算進去。"
  },
  {
    number: "03",
    title: "主要行程在哪一區？",
    description: "先抓兩個最想去的地方，再決定住宿位置，不要反過來硬湊行程。"
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
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">住宿、租車，先照這個順序處理</h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-white/90">
              先用班機時間、孩子作息和主要行程決定住宿區，再處理租車，最後才整理用品。順序抓對，比一次開很多分頁更好整理。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfce] bg-[#fffdf8]">
        <div className="mx-auto max-w-4xl px-5 py-5 sm:px-6 lg:px-8">
          <p className="text-sm leading-7 text-[#736b60]">
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
              <h2 className="mt-2 text-3xl font-bold text-[#34302b]">先選住宿區，再開始找房</h2>
              <p className="mt-4 text-base leading-8 text-[#5f594f]">
                如果還在比較北部、中部、南部或那霸，先看上方的完整區域攻略。如果選擇已經縮小到那霸和恩納，就從下面查看房型和空房，並回飯店官網核對兒童入住、停車、接駁與設施開放時間。
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-2">
              {stayOptions.map((option) => (
                <article className="rounded-lg border border-[#e2d4bf] bg-white p-6 shadow-sm sm:p-7" key={option.area}>
                  <p className="text-sm font-semibold text-[#9a6b43]">{option.area}住宿</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#34302b]">什麼家庭比較適合？</h3>
                  <p className="mt-4 text-base leading-8 text-[#5f594f]">{option.bestFor}</p>
                  <h4 className="mt-6 text-sm font-bold text-[#34302b]">搜尋時一起確認</h4>
                  <p className="mt-2 text-sm leading-7 text-[#5f594f]">{option.check}</p>

                  <h4 className="mt-7 text-sm font-bold text-[#34302b]">先看三種不同選擇</h4>
                  <div className="mt-3 divide-y divide-[#eadfce] border-y border-[#eadfce]">
                    {option.hotels.map((hotel) => (
                      <div className="py-5" key={hotel.name}>
                        <h5 className="text-base font-bold text-[#34302b]">{hotel.name}</h5>
                        <p className="mt-2 text-sm leading-7 text-[#5f594f]">{hotel.fit}</p>
                        <p className="mt-1 text-xs leading-6 text-[#736b60]">先注意：{hotel.reminder}</p>
                        <div className="mt-4">
                          <AffiliateServiceLink
                            href={hotel.href}
                            itemName={hotel.name}
                            label={hotel.buttonLabel}
                            network="Trip.com"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <AffiliateServiceLink
                      href={option.href}
                      itemName={`${option.area}飯店列表`}
                      label={`比較更多${option.area}住宿`}
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
              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#34302b]">住宿和租車確定後，再回頭整理用品</h2>
              <p className="mt-4 text-base leading-8 text-[#5f594f]">
                奶瓶清潔、車上整理、推車托運和回程收納，可以等行程大致確定後再檢查。租車家庭和住度假飯店的家庭，需要準備的東西不一定相同，按自己的情境挑就好。
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
