import type { Metadata } from "next";
import { nunito } from "@/fonts/configure";
import { getLatestArticlesList } from "@/utils/getArticles";
import Link from "next/link";
import { defaultMetadata } from "./config/metadata";
import "./page.scss";

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function Home() {
  const articles = getLatestArticlesList(5);

  return (
    <section className="home">
      <div>
        <h1 className={nunito.className}>Hi, I&apos;m Hazel 👋🏻</h1>
        <p>
          喜歡思考、分享想法、有意識地生活。
          <br />
          我對很多事物充滿好奇，「想知道更多」就是我學習的理由。
          <br />
          在這邊分享關於技術、觀影、閱讀、日常生活所見所聞的想法，
          <br />
          如果你能從這裡發現你有興趣的東西那就太好了 : )
        </p>
      </div>

      <div>
        <h1 className={nunito.className}>
          Recent Highlights<span className="ps">(01/03 updated)</span>
        </h1>
        <p>實踐於生活的信念：Stay fresh!</p>
        <p>正在讀的書：《魅力學》by Olivia Fox Cabane</p>
        <p>反覆循環的歌： Kendrick Lamar - luther</p>
      </div>
      <div>
        <h1 className={nunito.className}>Latest Writings</h1>
        {articles.map((article) => (
          <Link
            href={`/blog/${article.category}/${article.slug}`}
            className="article-item"
            key={article.slug}
          >
            <span className="date">{article.published}</span>
            <p className="article-title">{article.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
