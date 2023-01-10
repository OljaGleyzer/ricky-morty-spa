import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar class="NavBar" expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
          </Container>
        </Navbar>
      );
    }
    

export default NavBar