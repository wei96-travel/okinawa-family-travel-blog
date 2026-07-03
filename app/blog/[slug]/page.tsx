import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { ArticleToc } from "@/components/article-toc";
import { MarkdownContent } from "@/components/markdown-content";
import { ReadingNextSteps } from "@/components/reading-next-steps";
import { getAllPosts, getPostBySlug, getPostHeadings, getRelatedPosts } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const headings = getPostHeadings(post.content);
  const relatedPosts = getRelatedPosts(post, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 lg:px-8">
      <Link className="text-sm font-semibold text-[#694624]" href="/blog">
        回文章列表
      </Link>
      <header className="mt-6 border-b border-[#eadfce] pb-8">
        <p className="text-sm font-semibold text-[#9a6b43]">{post.category}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#34302b] sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-9 text-[#5f594f]">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#756e65]">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <ArticleToc headings={headings} />
      <MarkdownContent content={post.content} />
      <ReadingNextSteps currentSlug={post.slug} posts={allPosts} />

      {relatedPosts.length > 0 ? (
        <section className="mt-14 border-t border-[#eadfce] pt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold text-[#9a6b43]">RELATED NOTES</p>
            <h2 className="mt-1 text-2xl font-bold text-[#34302b]">同主題也可以看</h2>
          </div>
          <div className="grid gap-5">
            {relatedPosts.map((relatedPost) => (
              <ArticleCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
