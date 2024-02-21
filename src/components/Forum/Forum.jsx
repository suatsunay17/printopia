import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsList from "./PostsList/PostsList";
import "./Forum.scss";
import db from "../../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "posts"), orderBy("createdAt", "desc"))
        );
        const postList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postList);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

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
