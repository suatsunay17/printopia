import React from "react";
import "./SinglePost.scss";

function SinglePost({ item }) {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
        <div className="card" >
          <div className="image">
            <img src={item.img} width={'100%'}/>
          </div>
          <div className="text">
            <h3>{item.name}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
   
  );
}

export default SinglePost;
