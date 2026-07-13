import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#eadfce] bg-[#f6efe4]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm text-[#5f594f] sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-bold text-[#34302b]">沖繩親子旅遊筆記</p>
          <p className="mt-2">給第一次帶孩子去沖繩的家庭，一份慢慢整理的旅行規劃筆記。</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link href="/contact">聯絡</Link>
          <Link href="/privacy">隱私權政策</Link>
          <Link href="/affiliate-disclosure">聯盟行銷揭露</Link>
        </div>
      </div>
    </footer>
  );
}
