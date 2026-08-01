export const translatedPosts = [
  {
    zh: "first-okinawa-where-to-stay",
    en: "where-to-stay-in-okinawa-with-kids"
  },
  {
    zh: "okinawa-car-seat-rental-guide",
    en: "okinawa-child-car-seat-rental-guide"
  },
  {
    zh: "churaumi-aquarium-family-time",
    en: "churaumi-aquarium-with-kids"
  }
] as const;

export function getEnglishSlug(chineseSlug: string) {
  return translatedPosts.find((item) => item.zh === chineseSlug)?.en;
}

export function getChineseSlug(englishSlug: string) {
  return translatedPosts.find((item) => item.en === englishSlug)?.zh;
}
