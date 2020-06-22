import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import "./auth.css";
import Footer from "../components/footer";
import Application from "../Auth/Application";
import UserProvider from "../providers/UserProvider";

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
    <>
      <UserProvider>
        <Application />
      </UserProvider>

      <div className="mt-8 login-credentials fadeInDown">
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && (
            <div className="py-4 bg-red-600 w-full error text-center mb-3">
              {error}
            </div>
          )}
          <form className="">
            <h1 className="customTitle">
              {/* Already a member? Login to your account */}
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
              className="bg-green-400 hover:bg-green-500 w-full py-2 text-white btn-customBtn"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign in
            </button>
          </form>
          {/* <p className="text-center my-3">or</p>
          <button
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white btn-customBtn"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </button> */}
          <p className="text-center my-3">
            {/* Don't have an account?
            <br />
            <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </Link> */}
            {/* <a href="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </a> */}
            <br />
            <Link
              to="/passwordReset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
            {/* <a
              href="passwordReset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </a> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
