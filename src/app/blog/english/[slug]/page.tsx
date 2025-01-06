import fs from "fs";
import path from "path";
import { Metadata } from "next";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import "./style.css";

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

  // 使用 compileMDX 編譯 MDX 文件
  const { content: MDXElement } = await compileMDX({
    source: content,
  });

  return (
    <article>
      <h1>{data.title}</h1>
      <h3>Date: {data.date}</h3>
      {MDXElement}
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
