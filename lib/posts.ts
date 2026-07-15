import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Category } from "@/lib/site";

const postsDirectory = path.join(process.cwd(), "content", "blog");

type PostMatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: Category;
  tags?: string[];
};

export type Post = PostMatter & {
  slug: string;
  content: string;
  formattedDate: string;
  modifiedDate: string;
  readingTime: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

function getReadingTime(content: string) {
  const words = content.replace(/\s/g, "").length;
  const minutes = Math.max(1, Math.ceil(words / 450));
  return minutes + " 分鐘閱讀";
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontMatter = data as PostMatter;

  return {
    ...frontMatter,
    slug,
    content,
    formattedDate: formatDate(frontMatter.date),
    modifiedDate: frontMatter.updated ?? frontMatter.date,
    readingTime: getReadingTime(content)
  };
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPostFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(post: Post, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags?.filter((tag) => post.tags?.includes(tag)).length ?? 0;
      const categoryScore = candidate.category === post.category ? 2 : 0;

      return {
        post: candidate,
        score: sharedTags + categoryScore
      };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, limit)
    .map((item) => item.post);
}

export function getPostHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace(/^## /, "").trim());
}
