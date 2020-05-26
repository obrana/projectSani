import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class newProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            details: '',
            price: ''

        };
             this.myChangeHandler = this.myChangeHandler.bind(this);
         //  this.logChange = this.logChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }


        handleSubmit(event) {
            event.preventDefault();
            let data = new FormData();
            data.append("name", this.state.name);
            data.append("details", this.state.details);
            data.append("price", this.state.price);
            // var data = {
            //     name: this.state.name,
            //     details: this.state.details,
            //     price: this.state.price
            // }

       console.log(data)

        // fetch ("/new", {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // }).then(function(response){
        //     if(response.status >= 400){
        //         throw new Error("Bad response form server");
        //     }
        //     return response.json();
        // }).then(function(data){
        //     console.log(data)
        //     if(data == "success"){
        //         this.setState({msg:"Thanks for registering"});
        //     }
        // }).catch(function(err){
        //     console.log(err)
        // });

            fetch("/new", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: data
            })
                .then(response => response.data)
                .catch(function (err) {
                    console.log(err);
                }).then(req => {
                    this.props.history.push('/products')
                });
        }
    //     // logChange(e){
    //     //    e.preventDefault();
    //     //     this.setState({[e.target.name]: e.target.value});
    //     // }
        myChangeHandler(event) {
           event.preventDefault();
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