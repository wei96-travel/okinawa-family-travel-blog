import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Okinawa Family Notes handles analytics, cookies and advertising data.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      "zh-TW": "/privacy",
      en: "/en/privacy",
      "x-default": "/privacy"
    }
  }
};

export default function EnglishPrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#34302b] sm:text-4xl">Privacy Policy</h1>
      <div className="prose-travel mt-8">
        <p>Last updated: September 25, 2026</p>
        <p>
          This site respects your privacy. When you browse Okinawa Family Notes, analytics tools may record
          usage information such as page views, device type, referral source and page interactions. We use this
          information to improve the content and user experience, not to identify you personally.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This site uses Google Analytics 4 to understand overall browsing behaviour and Microsoft Clarity to
          understand clicks, scroll depth, heatmaps and masked session recordings. These tools may use
          cookies to collect information such as your device, the pages you view, time on page, referral source
          and page interactions. We use this information to improve the content, form placement and reading
          experience.
        </p>
        <p>
          Microsoft Clarity masks sensitive content by default. We do not intentionally provide analytics tools
          with the email address or other personal information you enter in a form. You can restrict or delete
          cookies through your browser settings.
        </p>
        <h2>Google advertising</h2>
        <p>
          If Google AdSense is enabled on this site, Google and other third-party vendors may use cookies to
          serve ads based on your visits to this site or other sites. You can manage personalised advertising at{" "}
          <a href="https://adssettings.google.com/" rel="noreferrer" target="_blank">
            Google Ads Settings
          </a>
          . Where local law or Google policy requires consent, this site provides the corresponding privacy
          options.
        </p>
        <h2>External links</h2>
        <p>
          Articles on this site may link to external websites. Once you click through and leave this site, the
          privacy policy of that website applies, and we recommend checking it yourself.
        </p>
        <h2>Contact</h2>
        <p>
          If you have any question about this privacy policy, please use the{" "}
          <Link href="/en/contact">contact page</Link>.
        </p>
      </div>
    </section>
  );
}
