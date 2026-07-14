export type ReadingPathItem = {
  slug: string;
  reason: string;
};

export const readingPaths: Record<string, ReadingPathItem[]> = {
  "okinawa-car-seat-rental-guide": [
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "安全座椅確定後，可以回來把取還車、加油和停車一起排進租車流程。"
    },
    {
      slug: "okinawa-family-drive-toilet-convenience-store",
      reason: "上路之後的休息安排，跟安全座椅一樣是自駕途中容易忽略的細節。"
    },
    {
      slug: "first-okinawa-where-to-stay",
      reason: "還沒決定住宿區域的話，先看這篇會更好安排整趟租車路線。"
    }
  ],
  "how-to-choose-family-hotel": [
    {
      slug: "first-okinawa-where-to-stay",
      reason: "先決定要住北部、中部還是南部，再回來看飯店細節會更有方向。"
    },
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "飯店停車場好不好用，通常要跟租車安排一起確認。"
    },
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "決定好飯店類型後，可以直接套進 5 天 4 夜的完整節奏。"
    }
  ],
  "okinawa-rainy-day-family-spots": [
    {
      slug: "onna-family-stay-guide",
      reason: "住恩納村這類海邊飯店，雨天備案會少一點，先確認飯店本身的室內設施。"
    },
    {
      slug: "okinawa-family-itinerary-not-too-tired",
      reason: "雨天備案最好排進每天的節奏裡，這篇可以幫你檢查整體行程會不會太滿。"
    },
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "如果正在排 5 天 4 夜，可以把雨天備案直接放進行程表。"
    }
  ],
  "south-okinawa-family-stay": [
    {
      slug: "onna-family-stay-guide",
      reason: "如果前段想住北部海邊飯店，這篇可以幫你判斷恩納村適不適合。"
    },
    {
      slug: "churaumi-aquarium-family-time",
      reason: "住南部通常代表水族館車程會拉長，先抓好停留時間比較不趕。"
    },
    {
      slug: "okinawa-last-day-family-plan",
      reason: "南部很適合排在最後一晚，這篇可以把還車和機場時間一起接起來。"
    }
  ],
  "okinawa-3-days-family-itinerary": [
    {
      slug: "okinawa-family-itinerary-not-too-tired",
      reason: "短天數最怕硬塞景點，這篇會幫你檢查一天一主題和車程節奏。"
    },
    {
      slug: "churaumi-aquarium-family-time",
      reason: "3 天 2 夜如果一定想去水族館，先看這篇抓北部行程會不會太重。"
    },
    {
      slug: "okinawa-rainy-day-family-spots",
      reason: "短旅行遇到下雨很容易亂掉，先準備同區備案會比較安心。"
    }
  ],
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
      slug: "okinawa-family-itinerary-not-too-tired",
      reason: "如果想知道所有天數共通的排法，這篇會把一天一主題、車程和雨天備案講清楚。"
    },
    {
      slug: "okinawa-rainy-day-family-spots",
      reason: "行程排好後，最好先準備雨天備案，遇到天氣變化才不會慌。"
    },
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "5 天 4 夜多半會租車，安全座椅、取還車和停車要先確認。"
    }
  ],
  "okinawa-6-days-family-itinerary": [
    {
      slug: "okinawa-family-itinerary-not-too-tired",
      reason: "6 天 5 夜排好後，可以回來檢查每天是不是都有一個清楚主題。"
    },
    {
      slug: "churaumi-aquarium-family-time",
      reason: "如果中段要放水族館，先抓好北部這天的停留時間和回程節奏。"
    },
    {
      slug: "okinawa-last-day-family-plan",
      reason: "天數越長，最後一天越容易鬆懈，先把還車和機場時間抓穩。"
    }
  ],
  "okinawa-family-itinerary-not-too-tired": [
    {
      slug: "okinawa-4-days-family-itinerary",
      reason: "如果是短天數，先看 4 天 3 夜的不換飯店版本，會比較好上手。"
    },
    {
      slug: "okinawa-5-days-family-itinerary",
      reason: "如果想多一點餘裕，5 天 4 夜可以把住宿和行程切成前後兩段。"
    },
    {
      slug: "okinawa-6-days-family-itinerary",
      reason: "如果時間拉到 6 天 5 夜，這篇會把北中南分區慢慢玩的排法接起來。"
    }
  ],
  "okinawa-4-days-family-itinerary": [
    {
      slug: "okinawa-family-itinerary-not-too-tired",
      reason: "看完 4 天 3 夜，可以用這篇檢查每天是不是排得太滿。"
    },
    {
      slug: "okinawa-last-day-family-plan",
      reason: "4 天 3 夜最容易緊張的是最後一天，先抓好還車和機場時間會安心很多。"
    },
    {
      slug: "churaumi-aquarium-family-time",
      reason: "4 天 3 夜如果要排北部水族館，先抓好停留時間，行程會更穩。"
    }
  ],
  "okinawa-last-day-family-plan": [
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "最後一天如果要還車，租車、安全座椅、加油和接駁時間都要一起想。"
    },
    {
      slug: "naha-family-stay-guide",
      reason: "想讓回程日輕鬆一點，最後一晚住那霸通常比較好掌握。"
    },
    {
      slug: "okinawa-4-days-family-itinerary",
      reason: "如果你正在排 4 天 3 夜，這篇可以把最後一天放回完整節奏裡。"
    }
  ],
  "okinawa-family-drive-toilet-convenience-store": [
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "自駕途中會遇到停車、導航、還車與休息節奏，租車前可以先把基本觀念補齊。"
    },
    {
      slug: "churaumi-aquarium-family-time",
      reason: "如果要開去水族館，這篇可以幫你抓北部長距離移動的節奏。"
    },
    {
      slug: "okinawa-last-day-family-plan",
      reason: "最後一天也需要補水、加油和廁所備案，回程日會更安心。"
    }
  ],
  "churaumi-aquarium-family-time": [
    {
      slug: "okinawa-4-days-family-itinerary",
      reason: "看完水族館停留時間後，可以把它放回 4 天 3 夜的完整節奏裡。"
    },
    {
      slug: "onna-family-stay-guide",
      reason: "如果想讓北部行程輕鬆一點，住恩納村或中北部會比較好安排。"
    },
    {
      slug: "okinawa-rental-car-family-guide",
      reason: "水族館距離那霸較遠，租車、安全座椅和取還車時間都要先想好。"
    }
  ],
  "kouri-island-family-guide": [
    {
      slug: "churaumi-aquarium-family-time",
      reason: "如果古宇利島要和美麗海排同一天，先抓好水族館停留時間，北部行程才不會一路趕。"
    },
    {
      slug: "okinawa-6-days-family-itinerary",
      reason: "想把古宇利島放進完整旅程，可以參考 6 天 5 夜的節奏，北部那天會比較好安排。"
    },
    {
      slug: "okinawa-family-drive-toilet-convenience-store",
      reason: "古宇利島通常會牽涉比較長的自駕路線，休息點先想好，小孩狀態會差很多。"
    }
  ],
  "okinawa-rental-car-family-guide": [
    {
      slug: "okinawa-car-seat-rental-guide",
      reason: "安全座椅是法律要求，訂車時最好跟取還車一起確認清楚。"
    },
    {
      slug: "okinawa-family-drive-toilet-convenience-store",
      reason: "租車上路後，便利商店、公廁和中途休息點會直接影響行程舒適度。"
    },
    {
      slug: "okinawa-last-day-family-plan",
      reason: "還車日最容易太趕，先抓好加油、接駁和機場時間。"
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
