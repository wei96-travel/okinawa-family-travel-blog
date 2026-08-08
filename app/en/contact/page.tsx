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
          have a collaboration enquiry, you can get in touch by Facebook message.
        </p>
        <p>
          When you write, please include the article title or URL and a short note about what you would like to
          add. That makes it much quicker to find the part you mean.
        </p>
        <h2>Current contact method</h2>
        <div className="not-prose mt-5 border-l-4 border-[#b77a4f] bg-[#fbf6ee] px-5 py-5">
          <p className="text-base font-semibold text-[#34302b]">Facebook message</p>
          <p className="mt-2 text-sm leading-7 text-[#5f594f]">
            Open the Wei Fan Facebook profile and select &quot;Message&quot; to get in touch.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-[#694624] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#543719] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#694624]"
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
          number, address and LINE account are not published. If a dedicated site email address is added later,
          it will appear on this page.
        </p>
      </div>
    </section>
  );
}
