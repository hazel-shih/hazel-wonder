import { Article } from "./getArticles";
import { itemPerBlogPage } from "@/app/config/blog";

const getTotalPage = (totalArticles: Article[]): number => {
  return Math.ceil(totalArticles.length / itemPerBlogPage);
};

export default getTotalPage;
