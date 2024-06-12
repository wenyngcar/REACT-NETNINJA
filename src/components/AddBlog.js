const addBlog = (url, blog, setIsPending) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
    .then(() => {
      console.log("New blog added");
      setIsPending(false);
    })
    .catch(() => {
      console.log("There was an error in adding blogs.");
    });
};

export default addBlog;
