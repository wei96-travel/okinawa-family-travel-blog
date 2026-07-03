import Link from "next/link";
import type { Post } from "@/lib/posts";
import { defaultChecklist, readingPaths, type ReadingPathItem } from "@/lib/reading-paths";

type ReadingNextStepsProps = {
  currentSlug: string;
  posts: Post[];
};

export function ReadingNextSteps({ currentSlug, posts }: ReadingNextStepsProps) {
  const postMap = new Map(posts.map((post) => [post.slug, post]));
  const pathItems = readingPaths[currentSlug] ?? [];
  const resolvedItems = pathItems
    .map((item) => ({
      ...item,
      post: postMap.get(item.slug)
    }))
    .filter((item) => Boolean(item.post)) as Array<ReadingPathItem & { post: Post }>;

  if (resolvedItems.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-[#eadfce] pt-8">
      <div className="mb-5">
        <p className="text-sm font-semibold tracking-[0.14em] text-[#9a6b43]">READING PATH</p>
        <h2 className="mt-1 text-2xl font-bold text-[#34302b]">接下來照這個順序看</h2>
        <p className="mt-3 text-sm leading-7 text-[#5f594f]">
          如果你正在規劃第一次沖繩親子旅行，這幾篇會把住宿、行程和交通慢慢接起來。
        </p>
      </div>

      <div className="space-y-4">
        {resolvedItems.map((item, index) => (
          <Link
            className="block rounded-lg border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            href={"/blog/" + item.post.slug}
            key={item.post.slug}
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[#9a6b43]">
              NEXT {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-xl font-bold leading-snug text-[#34302b]">{item.post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.reason}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-[#eadfce] bg-[#fbf6ee] p-5">
        <p className="text-sm font-semibold text-[#694624]">出發前先保留這張檢查清單</p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-[#5f594f]">
          {defaultChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-lg border border-[#eadfce] bg-white p-5 text-sm leading-7 text-[#5f594f]">
        有問題、想補充，或發現資訊需要更新，可以到{" "}
        <Link className="font-semibold text-[#694624] underline underline-offset-4" href="/contact">
          聯絡頁
        </Link>{" "}
        告訴我。
      </div>
    </section>
  );
}
