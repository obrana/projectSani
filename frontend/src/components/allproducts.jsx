import React, { Component } from "react";


export default class allproducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
  
        fetch('https://localhost:3000/products') 
            .then(res => res.json())
            .then(product => this.setState({ product }));
    }
    render() {
        return (

            <div className="container-fluid">

                <h2>WelCome To Product Page</h2>

            <ul>
                {this.state.product.map(products => <li>
                    <h2>{products.name}</h2>
                    <p>{products.details}</p>
                </li>)}
                </ul>

            </div>

 
 
        ) 
    }
}
