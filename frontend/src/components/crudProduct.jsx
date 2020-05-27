import React, { Component } from "react";

import { Button, Container } from "react-bootstrap";






export default class CrudProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
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
                self.setState({ products: data });
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }
    render() {
        return (
            <main>

                <Container className="crudProduct">

                    <div className="container">
                        <div className="panel panel-default p50 uth-panel">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Details</th>
                                        <th>Metal</th>
                                        <th>Category</th>
                                        <th>Gender</th>
                                        <th>Unit</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map((product) => {
                                        return(
                                            <tr>
                                            <td>{product.name} </td>
                                            <td>{product.price}</td>
                                            <td>{product.details}</td>
                                            <td>{product.metal}</td>
                                            <td>{product.category}</td>
                                            <td>{product.gender}</td>
                                            <td>{product.unit}</td>

                                            <td><a>Edit</a>|<a>Delete</a></td>
                                        </tr>
                                        )
                                     
                                    })}

</tbody>
                            </table>
                        </div>
                    </div>
                </Container>
          
            </main>
        )
    }
}
