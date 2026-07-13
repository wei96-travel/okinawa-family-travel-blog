import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我",
  description: "關於沖繩親子旅遊筆記，以及這個網站如何陪伴第一次去沖繩的家庭規劃旅行。",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">ABOUT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">關於這份沖繩親子旅遊筆記</h1>
      <div className="prose-travel mt-8">
        <p>
          這個網站寫給第一次帶孩子去沖繩的家庭。希望你在查資料時，不只看到漂亮照片，也能知道每個選擇背後的生活感：停車方不方便、孩子午睡怎麼安排、飯店附近晚上好不好買東西。
        </p>
        <p>
          文章會以新手容易理解的方式整理沖繩住宿、行程、親子景點、租車交通與旅遊用品。內容不追求一次塞滿所有景點，而是幫你做出比較安心、比較適合自己家庭節奏的選擇。
        </p>
        <h2>內容怎麼整理</h2>
        <p>
          這裡的文章會以公開資料、官方資訊、地理位置和親子旅行需求作為整理基礎。沒有實際住過或去過的地方，不會寫成親身體驗；會變動的資訊，例如營業時間、價格、飯店服務，也會提醒以官方公告為準。
        </p>
        <h2>關於圖片</h2>
        <p>
          網站可能使用自製封面圖、插畫或情境圖來讓閱讀更舒服，但不會把這些圖片包裝成真實景點或飯店實拍。未來若有實際照片，會再逐步補進文章。
        </p>
        <p>這裡會持續累積家庭旅遊筆記，也會標示可能的聯盟連結與合作資訊，讓閱讀保持清楚透明。</p>
      </div>
    </section>
  );
}
