import React, { Component } from "react";
import Modal from "react-modal";
import Jumbotron from "react-bootstrap/Jumbotron";

import { Button, Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Filter from "../components/filter";

import "./product.css";

export default class allproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: []
    };
    this.productDetails = this.productDetail.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

productDetail(id){
  this.props.history.push(`/detailpage/${id}`);
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
        self.setState({ products: data , filteredProducts: data});
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  };
  handleChangeSort(e){
    this.setState({sort: e.target.value});
    this.listProducts();

  }
  listProducts(){
    this.setState(state => {
      if(state.sort !== ''){
        state.products.sort((a,b)=>(state.sort==='lowest')? (a.price < b.price?1:-1): (a.price > b.price?1:-1));
      }else{
        state.products.sort((a,b) => (a.id < b.id?1:-1));
      }
      return{filteredProducts: state.products};
    })
  }
  render() {
    return (
      <main>
        <CustomNavbar />
        <Container className="productPage">
          {/* <h4 className="smallHead">Welcome to product page</h4> */}
          <Jumbotron>
            <h5>Rings</h5>
            <p>Discover classic rings or create your own with us.</p>
          </Jumbotron>
          <Filter price = {this.state.price} handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
          <hr/>
          {this.state.products.map((product, i) => {
            return (
              <Card className="productCard" key={product.id}>
                <Card.Img
                  variant="top"
                  onClick={() => this.productDetail(product.id)}
                  src={
                    "https://sammenligne.s3.eu-central-1.amazonaws.com/" +
                    product.image_path
                  }
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  {/* <Card.Text>{product.details}</Card.Text> */}
                  {/* <Button className="btn-customButton">Add to Cart</Button> */}
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
