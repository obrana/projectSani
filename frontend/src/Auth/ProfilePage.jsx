import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

import "./auth.css";
import Footer from "../components/footer";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return (
    <main>
      <div className="row dashboard">
        <div className="col-md-2 userDetail">
          <div
            style={{
              background: `url(${
                photoURL ||
                // "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
                "https://st4.depositphotos.com/8440746/19844/v/450/depositphotos_198441872-stock-illustration-user-icon-vector-male-person.jpg"
              })  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px",
            }}
            className="border border-blue-300"
          ></div>
          <div className="userInfo">
            <h2> Hello, {displayName}</h2>
            <h3 className="italic"> {email}</h3>
            <button
              className="btn-customBtn"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </button>{" "}
          </div>
        </div>
        <div className="col-md-8 accountdetail">
          <h2>My Order History</h2>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
