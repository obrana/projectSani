import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import allproducts from "./components/allproducts";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
    
                  <Switch>
                    <Route exact path="/" component={allproducts} />
            
                  </Switch>
          
       
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
