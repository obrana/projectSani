import React, { Component } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

import "./customNavbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

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
            <a onClick={() => scroll.scrollToTop()}>
              <Image src="assets/logo.png" class="img-fluid" />
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="profile" smooth={true} duration={1000}>
                  Jewelry
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="processA" smooth={true} duration={1000}>
                  Love & Engagement
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" smooth={true} duration={1000}>
                  Gifts
                </Link>{" "}
              </Nav.Link>
            </Nav>
            <Navbar.Brand onClick={() => scroll.scrollToTop()}>
              <Image src="assets/logo.png" />
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <Link to="collab" smooth={true} duration={1000}>
                  Contact Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="collab" smooth={true} duration={1000}>
                  My Account
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </main>
    );
  }
}
