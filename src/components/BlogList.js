/* Props become objects here when received. */

// Object using props
// const BlogList = (blogs) => {

// Destructured form of the props
const BlogList = ({ blogList }) => {
  return (
    <div className="blog-list space-y-5">
      {/* Single Blog Container */}
      {blogList.map((blog) => (
        <div key={blog.id} className="p-3 hover:border-b-2 ">
          <p className="text-xl font-bold text-purple-500">{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
