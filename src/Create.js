import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };
    console.log(blog);
  };

  return (
    <div className="mx-auto py-3 w-96">
      <div className="p-5 text-xl font-semibold text-red-500 text-center">
        Add a blog
      </div>
      <div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="">
            <label className="text-lg">Title</label>
            <input
              className="outline-none border-2 w-full rounded-md px-2 py-1"
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="">
            <label className="text-lg ">Body</label>
            <textarea
              placeholder="Enter blog body..."
              className="outline-none border-2 w-full rounded-md px-2 py-1 min-h-52 h-52"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button className="border border-black w-full px-2 py-1 rounded-md hover:text-white hover:bg-red-500 hover:border-red-500 transition duration-150">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
