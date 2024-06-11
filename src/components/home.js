import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <div className=" text-2xl font-semibold py-6">Home Page</div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* Blogs Container */}
      {blogs && <BlogList blogList={blogs} />} {/* If there is blogs */}
    </div>
  );
};

export default Home;
