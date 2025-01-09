import fs from "fs";
import path from "path";
import { Metadata } from "next";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Button from "@/components/Button";
import {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
} from "@/components/Alerts";
import "./style.scss";
import BlogInsertImage from "@/components/BlogInsertImage";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";

const category = "tech";

// can be plain object if not need fetch / dynamic
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const filePath = path.join(
    process.cwd(),
    `src/contents/${category}/${params.slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title || `Read about ${params.slug}`,
    description:
      data.description ||
      `An article about ${params.slug} in the Tech category.`,
  };
}

const components = {
  Button,
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
  BlogInsertImage,
};

export default async function TechArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    `src/contents/${category}/${params.slug}.mdx`
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
        <time>{data.date}</time>
        <div className="description">
          <div className="line" />
          <p>{data.description}</p>
          <div className="line" />
        </div>
      </header>
      <section className="content">
        {data.picture && (
          <figure className="first-picture">
            <BlogInsertImage relativePath={data.picture} alt={data.alt} />
          </figure>
        )}
        {MDXElement}
      </section>
    </article>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(`src/contents/${category}`);
  const data = files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
  return data;
}

export const dynamicParams = false;
