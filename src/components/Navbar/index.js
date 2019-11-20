import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarStuff() {
  return (
    <Navbar className="top-Nav">
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
