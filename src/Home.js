import useFetch from "./hooks/useFetch";
import BlogList from "./components/BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <div className=" text-2xl font-semibold py-6">Home Page</div>
      {error && <div className="text-5xl">{error}</div>}
      {isPending && (
        <div className="flex items-center text-5xl">
          <svg className="animate-spin h-10 w-10 mr-5 ..." viewBox="0 0 24 24">
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      )}
      {/* Blogs Container */}
      {blogs && <BlogList blogList={blogs} />} {/* If there is blogs */}
    </div>
  );
};

export default Home;
