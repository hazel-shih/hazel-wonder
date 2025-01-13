import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";
import { Metadata } from "next";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";

const category = "english";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ pageNum: string }>;

export const metadata: Metadata = createMetadataFromDefault({
  title: "English Writing 文章列表 - Hazel Wonder",
  description:
    "Hazel Wonder Blog 英文短文文章列表，文章內容包含以英文撰寫的生活日常、學習啟發、觀點分享，練習寫寫的英文短文，試著用英文說出想要表達的話。",
  keywords: ["英文生活日常", "英文學習啟發", "英文觀點分享"],
  url: "https://hazelwonder.me/blog/english/page/1",
});

const BlogEnglishListPage = async ({ params }: { params: Params }) => {
  const { pageNum } = await params;

  return (
    <BlogCategoryList
      pageNum={pageNum}
      category={category}
      IntroComponent={
        <>
          <p>
            「不練習永遠無法變得更好。」
            <br />
            練習寫寫的英文短文，試著用英文說出想要表達的話。
            <br />
            主題通常是描述一件事，還有短短的、隨機的想法
          </p>
        </>
      }
      path={`/blog/${category}`}
    />
  );
};

export const dynamicParams = false;

export default BlogEnglishListPage;
