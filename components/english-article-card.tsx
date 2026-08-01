import Link from "next/link";
import type { EnglishPost } from "@/lib/posts";

type EnglishArticleCardProps = {
  post: EnglishPost;
};

export function EnglishArticleCard({ post }: EnglishArticleCardProps) {
  const coverImage = post.coverImage ?? "/images/okinawa-family-hero.png";

  return (
    <article className="group overflow-hidden rounded-lg border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        aria-label={post.title}
        className="relative block aspect-[16/10] overflow-hidden bg-[#f6efe4]"
        href={"/en/blog/" + post.slug}
      >
        <img
          alt={post.coverAlt ?? post.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={coverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a22]/55 via-[#2f2a22]/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#694624] shadow-sm">
          {post.category}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#756e65]">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="mt-3 text-xl font-bold leading-snug text-[#34302b]">
          <Link className="transition hover:text-[#694624]" href={"/en/blog/" + post.slug}>
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5f594f]">{post.description}</p>
        <Link className="mt-5 inline-flex text-sm font-semibold text-[#694624]" href={"/en/blog/" + post.slug}>
          Read guide
        </Link>
      </div>
    </article>
  );
}
