import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "../components/navBar";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Router>
          <CustomNavbar />
        </Router>
      </main>
    );
  }
}
