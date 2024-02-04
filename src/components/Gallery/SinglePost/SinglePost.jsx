import React from "react";
import './SinglePost.scss';

function SinglePost( {item} ) {
  return (
    <div className="single-post">
      <h4>{item.name}</h4>
      <img src={item.img} alt="" />
    </div>
  );
}

export default SinglePost;
