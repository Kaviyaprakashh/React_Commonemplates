import classes from "./layout.module.css";
import Login from "../Screens/Authentication/login";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <div className={classes.layoutcontainer}>
        <div className={classes.outletcontent}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
