import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Book Search</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/saved">Saved Books</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;


