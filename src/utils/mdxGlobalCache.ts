import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogCategory } from "@/app/config/blog";
import { Article } from "./getArticles";

type MdxCache = Record<BlogCategory, Record<Article["slug"], Article>>;

export const mdxCache: MdxCache = {} as MdxCache;

export async function loadAllMDX() {
  // 如果已經載入過，直接回傳快取
  if (Object.keys(mdxCache).length > 0) {
    return mdxCache;
  }

  const baseDir = path.join(process.cwd(), "src/contents");

  const categories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name) as BlogCategory[];

  for (const category of categories) {
    const categoryDir = path.join(baseDir, category);
    const mdxFileNames = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".mdx"));
    if (!mdxCache[category]) {
      mdxCache[category] = {};
    }

    for (const mdxFileName of mdxFileNames) {
      const filePath = path.join(categoryDir, mdxFileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { content, data } = matter(fileContent);

      mdxCache[category][data["slug"]] = {
        ...data,
        content,
      } as Article;
    }
  }
  return mdxCache;
}
