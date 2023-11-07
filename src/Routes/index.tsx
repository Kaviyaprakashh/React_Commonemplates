import React from "react";
import { AuthPrivateRoutes, MainPrivateRoutes } from "./PrivateRoutes";
import { AuthRoutes } from "./AuthRoutes";
import Errorelement from "../Screens/ErrorElement/Errorelement";
import { MainRoutes } from "./MainRoutes";

export const routerpaths = [
  {
    element: <AuthPrivateRoutes />,
    children: [AuthRoutes],
    errorElement: <Errorelement />,
  },
  {
    element: <MainPrivateRoutes />,
    children: [MainRoutes],
    errorElement: <Errorelement />,
  },
];
