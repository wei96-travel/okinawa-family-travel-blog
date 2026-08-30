"use client";

import { useEffect, useRef } from "react";

type NewsletterFunnelTrackerProps = {
  eventName: "lead_magnet_delivery_view";
  leadMagnet: string;
};

function getReferrerPath() {
  if (!document.referrer) return "direct";

  try {
    return new URL(document.referrer).pathname || "external";
  } catch {
    return "unknown";
  }
}

export function NewsletterFunnelTracker({ eventName, leadMagnet }: NewsletterFunnelTrackerProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;

    hasTracked.current = true;
    window.gtag?.("event", eventName, {
      lead_magnet: leadMagnet,
      link_placement: "delivery_page",
      page_path: window.location.pathname,
      source_page: getReferrerPath()
    });
  }, [eventName, leadMagnet]);

  return null;
}
