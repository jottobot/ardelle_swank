import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarStuff() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     Home
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/about"
    //           className={
    //             window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/clients"
    //           className={window.location.pathname === "/clients" ? "nav-link active" : "nav-link"}
    //         >
    //           Clients
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/services"
    //           className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
    //         >
    //           Services
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <Navbar bg="light" className="top-Nav">
      <Nav navbar-expand="true" className="justify-content-end">
      <a href="/home" className="nav-header">Swank PR L.L.C</a>
        <a href="/about" className="nav-text">About</a>
        <a href="/clients" className="nav-text">Clients</a>
        <a href="/services" className="nav-text">Services</a>
      </Nav>
    </Navbar>

  );
}

export default NavbarStuff;
