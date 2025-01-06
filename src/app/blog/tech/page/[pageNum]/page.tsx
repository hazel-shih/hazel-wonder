import "./page.scss";
import { nunito } from "@/fonts/configure";
import BlogListItem from "@/components/BlogListItem";
import CategoryButtons from "@/components/CategoryButtons";
import { getArticlesListByCategoryPageNum } from "@/utils/getArticles";
import { itemPerBlogPage } from "@/app/config/blog";
import fs from "fs";
import Pagination from "@/components/Pagination";

const category = "tech";
const path = "/blog/tech";

const BlogTechListPage = ({
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
        <h1 className={nunito.className}>Tech</h1>
        <p>
          「當我可以把一項技術梳理後並清楚解釋，那就代表我學會了。」
          <br />
          內容包含網頁前端、AI 工具應用，希望可以增加領域守備範圍！
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

export default BlogTechListPage;
