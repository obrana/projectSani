import React, { Component } from "react";
class allproducts extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  componentDidMount() {
    fetch(`/products`)
      .then((response) => response.json())
      .then((product) => this.setState({ product }));
  }
  render() {
    return (
      <div>
        Hello World
        <ul>
          {this.state.product.map((products) => (
            <li>
              <h2>{products.id}</h2>
              <p>{products.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default allproducts;
