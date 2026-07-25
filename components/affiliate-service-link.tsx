"use client";

type AffiliateServiceLinkProps = {
  href: string;
  itemName: string;
  label: string;
  network: "Trip.com" | "Shopee";
};

export function AffiliateServiceLink({ href, itemName, label, network }: AffiliateServiceLinkProps) {
  function trackAffiliateClick() {
    window.gtag?.("event", "affiliate_click", {
      affiliate_network: network,
      content_group: "trip_booking_hub",
      item_name: itemName,
      link_url: href,
      page_path: window.location.pathname
    });
  }

  return (
    <a
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#694624] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
      href={href}
      onClick={trackAffiliateClick}
      rel="sponsored noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}
