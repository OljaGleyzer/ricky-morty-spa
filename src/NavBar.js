import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import Row from 'react-bootstrap/esm/Row';

function NavBar() {
    return (
        <Navbar className="navbar" >
          <Container className="justify-content-md-center">
          <input type="text" id="header-search" placeholder="Search" /> 
          </Container>
        </Navbar>
      );
    }
    

export default NavBar