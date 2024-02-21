import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../../../firebase/firebase.js";
import { AuthContext } from "../../../context/AuthContext";

import './PostDetails.scss'

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const { currentUser } = useContext(AuthContext);

  const getPostById = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      const docSnap = await getDoc(postRef);

      if (docSnap.exists()) {
        // Document found, update state with its data
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
        // Document not found
        console.log("No such document!");
        setPost(null);
      }
    } catch (error) {
      console.error("Error getting document:", error);
      throw error;
    }
  };
  const getComments = async (postId) => {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      return postData.comments || [];
    } else {
      console.log("No such document!");
      return [];
    }
  };

  const postComment = async (postId, commentText) => {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      if (commentText !== "") {
        const postData = postSnap.data();
        const updatedComments = [
          ...(postData.comments || []),
          { text: commentText },
        ];

        await setDoc(postRef, { comments: updatedComments }, { merge: true });
      }
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await postComment(postId, newComment);
    setNewComment("");
    getComments(postId).then(setComments);
  };

  useEffect(() => {
    getPostById(postId).then(setPost);
    getComments(postId).then(setComments);
  }, [postId]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const formattedDate = post?.createdAt
    ? new Date(post.createdAt.toDate()).toLocaleString()
    : "";

  console.log(post);

  return (
    <div className="post-details">
    <h2 className="post-title">Post Details</h2>
    <p className="post-id">Post ID: {postId}</p>
    <div className="comments-section">
      <h3 className="comments-title">Comments</h3>
      <div className="comments-list">
        {comments?.map((comment) => (
          <p key={comment.id} className="comment">{comment.text}</p>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button type="submit" className="submit-button">Submit Comment</button>
      </form>
    </div>
  </div>
  
  );
}

export default PostDetails;
