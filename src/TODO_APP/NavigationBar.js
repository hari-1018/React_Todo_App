import React from 'react';
import logo from './to-do'; // Ensure this path is correct and points to your logo file
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
      <Navbar id='navheader'>
        <Container>
          <Navbar.Brand id='logo' href="#home">
            <img
              src={logo}
              width="75"
              height="30"
              className="d-inline-block align-top"
              alt="Todo_logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto" id='navigationbar'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Pending</Nav.Link>
            <Nav.Link href="#pricing">In-Progress</Nav.Link>
            <Nav.Link href="#pricing">Completed</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
