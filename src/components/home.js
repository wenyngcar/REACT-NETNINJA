import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const deleteBlog = (id) => {
    /* Returns filtered array and does not affect original array */
    const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    /* Fetch API */
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        /* Response object */
        return res.json();
      })
      .then((data) => {
        /* Actual data after parsing the response object. */
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <div className=" text-2xl font-semibold py-6">Home Page</div>
      {/* Blogs Container */}
      {blogs && <BlogList blogList={blogs} deleteBlog={deleteBlog} />}{" "}
      {/* If there is blogs */}
    </div>
  );
};

export default Home;
