import Link from "next/link";

const navItems = [
  { href: "/blog", label: "文章" },
  { href: "/about", label: "關於" },
  { href: "/contact", label: "聯絡" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#eadfce] bg-[#fffdf8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link className="text-base font-bold tracking-wide text-[#34302b]" href="/">
          沖繩親子旅遊筆記
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-[#5f594f]">
          {navItems.map((item) => (
            <Link className="transition hover:text-[#694624]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
