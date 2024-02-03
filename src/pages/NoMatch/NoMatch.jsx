import React from "react";
import "./NoMatch.scss";

import p404 from "../../assets/p404.jpg";

function NoMatch() {
  return (
    <div className="p404">
      <div className="container">
        <img src={p404} alt="404" />
        <div className="txt">
          <span>404</span>
          <h1>Something went wrong! </h1>
          <h2>The page that you are looking for is not existing.</h2>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
