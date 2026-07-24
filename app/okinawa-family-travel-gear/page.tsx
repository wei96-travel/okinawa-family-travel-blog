import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateProductLink } from "@/components/affiliate-product-link";

export const metadata: Metadata = {
  title: "沖繩親子旅行用品清單｜奶瓶清潔、車上整理與回程收納",
  description:
    "整理帶小孩去沖繩時真正派得上用場的用品：奶瓶清潔、隨身濕紙巾、密實袋、推車托運與回程收納。每項都說明用途、限制與購買前要注意的地方。",
  alternates: {
    canonical: "/okinawa-family-travel-gear"
  },
  openGraph: {
    title: "沖繩親子旅行用品清單",
    description: "從奶瓶清潔、車上整理、推車托運到回程收納，依旅行情境挑用品。",
    url: "/okinawa-family-travel-gear",
    images: [
      {
        url: "/images/okinawa-gear-cover.webp",
        alt: "沖繩親子旅行用品整理"
      }
    ]
  }
};

const productGroups = [
  {
    id: "bottle-cleaning",
    eyebrow: "喝奶後清潔",
    title: "飯店有水槽，不代表奶瓶就好處理",
    summary: "奶瓶帶得越多，晚上回房間要洗的東西也越多。與其只想到奶瓶本身，我會把刷具、清潔劑和晾乾位置一起準備。",
    products: [
      {
        category: "攜帶式刷具",
        problem: "有水槽，卻沒有刷具和瀝乾的位置",
        name: "LIFEMATE 攜帶式奶瓶刷具組 KP0814",
        reason:
          "品牌官方規格列出奶瓶刷、奶嘴刷、吸管刷、清潔劑分裝瓶、瀝乾架、瀝水層與收納盒，共 7 件。整組約 280 公克，尺寸約 18 × 13 × 5.5 公分；蝦皮原廠賣場查詢時顯示 5.0 分與 66 件銷量。",
        caution:
          "這組是清洗工具，不等於消毒。官方也提醒，沒有標示可煮沸或蒸汽消毒的配件不要自行高溫處理；分裝瓶要貼清楚標籤，避免和飲用水混在一起。",
        href: "https://s.shopee.tw/8AUkeaABdd",
        articleHref: "/blog/okinawa-summer-family-packing-list",
        articleLabel: "先看夏季親子行李清單"
      },
      {
        category: "奶瓶清潔劑",
        problem: "刷具帶了，才發現沒有適合洗奶瓶的清潔劑",
        name: "小獅王辛巴綠活系奶瓶蔬果洗潔噴霧 120ml",
        reason:
          "品牌官方資料可核對到產品編號 S2240、120ml 與台灣製造，使用情境包含奶瓶、奶嘴和食器。蝦皮商品頁查詢時顯示 5.0 分與 2,000+ 銷量，容量也比家庭號容易帶出門。",
        caution:
          "120ml 容器超過國際線手提行李常見的單瓶 100ml 上限，搭飛機時應放托運行李，不要因為瓶內只剩一點就放進手提行李。使用後仍要照產品標示沖洗乾淨。",
        href: "https://s.shopee.tw/7fYU3gwukD",
        articleHref: "/blog/okinawa-summer-family-packing-list",
        articleLabel: "先看液體與隨身包怎麼分"
      }
    ]
  },
  {
    id: "car-reset",
    eyebrow: "車上臨時整理",
    title: "小孩吃完東西，後座通常一次多出三種麻煩",
    summary: "手黏、包裝紙沒地方放、乾淨用品和用過的東西混在一起。兩種小物就能先把場面收住，不用等到還車前才大整理。",
    products: [
      {
        category: "隨身濕紙巾",
        problem: "吃完點心手黏，整包家庭號又太占空間",
        name: "蝦皮直營貝恩嬰兒保養柔濕巾 20 抽 × 3 包",
        reason:
          "貝恩官方與蝦皮直營頁面都能核對到 20 抽 × 3 包規格。蝦皮直營商品查詢時顯示 1 萬+ 銷量，小包裝可以分放在隨身包、推車與租車上，不必每天背著大包裝移動。",
        caution:
          "濕紙巾不能取代洗手，也不要拿來擦租車的螢幕、鏡頭或不確定材質的內裝。孩子皮膚若出現不適就先停用。",
        href: "https://s.shopee.tw/1VxqiMy7pC",
        articleHref: "/blog/okinawa-convenience-store-family-shopping-guide",
        articleLabel: "先看便利商店怎麼補位"
      },
      {
        category: "密實袋",
        problem: "包裝紙、備用衣物和乾淨小物全混在一起",
        name: "蝦皮直營妙潔 PE 密實袋（大／中／小）",
        reason:
          "品牌官方資料列出雙軌夾鏈，小尺寸約 13 × 13 公分、每盒 30 枚；蝦皮直營商品查詢時顯示 4 萬+ 銷量。小袋可以放零散小物，中袋則適合把備用衣物或暫時要隔開的東西先分開。",
        caution:
          "密實袋不是防水保證，也不要裝熱液體或尖銳物。裝食物、乾淨用品與垃圾的袋子要分開，還車前仍要把垃圾帶走。",
        href: "https://s.shopee.tw/1qah6zZhJB",
        articleHref: "/blog/okinawa-convenience-store-family-shopping-guide",
        articleLabel: "先看親子自駕採買情境"
      }
    ]
  },
  {
    id: "stroller-travel",
    eyebrow: "推車托運",
    title: "推車要托運，先處理尺寸和零件",
    summary: "收納袋的作用是集中零件、減少表面弄髒，不是讓推車變成摔不壞。下單前最重要的還是量折疊尺寸。",
    products: [
      {
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
      }
    ]
  },
  {
    id: "return-packing",
    eyebrow: "回程收納",
    title: "買完伴手禮，才是真正的行李考驗",
    summary: "先知道有沒有超重，再決定要不要多一個袋子；收納袋則拿來分類，不要把它當成可以憑空減少重量。",
    products: [
      {
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
    ]
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
              這頁不把所有用品都列一遍，而是按旅行情境整理。奶瓶喝完怎麼洗、後座弄髒怎麼收、推車怎麼托運、回程怎麼分行李，先看自己遇到哪個問題，再決定需不需要買。
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
          {productGroups.map((group) => (
            <a className="underline decoration-[#d7c7af] underline-offset-4 hover:text-[#543719]" href={`#${group.id}`} key={group.id}>
              {group.eyebrow}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {productGroups.map((group, groupIndex) => (
          <section className={groupIndex % 2 === 0 ? "border-b border-[#eadfce] bg-[#fffdf8]" : "border-b border-[#eadfce] bg-[#fbf6ee]"} id={group.id} key={group.id}>
            <div className="mx-auto max-w-6xl px-5 py-11 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold text-[#9a6b43]">{group.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-[#34302b] sm:text-3xl">{group.title}</h2>
                <p className="mt-4 text-base leading-8 text-[#5f594f]">{group.summary}</p>
              </div>

              <div className="mt-8 border-t border-[#ddcfba]">
                {group.products.map((product, productIndex) => (
                  <div className="grid gap-7 border-b border-[#eadfce] py-9 last:border-b-0 lg:grid-cols-[0.72fr_1.28fr]" key={product.name}>
                    <div>
                      <p className="text-sm font-semibold text-[#9a6b43]">
                        {String(groupIndex + 1).padStart(2, "0")}.{productIndex + 1} / {product.category}
                      </p>
                      <h3 className="mt-3 text-xl font-bold leading-snug text-[#34302b]">{product.problem}</h3>
                      <p className="mt-4 text-base font-semibold text-[#694624]">{product.name}</p>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#34302b]">為什麼留下這個選項？</h4>
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
                ))}
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
            這批資料核對於 2026 年 7 月 22～25 日。奶瓶清潔、濕紙巾與密實袋另有品牌官方資料交叉核對。更完整的合作說明可看
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
