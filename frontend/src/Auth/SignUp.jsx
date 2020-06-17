import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import "./auth.css";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <main>
      <div className="mt-8 login-credentials fadeInDown">
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <form className="sign-form">
            <h1 className="customTitle">Be a member! Sign Up :)</h1>

            <label htmlFor="displayName" className="block">
              Name:
            </label>
            <input
              type="text"
              className="my-1 p-1 w-full "
              name="displayName"
              value={displayName}
              id="displayName"
              onChange={(event) => onChangeHandler(event)}
            />
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
              className="btn-customBtn"
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign up
            </button>
          </form>
          <p className="text-center my-3">or</p>
          <button
            onClick={() => {
              try {
                signInWithGoogle();
              } catch (error) {
                console.error("Error signing in with Google", error);
              }
            }}
            className="btn-customBtn"
          >
            Sign In with Google
          </button>
          <p className="text-center my-3">
            Already have an account?
            <Link to="/signIn" className="text-blue-500 hover:text-blue-600">
              Sign in here
            </Link>
            {/* <a href="/signIn" className="text-blue-500 hover:text-blue-600">
              Sign in here
            </a>{" "} */}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SignUp;
