import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Unreal Engine 5", body: "lorem ipsum ...", id: 1 },
    { title: "Unity", body: "lorem ipsum ...", id: 2 },
    { title: "GoDot", body: "lorem ipsum ...", id: 3 },
  ]);

  return (
    <>
      <div className=" text-2xl font-semibold py-6">Home Page</div>
      {/* Blogs Container */}
      <div className="space-y-5">
        {/* Single Blog Container */}
        {blogs.map((blog) => (
          <div key={blog.id}>
            <p className="text-xl font-bold text-purple-500">{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
