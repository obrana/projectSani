import React, { Component } from "react";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";

import "./customNavbar.css";
import { NavLink, Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <main>
        <div className="topBar">
          <p>Free shipping for the orders above 1000DKK</p>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          // fixed="top"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title="Jewelry" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products">Rings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products">Earrings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products">Bracelets</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products">Necklaces & Pendants</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/products">Accessories</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products">Gift</Link>
              </Nav.Link>
            </Nav>
            <Navbar.Brand>
              <Link to="/">
                <Image src="assets/logo.png" />
              </Link>
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <Link to="Contact">Contact Us</Link>
              </Nav.Link>
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/SignUp">Register</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/SignIn">LogIn</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </main>
    );
  }
}
