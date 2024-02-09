import React from "react";
import { Link } from "react-router-dom";
import PostsList from "./PostsList/PostsList";
import "./Forum.scss";

function Forum() {
  return (
    <div className="forum">
      <button>
        <Link to={"/create"}>Create Post</Link>
      </button>
      <PostsList />
    </div>
  );
}

export default Forum;
