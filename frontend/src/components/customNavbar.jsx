import React, { Component } from "react";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";

import "./customNavbar.css";
import { NavLink } from "react-router-dom";
import Application from "../Auth/Application";
import UserProvider from "../providers/UserProvider";

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
                  <NavLink to="/products">Rings</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/products">Earrings</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/products">Bracelets</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/products">Necklaces</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink to="/products">Accessories</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/products">Gift</NavLink>
              </Nav.Link>
            </Nav>
            <Navbar.Brand>
              <NavLink to="/">
                <Image src="/assets/logo.png" />
              </NavLink>
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <NavLink to="Contact">Contact Us</NavLink>
              </Nav.Link>
              <Nav>
                <NavDropdown title="account">
                  <UserProvider>
                    <Application />
                  </UserProvider>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </main>
    );
  }
}
