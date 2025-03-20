"use client";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">Tiệm Khô Ngọc Đình</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav>
            <Link href="../admin" className="nav-link">
              ADMIN
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
