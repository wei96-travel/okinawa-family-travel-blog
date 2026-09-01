import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Okinawa Family Notes about article corrections, missing details, family travel experience or collaboration.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "zh-TW": "/contact",
      en: "/en/contact",
      "x-default": "/contact"
    }
  }
};

export default function EnglishContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-[#9a6b43]">CONTACT</p>
      <h1 className="mt-2 text-3xl font-bold text-[#34302b] sm:text-4xl">Contact Okinawa Family Notes</h1>
      <div className="prose-travel mt-8">
        <p>
          If you have found something in an article that needs updating, want to add your own experience, or
          have a collaboration enquiry, you are welcome to write in.
        </p>
        <p>
          When you write, please include the article title or URL and a short note about what you would like to
          add. That makes it much quicker to find the part you mean.
        </p>
        <h2>Contact methods</h2>
        <div className="not-prose mt-5 border-l-4 border-[#b77a4f] bg-[#fbf6ee] px-5 py-5">
          <p className="text-base font-semibold text-[#34302b]">Email</p>
          <p className="mt-2 text-sm leading-7 text-[#5f594f]">
            hello@okinawafamilynotes.com
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-[#694624] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
            href="mailto:hello@okinawafamilynotes.com"
          >
            Send an email
          </a>
        </div>
        <div className="not-prose mt-4 border-l-4 border-[#d7c7af] bg-[#fbf6ee] px-5 py-5">
          <p className="text-base font-semibold text-[#34302b]">Facebook message</p>
          <p className="mt-2 text-sm leading-7 text-[#5f594f]">
            If you prefer social media, open the Wei Fan Facebook profile and select &quot;Message&quot;.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-[#694624] px-5 py-3 text-sm font-semibold text-[#694624] transition hover:bg-[#f2e8da] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
            href="https://www.facebook.com/profile.php?id=61588725730543"
            rel="noreferrer"
            target="_blank"
          >
            Contact on Facebook
          </a>
        </div>
        <h2>What to write about</h2>
        <ul>
          <li>An article contains an error or needs updating.</li>
          <li>You want to add family travel experience or ask a question.</li>
          <li>Collaboration or media enquiries.</li>
        </ul>
        <p>
          Replies are written in the evenings and at weekends, so please allow a few days. A private phone
          number, address and LINE account are not published.
        </p>
      </div>
    </section>
  );
}
