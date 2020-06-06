import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (<>
    <Nav>
    <NavDropdown title="account">
      <NavDropdown.Item>
        <NavLink to="/signIn">SignIn</NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <NavLink to="/signUp">Register</NavLink>
      </NavDropdown.Item>
</NavDropdown> 
    </Nav>
  </>
    );
}

export default Application;
