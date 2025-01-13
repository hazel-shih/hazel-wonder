import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";
import { Metadata } from "next";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";

const category = "tech";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ pageNum: string }>;

export const metadata: Metadata = createMetadataFromDefault({
  title: "Tech 文章列表 - Hazel Wonder",
  description:
    "Hazel Wonder Blog 技術文章列表，文章內容包含網頁開發、AI 工具應用等技術分享，希望可以增加領域守備範圍！",
  keywords: ["網頁開發", "AI應用", "技術分享"],
  url: "https://hazelwonder.me/blog/tech/page/1",
});

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
            內容包含網頁開發、AI 工具應用等技術分享，希望可以增加領域守備範圍！
          </p>
        </>
      }
      path={`/blog/${category}`}
    />
  );
};

export const dynamicParams = false;

export default BlogTechListPage;
