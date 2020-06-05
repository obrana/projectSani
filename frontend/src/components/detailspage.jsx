import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CustomNavbar from "../components/customNavbar";
import Footer from "../components/footer";

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        fetch(`/productdetail/${id}`)
            .then(res => res.json())
            .then(products =>
                this.setState({ products }))
    };

    render() {
        return (
            <>
            <CustomNavbar/>
            <div className="container-fluid-details">
                <div className="container">
                    <div className="well">
                        <h2> Product Details</h2>
                    </div>
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
                                        <h2>{product.price}</h2>
                                       <h2>{product.metal}</h2> 
                                      
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
</>
        );
    }
}

export default DetailPage;