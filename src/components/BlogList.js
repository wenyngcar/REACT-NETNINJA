// Object using props
// const BlogList = (blogs) => {

import { Link } from "react-router-dom";

// Destructured form of the props
const BlogList = ({ blogList }) => {
  return (
    <div className="blog-list space-y-5">
      {/* Single Blog Container */}
      {blogList.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          <div
            key={blog.id}
            className="p-3 hover:shadow-lg transition duration-200"
          >
            <p className="text-xl font-bold text-purple-500">{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
