import React, { useEffect } from "react";
import { DecryptToken, ShowToast } from "../../SharedComponents/Methods";
import { AuthData } from "../../SharedComponents/Constants";
import MUIHeader from "../../Shared/muiheader";
import AntdHeader from "../../Shared/antd/AntdHeader";
import classes from "./main.module.css";
import Carts from "../../Components/Dashboard/Carts";
import { toast } from "react-toastify";
import DashboardTable from "../../Components/Tabels/DashboardTable";
import { Itemsperpage } from "../../Components/commoncomponents/Itemsperpage";
import ConfettiExplosion from "react-confetti-explosion";
import Deletebutton from "../../SharedComponents/Deletebutton";

export default function Dashboard() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="main_container">
        <div className={classes.headerblock}>
          <h3 className={classes.headname}>Dashboard</h3>
        </div>
        <Carts />
      </div>{" "}
      <div className={classes.banner1}>
        {/* <div className="module-inside"> */}
        <div className={classes.bannercontainer}>
          <div className={classes.bannerblock}>
            <h3 className={classes.bannerhead}>Upgrade to the latest Taste!</h3>
            <h2 className={classes.bannersub}>Message from Coffee Maker</h2>
            <p className={classes.bannertext}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim.
            </p>
            <button type="button" className={classes.bannerbtn}>
              Shop Now
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="main_container">
        <div className={classes.headerblock}>
          <h3 className={classes.headname}>Work Details</h3>
          <Itemsperpage
            handleChangeSize={() => console.log("sds")}
            TableSize={10}
          />
        </div>

        <DashboardTable />
      </div>
    </>
  );
}
