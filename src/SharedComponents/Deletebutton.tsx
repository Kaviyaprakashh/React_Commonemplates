import React from "react";

import classes from "./del.module.css";
export default function Deletebutton() {
  return (
    <div className={classes.trashblock}>
      <div className={classes.file}></div>
      <p className={classes.biglid}></p>
      <span className={classes.trash}></span>
    </div>
  );
}
