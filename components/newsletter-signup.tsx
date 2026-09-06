"use client";

import { useEffect, useRef } from "react";

// Kit 的表單編號與嵌入網址都出現在它給的公開嵌入碼裡，不是密鑰。
const KIT_ACCOUNT = "dogged-artist-5501";

/**
 * 每個誘餌一組設定。要再加新的，只在這裡多一筆，不必改元件本體。
 * key 同時當成 GA4 的 lead_magnet 參數值，後台才分得出是哪一份帶來的訂閱。
 */
export const NEWSLETTER_OFFERS = {
  okinawa_rental_car_documents: {
    formUid: "03df8acb9a",
    eyebrow: "免費取得",
    heading: "出發前，先把租車證件這關過了",
    body:
      "台灣的國際駕照在日本不能用，要辦的是駕照日文譯本。這份檢查表用倒數時間軸帶你走完整段流程，從出發前一個月到取車櫃檯，會開車的人各一份，缺一項都會卡在第一天。"
  },
  okinawa_typhoon_action_card: {
    formUid: "36a789a0af",
    eyebrow: "免費取得",
    heading: "颱風來的時候，先處理哪一件？",
    body:
      "航班找航空公司、租車通知營業所、飯店確認取消政策，順序錯了會白跑一趟。這張應變卡把順序排好，還附一份可以填好印出來的緊急聯絡清單——颱風天最先失效的，是「我等一下再查」。"
  }
} as const;

export type NewsletterOffer = keyof typeof NEWSLETTER_OFFERS;

type NewsletterSignupProps = {
  /** 版面留白，文章底部與獨立頁面需要的間距不一樣 */
  spacing?: "article" | "page";
  /** 要放哪一份誘餌；預設是租車證件檢查表 */
  offer?: NewsletterOffer;
};

/**
 * 用 Kit 官方的嵌入指令碼，而不是自己接它的表單端點。
 *
 * 自己接的話，送出動作發生在伺服器上，Kit 的反機器人防護會把來自機房 IP 的請求
 * 標成 quarantined 並要求通過 guard 驗證，訂閱者不會真的建立，但端點仍然回 200。
 * 由讀者自己的瀏覽器送出就沒有這個問題。
 */
export function NewsletterSignup({ spacing = "article", offer = "okinawa_rental_car_documents" }: NewsletterSignupProps) {
  const config = NEWSLETTER_OFFERS[offer];
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedSubmit = useRef(false);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (!container || !section) {
      return;
    }

    const placement = spacing === "article" ? "article_end" : "newsletter_page";
    const eventParameters = {
      lead_magnet: offer,
      link_placement: placement,
      page_path: window.location.pathname,
      source_page: window.location.pathname
    };

    const trackSubmit = () => {
      if (hasTrackedSubmit.current) return;

      hasTrackedSubmit.current = true;
      window.gtag?.("event", "newsletter_signup_submit", eventParameters);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasTrackedView.current) return;

        hasTrackedView.current = true;
        window.gtag?.("event", "newsletter_signup_view", eventParameters);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    container.addEventListener("submit", trackSubmit, true);

    if (!container.querySelector("script")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://${KIT_ACCOUNT}.kit.com/${config.formUid}/index.js`;
      script.setAttribute("data-uid", config.formUid);
      container.appendChild(script);
    }

    return () => {
      observer.disconnect();
      container.removeEventListener("submit", trackSubmit, true);
    };
  }, [spacing, offer, config.formUid]);

  const wrapperClass =
    spacing === "article"
      ? "mt-14 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8"
      : "rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8";

  return (
    <section className={wrapperClass} data-newsletter-signup={spacing} ref={sectionRef}>
      <p className="text-sm font-semibold tracking-[0.14em] text-[#9a6b43]">{config.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold leading-snug text-[#34302b]">{config.heading}</h2>
      <p className="mt-3 text-sm leading-7 text-[#5f594f]">{config.body}</p>

      <div className="mt-5" ref={containerRef} />

      <p className="mt-4 text-xs leading-6 text-[#7c7466]">
        我們會先寄一封確認信，點了信裡的連結才算完成訂閱。之後會收到沖繩親子旅行的行前信，
        隨時可以在信件最下方取消，Email 不會提供給第三方。
      </p>
    </section>
  );
}
