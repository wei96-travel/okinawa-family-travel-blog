import Link from "next/link";
import type { Post } from "@/lib/posts";

type ArticleCardProps = {
  post: Post;
  variant?: "default" | "featured";
};

export function ArticleCard({ post, variant = "default" }: ArticleCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={[
        "rounded-lg border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        isFeatured ? "p-6 sm:p-8" : "p-5"
      ].join(" ")}
    >
      <p className="text-xs font-semibold tracking-[0.14em] text-[#9a6b43]">{post.category}</p>
      <h3
        className={[
          "mt-3 font-bold leading-snug text-[#34302b]",
          isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
        ].join(" ")}
      >
        <Link href={"/blog/" + post.slug}>{post.title}</Link>
      </h3>
      <p className={["mt-3 text-sm leading-7 text-[#5f594f]", isFeatured ? "sm:text-base sm:leading-8" : "line-clamp-3"].join(" ")}>
        {post.description}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-[#756e65]">
        <time dateTime={post.date}>{post.formattedDate}</time>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}
