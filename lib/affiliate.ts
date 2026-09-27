export type AffiliateNetwork = "KKday" | "Klook" | "Trip.com" | "Shopee";

export function getAffiliateNetwork(href: string): AffiliateNetwork | null {
  const isKlookAffiliate =
    /^https?:\/\/affiliate\.klook\.com\//i.test(href) ||
    (/^https?:\/\/(?:[^/]+\.)?klook\.com\//i.test(href) && /[?&](?:aid|aff_adid)=/i.test(href));
  const isTripAffiliate =
    /^https?:\/\/(?:[^/]+\.)?trip\.com\//i.test(href) && /[?&]Allianceid=/i.test(href);
  const isShopeeAffiliate = /^https?:\/\/(?:[^/]+\.)?shopee\.tw\//i.test(href);
  const isKkdayAffiliate =
    /^https?:\/\/(?:[^/]+\.)?kkday\.com\//i.test(href) && /[?&]cid=/i.test(href);

  if (isKkdayAffiliate) return "KKday";
  if (isKlookAffiliate) return "Klook";
  if (isTripAffiliate) return "Trip.com";
  if (isShopeeAffiliate) return "Shopee";

  return null;
}

export function hasAffiliateLink(content: string) {
  return Array.from(content.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)).some((match) =>
    Boolean(getAffiliateNetwork(match[1])),
  );
}
