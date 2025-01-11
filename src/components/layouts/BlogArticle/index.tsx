import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
} from "@/components/Alerts";
import BlankLink from "@/components/BlankLink";
import "./style.scss";
import BlogInsertImage from "@/components/BlogInsertImage";
import Loader from "@/components/Loader";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import calculateReadingTime from "@/utils/calculateReadingTime";
import { BlogCategories } from "@/app/config/blog";

const components = {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
  BlogInsertImage,
  BlankLink,
  Loader,
};

interface BlogArticleProperty {
  slug: string;
  category: BlogCategories;
}

export const BlogArticle: React.FC<BlogArticleProperty> = async ({
  slug,
  category,
}) => {
  const filePath = path.join(
    process.cwd(),
    `src/contents/${category}/${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  // 使用 gray-matter 解析 MDX 的 Frontmatter
  const { content, data } = matter(fileContent);
  const { content: MDXElement } = await compileMDX({
    source: content,
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeCodeTitles,
          rehypeHighlight,
          [rehypePrism, { ignoreMissing: true }],
        ],
      },
    },
  });

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
          <p className="reading-time">
            閱讀時間：約 {calculateReadingTime(fileContent)} 分鐘
          </p>
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
            <BlogInsertImage path={data.picture} alt={data.alt} />
          </figure>
        )}
        {MDXElement}
      </section>
    </article>
  );
};

export default BlogArticle;
