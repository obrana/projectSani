import React, { Component } from "react";


class newProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      details: "",
      price: ""
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit= (event) => {
    event.preventDefault();
 
    var data= new FormData();
  data.append("name", this.state.name);
  data.append("price", this.state.price);
  data.append("details", this.state.details);
 

    fetch("/new", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        console.log('success:', data);
      }) 
      .catch(function (err) {
        console.log(err);
      })
      .then(req => {
        this.props.history.push("/products");
      });
  }

  myChangeHandler(event) {
    // event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  }

  render() {
  
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="well">
            <h2>Add a Product</h2>
          </div>
          <div className="form-group">
            Name: {" "}
            <input
              type="text"
              onChange={this.myChangeHandler}
              name="name"
              value={this.state.name}
              className="form-control"
              placeholder="Name"
              required={true}
            />
          </div>
          <div className="form-group">
            Product Prices: {" "}
            <input
              type="text"
              onChange={this.myChangeHandler}
              name="price"
            
              className="form-control"
              placeholder="Product Prices"
              required={true}
            />
          </div>

          <div className="form-group">
            Description: {" "}
            <input
              type="text"
              onChange={this.myChangeHandler}
              name="details"
            
              className="form-control"
              placeholder="Description"
              required={true}
            />
          </div>
    
          <div className="form-group">
            <button type="submit" className="homebtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default newProduct;
