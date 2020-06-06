import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomNavbar from "./components/customNavbar";

import allproducts from "./components/allproducts";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import PasswordReset from "./Auth/PasswordReset";
import ProfilePage from "./Auth/ProfilePage";
import Home from "./components/Home";
import Contact from "./components/Contact";
import newProduct from "./components/newProduct";
import crudProduct from "./components/crudProduct";
import DetailPage from "./components/detailspage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CustomNavbar />

        <div className="App">
          <Switch>
            <Route exact path="/products" component={allproducts} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/PasswordReset" component={PasswordReset} />
            <Route exact path="/ProfilePage" component={ProfilePage} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/newProduct" component={newProduct} />
            <Route exact path="/crudProduct" component={crudProduct} />
            <Route exact path="/detailpage/:id" component={DetailPage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
