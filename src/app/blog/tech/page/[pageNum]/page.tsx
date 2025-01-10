import BlogCategoryList from "@/app/blog/layouts/BlogCategoryList/BlogCategoryList";

const category = "tech";

const BlogTechListPage = ({ params }: { params: { pageNum: string } }) => {
  return (
    <BlogCategoryList
      pageNum={params.pageNum}
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
