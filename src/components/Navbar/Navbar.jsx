import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <ul>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/forum"}>Forum</Link>
        </div>
        <div className="profile-links">
          {currentUser ? (
            <div>
              <Link to={"/profile"}> Profile</Link>
            </div>
          ) : (
            <div>
              <Link to={"/register"}>Register</Link>
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
