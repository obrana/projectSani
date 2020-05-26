import React, { Component } from "react";
import Modal from "react-modal";
import { Button, Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./product.css";

export default class allproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    let self = this;
    fetch(`/products`, {
      method: "GET",
    })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        self.setState({ products: data });
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  }
  render() {
    return (
      <main>
        <CustomNavbar />
        <Container className="productPage">
          {/* <h4 className="smallHead">Welcome to product page</h4> */}
          <Card>
            <Card.Img variant="top" src="assets/banner-1.jpg" />
          </Card>

          {this.state.products.map((product, i) => {
            return (
              <Card className="productCard">
                <Card.Img variant="top" src="assets/rings.jpg" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  {/* <Card.Text>{product.details}</Card.Text> */}
                  <Button className="btn-customButton">Add to Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
        <Footer />
      </main>
    );
  }
}
