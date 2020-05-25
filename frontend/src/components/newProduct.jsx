import React, { Component } from "react";
// import { Redirect } from "react-router-dom";


class newProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            details: "",
            price: "",
         
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    handleSubmit(event) {
        event.preventDefault();

        var data = {
            name: this.state.name,
            details: this.state.details,
            price: this.state.price
        }
      
   
 

        fetch("/new", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(response => response.data)
            .catch(function (err) {
                console.log(err);
            }).then(req => {
                this.props.history.push('/products')
            });
    }

    myChangeHandler(event) {
        // event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        })
  
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="well">
                        <h2>Add a Product</h2>
                    </div>
                    <div className="form-group">
                        Name
                        <input
                            type="text"
                            onChange={this.myChangeHandler}
                            value={this.state.name}
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        Description
                        <input
                            type="text"
                            onChange={this.myChangeHandler}
                            name="details"
                            className="form-control"
                            value={this.state.details}
                            placeholder="Description"
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        Product Prices
                        <input
                            type="text"
                            onChange={this.myChangeHandler}
                            name="price"
                            className="form-control"
                            value={this.state.price}
                            placeholder="Product Prices"
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