import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateProductLink } from "@/components/affiliate-product-link";

export const metadata: Metadata = {
  title: "沖繩親子旅行用品清單｜推車托運、行李整理與回程收納",
  description:
    "整理帶小孩去沖繩時真正派得上用場的用品：推車托運袋、行李秤、摺疊旅行袋與壓縮收納袋。每項都說明用途、限制與購買前要注意的地方。",
  alternates: {
    canonical: "/okinawa-family-travel-gear"
  },
  openGraph: {
    title: "沖繩親子旅行用品清單",
    description: "從推車托運、行李超重、回程多一袋到全家衣物分類，依旅行問題挑用品。",
    url: "/okinawa-family-travel-gear",
    images: [
      {
        url: "/images/okinawa-gear-cover.webp",
        alt: "沖繩親子旅行用品整理"
      }
    ]
  }
};

const products = [
  {
    id: "stroller-bag",
    category: "推車托運",
    problem: "怕推車弄髒，也怕零件在搬運途中散開",
    name: "有分尺寸的推車旅行收納袋",
    reason:
      "商品頁把細長傘車、口袋型推車和大型推車分成 7 種規格，材質標示為牛津布。查詢時頁面顯示 700 則評價與 2,000+ 銷量，尺寸資訊比另外兩個候選完整。",
    caution:
      "先量推車折疊後的長、寬、高。收納袋能幫忙集中零件、減少表面弄髒，但不能保證托運時完全不會碰撞或受損。",
    href: "https://s.shopee.tw/9zwOmFGv6v",
    articleHref: "/blog/okinawa-family-stroller-guide",
    articleLabel: "先看推車判斷攻略"
  },
  {
    id: "luggage-scale",
    category: "回程秤重",
    problem: "行李箱關得起來，卻怕到機場才發現超重",
    name: "POLYWELL 電子行李秤",
    reason:
      "查詢時由品牌官方旗艦店販售，頁面顯示 7,000+ 銷量與 3,000 多則評價，並列出約 82 公克重量及四種秤重單位。最後一晚重分行李時比較好用。",
    caution:
      "手提秤和機場磅秤可能有些差異，不要把行李重量剛好卡在航空公司上限。托運額度仍以你的票種與實際承運航空公司為準。",
    href: "https://s.shopee.tw/7AcACMuSfB",
    articleHref: "/blog/okinawa-souvenir-packing-guide",
    articleLabel: "先看回程打包順序"
  },
  {
    id: "foldable-bag",
    category: "戰利品收納",
    problem: "回程突然多一袋，原本的行李箱塞不下",
    name: "吉來小舖摺疊擴充旅行袋",
    reason:
      "商品頁查詢時顯示 4 萬+ 銷量、約 1.4 萬則評價，重量標示約 380 公克。出發時先收在行李箱，回程再拿來放衣物、玩偶或不怕壓的紙盒。",
    caution:
      "多一個袋子可能就是多一件托運行李。瓶裝液體與易碎品不要只靠軟袋保護，也要先確認航空公司的件數、尺寸和重量限制。",
    href: "https://s.shopee.tw/7AcACRk7hy",
    articleHref: "/blog/okinawa-family-shopping-guide",
    articleLabel: "先看沖繩購物動線"
  },
  {
    id: "packing-cubes",
    category: "全家行李分類",
    problem: "大人、小孩和待洗衣物混在一起，最後一晚很難重分",
    name: "90直直買六件式壓縮收納袋",
    reason:
      "查詢時商品頁顯示 1 萬+ 銷量、3,700 多則評價與 100% 賣場回應率。六件式比較適合把家庭成員與待洗衣物分開，臨時換箱時不必整箱翻出來。",
    caution:
      "壓縮收納袋不會減少重量，也不要拿來硬壓點心盒。把它當成分類工具，比期待多塞一倍更實際。",
    href: "https://s.shopee.tw/9V04ylQwhF",
    articleHref: "/blog/okinawa-souvenir-packing-guide",
    articleLabel: "先看伴手禮裝箱方式"
  }
] as const;

export default function OkinawaFamilyTravelGearPage() {
  return (
    <div>
      <section className="border-b border-[#eadfce] bg-[#fffdf8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#9a6b43]">出發前用品整理</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#34302b] sm:text-4xl">
              沖繩親子旅行用品清單
            </h1>
            <p className="mt-5 text-lg leading-9 text-[#5f594f]">
              這頁不把所有用品都列一遍，只整理已經打開商品頁，核對過尺寸、材質、評價與銷量的選項。先看自己遇到哪個問題，再決定需不需要買。
            </p>
            <p className="mt-5 border-l-4 border-[#9a6b43] bg-[#fbf6ee] px-4 py-3 text-sm leading-7 text-[#5f594f]">
              以下含蝦皮分潤連結。透過連結購買不會增加你的售價，本站可能獲得分潤。商品價格、規格與庫存會變動，請以賣場頁面為準。
            </p>
          </div>
          <img
            alt="沖繩親子旅行用品整理"
            className="aspect-[4/3] w-full rounded-lg border border-[#eadfce] bg-white object-cover shadow-sm"
            src="/images/okinawa-gear-cover.webp"
          />
        </div>
      </section>

      <nav aria-label="用品問題快速選擇" className="border-b border-[#eadfce] bg-[#f6efe4]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-4 text-sm font-semibold text-[#694624] sm:px-6 lg:px-8">
          {products.map((product) => (
            <a className="underline decoration-[#d7c7af] underline-offset-4 hover:text-[#543719]" href={`#${product.id}`} key={product.id}>
              {product.category}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {products.map((product, index) => (
          <section
            className={index % 2 === 0 ? "border-b border-[#eadfce] bg-[#fffdf8]" : "border-b border-[#eadfce] bg-[#fbf6ee]"}
            id={product.id}
            key={product.id}
          >
            <div className="mx-auto grid max-w-6xl gap-7 px-5 py-11 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
              <div>
                <p className="text-sm font-semibold text-[#9a6b43]">
                  {String(index + 1).padStart(2, "0")} / {product.category}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-[#34302b]">{product.problem}</h2>
                <p className="mt-4 text-base font-semibold text-[#694624]">{product.name}</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#34302b]">為什麼留下這個選項？</h3>
                <p className="mt-3 text-base leading-8 text-[#5f594f]">{product.reason}</p>
                <p className="mt-5 border-l-2 border-[#d7c7af] pl-4 text-sm leading-7 text-[#5f594f]">
                  <strong className="text-[#34302b]">購買前先注意：</strong>
                  {product.caution}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <AffiliateProductLink href={product.href} itemName={product.name} />
                  <Link className="text-sm font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4" href={product.articleHref}>
                    {product.articleLabel}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#34302b]">這頁怎麼挑商品？</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-[#5f594f]">
          <p>商品要先解決文章裡已經出現的旅行問題，拿掉購買連結後，原本的攻略仍然要成立。</p>
          <p>同一類用品之後會保留 2～3 個不同方向，例如價格較低、規格較完整或重量較輕。讀者不必只能選一個賣場，但每個連結都要先完成核對，不會為了湊數把搜尋結果整排放上來。</p>
          <p>我們會核對商品頁、尺寸、材質、評價數與可見銷量，也會把限制寫出來。賣場寫的「通用」、「防水」或其他宣傳文字，不會直接改寫成本站保證。</p>
          <p>
            這批資料核對於 2026 年 7 月 22～24 日。更完整的合作說明可看
            <Link className="font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4" href="/affiliate-disclosure">
              聯盟行銷揭露
            </Link>
            。
          </p>
        </div>
      </section>
    </div>
  );
}
