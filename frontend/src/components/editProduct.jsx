import React, { Component } from "react";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./crudProduct.css";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      details: "",
      price: "",
      metal: "",
      category: "",
      gender: "",
      unit: "",
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/editproduct/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch(function (err) {
        console.log(err);
      });
    // .then(req => {
    //     this.props.history.push("/products");
    // });
  };

  myChangeHandler(event) {
    // event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labellebdy="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <form onSubmit={this.handleSubmit} method="PUT">
                <div className="form-group">
                  Id:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="id"
                    className="form-control"
                    placeholder="Product Id"
                    disabled
                    defaultValue={this.props.pid}
                  />
                </div>
                <div className="form-group">
                  Name:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required={true}
                    defaultValue={this.props.pname}
                  />
                </div>
                <div className="form-group">
                  Product Prices:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="price"
                    className="form-control"
                    placeholder="Product Prices"
                    required={true}
                    defaultValue={this.props.pprice}
                  />
                </div>

                <div className="form-group">
                  Description:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="details"
                    className="form-control"
                    placeholder="Description"
                    required={true}
                    defaultValue={this.props.pdetails}
                  />
                </div>

                <div className="form-group">
                  Metal:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="metal"
                    className="form-control"
                    placeholder="Description"
                    required={true}
                    defaultValue={this.props.pmetal}
                  />
                </div>

                <div className="form-group">
                  category:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="category"
                    className="form-control"
                    placeholder="Description"
                    required={true}
                    defaultValue={this.props.pcategory}
                  />
                </div>

                <div className="form-group">
                  gender:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="gender"
                    className="form-control"
                    placeholder="Description"
                    required={true}
                    defaultValue={this.props.pgender}
                  />
                </div>

                <div className="form-group">
                  unit:{" "}
                  <input
                    type="text"
                    onChange={this.myChangeHandler}
                    name="unit"
                    className="form-control"
                    placeholder="Description"
                    required={true}
                    defaultValue={this.props.punit}
                  />
                </div>
                <Button
                  className="btn-customBtn "
                  varient="primary"
                  type="submit"
                >
                  Update
                </Button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-customBtn "
              variant="danger"
              type="submit"
              onClick={this.props.onHide}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
