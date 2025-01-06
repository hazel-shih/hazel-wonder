import fs from "fs";
import { Metadata } from "next";

// blog 類別 landing

const category = "tech";

export function generateMetadata(): Metadata {
  return {
    title: "Hazel Wonder Blog - Tech Category",
    description: "",
    keywords: ["技術部落格", "前端開發", "深度學習", "AI 工具使用"],
    openGraph: {
      type: "website",
      url: "https://hazelwonder.me/blog/tech",
      title: "Hazel Wonder Blog - Tech Category",
      description: "",
      siteName: "Hazel Wonder",
      images: [
        {
          url: "",
        },
      ],
    },
  };
}

export default async function BlogTechLanding() {
  return (
    <article>
      {/* <h1>{data.title}</h1>
      <h3>Date: {data.date}</h3>
      {MDXElement} */}
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
