import React, { useContext, useState } from "react";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import "./LogIn.css";
import { UserContext } from "../../App";
import GoogleIcon from "../../icons/270014.png";
import { useHistory, useLocation } from "react-router";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
const LogIn = () => {
  const [error, setError] = useState({});
  const history = useHistory();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const user = result.user;
        localStorage.setItem("name", JSON.stringify(user.displayName));
        localStorage.setItem("email", JSON.stringify(user.email));
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        // storeAuthToken();
        history.replace(from);
        // history.go(0);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ errorCode, errorMessage });
      });
  };
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="login-box text-center">
        <h3 className="fs-2 text-secondary">Log in</h3>
        <br />
        <button className="login-btn  shadow-lg" onClick={handleGoogleSignIn}>
          <img style={{ hight: "5px" }} src={GoogleIcon} alt="google" />
          <b>Log in with Google account</b>
        </button>
        <p style={{ color: "red" }}>
          {error.errorCode} {error.errorMessage}
        </p>
      </div>
    </>
  );
};

export default LogIn;
