import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  let isAuthenticated = localStorage.getItem("LoginINFO");
  return isAuthenticated === null ? <Navigate to="login" /> : <Outlet />;
}

export default ProtectedRoute;
