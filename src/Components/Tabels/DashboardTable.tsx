import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import classes from "./table.module.css";
import CustomPagination from "../commoncomponents/Pagination";
import Switchbtn from "../../Shared/antd/Commoninputs";
import edit from "../../Assests/Icons/edit.png";
import trash from "../../Assests/Icons/trash.png";
import view from "../../Assests/Icons/view.png";
import Deleteconfirmation from "../Modals/deleteconfirmation";
import Deletebtn from "../../SharedComponents/Deletebtn";
import Confetti from "react-confetti/dist/types/Confetti";
import ConfettiExplosion from "react-confetti-explosion";
import Deletebutton from "../../SharedComponents/Deletebutton";

type Props = {};

export default function DashboardTable({}: Props) {
  const [confs, setconfs] = useState({
    show: false,
    msg: "Are you sure want to delete this user?",
    data: null,
  });
  const [deleteicon, setdelete] = useState({ show: true });
  const Array = [
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
    {
      name: "John",
      from_date: "20.03.2002",
      to_date: "20.03.2060",
      status: "active",
    },
  ];

  const handledelete = (data: any) => {
    close();
    console.log(data, "data");
    setdelete({ show: true });
    // var trashblock = document.getElementById(`trashanimation${data.index}`);
    // console.log(trashblock?.classList, "trashblock?.classList");
    // trashblock?.classList.add(classes.actiontrash);
    // trashblock?.classList.remove(classes.trash);
  };
  const close = () => {
    setconfs({ ...confs, show: false, data: null });
    setTimeout(() => {
      setdelete({ show: false });
      // <ConfettiExplosion style={{ margin: "auto" }} />;
    }, 1300);
  };
  return (
    <div>
      {deleteicon.show && <Deletebutton />}

      {confs && (
        <Modal show={confs.show}>
          <Deleteconfirmation
            msg={confs.msg}
            handlefunction={() => handledelete(confs.data)}
            close={() => close()}
          />
        </Modal>
      )}
      <Table responsive className={classes.tablecontainer}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array?.map((ele: any, index: number) => {
            return (
              <tr key={index} className={classes.tabrow}>
                <td>{index + 1}</td>
                <td>{ele?.name}</td>
                <td>{ele?.from_date}</td>
                <td>{ele?.to_date}</td>
                <td className={classes.switchstyle}>
                  <Switchbtn />
                </td>
                <td>
                  <div className={classes.actionblock}>
                    <img
                      src={edit}
                      alt="action"
                      className={classes.actionicon}
                    />
                    <img
                      src={trash}
                      alt="action"
                      className={classes.actionicon}
                      onClick={() =>
                        setconfs({
                          ...confs,
                          show: true,
                          data: { ...ele, index: index },
                        })
                      }
                    />
                    {/* <div
                      className={classes.trashblock}
                      onClick={() => {
                        var trashblock = document.getElementById(
                          `trashanimation${index}`
                        );
                        trashblock?.classList.remove(classes.actiontrash);
                        trashblock?.classList.add(classes.trash);
                        setconfs({
                          ...confs,
                          show: true,
                          data: { ...ele, index: index },
                        });
                      }}
                    >
                      <span
                        className={classes.trash}
                        id={`trashanimation${index}`}
                      >
                        <p className={classes.files}></p>
                        <span></span>
                        {/* <i></i> */}
                    {/* </span> */}
                    {/* </div> */}
                    <img src={view} alt="action" className={classes.eyeicon} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <CustomPagination
          forcepage={0}
          onChange={() => console.log("aas")}
          count={30}
        />
      </div>
    </div>
  );
}
