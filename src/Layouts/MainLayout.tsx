import React from "react";
import { Outlet } from "react-router";
import Headerbar from "../Shared/Header";
import classes from "./layout.module.css";

export default function MainLayout() {
  return (
    <div>
      {/* <div className={classes.headerbar}> */}
      <Headerbar />
      {/* </div> */}
      <div className={classes.child}>
        <Outlet />
      </div>
    </div>
  );
}
