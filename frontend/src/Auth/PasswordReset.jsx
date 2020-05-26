import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";
import "./auth.css";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";
const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <main>
      <CustomNavbar />
      <div className="mt-8 login-credentials">
        <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form action="">
            <h1 className="customTitle">Reset your Password</h1>
            {emailHasBeenSent && (
              <div className="alertText">An email has been sent to you!</div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3 alertText">
                {error}
              </div>
            )}
            <label htmlFor="userEmail" className="w-full block">
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
              className="mb-3 w-full px-1 py-2"
            />
            <button
              className="btn-customBtn "
              onClick={(event) => {
                sendResetEmail(event);
              }}
            >
              Reset Password
            </button>
          </form>
          <Link to="/signIn" className="text-blue-500 hover:text-blue-600">
            Go Back
          </Link>
          {/* <a href="/" className="my-2 text-blue-700  text-center block">
            &larr; Go Back
          </a> */}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PasswordReset;
