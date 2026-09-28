import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import matter from "gray-matter";
import { AffiliateDisclosureNotice } from "@/components/affiliate-disclosure-notice";
import { ArticleToc } from "@/components/article-toc";
import { MarkdownContent } from "@/components/markdown-content";
import { hasAffiliateLink } from "@/lib/affiliate";
import { getPostHeadings } from "@/lib/posts";

const draftPath = path.join(
  process.cwd(),
  "100_Todo",
  "drafts",
  "articles",
  "2026-09-25_neo-park-okinawa-family-guide.md",
);

export const metadata: Metadata = {
  title: "Neo Park 文章審閱版",
  description: "Neo Park 親子攻略發布前審閱頁。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const dynamic = "force-static";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default function NeoParkFamilyGuidePreviewPage() {
  const source = fs.readFileSync(draftPath, "utf8");
  const { data, content } = matter(source);
  const headings = getPostHeadings(content);
  const readingMinutes = Math.max(1, Math.ceil(content.replace(/\s/g, "").length / 450));
  const hasAffiliateContent = hasAffiliateLink(content);

  return (
    <article className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="border-y border-[#d9c6aa] bg-[#fbf6ee] px-4 py-3 text-center">
        <p className="text-sm font-bold text-[#694624]">尚未發布｜手機審閱版</p>
        <p className="mt-1 text-sm leading-6 text-[#756e65]">這是發布前完整版本，Google 不會收錄。</p>
      </div>

      <header className="mt-7 border-b border-[#eadfce] pb-8">
        <p className="text-sm font-semibold text-[#9a6b43]">{data.category}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#34302b] sm:text-4xl">{data.title}</h1>
        <p className="mt-4 text-lg leading-9 text-[#5f594f]">{data.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#756e65]">
          <time dateTime={data.date}>{formatDate(data.date)}</time>
          <span>{readingMinutes} 分鐘閱讀</span>
        </div>
      </header>

      <figure className="mt-8">
        <img
          alt={data.coverAlt ?? data.title}
          className="aspect-video w-full rounded-lg border border-[#eadfce] object-cover"
          decoding="async"
          fetchPriority="high"
          height="900"
          src={data.coverImage}
          width="1600"
        />
        {data.coverCaption ? (
          <figcaption className="mt-2 text-center text-sm leading-6 text-[#756e65]">{data.coverCaption}</figcaption>
        ) : null}
      </figure>

      <ArticleToc headings={headings} />
      {hasAffiliateContent ? (
        <div className="mt-8">
          <AffiliateDisclosureNotice scope="article" />
        </div>
      ) : null}
      <MarkdownContent content={content} />

      <div className="mt-12 border-y border-[#d9c6aa] bg-[#fbf6ee] px-4 py-4 text-center">
        <p className="font-bold text-[#34302b]">文章目前尚未發布</p>
        <p className="mt-1 text-sm leading-6 text-[#756e65]">確認內容與封面後，再回覆「可以發布」。</p>
      </div>
    </article>
  );
}
