"use client";

import { useState } from "react";
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link";

const hotels = [
  {
    href:
      "https://tw.trip.com/hotels/chatan-hotel-detail-705561/vessel-hotel-campana-okinawa/?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_vessel&trip_sub3=D19827215",
    name: "Vessel 花苑沖繩飯店",
    note: "想住在美國村裡、帶學齡前孩子看早餐和泳池，先從這間開始比。",
    tag: "美國村內"
  },
  {
    href:
      "https://tw.trip.com/hotels/chatan-hotel-detail-711312/the-beach-tower-of-okinawa/?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_beach_tower&trip_sub3=D19827250",
    name: "北谷沖繩海灘塔飯店",
    note: "嬰幼兒用品和借用備品是特色，帶小小孩時很值得先確認供應狀況。",
    tag: "嬰幼兒友善"
  },
  {
    href:
      "https://tw.trip.com/hotels/chatan-hotel-detail-1779182/hilton-okinawa-chatan-resort/?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_hilton&trip_sub3=D19827285",
    name: "沖繩北谷希爾頓度假飯店",
    note: "想找度假飯店感、館內泳池和較完整設施，可先用同日期總價比較。",
    tag: "度假設施"
  },
  {
    href:
      "https://tw.trip.com/hotels/chatan-hotel-detail-52769968/lequ-okinawa-chatan-spa-resort/?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_lequ&trip_sub3=D19827431",
    name: "LeQu 沖繩北谷 Spa & Resort",
    note: "想把屋頂泳池和天然溫泉排進住宿，可先看這間；12 歲以下使用泳池要有成人陪同。",
    tag: "泳池與溫泉"
  },
  {
    href:
      "https://tw.trip.com/hotels/chatan-hotel-detail-16034317/doubletree-by-hilton-okinawa-chatan-resort/?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_doubletree&trip_sub3=D19827432",
    name: "沖繩北谷希爾頓逸林度假飯店",
    note: "有室外泳池、嬰兒床、兒童餐與連通房；需要兩間相連房的家庭可以先比房型。",
    tag: "連通房選項"
  }
] as const;

export function ChatanHotelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hotel = hotels[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + hotels.length) % hotels.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % hotels.length);
  }

  return (
    <section aria-label="美國村親子飯店快速比較" data-affiliate-placement="american_village_hotel_carousel">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#34302b]">美國村親子飯店快速比較</p>
          <p className="mt-2 text-sm leading-7 text-[#5f594f]">先切換比較 5 間，再看入住日的實際總價。</p>
        </div>
        <span aria-live="polite" className="shrink-0 text-xs text-[#736b60]">
          {activeIndex + 1} / {hotels.length}
        </span>
      </div>

      <div className="mt-4 min-h-48 border border-[#e2d4bf] bg-[#fffdf9] p-5 sm:p-6">
        <p className="text-xs font-semibold text-[#8a5a2b]">{hotel.tag}</p>
        <h3 className="mt-2 text-lg font-bold leading-8 text-[#34302b]">{hotel.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5f594f]">{hotel.note}</p>
        <TrackedAffiliateLink
          contentGroup="blog_article"
          href={hotel.href}
          itemName={`${hotel.name}｜美國村飯店輪播`}
          network="Trip.com"
          placement="american_village_hotel_carousel"
          rel="sponsored noreferrer"
          variant="cta"
        >
          查看房型與同日期總價
        </TrackedAffiliateLink>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <button
          aria-label={`查看上一間：${hotels[(activeIndex - 1 + hotels.length) % hotels.length].name}`}
          className="min-h-11 min-w-11 border border-[#cbb89d] px-3 text-lg leading-none text-[#543719] transition hover:bg-[#fbf3e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
          onClick={showPrevious}
          type="button"
        >
          &#8249;
        </button>
        <div aria-label="選擇飯店" className="flex gap-2" role="tablist">
          {hotels.map((item, index) => (
            <button
              aria-label={`查看${item.name}`}
              aria-selected={index === activeIndex}
              className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-[#694624]" : "bg-[#d7c7b1] hover:bg-[#ae8a62]"}`}
              key={item.name}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            />
          ))}
        </div>
        <button
          aria-label={`查看下一間：${hotels[(activeIndex + 1) % hotels.length].name}`}
          className="min-h-11 min-w-11 border border-[#cbb89d] px-3 text-lg leading-none text-[#543719] transition hover:bg-[#fbf3e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
          onClick={showNext}
          type="button"
        >
          &#8250;
        </button>
      </div>
      <p className="mt-3 text-xs leading-6 text-[#736b60]">此為合作連結；若經由本站連結完成訂房，本站可能取得佣金。房型、價格與供應以 Trip.com 畫面為準。</p>
    </section>
  );
}
