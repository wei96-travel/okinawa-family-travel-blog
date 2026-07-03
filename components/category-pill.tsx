import Link from "next/link";
import { getCategoryByName } from "@/lib/site";

type CategoryPillProps = {
  category: string;
};

export function CategoryPill({ category }: CategoryPillProps) {
  const categoryMeta = getCategoryByName(category);

  if (!categoryMeta) {
    return (
      <span className="rounded-full border border-[#d7c7af] bg-[#fffaf1] px-4 py-2 text-sm font-medium text-[#694624]">
        {category}
      </span>
    );
  }

  return (
    <Link
      className="rounded-full border border-[#d7c7af] bg-[#fffaf1] px-4 py-2 text-sm font-medium text-[#694624] transition hover:border-[#9a6b43] hover:bg-white"
      href={"/category/" + categoryMeta.slug}
    >
      {category}
    </Link>
  );
}
