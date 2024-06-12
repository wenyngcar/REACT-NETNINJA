const addBlog = (url, blog) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
    .then(() => {
      console.log("New blog added");
    })
    .catch(() => {
      console.log("There was an error in adding blogs.");
    });

  //   return;
  //   <div></div>;
};

export default addBlog;
