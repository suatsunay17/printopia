import React from "react";
import "./PostCard.scss";

const PostCard = ({ post }) => {
  const formattedDate = post.createdAt
    ? new Date(post.createdAt.toDate()).toLocaleString()
    : "";
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="post-author">
        Posted by: {post?.createdBy?.displayName || "Anonymous user"} on {formattedDate}
      </p>
    </div>
  );
};

export default PostCard;
