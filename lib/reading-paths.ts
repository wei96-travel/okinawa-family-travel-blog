export type ReadingPathItem = {
  slug: string;
  reason: string;
};

export const readingPaths: Record<string, ReadingPathItem[]> = {
  "naha-family-stay-guide": [
    {
      slug: "onna-family-stay-guide",
      reason: "如果那霸像緩衝墊，恩納村就是海邊度假感。兩篇一起看，比較容易決定前後段住宿。"
    },
    {
      slug: "okinawa-change-hotels-family",
      reason: "決定那霸要不要住之後，下一步是判斷這趟旅行到底該不該換飯店。"
    },
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "如果你正在排 5 天 4 夜，這篇可以把住宿和每天節奏接起來。"
    }
  ],
  "onna-family-stay-guide": [
    {
      slug: "okinawa-change-hotels-family",
      reason: "恩納村最好不要只住一晚，這篇會幫你判斷換飯店怎麼排比較不累。"
    },
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "看完恩納村後，可以直接套進 5 天 4 夜的住宿與行程節奏。"
    },
    {
      slug: "first-okinawa-where-to-stay",
      reason: "如果還想重新比較北部、中部、南部，回到這篇會比較清楚。"
    }
  ],
  "okinawa-change-hotels-family": [
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "決定要不要換飯店之後，這篇可以幫你把每天節奏排出來。"
    },
    {
      slug: "naha-family-stay-guide",
      reason: "如果你想把那霸放在第一晚或最後一晚，先看它適不適合你的家庭。"
    },
    {
      slug: "onna-family-stay-guide",
      reason: "如果前半段想住海邊，這篇會幫你判斷恩納村適不適合。"
    }
  ],
  "okinawa-5-days-family-itinerary": [
    {
      slug: "okinawa-rainy-day-family-spots",
      reason: "行程排好後，最好先準備雨天備案，遇到天氣變化才不會慌。"
    },
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "5 天 4 夜多半會租車，安全座椅、取還車和停車要先確認。"
    },
    {
      slug: "okinawa-change-hotels-family",
      reason: "如果你還在猶豫要不要換飯店，回來看這篇會比較安心。"
    }
  ]
};

export const defaultChecklist = [
  "先決定第一晚和最後一晚住哪裡。",
  "把每天主景點控制在一個，保留孩子休息時間。",
  "確認租車、安全座椅、停車和還車時間。",
  "準備雨天備案，不要把所有行程都押在戶外。",
  "重要資訊出發前再看官方網站確認一次。"
];
