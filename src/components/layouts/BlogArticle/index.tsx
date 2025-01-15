import BlogInsertImage from "@/components/BlogInsertImage";
import calculateReadingTime from "@/utils/calculateReadingTime";
import { BlogCategory } from "@/app/config/blog";
import { mdxCache } from "@/utils/mdxGlobalCache";
import compileMdx from "@/utils/compileMdx";
import { inter } from "@/fonts/configure";
import "./style.scss";

interface BlogArticleProperty {
  slug: string;
  category: BlogCategory;
}

export const BlogArticle: React.FC<BlogArticleProperty> = async ({
  slug,
  category,
}) => {
  if (!slug) {
    return null;
  }
  const categoryArticles = mdxCache[category];
  const articleData = categoryArticles ? categoryArticles[slug] : null;
  if (!articleData) {
    return null;
  }
  const MDXElement = await compileMdx(articleData.content);

  return (
    <article className="blog-article">
      <header>
        <h1
          className={`${
            category === "english" && `${inter.className} english`
          }`}
        >
          {articleData.title}
        </h1>
        <div className="info">
          <time>發佈於 {articleData.published}</time>
          <span className="divider">|</span>
          {articleData.updated && (
            <>
              <time>更新於 {articleData.updated}</time>
              <span className="divider">|</span>
            </>
          )}
          <span>by Hazel Shih</span>
          {articleData.content && (
            <p className="reading-time">
              閱讀時間：約 {calculateReadingTime(articleData.content)} 分鐘
            </p>
          )}
        </div>
        <div
          className={`description ${
            category === "english" && `${inter.className} english`
          }`}
        >
          <div className="line" />
          <p>{articleData.description}</p>
          <div className="line" />
        </div>
      </header>
      <section
        className={`mdx-content ${
          category === "english" && `${inter.className} english`
        }`}
      >
        {articleData.picture && (
          <figure className="first-picture">
            <BlogInsertImage src={articleData.picture} alt={articleData.alt} />
          </figure>
        )}
        {MDXElement}
      </section>
    </article>
  );
};

export default BlogArticle;
