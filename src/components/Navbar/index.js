import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/clients"
              className={window.location.pathname === "/clients" ? "nav-link active" : "nav-link"}
            >
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
