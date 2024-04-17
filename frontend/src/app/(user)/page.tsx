import { GetTopBlog } from "@/api";
import BlogCard from "@/components/global/user/Blog-card";
import HeroBlog from "@/components/global/user/Hero-Blog";
import { BlogSchemaType } from "@/types/schema.types";

const Page = async () => {
  const TopBlog: { message: string; data: BlogSchemaType[] | {} } = (
    await GetTopBlog()
  ).data;

  // console.log(TopBlog);

  if (!TopBlog) return <p>Loading...</p>;

  if (!Array.isArray(TopBlog.data)) return <p>No blogs</p>;

  return (
    <>
      <HeroBlog {...TopBlog.data[0]} />
      <div className="flex flex-wrap w-full">
        {TopBlog.data instanceof Array
          ? TopBlog.data.map((v: BlogSchemaType, i) =>
              i === 0 ? null : <BlogCard {...v} />
            )
          : null}
      </div>
    </>
  );
};

export default Page;
