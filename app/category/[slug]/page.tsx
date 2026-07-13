import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { categoryDefinitions, getCategoryBySlug } from "@/lib/site";
import { getPostsByCategory } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categoryDefinitions.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: "/category/" + category.slug
    },
    openGraph: {
      title: category.name,
      description: category.description,
      url: "/category/" + category.slug,
      images: [
        {
          url: category.image,
          width: 1536,
          height: 1024,
          alt: category.name
        }
      ]
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.name);
  const firstPosts = posts.slice(0, 3);

  return (
    <div>
      <section className="bg-[#f6efe4]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#9a6b43]">CATEGORY GUIDE</p>
            <h1 className="mt-3 text-3xl font-bold text-[#34302b] sm:text-4xl">{category.name}</h1>
            <p className="mt-4 text-lg leading-9 text-[#5f594f]">{category.description}</p>
          </div>
          <img
            alt={category.name}
            className="aspect-[4/3] w-full rounded-lg border border-[#eadfce] bg-white object-cover shadow-sm"
            src={category.image}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-[#eadfce] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#9a6b43]">適合誰看</p>
            <p className="mt-3 text-base leading-8 text-[#5f594f]">{category.audience}</p>
          </div>

          <div className="rounded-lg border border-[#eadfce] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#9a6b43]">建議閱讀順序</p>
            {firstPosts.length > 0 ? (
              <ol className="mt-3 space-y-3">
                {firstPosts.map((post, index) => (
                  <li className="flex gap-3 text-sm leading-7 text-[#5f594f]" key={post.slug}>
                    <span className="font-semibold text-[#9a6b43]">{String(index + 1).padStart(2, "0")}</span>
                    <Link className="font-medium text-[#34302b] hover:text-[#694624]" href={"/blog/" + post.slug}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-3 text-sm leading-7 text-[#5f594f]">文章正在整理中。</p>
            )}
          </div>
        </div>

        {posts.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-[#eadfce] bg-white p-6 text-[#5f594f]">
            這個分類的文章正在整理中。
          </div>
        )}
      </section>
    </div>
  );
}
