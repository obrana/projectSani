import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Fade } from "react-slideshow-image";
import "./home.css";

const images = [
  "assets/banner-1.jpg",
  "assets/banner-2.jpg",
  "assets/banner-3.jpg",
  "assets/banner-4.jpg",
];
const properties = {
  duration: 2000,
  transitionDuration: 4000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default class Home extends Component {
  render() {
    return (
      <main>
        <Container>
          <Fade {...properties}>
            <div className="image-container">
              <img src={images[0]} />
              <Carousel.Caption>
                <h3>Highclass, Handcrafted, Lovely</h3>
                <p>Because a sparkling diamond can change your life.</p>
              </Carousel.Caption>
            </div>
            <div className="image-container">
              <img src={images[1]} />
              <Carousel.Caption>
                <h3>Only the finest</h3>
                <p>
                  Elegant craftsmanship with standard material is what you need
                </p>
              </Carousel.Caption>
            </div>

            <div className="image-container">
              <img src={images[2]} />
              <Carousel.Caption>
                <h3>Fair Pricing</h3>
                <p>No hidden cost, no markups, just luxury</p>
              </Carousel.Caption>
            </div>

            <div className="image-container">
              <img src={images[3]} />
              <Carousel.Caption>
                <h3>Intrigue. Elegance. You.</h3>
                <p>Exquisite style for everyday wear.</p>
              </Carousel.Caption>
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
          <Card className="text-center introText">
            <Card.Body>
              <Card.Title className="big-title">Introducing SANI</Card.Title>
              <Card.Text>
                This is the beginning of our story. Sani is all about jewelry
                for occasions, jewelry for every moment. Add a little elegance
                to your routine. Elegant craftsmanship with standard material is
                what you need. We look forward to welcoming you in store soon.
              </Card.Text>
              <Card className="text-center sectionOne">
                <Card.Body>
                  <Card.Title className="small-title">
                    Explore our designs
                  </Card.Title>
                  <Card.Text>There is no harm in looking! :)</Card.Text>
                  <Button variant="customButton">Shop Now</Button>
                </Card.Body>
              </Card>{" "}
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

          <Card className="imageCard">
            <Card.Img src="assets/cardimg.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Every day style. Extraordinary elegance.</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>

        <Router>
          <Footer />
        </Router>
      </main>
    );
  }
}
