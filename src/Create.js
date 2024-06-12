import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="mx-auto text-center py-3 w-96">
      <div className="p-5 text-xl font-semibold text-red-500">Add a blog</div>
      <div>
        <form className="space-y-4">
          <div className="flex gap-x-3 items-center">
            <label className="text-lg">Title</label>
            <input
              className="outline-none border-2 w-full rounded-md px-2 py-1"
              type="text"
            ></input>
          </div>
          <div className="flex gap-x-3">
            <label className="text-lg">Body</label>
            <textarea className="outline-none border-2 w-full rounded-md px-2 py-1 min-h-52 h-52"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
