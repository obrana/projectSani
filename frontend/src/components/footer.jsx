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
              <h5>Customer Service</h5>
              <ul className="quicklinks">
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/categories">Delivery</Link>
                </li>
                <li>
                  <Link to="/products">Return</Link>
                </li>

                <li>
                  <Link to="/products">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>About Sani</h5>
              <ul className="quicklinks">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/categories">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/products">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footerlink">
              <h5>Find Us On</h5>
              <Nav>
                <Nav.Link href="#">
                  <i className="fab fa-facebook-f"></i>
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
          <div className="row lowrow">
            <div className="col-md-12 copyright">
              <p>© 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
