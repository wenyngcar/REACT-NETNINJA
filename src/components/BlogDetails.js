import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
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
      {blogs && (
        <div key={blogs.id} className="p-3 space-y-4">
          <p className="text-4xl font-bold text-purple-500">{blogs.title}</p>
          <p>{blogs.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
