import "./page.scss";
import { nunito } from "@/fonts/configure";
import BlogListItem from "@/components/BlogListItem";
import CategoryButtons from "@/components/CategoryButtons";
import { getArticlesListByCategoryPageNum } from "@/utils/getArticles";
import { itemPerBlogPage } from "@/app/config/blog";
import fs from "fs";
import Pagination from "@/components/Pagination";

const category = "movie";
const path = "/blog/movie";

const BlogMovieListPage = ({
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
        <h1 className={nunito.className}>Movie</h1>
        <p>
          「電影就是現實。」
          <br />
          不是專業影評。只是和你分享我的觀後感，以及連結我生命經驗的想法
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

export default BlogMovieListPage;
