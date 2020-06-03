import React, { Component } from "react";

import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            details: "",
            price: "",
            metal: "",
            category: "",
            gender: "",
            unit: "",
            image_path: null,
            snackbaropen: false,
            snackbarmsg: ''

        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    sncakbarClose = (event) => {
        this.setState({ snackbaropen: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var data = new FormData();
        data.append("name", this.state.name);
        data.append("price", this.state.price);
        data.append("details", this.state.details);
        data.append("metal", this.state.metal);
        data.append("category", this.state.category);
        data.append("gender", this.state.gender);
        data.append("unit", this.state.unit);
        data.append("image_path", this.state.image_path[1]);


        fetch("/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then((result) => {
                this.setState({ snackbaropen: true, snackbarmsg: result });
            },
                (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'failed' });
                })
        // .then(req => {
        //     this.props.history.push("/products");
        // });
    }
    singleFileChangeHandler = e => {
        e.preventDefault();
        this.setState({
            image_path : e.target.files
        })
    };

    myChangeHandler(event) {
        event.preventDefault();
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({ [nam]: val });
    }



    render() {

        return (
            
            <>
                     <Snackbar
                        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                        open={this.state.snackbaropen}
                        autoHideDuration={3000}
                        onClose={this.sncakbarClose}
                        message={<span id='message-id'>{this.state.snackbarmsg}</span>}
                        action={[
                            <IconButton key="close"
                                arial-lable="close"
                                color="inherit"
                                onClick={this.sncakbarClose} >
                                x
              </IconButton>
                        ]} 
                    />
                <div className="container">
                

                    <Modal {...this.props}
                        size="lg"
                        aria-labellebdy="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Add Product
            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
               

                                <form onSubmit={this.handleSubmit} method="POST">

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
                                        Metal: {" "}
                                        <input
                                            type="text"
                                            onChange={this.myChangeHandler}
                                            name="metal"

                                            className="form-control"
                                            placeholder="Metal"
                                            required={true}
                                        />
                                    </div>

                                    <div className="form-group">
                                        category: {" "}
                                        <input
                                            type="text"
                                            onChange={this.myChangeHandler}
                                            name="category"

                                            className="form-control"
                                            placeholder="Category"
                                            required={true}
                                        />
                                    </div>

                                    <div className="form-group">
                                        gender: {" "}
                                        <input
                                            type="text"
                                            onChange={this.myChangeHandler}
                                            name="gender"

                                            className="form-control"
                                            placeholder="gender"
                                            required={true}
                                        />
                                    </div>

                                    <div className="form-group">
                                        unit: {" "}
                                        <input
                                            type="text"
                                            onChange={this.myChangeHandler}
                                            name="unit"

                                            className="form-control"
                                            placeholder="unit"
                                            required={true}
                                        />
                                    </div>
                                    <div className="form-group">
                                        Image: {" "}
                                        <input
                                            type="file"
                                            onChange={this.singleFileChangeHandler}
                                            name="image_path"

                                            className="form-control"
                                            placeholder="Image Path"
                                        
                                        />
                                    </div>
                                    <button type="submit" onClick={this.props.onHide} className="homebtn">
                                        Submit
            </button>
                                </form>
                       
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        );
    }
}


