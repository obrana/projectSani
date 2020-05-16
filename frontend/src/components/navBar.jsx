import React, { Component } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

import "./navBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
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
                  Profiles
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="processA" smooth={true} duration={1000}>
                  Process
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" smooth={true} duration={1000}>
                  Projects
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="buildingtabs" smooth={true} duration={1000}>
                  Types
                </Link>
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
                <i
                  class="fas fa-phone-square-alt
"
                ></i>{" "}
                0097714154259
              </Nav.Link>

              <div className="social">
                <Nav.Link>
                  <Link to="#">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="#">
                    <i class="fab fa-twitter"></i>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="#">
                    <i class="fab fa-instagram"></i>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="#">
                    <i class="fab fa-linkedin"></i>
                  </Link>{" "}
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
