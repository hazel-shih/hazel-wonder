import { mdxCache } from "./mdxGlobalCache";
import { BlogCategory } from "@/app/config/blog";
import { Article } from "./getArticles";

const getSlugsByCategory = (category: BlogCategory): { slug: string }[] => {
  if (!mdxCache[category]) {
    return [];
  }
  const articlesData: Article[] = Object.values(mdxCache[category]);
  const slugs = articlesData.map((article) => ({
    slug: article.slug,
  }));
  return slugs;
};

export default getSlugsByCategory;
