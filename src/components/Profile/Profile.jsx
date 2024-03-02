import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import PostCard from "../Forum/PostCard/PostCard";

import "./Profile.scss";

function Profile({ posts }) {
  const { currentUser, signOut } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const currentUserId = currentUser.uid;
  let currentPosts = [];

  useEffect(() => {
    for (const el of posts) {
      if (el.createdBy.uid === currentUserId) {
        currentPosts.push(el);
      }
    }
    setUserPosts(currentPosts);
  }, []);

  console.log(userPosts);

  return (
    <div className="profile-main">
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && "active"}</p>
      <button onClick={signOut}>Sign Out</button>

      <h2>My Posts</h2>
      <div className="post-list">
        {userPosts.length > 0 ? (
          userPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
export default Profile;
