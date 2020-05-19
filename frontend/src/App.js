import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import allproducts from "./components/allproducts";
import Home from "./components/Home";
import Application from "./Auth/Application";
import UserProvider from "./providers/UserProvider";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={allproducts} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}
// function App() {
//   return (
//     <UserProvider>
//       <Application />
//     </UserProvider>
//   );
// }

export default App;
