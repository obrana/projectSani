import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import "./crudProduct.css";
import Basket from "../components/basket";
import Footer from "../components/footer";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      zip: "",
      city: "",
      ordernumber: "",
      product_id: "",
      cartItems: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    // this.myChangeHandler = this.myChangeHandler.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append("name", this.state.name);
    data.append("address", this.state.address);
    data.append("zip", this.state.zip);
    data.append("city", this.state.city);
    data.append("ordernumber", this.state.ordernumber);
    data.append("product_id", this.state.product_id);
    fetch("/neworder", {
      method: "POST",
      body: data,
    })
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({ snackbaropen: true, snackbarmsg: result });
        },
        (error) => {
          this.setState({ snackbaropen: true, snackbarmsg: "failed" });
        }
      );
  };

  myChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  };
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
    const { cartItems } = this.props;
    return (
      <>
        {/* <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.sncakbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-lable="close"
              color="inherit"
              onClick={this.sncakbarClose}
            >
              x
            </IconButton>,
          ]}
        /> */}
        <div className="container container-order">
          <div
            {...this.props}
            size="lg"
            aria-labellebdy="contained-modal-title-vcenter"
            centered
          ></div>
          <div closeButton></div>
          <h2 id="check-title">Checkout</h2>

          <div className="row check-row">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  Full Name:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="name"
                    value={this.state.name}
                    className="form-control"
                    // placeholder="Full Name"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  Address:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="address"
                    className="form-control"
                    // placeholder="Address"
                    required={true}
                  />
                </div>

                <div className="form-group">
                  Zip Code:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="zip"
                    className="form-control"
                    // placeholder="Zip Code"
                    required={true}
                  />
                </div>

                <div className="form-group">
                  City:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="city"
                    className="form-control"
                    // placeholder="City"
                    required={true}
                  />
                </div>
                <div className="form-group check-text">
                  <h2>Shipping Method</h2>
                  <p> Complimentary Express Delivery signature</p>
                </div>
                <div className="form-group check-text">
                  <h2>Gift Message(optional)</h2>

                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="city"
                    className="form-control"
                    placeholder="Write your message here"
                    row="4"
                    as="textarea"
                  />
                </div>
                <button
                  className="btn-customBtn"
                  type="submit"
                  onClick={this.props.onHide}
                  //   className="homebtn"
                >
                  Continue
                </button>
              </form>
            </div>
            <div className="col-md-6 check-text">
              <h2>Order Summary</h2>
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
 