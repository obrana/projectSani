import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Fade } from "react-slideshow-image";
import "./home.css";

const images = ["assets/banner-1.jpg", "assets/banner-2.jpg", "assets/banner-3.jpg", "assets/banner-4.jpg"];
const properties = {
  duration: 2000,
  transitionDuration: 4000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class Home extends Component {
  render() {
    return (
      <main>
        <Router>
          <CustomNavbar />
        </Router>
        <Container>

        <Fade {...properties}>
          <div className="image-container">
            <img src={images[0]} />
          </div>
          <div className="image-container">
            <img src={images[1]} />
          </div>
          <div className="image-container">
            <img src={images[2]} />
          </div>
          <div className="image-container">
            <img src={images[3]} />
          </div>
        </Fade>
          {/* <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banner-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banner-2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banner-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banner-4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel> */}
          <Card className="text-center sectionOne">
            <Card.Body>
              <Card.Title className="big-title">Explore the designs</Card.Title>
              <Card.Text>
                We look forward to welcoming you in store soon.
              </Card.Text>
              <Button variant="customButton">Shop Now</Button>
            </Card.Body>
          </Card>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="assets/rings.jpg" />
              <Card.Body>
                <Card.Title>Ring</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/earrings.jpg" />
              <Card.Body>
                <Card.Title>Earring</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/necklace.jpg" />
              <Card.Body>
                <Card.Title>Necklace</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>

        <Router>
          <Footer />
        </Router>
      </main>
    );
  }
}
