import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";
import { Metadata } from "next";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";

const category = "latest";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ pageNum: string }>;

export const metadata: Metadata = createMetadataFromDefault({
  title: "Latest 文章列表 - Hazel Wonder",
  description:
    "Hazel Wonder Blog 最新文章列表，文章內容包含網頁開發、AI 工具應用、日常學習，不限類別最新的文章都在這裡！",
  keywords: ["網頁開發", "AI應用", "日常學習"],
  url: "https://hazelwonder.me/blog/latest/page/1",
});

const BlogLatestListPage = async ({ params }: { params: Params }) => {
  const { pageNum } = await params;

  return (
    <BlogCategoryList
      pageNum={pageNum}
      category={category}
      IntroComponent={
        <>
          <p>
            「這裡是我最近熱騰騰正在思考的事！」
            <br />
            不限類別最新的文章都在這裡，你也可以按上方按鈕選擇想看的類別 : )
          </p>
        </>
      }
      path={`/blog/${category}`}
    />
  );
};

export const dynamicParams = false;

export default BlogLatestListPage;
