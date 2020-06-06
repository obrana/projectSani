import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Footer from "../components/footer";
import {
  Button,
  Image,
  Container,
  ButtonToolbar,
  Table,
} from "react-bootstrap";
import Basket from "../components/basket";
import "./product.css";
import Accordion from "react-bootstrap/Accordion";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cartItems: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    fetch(`/productdetail/${id}`)
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }
  }
  handleAddToCart(product) {
    this.setState((state) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 0 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }
  handleRemoveFromCart(item) {
    this.setState((state) => {
      const cartItems = state.cartItems.filter((elm) => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return { cartItems };
    });
  }
  render() {
    return (
      <main>
        <div className="container-fluid-details">
          <div className="container">
            <div className="CartItems">
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>

            {this.state.products.map((product) => (
              <div className="row productRow">
                <div className="col-md-6 productImage" key={product.id}>
                  <Carousel className="carousel-two" interval={false}>
                    <Carousel.Item>
                      <img
                        src={
                          "https://sammenligne.s3.eu-central-1.amazonaws.com/" +
                          product.image_path
                        }
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="col-md-6 productDetail">
                  <div className="details">
                    <h1>{product.name}</h1>
                    <p>{product.details}</p>
                    <h3>{product.price} DKK</h3>
                    <h4>{product.metal}</h4>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          Size Chart
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Img
                            variant="top"
                            src="/assets/size-chart.jpg"
                          />
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <br />
                    <Button
                      variant="customButton"
                      onClick={() => this.handleAddToCart(product)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    );
  }
}
export default DetailPage;
