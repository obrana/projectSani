import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import allproducts from "./components/allproducts";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import PasswordReset from "./Auth/PasswordReset";
import ProfilePage from "./Auth/ProfilePage";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import Application from "./Auth/Application";
// import UserProvider from "./providers/UserProvider";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={allproducts} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/PasswordReset" component={PasswordReset} />
            <Route exact path="/ProfilePage" component={ProfilePage} />
            <Route exact path="/Contact" component={Contact} />
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
