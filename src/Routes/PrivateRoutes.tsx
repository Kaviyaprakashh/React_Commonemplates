import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { getCookie } from "../Storage/Cookies";

export const AuthPrivateRoutes = () => {
  let navigate = useNavigate();

  let cookie = getCookie("authdata");
  if (!cookie) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
export const MainPrivateRoutes = () => {
  let navigate = useNavigate();
  let cookie = getCookie("authdata");
  if (cookie) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
