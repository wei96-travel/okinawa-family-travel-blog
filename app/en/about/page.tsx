import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who writes Okinawa Family Notes, how the guides are researched, and what the site does and does not claim.",
  alternates: {
    canonical: "/en/about",
    languages: {
      "zh-TW": "/about",
      en: "/en/about",
      "x-default": "/about"
    }
  }
};

export default function EnglishAboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">ABOUT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">About Okinawa Family Notes</h1>
      <div className="prose-travel mt-8">
        <p>
          This site is written by an ordinary office worker in Taiwan who organises Okinawa travel information
          in the evenings and at weekends. It is not a travel agency and not a tourism business. It began
          because planning a first trip to Okinawa with a small child meant reading a lot of scattered pages
          and still not knowing what to actually decide.
        </p>
        <p>
          The guides focus on the parts that usually go wrong: renting a car, choosing which area to stay in,
          finding food a child will eat, locating toilets, and adjusting the day once a child is tired.
        </p>
        <h2>How the guides are researched</h2>
        <p>
          Facts come from official sources first — Japanese government pages, prefectural tourism sites, venue
          operators and rental companies — including Japanese-language pages that are not published in English.
          Where a page cites a rule, a fee or a size limit, the source is linked at the bottom of that article.
        </p>
        <p>
          Anything that changes often, such as opening hours, prices and hotel facilities, is dated and marked
          as something to confirm before you travel.
        </p>
        <h2>What this site does not claim</h2>
        <ul>
          <li>
            A place that has not actually been visited is never written up as a personal experience. Guides
            built from official information say so.
          </li>
          <li>
            Illustrations and cover images may be created for the site to make reading easier. They are not
            presented as real photographs of a venue or hotel.
          </li>
          <li>
            Nothing here is a guarantee of availability, price or suitability for your family. Confirm with the
            operator before you book.
          </li>
        </ul>
        <h2>The English section</h2>
        <p>
          Most of this site is written in Traditional Chinese. The English guides are a smaller, separate set,
          rewritten around the questions visiting families ask rather than translated line by line. They are
          added slowly, as each one is researched.
        </p>
      </div>
    </section>
  );
}
