"use client";

import { useEffect, useRef } from "react";

// Kit 的表單編號與嵌入網址都出現在它給的公開嵌入碼裡，不是密鑰。
const KIT_FORM_UID = "03df8acb9a";
const KIT_EMBED_SRC = `https://dogged-artist-5501.kit.com/${KIT_FORM_UID}/index.js`;

type NewsletterSignupProps = {
  /** 版面留白，文章底部與獨立頁面需要的間距不一樣 */
  spacing?: "article" | "page";
};

/**
 * 用 Kit 官方的嵌入指令碼，而不是自己接它的表單端點。
 *
 * 自己接的話，送出動作發生在伺服器上，Kit 的反機器人防護會把來自機房 IP 的請求
 * 標成 quarantined 並要求通過 guard 驗證，訂閱者不會真的建立，但端點仍然回 200。
 * 由讀者自己的瀏覽器送出就沒有這個問題。
 */
export function NewsletterSignup({ spacing = "article" }: NewsletterSignupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || container.querySelector("script")) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = KIT_EMBED_SRC;
    script.setAttribute("data-uid", KIT_FORM_UID);
    container.appendChild(script);
  }, []);

  const wrapperClass =
    spacing === "article"
      ? "mt-14 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8"
      : "rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8";

  return (
    <section className={wrapperClass}>
      <p className="text-sm font-semibold tracking-[0.14em] text-[#9a6b43]">免費取得</p>
      <h2 className="mt-2 text-2xl font-bold leading-snug text-[#34302b]">
        出發前，先把租車證件這關過了
      </h2>
      <p className="mt-3 text-sm leading-7 text-[#5f594f]">
        台灣的國際駕照在日本不能用，要辦的是駕照日文譯本。這份檢查表用倒數時間軸帶你走完整段流程，
        從出發前一個月到取車櫃檯，會開車的人各一份，缺一項都會卡在第一天。
      </p>

      <div className="mt-5" ref={containerRef} />

      <p className="mt-4 text-xs leading-6 text-[#7c7466]">
        我們會先寄一封確認信，點了信裡的連結才算完成訂閱。之後會收到沖繩親子旅行的行前信，
        隨時可以在信件最下方取消，Email 不會提供給第三方。
      </p>
    </section>
  );
}
