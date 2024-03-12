import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("loginToken");
  const isAuthenticated = token ? true : false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    />
  );
};
