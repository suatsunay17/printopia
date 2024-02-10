import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <ul>
          <li>
          <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
          <i class="fa-brands fa-linkedin"></i>
          </li>
          <li>
          <i class="fa-brands fa-github"></i>
          </li>
        </ul>
      </section>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Printopia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
