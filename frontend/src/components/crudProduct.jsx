import React, { Component } from "react";
import CustomNavbar from "../components/customNavbar";
import Footer from "../components/footer";
import { Button, Container, ButtonToolbar, Table } from "react-bootstrap";
import NewProduct from '../components/newProduct';
import EditProduct from '../components/editProduct';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';




export default class CrudProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            addModalShow: false,
            editModalShow: false,
          
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


    deleteProduct(proId) {
        if (window.confirm('Are You sure')) {
            fetch('/delete/' + proId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

        }
    }

    render() {
        const {pid, pname, pprice, pdetails, pmetal, pcategory, pgender, punit } =this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({editModalShow: false});

        return (
            <main>
                <CustomNavbar />
                <Container className="crudProduct">
        

                    <div className="container">
                        <div className="panel panel-default p50 uth-panel">
                            <Table className="table table-hover">
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
                                        return (
                                            <tr>
                                                <td>{product.name} </td>
                                                <td>{product.price}</td>
                                                <td>{product.details}</td>
                                                <td>{product.metal}</td>
                                                <td>{product.category}</td>
                                                <td>{product.gender}</td>
                                                <td>{product.unit}</td>

                                                <td><Button variant="info" 
                                                onClick={() => this.setState({ editModalShow: true, 
                                                pid:product.id, pname: product.name,  pprice: product.price, pdetails: product.details, pmetal: product.metal, pcategory: product.category, pgender: product.gender, punit: product.unit
                                                })}>Edit</Button>
                                            &nbsp;<Button variant="danger" onClick={() => this.deleteProduct(product.id)}>Delete</Button></td>
                                            </tr>
                                        )

                                    })}

                                </tbody>
                            </Table>
                            <ButtonToolbar>
                                <Button variant='primary'
                                    onClick={() => this.setState({ addModalShow: true })}
                                >
                                    Add Product
                             </Button>
                                <NewProduct
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}
                                />
                                <EditProduct 
                                show = {this.state.editModalShow}
                                onHide = {editModalClose}
                                pid = {pid}
                                pname = {pname} 
                                pprice={pprice}
                                pdetails={pdetails}
                                pmetal={pmetal}
                                pcategory={pcategory}
                                pgender={pgender}
                                punit={punit}
                                />
                            </ButtonToolbar>

                        </div>
                    </div>

                </Container>
                <Footer />

            </main>
        )
    }
}