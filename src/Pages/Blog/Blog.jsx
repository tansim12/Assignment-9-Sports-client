import { useLoaderData } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const data = useLoaderData();

  return (
    <div className="mb-20">
      {data?.map((item) => (
        <BlogDetails key={item?.id} item={item}></BlogDetails>
      ))}
    </div>
  );
};

export default Blog;
