import { Metadata } from "next";
import BlogArticle from "@/components/layouts/BlogArticle";
import { mdxCache } from "@/utils/mdxGlobalCache";
import { SITE_URL } from "@/app/config/metadata";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";
import getSlugsByCategory from "@/utils/getSlugsByCategory";

const category = "english";

// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = mdxCache[category][slug];

  const imageData = data.picture
    ? {
        url: data.picture,
        alt: data.alt,
        width: data.width,
        height: data.height,
      }
    : undefined;

  return createMetadataFromDefault({
    title: data.title,
    description: data.description,
    url: `${SITE_URL}/blog/${category}/${slug}`,
    keywords: data.tags || [],
    image: imageData,
  });
}

export default async function BlogEnglishArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  return <BlogArticle slug={slug} category={category} />;
}

export function generateStaticParams() {
  const slugs = getSlugsByCategory(category);
  return slugs;
}

export const dynamicParams = false;
