"use client";

import { useState } from "react";
import { TripDynamicHotelBanner } from "@/components/trip-dynamic-hotel-banner";

const areas = [
  {
    description: "晚班機抵達、最後一晚早班機，或想把市區購物排進行程前後。",
    destination: "naha",
    label: "那霸"
  },
  {
    description: "想住海邊度假飯店，把泳池、海灘和晚餐集中在同一區。",
    destination: "bookingOnna",
    label: "恩納"
  },
  {
    description: "想住中部，晚上步行吃飯、逛街或在海邊散步看日落。",
    destination: "bookingChatan",
    label: "美國村"
  }
] as const;

export function TripHotelAreaSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section aria-labelledby="trip-hotel-area-selector-title">
      <p className="text-sm font-semibold text-[#9a6b43]">即時房型</p>
      <h3 className="mt-2 text-2xl font-bold text-[#34302b]" id="trip-hotel-area-selector-title">
        先選區域，再看目前可訂飯店
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f594f]">
        這裡先提供那霸、恩納與美國村的 Trip.com 動態飯店卡；本部／美麗海請先看上方的住宿候選清單。
      </p>

      <div aria-label="選擇住宿區" className="mt-5 grid grid-cols-3 gap-2" role="tablist">
        {areas.map((area, index) => (
          <button
            aria-controls={`trip-hotel-area-panel-${area.destination}`}
            aria-selected={index === activeIndex}
            className={`min-h-11 border px-3 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624] ${index === activeIndex ? "border-[#694624] bg-[#694624] text-white" : "border-[#cbb89d] bg-white text-[#694624] hover:bg-[#fbf3e8]"}`}
            key={area.destination}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {area.label}
          </button>
        ))}
      </div>

      <div
        className="mt-5 border-t border-[#e2d4bf] pt-5"
        id={`trip-hotel-area-panel-${activeArea.destination}`}
        role="tabpanel"
      >
        <p className="text-sm leading-7 text-[#5f594f]">{activeArea.description}</p>
        <div className="mt-4">
          <TripDynamicHotelBanner
            destination={activeArea.destination}
            key={activeArea.destination}
            placement={`booking_hub_${activeArea.destination}_dynamic_banner`}
          />
        </div>
      </div>
    </section>
  );
}
