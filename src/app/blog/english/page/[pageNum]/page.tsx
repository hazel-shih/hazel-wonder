import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";

const category = "english";

const BlogEnglishListPage = ({ params }: { params: { pageNum: string } }) => {
  return (
    <BlogCategoryList
      pageNum={params.pageNum}
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
