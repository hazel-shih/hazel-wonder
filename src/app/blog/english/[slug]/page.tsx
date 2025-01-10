import fs from "fs";
import path from "path";
import { Metadata } from "next";
import matter from "gray-matter";
import BlogArticle from "@/components/layouts/BlogArticle";

const category = "english";

// can be plain object if not need fetch / dynamic
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    `src/contents/${category}/${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title || `Read about ${slug}`,
    description:
      data.description || `An article about ${slug} in the Tech category.`,
  };
}

export default async function TechEnglishPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return <BlogArticle slug={slug} category={category} />;
}

export function generateStaticParams() {
  const files = fs.readdirSync(`src/contents/${category}`);
  const data = files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
  return data;
}

export const dynamicParams = false;
