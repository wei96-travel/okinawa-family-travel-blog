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
  okinawa_souvenir_packing_card: {
    formUid: "94acbb7f26",
    eyebrow: "免費取得",
    heading: "買回來的東西，哪些過不了海關？",
    body:
      "沖繩伴手禮區含肉的比例特別高，帶錯罰鍰從 1 萬元起跳。這張卡從店裡結帳前排到台灣入境走哪條線：看到哪些字就放回架上、液體怎麼分、免稅品要託運前得多做一步。"
  },
  okinawa_typhoon_action_card: {
    formUid: "36a789a0af",
    eyebrow: "免費取得",
    heading: "颱風來的時候，先處理哪一件？",
    body:
      "航班找航空公司、租車通知營業所、飯店確認取消政策，順序錯了會白跑一趟。這張應變卡把順序排好，還附一份可以填好印出來的緊急聯絡清單——颱風天最先失效的，是「我等一下再查」。"
  },
  okinawa_rental_car_seat_pickup: {
    formUid: "9c36696a6a",
    eyebrow: "免費取得",
    heading: "取車前 5 分鐘，先把座椅和行李核對好",
    body:
      "把預約、取車和上路前最容易漏掉的事排在一起：孩子的身高體重、座椅類型與固定方式、推車和行李空間。到櫃檯照著看，不用靠記憶。",
    subscriptionNote:
      "送出後會直接開啟檢查表，並寄一封方便日後再看的信。之後會收到沖繩親子旅行的行前信，隨時可以在信件最下方取消，Email 不會提供給第三方。"
  },
  okinawa_family_attractions_planner: {
    formUid: "39dd1e1d8a",
    eyebrow: "免費取得",
    heading: "今天只留一個主行程",
    body:
      "把兒童王國、玉泉洞與美麗海最常卡住的選擇排在一張表：今天先留哪一站、孩子累了怎麼縮短、下雨或推車怎麼改。出門前勾一次，不用在車上重排整天。",
    subscriptionNote:
      "送出後會直接開啟檢查表，並寄一封方便日後再看的信。之後會收到每週一封沖繩親子旅行的行前信，隨時可以在信件最下方取消，Email 不會提供給第三方。"
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

    const localizeEmbeddedForm = () => {
      const emailInput = container.querySelector<HTMLInputElement>('input[name="email_address"]');
      const submitLabel = container.querySelector<HTMLElement>('[data-element="submit"] > span');

      if (emailInput) {
        emailInput.setAttribute("aria-label", "你的 Email");
        emailInput.setAttribute("placeholder", "你的 Email");
      }

      if (submitLabel) {
        submitLabel.textContent = "立即免費取得";
      }
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

    // Kit 以外部指令碼延後插入表單，監看插入時機後只替換介面文字，不改送出端點或驗證流程。
    const formObserver = new MutationObserver(localizeEmbeddedForm);
    formObserver.observe(container, { childList: true, subtree: true });
    localizeEmbeddedForm();

    if (!container.querySelector("script")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://${KIT_ACCOUNT}.kit.com/${config.formUid}/index.js`;
      script.setAttribute("data-uid", config.formUid);
      container.appendChild(script);
    }

    return () => {
      observer.disconnect();
      formObserver.disconnect();
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
        {"subscriptionNote" in config
          ? config.subscriptionNote
          : "我們會先寄一封確認信，點了信裡的連結才算完成訂閱。之後會收到沖繩親子旅行的行前信，隨時可以在信件最下方取消，Email 不會提供給第三方。"}
      </p>
    </section>
  );
}
