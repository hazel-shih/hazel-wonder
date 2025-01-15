import parseMdxToHtml from "@/utils/parseMdxToHtml";
import "@/components/layouts/BlogArticle/style.scss";
import "./style.scss";

export default async function AboutLandingPage() {
  const MdxElement = await parseMdxToHtml("src/app/about/about.mdx");
  return <div className="mdx-content about-landing">{MdxElement}</div>;
}
