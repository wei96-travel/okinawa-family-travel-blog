type TripDynamicHotelBannerProps = {
  destination?: "naha" | "onna" | "chatan" | "fukuoka" | "bookingOnna" | "bookingChatan";
  placement: string;
};

const bannerByDestination = {
  naha: {
    ariaLabel: "Trip.com 那霸飯店即時房型",
    description: "還沒決定最後一晚住哪裡時，可以先看 Trip.com 當下顯示的房型與價格；空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20416881?Allianceid=8075670&SID=305605448&trip_sub1=hub_naha_dynamic",
    title: "那霸飯店即時房型"
  },
  onna: {
    ariaLabel: "Trip.com 恩納飯店即時房型",
    description: "還沒鎖定恩納哪一間時，可以先看 Trip.com 當下顯示的房型與價格；空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20802959?Allianceid=8075670&SID=305605448&trip_sub1=blog_onna_dynamic",
    title: "恩納飯店即時房型"
  },
  chatan: {
    ariaLabel: "Trip.com 北谷與美國村附近飯店即時房型",
    description: "先用照片、房型和當下價格縮小北谷住宿範圍；顯示的房源、空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20836293?Allianceid=8075670&SID=305605448&trip_sub1=blog_american_village_dynamic",
    title: "北谷與美國村附近飯店即時房型"
  },
  bookingOnna: {
    ariaLabel: "Trip.com 恩納飯店即時房型",
    description: "想把海邊與飯店設施排進行程時，先看恩納目前可訂房型和價格；空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20870187?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_onna_dynamic",
    title: "恩納飯店即時房型"
  },
  bookingChatan: {
    ariaLabel: "Trip.com 北谷與美國村附近飯店即時房型",
    description: "想住中部、晚上步行吃飯或看海時，先看北谷目前可訂房型和價格；空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20870215?Allianceid=8075670&SID=305605448&trip_sub1=hub_stay_chatan_dynamic",
    title: "北谷與美國村附近飯店即時房型"
  },
  fukuoka: {
    ariaLabel: "Trip.com 福岡飯店即時房型",
    description: "還沒鎖定哪一間時，可以先看 Trip.com 當下顯示的福岡房型與價格；空房和價格會依入住日變動。",
    source:
      "https://tw.trip.com/partners/ad/DB20713639?Allianceid=8075670&SID=305605448&trip_sub1=blog_fukuoka_hotel_banner",
    title: "福岡飯店即時房型"
  }
} as const;

export function TripDynamicHotelBanner({ destination = "naha", placement }: TripDynamicHotelBannerProps) {
  const banner = bannerByDestination[destination];

  return (
    <aside
      aria-label={banner.ariaLabel}
      data-affiliate-placement={placement}
    >
      <p className="text-sm font-bold text-[#34302b]">{banner.title}</p>
      <p className="mt-2 text-sm leading-7 text-[#5f594f]">{banner.description}</p>
      <p className="mt-2 text-xs leading-6 text-[#736b60]">此為合作版位；若經由本站連結完成訂房，本站可能取得佣金。</p>
      <div className="mt-4 flex justify-center sm:justify-start">
        <iframe
          className="h-[250px] w-[300px] max-w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          scrolling="no"
          src={banner.source}
          title={`${banner.title}與價格`}
        />
      </div>
      <p className="mt-3 text-xs leading-6 text-[#736b60]">房型、價格與供應資訊由 Trip.com 提供。</p>
    </aside>
  );
}
