import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return <div>Test Blogs {id}</div>;
};

export default BlogDetails;
