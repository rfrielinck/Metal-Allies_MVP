import React from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Container } from "reactstrap";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/Main">
          <a href="/">Metal Allies</a>
        </Link>
      </div>
      <div className="spacer" />

      <div className="navbar-links">
        <ul className="navbar-links-list">
          <Link to="/Aboutus">
            <a href="/">
              <li>About us</li>
            </a>
          </Link>
          <Link to="/Buyer">
            <a href="/">
              <li>Buyer</li>
            </a>
          </Link>
          <Link to="/Supplier">
            <a href="/">
              <li>Supplier</li>
            </a>
          </Link>
          <Link to="/Login">
            <a href="/">
              <li>Log-in</li>
            </a>
          </Link>
          <Link to="/Contact">
            <a href="/">
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
