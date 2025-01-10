import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";

const category = "movie";

const BlogMovieListPage = ({ params }: { params: { pageNum: string } }) => {
  return (
    <BlogCategoryList
      pageNum={params.pageNum}
      category={category}
      IntroComponent={
        <>
          <p>
            「電影就是現實。」
            <br />
            不是專業影評。只是和你分享我的觀後感，以及連結我生命經驗的想法
          </p>
        </>
      }
      path={`/blog/${category}`}
    />
  );
};

export const dynamicParams = false;

export default BlogMovieListPage;
