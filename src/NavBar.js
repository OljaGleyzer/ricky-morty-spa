import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import Row from "react-bootstrap/esm/Row";
import logo from "./logo.png";

function NavBar({ getInput }) {
  return (
    <Navbar className="navbar">
      <Container className="justify-content-md-center flex-column">
        <img src={logo} alt="titlepic" />
        <input
          type="text"
          id="header-search"
          placeholder="Search..."
          onChange={getInput}
        />
      </Container>
    </Navbar>
  );
}

export default NavBar;
