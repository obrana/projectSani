import React, { Component } from 'react';

export default class Filter extends Component{
    render(){
        return(
                <div className="row">
                    <div className="col.md-4"></div>
                    {this.props.count} products found.
                    <div className="col.md-4"></div>
                    <label>
                        Order by
                        <select className="form-control" value={this.props.sort}
                        onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to highest</option>
                            <option value="highest">Higest to lowest</option>
                        </select>
                    </label>
                </div>
        )
       
    }
}