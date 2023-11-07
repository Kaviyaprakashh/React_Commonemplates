import React from "react";
import classes from "./modal.module.css";
import closeicon from "../../Assests/Icons/close.png";
interface modalProps {
  msg?: string;
  handlefunction: () => void;
  close: () => void;
}

export default function Deleteconfirmation({
  msg,
  handlefunction,
  close,
}: modalProps) {
  return (
    <div className="modalcontainer">
      <div className={classes.modalheader}>
        <h3 className={classes.modalheadername}>Delete User</h3>
        <button type="button" onClick={close} className={classes.closebtn}>
          <img src={closeicon} alt="close" className={classes.closeimg} />
        </button>
      </div>
      <p className={classes.confirmation_msg}>{msg}</p>
      <button type="button" onClick={handlefunction} className={"cancelbtn"}>
        ok
      </button>
    </div>
  );
}
