const DeleteBlog = (url) => {
  return fetch(url, {
    method: "DELETE",
  }).then(() => {
    console.log("Blog deleted");
  });
};

export default DeleteBlog;
