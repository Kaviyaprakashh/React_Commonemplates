import classes from "./errorelement.module.css";
import { useNavigate } from "react-router";
import doll from "../../Assests/Images/pngegg.png";
export default function Errorelement() {
  let navigate = useNavigate();
  return (
    <div className={classes.notfoundbg}>
      <div className={classes.block}>
        {/* <img src={notfoundimg} alt="not found" className={classes.bannerimg} /> */}
        <img src={doll} alt="not found" className={classes.doll} />
        <p className={classes.msg}>
          Oops! Your not authorised to access this Page.
        </p>
        <button
          type="button"
          className={classes.backbtn}
          onClick={() => navigate("/dashboard")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
