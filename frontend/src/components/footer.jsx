import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Customer Service</h4>
              <ul className="quicklinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Company</h4>
              <ul className="quicklinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footerlink">
              <h4>Find Us On</h4>
              <Nav>
                <Nav.Link href="#">
                  <i class="fab fa-facebook-f"></i>
                </Nav.Link>
                <Nav.Link href="#">
                  <i class="fab fa-twitter"></i>
                </Nav.Link>
                <Nav.Link href="#">
                  <i class="fab fa-instagram"></i>
                </Nav.Link>
                <Nav.Link href="#">
                  <i class="fab fa-linkedin"></i>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
        <div className="row lowrow">
          <div className="col-md-12 copyright">
            <p>© 2019. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
