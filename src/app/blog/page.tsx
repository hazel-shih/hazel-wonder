import BlogCategoryList from "@/app/blog/layouts/BlogCategoryList/BlogCategoryList";

const category = "latest";

const BlogLanding = () => {
  return (
    <BlogCategoryList
      pageNum="1"
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

export default BlogLanding;
