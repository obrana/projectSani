import React, { Component } from "react";
import "./product.css";

export default class Filter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row sortRow">
          <div className="col-md-2 productCount">
            {this.props.count} products found.
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-4 sortBy">
            <label>
              <select
                className="form-control selectSort"
                value={this.props.sort}
                onChange={this.props.handleChangeSort}
              >
                <option value="">Sort by:</option>
                <option value="lowest">Lowest to highest</option>
                <option value="highest">Higest to lowest</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
