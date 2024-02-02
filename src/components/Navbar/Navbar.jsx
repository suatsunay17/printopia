import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/forum"}>Forum</Link>
        </div>
        <div className="profile-links">
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
