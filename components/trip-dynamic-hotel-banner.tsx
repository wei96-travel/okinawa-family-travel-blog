type TripDynamicHotelBannerProps = {
  placement: string;
};

const NAHA_HOTEL_BANNER_SRC =
  "https://tw.trip.com/partners/ad/DB20416881?Allianceid=8075670&SID=305605448&trip_sub1=hub_naha_dynamic";

export function TripDynamicHotelBanner({ placement }: TripDynamicHotelBannerProps) {
  return (
    <aside
      aria-label="Trip.com 那霸飯店即時房型"
      data-affiliate-placement={placement}
    >
      <p className="text-sm font-bold text-[#34302b]">那霸飯店即時房型</p>
      <p className="mt-2 text-sm leading-7 text-[#5f594f]">
        還沒決定最後一晚住哪裡時，可以先看 Trip.com 當下顯示的房型與價格；空房和價格會依入住日變動。
      </p>
      <p className="mt-2 text-xs leading-6 text-[#736b60]">此為合作版位；若經由本站連結完成訂房，本站可能取得佣金。</p>
      <div className="mt-4 flex justify-center sm:justify-start">
        <iframe
          className="h-[250px] w-[300px] max-w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          scrolling="no"
          src={NAHA_HOTEL_BANNER_SRC}
          title="Trip.com 那霸飯店即時房型與價格"
        />
      </div>
      <p className="mt-3 text-xs leading-6 text-[#736b60]">房型、價格與供應資訊由 Trip.com 提供。</p>
    </aside>
  );
}
