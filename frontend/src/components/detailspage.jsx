import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CustomNavbar from "../components/customNavbar";
import Footer from "../components/footer";
import { Button, Container, ButtonToolbar, Table } from "react-bootstrap";
import Basket from "../components/basket";

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartItems: []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        fetch(`/productdetail/${id}`)
            .then(res => res.json())
            .then(products =>
                this.setState({ products }));
                if(localStorage.getItem('cartItems')){
                    this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
                }
            
    };
    handleAddToCart(product){
        this.setState(state=> {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach(item => {
             if(item.id === product.id){
                 productAlreadyInCart = true;
                 item.count ++;
             }
            });
            if(!productAlreadyInCart){
                cartItems.push({...product, count:1});
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems;
        })
    };
    handleRemoveFromCart(item){
        this.setState(state => {
            const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
            localStorage.setItem('cartItems', cartItems);
            return{cartItems};
        })

    };
    render() {
        return (
            <>
            <CustomNavbar/>
            <div className="container-fluid-details">
                <div className="container">
                 
                    <div className="row">
                        {this.state.products.map(product => (
                            <div className="col-6" key={product.id}>
                                <Carousel className="carousel-two" interval={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" 
                                         src={
                                            "https://sammenligne.s3.eu-central-1.amazonaws.com/" +
                                            product.image_path
                                          }/>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="col-6">
                                    <div className="details">
                                        <h2>{product.name}</h2>
                                        <p>{product.details}</p>
                                        <h2>{product.price} DKK</h2>
                                       <h2>{product.metal}</h2> 
                                      <Button onClick={() => this.handleAddToCart(product)} >Add to cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-md-4">
                            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
</>
        );
    }
}

export default DetailPage;