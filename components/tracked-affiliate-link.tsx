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
};

export function TrackedAffiliateLink({
  children,
  contentGroup,
  href,
  itemName,
  network,
  placement,
  rel
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
    <a href={href} onClick={trackAffiliateClick} rel={`${rel} noopener`} target="_blank">
      {children}
    </a>
  );
}
