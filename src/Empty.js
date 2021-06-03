import React from "react";

import { Link } from "react-router-dom";

const classes = {
  h2: "text-sm font-semibold",
  header:
    "bg-gray-300 text-gray-700 py-3 px-4 flex items-center justify-between",
  newPost:
    "bg-green-500 text-white rounded px-4 text-xs py-2 uppercase font-semibold tracking-wide",
  link: "text-blue-500 underline hover:text-blue-700",
};
function Empty() {
  return (
    <div className="text-center">
      {"No posts yet. "}
      <Link to="/new" className={classes.link}>
        Create one?
      </Link>
    </div>
  );
}

export default Empty;
