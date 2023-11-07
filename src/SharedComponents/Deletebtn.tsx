import ConfettiExplosion from "react-confetti-explosion";
import "./Delete.module.css";
import classes from "./Delete.module.css";

export default function Deletebtn() {
  return (
    <>
      <div className={classes.trashblock}>
        <span className={classes.trash}>
          <p></p>
          <span></span>
          <i></i>
        </span>
      </div>
    </>
  );
}
