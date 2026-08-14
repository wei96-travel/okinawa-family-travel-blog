"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type NewsletterSignupProps = {
  /** 版面留白，文章底部與獨立頁面需要的間距不一樣 */
  spacing?: "article" | "page";
};

export function NewsletterSignup({ spacing = "article" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(typeof data?.error === "string" ? data.error : "訂閱失敗，請稍後再試");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("訂閱失敗，請稍後再試");
    }
  }

  const wrapperClass =
    spacing === "article"
      ? "mt-14 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8"
      : "rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-6 sm:p-8";

  if (status === "success") {
    return (
      <section className={wrapperClass}>
        <p className="text-sm font-semibold tracking-[0.14em] text-[#9a6b43]">已送出</p>
        <h2 className="mt-2 text-2xl font-bold text-[#34302b]">確認信寄出了</h2>
        <p className="mt-3 text-sm leading-7 text-[#5f594f]">
          去信箱點一下信裡的連結，就會收到檢查表。如果幾分鐘後還沒看到，順手看一下垃圾郵件匣。
        </p>
      </section>
    );
  }

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

      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            你的 Email
          </label>
          <input
            autoComplete="email"
            className="w-full flex-1 rounded-md border border-[#e0d3bd] bg-white px-4 py-3 text-base text-[#34302b] placeholder:text-[#a49b8c] focus:border-[#9a6b43] focus:outline-none focus:ring-2 focus:ring-[#9a6b43]/30"
            id="newsletter-email"
            inputMode="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="你的 Email"
            required
            type="email"
            value={email}
          />
          <button
            className="rounded-md bg-[#694624] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#563819] disabled:cursor-not-allowed disabled:opacity-60 sm:shrink-0"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "送出中…" : "免費取得檢查表"}
          </button>
        </div>

        {status === "error" && message ? (
          <p className="mt-3 text-sm font-semibold text-[#a13c28]">{message}</p>
        ) : null}

        <p className="mt-4 text-xs leading-6 text-[#7c7466]">
          我們會先寄一封確認信，點了信裡的連結才算完成訂閱。之後會收到沖繩親子旅行的行前信，
          隨時可以在信件最下方取消，Email 不會提供給第三方。
        </p>
      </form>
    </section>
  );
}
