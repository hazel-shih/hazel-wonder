import { itemPerBlogPage, BlogCategory } from "@/app/config/blog";
import { mdxCache } from "./mdxGlobalCache";

export type Article = {
  slug: string;
  published: string;
  updated: string;
  title: string;
  description: string;
  category: string;
  picture: string;
  alt: string;
  width: number;
  height: number;
  content: string;
  tags: string[];
};

function getItemsByPage(
  categoryArticles: Article[],
  pageNum: number,
  itemsPerPage: number
) {
  if (pageNum < 1) throw new Error("Page number must be 1 or greater.");
  if (itemsPerPage < 1) throw new Error("Items per page must be 1 or greater.");

  const startIndex = (pageNum - 1) * itemsPerPage; // 起始索引
  const endIndex = startIndex + itemsPerPage; // 結束索引
  return categoryArticles.slice(startIndex, endIndex); // 使用 slice 截取陣列
}

type ArticlesListByCategory = {
  articles: Article[];
  totalPage: number;
};

export function getArticlesListByCategoryPageNum(
  category: BlogCategory,
  pageNum: string = "1"
): ArticlesListByCategory {
  if (category === "latest") {
    const articles = getItemsByPage(
      getAllSortedArticles(),
      Number(pageNum),
      itemPerBlogPage
    );
    return {
      articles,
      totalPage: Math.ceil(articles.length / itemPerBlogPage),
    };
  }

  const articles = Object.values(mdxCache[category]);
  const sortedArticles = articles.sort(
    (a, b) => Date.parse(b.published) - Date.parse(a.published)
  );
  return {
    articles: getItemsByPage(sortedArticles, Number(pageNum), itemPerBlogPage),
    totalPage: Math.ceil(articles.length / itemPerBlogPage),
  };
}

export function getLatestArticlesList(number: number = 10): Article[] {
  return getAllSortedArticles().slice(0, number);
}

// utils
const getAllSortedArticles = (): Article[] => {
  const articles: Article[] = Object.values(mdxCache).flatMap((category) =>
    Object.values(category)
  );
  return articles.sort(
    (a, b) => Date.parse(b.published) - Date.parse(a.published)
  );
};
