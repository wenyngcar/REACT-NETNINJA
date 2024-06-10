import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Unreal Engine 5", body: "lorem ipsum ...", id: 1 },
    { title: "Unity", body: "lorem ipsum ...", id: 2 },
    { title: "GoDot", body: "lorem ipsum ...", id: 3 },
  ]);

  const deleteBlog = (id) => {
    /* Returns filtered array and does not affect original array */
    const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <div className=" text-2xl font-semibold py-6">Home Page</div>
      {/* Blogs Container */}
      <BlogList blogList={blogs} deleteBlog={deleteBlog} />
    </div>
  );
};

export default Home;
