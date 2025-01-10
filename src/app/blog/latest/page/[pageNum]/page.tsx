import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";

const category = "latest";

const BlogLatestListPage = async ({
  params,
}: {
  params: { pageNum: string };
}) => {
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
