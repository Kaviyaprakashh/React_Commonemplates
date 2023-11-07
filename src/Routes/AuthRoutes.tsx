import React from "react";
import Login from "../Screens/Authentication/login";
import AuthLayout from "../Layouts/AuthLayout";
import Signup from "../Screens/Authentication/Signup";

export const AuthRoutes = {
  element: <AuthLayout />,
  path: "/",

  children: [
    {
      path: "login",
      element: <Login />,
      index: true,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ],
};
