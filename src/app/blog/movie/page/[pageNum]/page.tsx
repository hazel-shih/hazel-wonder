import BlogCategoryList from "@/components/layouts/BlogCategoryList/BlogCategoryList";
import { Metadata } from "next";
import { createMetadataFromDefault } from "@/utils/createMetadataFromDefault";
import { loadAllMDX } from "@/utils/mdxGlobalCache";
import getPageNumByCategory from "@/utils/getPageNumByCategory";

const category = "movie";
// solve from: https://github.com/orgs/community/discussions/142577#discussioncomment-11054234
type Params = Promise<{ pageNum: string }>;

export const metadata: Metadata = createMetadataFromDefault({
  title: "Movie 文章列表 - Hazel Wonder",
  description:
    "Hazel Wonder Blog 電影文章列表，文章內容包含電影推薦、觀影心得、不專業影評，只是和你分享我的觀後感，以及連結我生命經驗的想法。",
  keywords: ["電影推薦", "觀影心得", "不專業影評"],
  url: "https://hazelwonder.me/blog/movie/page/1",
});

const BlogMovieListPage = async ({ params }: { params: Params }) => {
  const { pageNum } = await params;

  return (
    <BlogCategoryList
      pageNum={pageNum}
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

export async function generateStaticParams() {
  await loadAllMDX();
  return getPageNumByCategory(category);
}

export default BlogMovieListPage;
