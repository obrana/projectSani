import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import "./crudProduct.css";

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
    };
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
      // headers: {
      //     'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(this.state)
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
    // .then(req => {
    //     this.props.history.push("/products");
    // });
  };

  myChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  };

  render() {
    return (
      <>
        <Snackbar
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
        />
        <div className="container">
          <Modal
            {...this.props}
            size="lg"
            aria-labellebdy="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Shipping Address
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  Full Name:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="name"
                    value={this.state.name}
                    className="form-control"
                    placeholder="Full Name"
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
                    placeholder="Address"
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
                    placeholder="Zip Code"
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
                    placeholder="City"
                    required={true}
                  />
                </div>

                <div className="form-group">
                  unit:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="unit"
                    className="form-control"
                    placeholder="unit"
                    required={true}
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
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}
