import { mdxCache } from "./mdxGlobalCache";
import { BlogCategory } from "@/app/config/blog";
import { getAllSortedArticles } from "./getArticles";
import getTotalPage from "./getTotalPage";

const getPageNumByCategory = (
  category: BlogCategory
): { pageNum: string }[] => {
  let totalPage = 1;
  if (category === "latest") {
    totalPage = getTotalPage(getAllSortedArticles());
  } else {
    if (!mdxCache[category]) {
      return [{ pageNum: "1" }];
    }
    totalPage = getTotalPage(Object.values(mdxCache[category]));
  }
  return Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => ({
    pageNum: String(page),
  }));
};

export default getPageNumByCategory;
