import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsList from "./PostsList/PostsList";
import "./Forum.scss";
import db from "../../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Forum({ posts, loading }) {
  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="forum">
      <button>
        <Link to={"/create"}>Create Post</Link>
      </button>
      <PostsList posts={posts} />
    </div>
  );
}

export default Forum;
