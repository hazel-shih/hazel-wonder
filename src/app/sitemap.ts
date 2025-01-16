// app/sitemap.ts
import { MetadataRoute } from "next";
import { blogCategories } from "./config/blog";
import { SITE_URL } from "./config/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const paths: MetadataRoute.Sitemap = [];

  // 收集所有 Promise
  const promises: Promise<void>[] = [];

  for (let i = 0; i < blogCategories.length; i++) {
    const category = blogCategories[i];
    console.log("category", category);
    // 處理分頁路由
    const pagePromise = import(`@/app/blog/${category}/page/[pageNum]/page`)
      .then((module) => module.generateStaticParams())
      .then((params: { pageNum: string }[]) => {
        const categoryPages = params.map((param) => ({
          url: `${baseUrl}/blog/${category}/page/${param.pageNum}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.5,
        }));
        paths.push(...categoryPages);
      });

    if (category === "latest") {
      continue;
    }

    // 處理文章路由
    const postPromise = import(`@/app/blog/${category}/[slug]/page`)
      .then((module) => module.generateStaticParams())
      .then((params: { slug: string }[]) => {
        const categoryPosts = params.map((param) => ({
          url: `${baseUrl}/blog/${category}/${param.slug}`,
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.8,
        }));
        paths.push(...categoryPosts);
      });

    promises.push(pagePromise, postPromise);
  }

  // 等待所有路徑處理完成
  await Promise.all(promises);

  // 加入靜態路由
  paths.push(
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/lab`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }
  );

  return paths;
}
