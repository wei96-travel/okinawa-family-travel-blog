"use client";

import type { ReactNode } from "react";

type TrackedAffiliateLinkProps = {
  children: ReactNode;
  contentGroup: string;
  href: string;
  itemName: string;
  network: "Klook" | "Shopee" | "Trip.com";
  placement: string;
  rel: string;
  variant?: "inline" | "cta";
};

export function TrackedAffiliateLink({
  children,
  contentGroup,
  href,
  itemName,
  network,
  placement,
  rel,
  variant = "inline"
}: TrackedAffiliateLinkProps) {
  function trackAffiliateClick() {
    window.gtag?.("event", "affiliate_click", {
      affiliate_network: network,
      content_group: contentGroup,
      item_name: itemName,
      link_placement: placement,
      link_url: href,
      page_path: window.location.pathname,
      source_page: window.location.pathname
    });
  }

  return (
    <a
      className={
        variant === "cta"
          ? "inline-flex min-h-11 w-full max-w-full items-center justify-center whitespace-normal rounded-md bg-[#694624] px-5 py-3 text-center text-sm font-semibold leading-6 !text-white !no-underline transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624] sm:w-auto"
          : undefined
      }
      data-affiliate-placement={placement}
      href={href}
      onClick={trackAffiliateClick}
      rel={`${rel} noopener`}
      target="_blank"
    >
      {children}
    </a>
  );
}
