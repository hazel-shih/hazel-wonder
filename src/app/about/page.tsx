import parseMdxToHtml from "@/utils/parseMdxToHtml";
import "@/components/layouts/BlogArticle/style.scss";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";
import { Metadata } from "next";
import { SITE_URL } from "../config/metadata";
import "./style.scss";

export const metadata: Metadata = createMetadataFromDefault({
  title: "關於我 - Hazel Wonder",
  description:
    "我是 Hazel，目前是一位軟體工程師，待過前端也待過 AI 應用領域。成為工程師完全不在一開始的職涯藍圖中，大學時期做過行銷、企劃、文案、講師、設計等領域的實習與工讀，畢業後到廣告代理商品感受了一些創意又好玩的空氣後，發覺自己更嚮往「想法落地」、「動手實作」、「技能不受時間與地點限制」的職涯樣貌，於是裸辭自學程式，轉職成為工程師，就一路走到現在了。",
  url: `${SITE_URL}/about}`,
  keywords: ["網頁開發", "AI 應用", "日常學習", "生活反思"],
});

export default async function AboutLandingPage() {
  const MdxElement = await parseMdxToHtml("src/app/about/about.mdx");
  return <div className="mdx-content about-landing">{MdxElement}</div>;
}
