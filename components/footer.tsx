"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="border-t border-[#eadfce] bg-[#f6efe4]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm text-[#5f594f] sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-bold text-[#34302b]">{isEnglish ? "Okinawa Family Notes" : "沖繩親子旅遊筆記"}</p>
          <p className="mt-2">
            {isEnglish
              ? "Practical Okinawa planning notes for families visiting with children."
              : "給第一次帶孩子去沖繩的家庭，一份慢慢整理的旅行規劃筆記。"}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          {isEnglish ? (
            <>
              <Link href="/en/blog">Family guides</Link>
              <Link href="/en/about">About</Link>
              <Link href="/en/contact">Contact</Link>
              <Link href="/en/privacy">Privacy policy</Link>
              <Link href="/">繁體中文</Link>
            </>
          ) : (
            <>
              <Link href="/okinawa-family-trip-budget-calculator">旅費計算器</Link>
              <Link href="/okinawa-family-trip-booking">預訂整理</Link>
              <Link href="/okinawa-family-travel-gear">用品清單</Link>
              <Link href="/newsletter">行前信與免費檢查表</Link>
              <Link href="/contact">聯絡</Link>
              <Link href="/privacy">隱私權政策</Link>
              <Link href="/affiliate-disclosure">合作說明</Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
