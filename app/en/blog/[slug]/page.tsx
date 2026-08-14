import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { MarkdownContent } from "@/components/markdown-content";
import { getFaqEntries } from "@/lib/faq";
import { getChineseSlug } from "@/lib/i18n";
import { getAllEnglishPosts, getEnglishPostBySlug } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://okinawafamilynotes.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllEnglishPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnglishPostBySlug(slug);

  if (!post) return {};

  const chineseSlug = getChineseSlug(slug);
  const canonical = "/en/blog/" + slug;
  const chineseUrl = chineseSlug ? "/blog/" + chineseSlug : "/";
  const coverImage = post.coverImage ?? "/images/okinawa-family-hero.png";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages: {
        "zh-TW": chineseUrl,
        en: canonical,
        "x-default": chineseUrl
      }
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      url: canonical,
      locale: "en_US",
      images: [{ url: coverImage, width: 1600, height: 900, alt: post.coverAlt ?? post.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [coverImage]
    }
  };
}

export default async function EnglishBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getEnglishPostBySlug(slug);

  if (!post) notFound();

  const chineseSlug = getChineseSlug(slug);
  const coverImage = post.coverImage ?? "/images/okinawa-family-hero.png";
  const faqEntries = getFaqEntries(post.content);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": siteUrl + "/en/blog/" + post.slug + "#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Okinawa Family Notes", item: siteUrl + "/en" },
            { "@type": "ListItem", position: 2, name: "English guides", item: siteUrl + "/en/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: siteUrl + "/en/blog/" + post.slug }
          ]
        }}
      />
      {faqEntries.length > 0 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": siteUrl + "/en/blog/" + post.slug + "#faq",
            inLanguage: "en",
            mainEntity: faqEntries.map((entry) => ({
              "@type": "Question",
              name: entry.question,
              acceptedAnswer: { "@type": "Answer", text: entry.answer }
            }))
          }}
        />
      ) : null}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": siteUrl + "/en/blog/" + post.slug + "#article",
          headline: post.title,
          description: post.description,
          image: siteUrl + coverImage,
          datePublished: post.date,
          dateModified: post.modifiedDate,
          inLanguage: "en",
          articleSection: post.category,
          keywords: post.tags ?? [],
          mainEntityOfPage: siteUrl + "/en/blog/" + post.slug,
          author: { "@type": "Organization", name: "Okinawa Family Notes", url: siteUrl },
          publisher: { "@id": siteUrl + "/#organization" }
        }}
      />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link className="text-sm font-semibold text-[#694624]" href="/en/blog">
          Back to English guides
        </Link>
        {chineseSlug ? (
          <Link className="text-sm font-semibold text-[#694624]" href={"/blog/" + chineseSlug}>
            閱讀繁體中文版
          </Link>
        ) : null}
      </div>
      <header className="mt-6 border-b border-[#eadfce] pb-8">
        <p className="text-sm font-semibold text-[#9a6b43]">{post.category}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#34302b] sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-9 text-[#5f594f]">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#756e65]">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>{post.readingTime}</span>
        </div>
      </header>
      {post.coverImage ? (
        <figure className="mt-8">
          <img
            alt={post.coverAlt ?? post.title}
            className="aspect-video w-full rounded-lg border border-[#eadfce] object-cover"
            decoding="async"
            fetchPriority="high"
            height="900"
            src={post.coverImage}
            width="1600"
          />
          {post.coverCaption || post.coverCreditUrl ? (
            <figcaption className="mt-2 text-center text-sm leading-6 text-[#756e65]">
              {post.coverCaption ? <span>{post.coverCaption}</span> : null}
              {post.coverCreditUrl ? (
                <span>
                  {post.coverCaption ? " " : ""}
                  Photo: <a href={post.coverCreditUrl} rel="noopener noreferrer" target="_blank">{post.coverCreditText ?? "source"}</a>
                  {post.coverLicenseUrl ? (
                    <>
                      {" / "}
                      <a href={post.coverLicenseUrl} rel="noopener noreferrer" target="_blank">
                        {post.coverLicenseText ?? "license"}
                      </a>
                    </>
                  ) : null}
                </span>
              ) : null}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
      <MarkdownContent content={post.content} />
    </article>
  );
}
