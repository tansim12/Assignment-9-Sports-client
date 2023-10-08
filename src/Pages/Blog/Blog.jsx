import { useLoaderData } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const data = useLoaderData();

  return (
    <div className="mb-20">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      {data?.map((item) => (
        <BlogDetails key={item?.id} item={item}></BlogDetails>
      ))}
    </div>
  );
};

export default Blog;
