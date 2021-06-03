import { gql } from "apollo-boost";
import React from "react";
import PostForm from "./PostForm";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    insert_posts(objects: { body: $body, title: $title }) {
      returning {
        body
        createdAt
        id
        title
      }
    }
  }
`;
function NewPost() {
  const history = useHistory();
  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      history.push("/");
    },
  });
  function onSave({ title, body }) {
    createPost({ variables: { title, body } });
  }
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Post</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PostForm loading={loading} error={error} onSave={onSave} />
      </div>
    </div>
  );
}

export default NewPost;
