import React, { Component } from "react";
// import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Router>
          <CustomNavbar />
        </Router>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/banner-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/banner-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/banner-3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/banner-4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>FOurth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Router>
          <Footer />
        </Router>
      </main>
    );
  }
}
