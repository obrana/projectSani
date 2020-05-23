import React, { useState } from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import "./auth.css";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <main>
      <CustomNavbar />
      <div className="mt-8 login-credentials">
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <form className="">
            <h1 className="customTitle">
              Already a member? Login to your account
            </h1>

            <label htmlFor="userEmail" className="block">
              Email:
            </label>
            <input
              type="email"
              className="my-1 p-1 w-full"
              name="userEmail"
              value={email}
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
            <label htmlFor="userPassword" className="block">
              Password:
            </label>
            <input
              type="password"
              className="mt-1 mb-3 p-1 w-full"
              name="userPassword"
              value={password}
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
            <button
              className="btn-customButton"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign in
            </button>
          </form>
          <p className="text-center my-3">or</p>
          <button
            className="btn-customButton"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </button>
          <p className="text-center my-3">
            Don't have an account?{" "}
            <a href="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </a>{" "}
            <br />{" "}
            <a
              href="passwordReset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SignIn;
