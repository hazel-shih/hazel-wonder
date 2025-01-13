import { Metadata } from "next";

const SITE_NAME = "Hazel Wonder";
const SITE_URL = "https://hazelwonder.me";

export const defaultMetadata: Metadata = {
  title: "Hazel Wonder",
  description:
    "Hazel 是一個對世界充滿好奇的人，學習、自我對話、與人交流是她了解世界的方式。目前是一位前端工程師，在這個網站與你分享網頁前端、AI工具應用、電影心得、生活觀察、日常學習等觀點。",
  keywords: "網頁開發, AI應用, 日常學習",
  authors: [{ name: "Hazel Shih" }],
  creator: "Hazel Shih",
  publisher: "Hazel Shih",

  // 機器人設定
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  // 內容設定
  themeColor: "#ffffff",
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Open Graph 設定
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Hazel 是一個對世界充滿好奇的人，學習、自我對話、與人交流是她了解世界的方式。目前是一位前端工程師，在這個網站與你分享網頁前端、AI工具應用、電影心得、生活觀察、日常學習等觀點。",
    url: SITE_URL,
    images: [
      {
        url: "https://i.imgur.com/B1mVw4S.png",
        width: 1200,
        height: 630,
        alt: "Hazel Wonder personal website",
      },
    ],
    locale: "zh_TW",
  },

  // Twitter Card 設定
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Hazel 是一個對世界充滿好奇的人，學習、自我對話、與人交流是她了解世界的方式。目前是一位前端工程師，在這個網站與你分享網頁前端、AI工具應用、電影心得、生活觀察、日常學習等觀點。",
    images: ["https://i.imgur.com/B1mVw4S.png"],
  },

  // 其他設定
  alternates: {
    canonical: SITE_URL,
    // languages: {
    //   "zh-TW": SITE_URL,
    //   "en-US": SITE_URL,
    // },
  },
};

type CustomizedMetadata = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
};

export const createMetadataFromDefault = (
  customizedMetadata: CustomizedMetadata
): Metadata => {
  return {
    ...defaultMetadata,
    title: customizedMetadata.title,
    description: customizedMetadata.description,
    keywords: customizedMetadata.keywords.join(", "),
    openGraph: {
      ...defaultMetadata.openGraph,
      title: customizedMetadata.title,
      description: customizedMetadata.description,
      url: customizedMetadata.url,
    },
    twitter: {
      title: customizedMetadata.title,
      description: customizedMetadata.description,
    },
  };
};
