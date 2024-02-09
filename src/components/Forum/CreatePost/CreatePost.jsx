import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import { AuthContext } from "../../../context/AuthContext";



import "./CreatePost.scss";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [post, setPost] = useState({ title: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!currentUser) {
      setError("You must be logged in to create a post.");
      setIsSubmitting(false);
      return;
    }

    try {
      const newPost = {
        ...post,
        createdBy: {
          uid: currentUser.uid,
          displayName: currentUser.email.split('@')[0] || "Anonymous",
        },
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
      setPost({ title: "", content: "" });
      navigate("/forum");
    } catch (e) {
      setError("Error adding document: " + e.message);
      console.error("Error adding document: ", e);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="main-create">
      <div className="create-post">
        <h2>Create a New Post</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
