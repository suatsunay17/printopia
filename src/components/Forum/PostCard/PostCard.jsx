import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const formattedDate = post.createdAt
    ? new Date(post.createdAt.toDate()).toLocaleString()
    : "";
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="post-author">
        Posted by: {post?.createdBy?.displayName || "Anonymous user"} on{" "}
        {formattedDate}
      </p>
      <Link to={`/post/${post.id}`} >View Details</Link>
    </div>
  );
};

export default PostCard;
