import React, {Component } from 'react';
import {Button} from 'react-bootstrap';

export default class Basket extends Component {


    render(){
        const {cartItems} = this.props;
        return(
            <div className="alert alert-info">
                {cartItems.length === 0? "Basket is empty": <div>You have {cartItems.length} products items</div> }
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map(item => 
                            <li>
                                <b>{item.name}</b>
                                X {item.count} = {item.price * item.count} DKK

                                <button className="btn btn-danger"
                                onClick={() => this.props.handleRemoveFromCart(item)}
                                >
                                    X
                                </button>
                            </li>)}
                    </ul>
                   Total: {cartItems.reduce((a, c) => a +c.price*c.count, 0)} DKK
                   <br/>
                   <Button onClick={() => alert("Checkout is processing...")}>Proceed to payment</Button>
                    </div>
                }
           
            </div>
        )
    }
}