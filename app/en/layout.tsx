import type { Metadata } from "next";
import { DocumentLanguage } from "@/components/document-language";

export const metadata: Metadata = {
  title: {
    default: "Okinawa with Kids | Okinawa Family Notes",
    template: "%s | Okinawa Family Notes"
  },
  description: "Practical Okinawa travel guides for families choosing where to stay, renting a car and planning days with children.",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-TW": "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    siteName: "Okinawa Family Notes",
    locale: "en_US"
  }
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="en">
      <DocumentLanguage language="en" />
      {children}
    </div>
  );
}
