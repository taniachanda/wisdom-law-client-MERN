import React from "react";
import { Redirect, Route } from "react-router";
// import { UserContext } from "../../App";
// import jwt_decode from "jwt-decode";
// import React  from 'react';

const PrivateRoute = ({ children, ...rest }) => {
  const email = JSON.parse(localStorage.getItem("email"));
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // const isLoggedIn = () => {
  //   const token = sessionStorage.getItem('token');
  //   if (!token) {
  //       return false;
  //   }
  //   const decodedToken = jwt_decode(token);
  //   const currentTime = new Date().getTime() / 1000;
  //   return decodedToken.exp > currentTime;
  // }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/logIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
