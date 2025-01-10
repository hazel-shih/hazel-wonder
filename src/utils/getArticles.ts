import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { itemPerBlogPage } from "@/app/config/blog";

type Article = {
  slug: string;
  published: string;
  updated: string;
  title: string;
  description: string;
  category: string;
};

function getItemsByPage(
  articles: Article[],
  pageNum: number,
  itemsPerPage: number
) {
  if (pageNum < 1) throw new Error("Page number must be 1 or greater.");
  if (itemsPerPage < 1) throw new Error("Items per page must be 1 or greater.");

  const startIndex = (pageNum - 1) * itemsPerPage; // 起始索引
  const endIndex = startIndex + itemsPerPage; // 結束索引
  return articles.slice(startIndex, endIndex); // 使用 slice 截取陣列
}

export function getArticlesListByCategoryPageNum(
  category: string,
  pageNum: string = "1"
): Article[] {
  const articlesDir = path.join(process.cwd(), `src/contents/${category}`);

  // 取得該目錄下的所有檔案
  const filenames = fs.readdirSync(articlesDir);

  // 遍歷所有文件，提取 frontmatter
  const articles: Article[] = filenames
    .filter((file) => file.endsWith(".mdx")) // 過濾出 .mdx 檔案
    .map((filename) => {
      const filePath = path.join(articlesDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // 解析 Frontmatter
      const { data } = matter(fileContent);

      return data as Article;
    });

  // 根據日期新到舊排序（假設 frontmatter 有 `date` 字段）
  const sortedArticles = articles.sort(
    (a, b) => Date.parse(b.published) - Date.parse(a.published)
  );
  return getItemsByPage(sortedArticles, Number(pageNum), itemPerBlogPage);
}

export function getLatestArticlesList(number: number = 10): Article[] {
  const baseDir = path.join(process.cwd(), "src/contents");

  // 列出 categories (e.g., "movies", "tech")
  const categories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory()) // 過濾出類別資料夾
    .map((entry) => entry.name);

  // 遍歷每個資料夾，處理 .mdx 檔案
  const articles: Article[] = [];

  for (const category of categories) {
    const categoryDir = path.join(baseDir, category);
    const mdxFileNames = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".mdx"));

    for (const mdxFileName of mdxFileNames) {
      const filePath = path.join(categoryDir, mdxFileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      articles.push(data as Article);
    }
  }

  // 按日期從新到舊排序
  return articles
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
    .slice(0, number);
}
