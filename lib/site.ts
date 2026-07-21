export const categoryDefinitions = [
  {
    name: "沖繩住宿",
    slug: "accommodation",
    image: "/images/okinawa-realistic-cover.webp",
    description: "飯店區域、親子房型、那霸與海邊住宿選擇。",
    audience: "正在決定第一晚住哪裡、要不要換飯店、想比較那霸與海邊飯店的新手家庭。"
  },
  {
    name: "沖繩行程",
    slug: "itinerary",
    image: "/images/okinawa-itinerary-cover.webp",
    description: "第一次去沖繩的天數安排、雨天備案與旅行節奏。",
    audience: "想知道 4 天 3 夜、5 天 4 夜怎麼排，或擔心帶孩子每天太趕的家庭。"
  },
  {
    name: "親子景點",
    slug: "family-attractions",
    image: "/images/okinawa-attractions-cover.webp",
    description: "適合孩子放電、休息和慢慢玩的沖繩景點。",
    audience: "想找水族館、雨天備案、海灘和孩子能消耗體力景點的家庭。"
  },
  {
    name: "租車交通",
    slug: "car-transport",
    image: "/images/okinawa-transport-cover.webp",
    description: "租車、停車、安全座椅與機場取還車整理。",
    audience: "第一次在沖繩租車，擔心安全座椅、取還車流程和停車問題的家庭。"
  },
  {
    name: "旅遊用品",
    slug: "travel-gear",
    image: "/images/okinawa-gear-cover.webp",
    description: "推車、防曬、防蚊、藥品與親子旅行用品清單。",
    audience: "準備打包行李，想知道孩子用品、夏天防曬與常備藥怎麼帶的家庭。"
  },
  {
    name: "沖繩美食",
    slug: "family-food",
    image: "/images/articles/okinawa-family-restaurant-dining-guide/restaurant-cover.jpg",
    description: "帶孩子吃沖繩料理、選餐廳與臨時用餐備案。",
    audience: "擔心孩子吃不慣、餐廳排隊，或需要處理食物過敏與外帶備案的家庭。"
  }
] as const;

export const categories = categoryDefinitions.map((category) => category.name);

export type Category = (typeof categoryDefinitions)[number]["name"];

export function getCategoryBySlug(slug: string) {
  return categoryDefinitions.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string) {
  return categoryDefinitions.find((category) => category.name === name);
}
