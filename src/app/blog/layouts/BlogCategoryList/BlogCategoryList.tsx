import { nunito } from "@/fonts/configure";
import BlogListItem from "@/components/BlogListItem";
import CategoryButtons from "@/components/CategoryButtons";
import { getArticlesListByCategoryPageNum } from "@/utils/getArticles";
import { BlogCategories } from "@/app/config/blog";
import Pagination from "@/components/Pagination";
import { ReactNode } from "react";
import "./style.scss";

interface BlogCategoryListProperty {
  pageNum: string;
  category: BlogCategories;
  IntroComponent: ReactNode;
  path: string;
}

function capitalizeFirstLetter(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const BlogCategoryList: React.FC<BlogCategoryListProperty> = ({
  pageNum,
  category,
  IntroComponent,
  path,
}) => {
  const { articles, totalPage } = getArticlesListByCategoryPageNum(
    category,
    pageNum
  );

  return (
    <section className="blog-list">
      <CategoryButtons />
      <div className="intro">
        <h1 className={nunito.className}>{capitalizeFirstLetter(category)}</h1>
        {IntroComponent}
      </div>
      <div className="articles">
        {articles.map((article) => (
          <BlogListItem
            key={article.slug}
            href={`/blog/${article.category}/${article.slug}`}
            date={article.published}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPage}
        currentPage={Number(pageNum)}
        path={path}
      />
    </section>
  );
};

export default BlogCategoryList;
