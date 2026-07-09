import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "沖繩親子慢旅筆記",
    template: "%s | 沖繩親子慢旅筆記"
  },
  description: "給第一次去沖繩的家庭：用慢一點、安心一點的方式整理住宿、行程、景點、租車交通與旅遊用品。",
  openGraph: {
    title: "沖繩親子慢旅筆記",
    description: "陪第一次帶孩子去沖繩的家庭，慢慢做出適合自己的旅行選擇。",
    url: siteUrl,
    siteName: "沖繩親子慢旅筆記",
    locale: "zh_TW",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW">
      <body className="min-h-screen antialiased">
        {gaId ? <GoogleAnalytics measurementId={gaId} /> : null}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
