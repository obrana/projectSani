import React, { Component } from "react";
import Modal from "react-modal";
import { Card, Button } from 'react-bootstrap';


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
            method: 'GET'
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            self.setState({ products: data });
        }).catch(err => {
            console.log('caught it!', err);
        })

    }
    render() {

        return (
            <>
         
                <h4 className="smallHead">
                            Welcome to product page
              </h4>
                {this.state.products.map((product, i) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.details}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    );
                })}

            </>
        );
    }


}
