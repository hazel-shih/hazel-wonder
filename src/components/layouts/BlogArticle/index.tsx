import BlogInsertImage from "@/components/BlogInsertImage";
import calculateReadingTime from "@/utils/calculateReadingTime";
import { BlogCategories } from "@/app/config/blog";
import { mdxCache } from "@/utils/mdxGlobalCache";
import compileMdx from "@/utils/compileMdx";
import "./style.scss";

interface BlogArticleProperty {
  slug: string;
  category: BlogCategories;
}

export const BlogArticle: React.FC<BlogArticleProperty> = async ({
  slug,
  category,
}) => {
  const data = mdxCache[category][slug];
  const MDXElement = await compileMdx(data.content);

  return (
    <article className="blog-article">
      <header>
        <h1>{data.title}</h1>
        <div className="info">
          <time>發佈於 {data.published}</time>
          <span className="divider">|</span>
          {data.updated && (
            <>
              <time>更新於 {data.updated}</time>
              <span className="divider">|</span>
            </>
          )}
          <span>by Hazel Shih</span>
          {data.content && (
            <p className="reading-time">
              閱讀時間：約 {calculateReadingTime(data.content)} 分鐘
            </p>
          )}
        </div>
        <div className="description">
          <div className="line" />
          <p>{data.description}</p>
          <div className="line" />
        </div>
      </header>
      <section className="content">
        {data.picture && (
          <figure className="first-picture">
            <BlogInsertImage src={data.picture} alt={data.alt} />
          </figure>
        )}
        {MDXElement}
      </section>
    </article>
  );
};

export default BlogArticle;
