import React from 'react'
import { useParams } from 'react-router-dom';

function PostDetails(post) {
    const { postId } = useParams();

    console.log(postId);
    console.log(post);

    return (
      <div>
        <h2>Post Details</h2>
        <p>Post ID: {postId}</p>
      </div>
    );
}

export default PostDetails