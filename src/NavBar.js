import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import Row from "react-bootstrap/esm/Row";

function NavBar({ getInput }) {
  return (
    <Navbar className="navbar">
      <Container className="justify-content-md-center">
        <input
          type="text"
          id="header-search"
          placeholder="Search"
          onChange={getInput}
        />
      </Container>
    </Navbar>
  );
}

export default NavBar;
