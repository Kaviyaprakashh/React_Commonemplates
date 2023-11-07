import React from "react";
import { MainPrivateRoutes } from "./PrivateRoutes";
import Dashboard from "../Screens/MainScreen/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Users from "../Screens/MainScreen/Users";
import CountdownTimer from "../SharedComponents/Counter";
import Countdown from "../SharedComponents/Countdown";

export const MainRoutes = {
  element: <MainLayout />,
  path: "/",
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
      index: true,
    },
    {
      path: "users",
      element: <Users />,
    },

    {
      path: "timer",
      element: <Countdown />,
    },
  ],
};
