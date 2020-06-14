import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Order from "../components/order";
import "./product.css";

export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      addModalShow: false,
      editModalShow: false,
   
    };
  }
  render() {
    const { cartItems } = this.props;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="alert alert-info basket">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You have {cartItems.length} products in your cart</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li>
                  <b>{item.name}</b> X {item.count} ={" "}
                  <b>{item.price * item.count}</b>
                  DKK
                  <a
                    className="delLink"
                    onClick={() => this.props.handleRemoveFromCart(item)}
                  >
                    Remove item
                  </a>
                </li>
              ))}
            </ul>
            <b>
              Total: {cartItems.reduce((a, c) => a + c.price * c.count, 0)} DKK
            </b>
            <br />
            <Button
                      className="btn-customBtn"
                      variant="primary"
                      onClick={() => this.setState({ addModalShow: true })}
                    >
                      Proceed to payment
                    </Button>
            <Order
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                    />
          </div>
        )}
      </div>
    );
  }
}
