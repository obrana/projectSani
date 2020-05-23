import React, { Component } from "react";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";

import "./customNavbar.css";
import { Link } from "react-router-dom";

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
          <div className="logo">
            <a>
              <Image src="assets/logo.png" class="img-fluid" />
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title="Jewelry" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Rings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Earrings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Charms</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Necklaces & Pendants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Bracelets
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="processA">Accessories</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="projects">Gifts</Link>{" "}
              </Nav.Link>
            </Nav>
            <Navbar.Brand>
              <Image src="assets/logo.png" />
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <Link to="collab">Contact Us</Link>
              </Nav.Link>
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/SignUp">Register</NavDropdown.Item>
                <NavDropdown.Item href="/SignIn">Log IN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </main>
    );
  }
}
