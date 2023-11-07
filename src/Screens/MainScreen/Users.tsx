import React, { useState } from "react";
import classes from "./main.module.css";
import add from "../../Assests/Icons/add.png";
import DashboardTable from "../../Components/Tabels/DashboardTable";
import { Modal } from "react-bootstrap";
import Addusermodal from "../../Components/Modals/Addusermodal";
import Deletebtn from "../../SharedComponents/Deletebtn";

export default function Users() {
  const [adduser, setadduser] = useState({ show: false });
  return (
    <>
      {adduser.show && (
        <Modal show={adduser.show} size="xl">
          <Addusermodal close={() => setadduser({ ...adduser, show: false })} />
        </Modal>
      )}
      <div className="main_container">
        <div className={classes.headerblock}>
          <h3 className={classes.headname}>Users</h3>
          <button
            type="button"
            className={classes.addbtn}
            onClick={() => setadduser({ ...adduser, show: true })}
          >
            <div
              className={
                "d-flex align-itams-center gap-1 justify-content-center"
              }
            >
              {/* <img src={add} className={classes.addbtnicon} /> */}
              <span>Add new User</span>
            </div>
          </button>
        </div>
        <DashboardTable />
      </div>
      <Deletebtn />
    </>
  );
}
