"use client";

type AffiliateProductLinkProps = {
  href: string;
  itemName: string;
  placement: string;
};

export function AffiliateProductLink({ href, itemName, placement }: AffiliateProductLinkProps) {
  function trackAffiliateClick() {
    window.gtag?.("event", "affiliate_click", {
      affiliate_network: "Shopee",
      content_group: "travel_gear_hub",
      item_name: itemName,
      link_placement: placement,
      link_url: href,
      page_path: window.location.pathname,
      source_page: window.location.pathname
    });
  }

  return (
    <a
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#694624] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
      href={href}
      onClick={trackAffiliateClick}
      rel="sponsored noopener noreferrer"
      target="_blank"
    >
      查看蝦皮商品
    </a>
  );
}
