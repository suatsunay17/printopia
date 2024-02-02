import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        <h1>Printopia.</h1>
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
