import "./page.scss";
import { nunito } from "@/fonts/configure";
import BlogListItem from "@/components/BlogListItem";
import CategoryButtons from "@/components/CategoryButtons";
import { getLatestArticlesList } from "@/utils/getArticles";

const BlogLanding = () => {
  const articles = getLatestArticlesList(10);

  return (
    <main className="blog-landing">
      <CategoryButtons />
      <div className="intro">
        <h1 className={nunito.className}>Latest</h1>
        <p>
          「這裡是我最近熱騰騰正在思考的事！」
          <br />
          不限類別最新的 10 篇文章，你也可以按上方按鈕選擇想看的類別 : )
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
    </main>
  );
};

export default BlogLanding;
