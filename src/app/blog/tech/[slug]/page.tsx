import fs from "fs";
import path from "path";
import { Metadata } from "next";
import matter from "gray-matter";
import BlogArticle from "@/components/layouts/BlogArticle";

const category = "tech";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
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

export default async function TechArticlePage({ params }: { params: Params }) {
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
