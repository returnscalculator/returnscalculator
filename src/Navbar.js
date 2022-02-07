import React from "react";
import {Navbar , Container, Offcanvas, Nav} from 'react-bootstrap'
import './index.css';

const Navigationbar = () => {
  return (
    <Navbar bg="light" className="title" expand={false}>
      <Container fluid>
        <Navbar.Brand  href="/">{" "}<span className="title">Returns Calculator</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Returns Calculator
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/mf">Mutual Funds Returns Calculator</Nav.Link>
              <Nav.Link href="/stocks">Stock returns Calculator</Nav.Link>
              <Nav.Link href="/lumpsum">Lumpsum Calculator</Nav.Link>
              <Nav.Link href="/sip">SIP Calculator</Nav.Link>
              <Nav.Link href="/rd">RD Calculator</Nav.Link>
              <Nav.Link href="/fd">FD Calculator</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
