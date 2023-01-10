import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar className="navbar">
          <Container >
            <input type="text" id="header-search" placeholder="Search" />
          </Container>
        </Navbar>
      );
    }
    

export default NavBar