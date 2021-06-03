import React from "react";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Posts from "./components/Post";
function App() {
  const client = useApolloClient();
  client
    .query({
      query: gql`
        {
          posts {
            id
            body
            title
            createdAt
          }
        }
      `,
    })
    .then((data) => {
      console.log(data, "data");
    });

  const GET_POSTS = gql`
    {
      posts {
        id
        body
        title
        createdAt
      }
    }
  `;

  const { loading, data } = useQuery(GET_POSTS);
  if (loading) {
    return <div> Loading..</div>;
  }
  const classes = {
    h2: "text-sm font-semibold",
    header:
      "bg-gray-300 text-gray-700 py-3 px-4 flex items-center justify-between",
    newPost:
      "bg-green-500 text-white rounded px-4 text-xs py-2 uppercase font-semibold tracking-wide",
    link: "text-blue-500 underline hover:text-blue-700",
  };
  return (
    <>
      <header className={classes.header}>
        <h2 className={classes.h2}>All Posts</h2>
        <Link to="/new" className={classes.newPost}>
          New Post
        </Link>
      </header>
      {data.posts.length === 0 && <Empty />}
      {data.posts.map((post) => {
        return <Posts post={post} key={post.id} />;
      })}
    </>
  );
}

export default App;
