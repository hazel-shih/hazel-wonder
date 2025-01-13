import type { Metadata } from "next";
import { type OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { defaultMetadata } from "@/app/config/metadata";

// 定義明確的圖片型別
interface MetadataImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

// CustomizedMetadata 中的 image 是可選的，但如果有就必須完整
interface CustomizedMetadata {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  image?: MetadataImage; // 整個 image 物件是可選的，但內部屬性都是必需的
}

export const createMetadataFromDefault = (
  customizedMetadata: CustomizedMetadata
): Metadata => {
  const { title, description, url, keywords, image } = customizedMetadata;

  // 處理圖片邏輯
  const images = image?.url
    ? [
        {
          url: image.url,
          ...(image.alt && { alt: image.alt }),
          ...(image.width && { width: image.width }),
          ...(image.height && { height: image.height }),
        },
      ]
    : defaultMetadata.openGraph?.images;

  // 建立基本中繼資料
  const baseMetadata: Metadata = {
    ...defaultMetadata,
    title,
    description,
    keywords: keywords.join(", "),
  };

  // 建立 Open Graph 中繼資料
  const openGraph: OpenGraph = {
    ...defaultMetadata.openGraph,
    title,
    description,
    url,
    ...(images && { images }),
  };

  // 建立 Twitter 中繼資料
  const twitter = {
    ...defaultMetadata.twitter,
    title,
    description,
    // ...(images?.[0]?.url && { images: [images[0].url] }),
    images: image?.url ? [image?.url] : [],
  };

  // 回傳完整的中繼資料
  return {
    ...baseMetadata,
    openGraph,
    twitter,
    alternates: {
      ...defaultMetadata.alternates,
      canonical: url,
    },
  };
};
