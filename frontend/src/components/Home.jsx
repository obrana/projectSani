import React, { Component } from "react";
// import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "../components/Footer";
import CustomNavbar from "../components/customNavbar";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Router>
          <CustomNavbar />
        </Router>
      </main>
    );
  }
}
