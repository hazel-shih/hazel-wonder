import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";
import { Metadata } from "next";

const category = "tech";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ pageNum: string }>;

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

const BlogTechListPage = async ({ params }: { params: Params }) => {
  const { pageNum } = await params;

  return (
    <BlogCategoryList
      pageNum={pageNum}
      category={category}
      IntroComponent={
        <>
          <p>
            「當我可以把一項技術梳理後並清楚解釋，那就代表我學會了。」
            <br />
            內容包含網頁前端、AI 工具應用，希望可以增加領域守備範圍！
          </p>
        </>
      }
      path={`/blog/${category}`}
    />
  );
};

export const dynamicParams = false;

export default BlogTechListPage;
