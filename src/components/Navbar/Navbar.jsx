import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h1>Printopia.</h1>
      <div className="left">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/forum"}>Forum</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          {currentUser ? (
            <div>
              <li>
                <Link to={"/profile"}> Profile</Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </div>
          )}
          <i class="fa-solid fa-bars"></i>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
