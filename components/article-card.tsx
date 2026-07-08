import Link from "next/link";
import type { Post } from "@/lib/posts";
import { getCategoryByName } from "@/lib/site";

type ArticleCardProps = {
  post: Post;
  variant?: "default" | "featured";
};

export function ArticleCard({ post, variant = "default" }: ArticleCardProps) {
  const isFeatured = variant === "featured";
  const coverImage = getCategoryByName(post.category)?.image ?? "/images/okinawa-family-hero.png";

  return (
    <article
      className={[
        "group overflow-hidden rounded-lg border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        isFeatured ? "grid lg:grid-cols-[0.95fr_1.05fr]" : ""
      ].join(" ")}
    >
      <Link
        aria-label={post.title}
        className={[
          "relative block overflow-hidden bg-[#f6efe4]",
          isFeatured ? "min-h-[260px] lg:min-h-full" : "aspect-[16/10]"
        ].join(" ")}
        href={"/blog/" + post.slug}
      >
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={coverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a22]/55 via-[#2f2a22]/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#694624] shadow-sm">
          {post.category}
        </div>
        <div className="absolute bottom-4 left-4 rounded-sm bg-white/90 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-[#5f594f] shadow-sm">
          FAMILY TRIP NOTE
        </div>
      </Link>

      <div className={isFeatured ? "p-6 sm:p-8" : "p-5"}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#756e65]">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={[
            "mt-3 font-bold leading-snug text-[#34302b]",
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
          ].join(" ")}
        >
          <Link className="transition hover:text-[#694624]" href={"/blog/" + post.slug}>
            {post.title}
          </Link>
        </h3>
        <p className={["mt-3 text-sm leading-7 text-[#5f594f]", isFeatured ? "sm:text-base sm:leading-8" : "line-clamp-3"].join(" ")}>
          {post.description}
        </p>
        <Link className="mt-5 inline-flex text-sm font-semibold text-[#694624]" href={"/blog/" + post.slug}>
          繼續閱讀
        </Link>
      </div>
    </article>
  );
}
