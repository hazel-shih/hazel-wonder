import "./page.scss";
import { nunito } from "@/fonts/configure";
import BlogListItem from "@/components/BlogListItem";
import CategoryButtons from "@/components/CategoryButtons";
import { getArticlesListByCategoryPageNum } from "@/utils/getArticles";
import { itemPerBlogPage } from "@/app/config/blog";
import fs from "fs";
import Pagination from "@/components/Pagination";

const category = "english";
const path = "/blog/english";

const BlogEnglishListPage = ({
  params,
}: {
  params: { pageNum: string; totalPage: number };
}) => {
  const articles = getArticlesListByCategoryPageNum(category, params.pageNum);
  const files = fs.readdirSync(`src/contents/${category}`);
  const totalPage = Math.ceil(files.length / itemPerBlogPage);

  return (
    <main className="blog-landing">
      <CategoryButtons />
      <div className="intro">
        <h1 className={nunito.className}>English Writing</h1>
        <p>
          「不練習永遠無法變得更好。」
          <br />
          練習寫寫的英文短文，試著用英文說出想要表達的話。主題通常是描述一件事，還有短短的、隨機的想法
        </p>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <BlogListItem
            key={article.slug}
            href={`/blog/${article.category}/${article.slug}`}
            date={article.date}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPage}
        currentPage={Number(params.pageNum)}
        path={path}
      />
    </main>
  );
};

export function generateStaticParams() {
  const files = fs.readdirSync(`src/contents/${category}`);
  const totalPage = Math.ceil(files.length / itemPerBlogPage);
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  const data = pages.map((page) => ({ pageNum: String(page), totalPage }));
  return data;
}

export const dynamicParams = false;

export default BlogEnglishListPage;
