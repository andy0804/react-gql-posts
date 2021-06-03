import React from "react";
import PostForm from "./PostForm";

function NewPost() {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Post</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PostForm />
      </div>
    </div>
  );
}

export default NewPost;
